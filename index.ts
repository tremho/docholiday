import * as path from "path"
import * as fs from 'fs-extra'

import {FunctionInfo, PropertyInfo, ClassInfo, SourceInfo, EnumInfo, TypedefInfo} from './src/types'
import { processSourceFile, processSource } from './src/ProcessFiles'
import {recordInfo, sortRecorded, clearRecorded, stubOut,writeStubFile} from "./src/Output";
import {getGlobbedFiles} from "./src/Globber";
import {executeCommand} from "./src/execCmd";

import * as hjson from 'hjson'
import {exec} from "child_process";


let files:string[] = []
let opts:any = {}
let config:any = {}
const args = process.argv.slice(2)
let i = 0
let f:string
while((f = args[i])) {
  if(f === 'config') {
    opts['config'] = args[i+1]
  }
  if(f.substring(0,7) === 'config=') opts['config'] = f.substring(7)
  if(f === '-c') {
    opts['config'] = args[i+1]
  }
  if(f.substring(0,3) === '-c=') opts['config'] = f.substring(3)
  else {
    let gfs = getGlobbedFiles(f)
    for(let gf of gfs) {
      files.push(gf)
    }
  }
  i++
}

if(files.length) {
  // console.log('Doc Holiday ', files)
  readConfiguration()
  clean()
  let generator = processFileList(files, config.intermediate)
  while(true) {
    let gen = generator.next()
    // let stub = gen.value
    // if(stub) console.log(stub)
    if(gen.done) break;
  }
  execute()
}

/**
 * Options for stub generation
 */
export class DocOptions {
  sourceType:string = 'ts'  // either 'ts' (typescript) or 'js' (javascript)
  stubExtension:string = '.docstub.js'
}


/**
 * Process a list of source files into comment-normalized stubs
 * output to an output path or generating a string yield callback for each file processed.
 * @param {string[]} files
 * @param {string} outPath
 *
 * @generator {string} with no outPath given, will generate successive results from process files as string content.
 *                     with outPath, the generated file will be return on each iteration
 *
 * <<<jsdoc tag=example>>>
 *     ```
 *     // myFiles:string[] = [... an array of file paths to convert ]
 *     let generator = processFileList(files)
 *     while(true) {
 *         let gen = generator.next()
 *         let stub = gen.value
 *         if(stub) console.log(stub)
 *         if(gen.done) break;
 *       }
 *
 *     let outFile = processFileList(myFiles, myOutDir).next()
 *     // stub output will be in the file named by outFile
 *    ```
 */
export function* processFileList(files:string[], outPath=''):Generator<string> {

  // console.log('processing files', files)
  let f = files.shift()
  while(f) {
    clearRecorded()
    let fp = path.normalize(f)
    processSourceFile(fp, recordModuleFunc, recordProperty, recordClass, recordEnum, recordTypedef)
    sortRecorded()
    if (outPath) {
      let bn = path.basename(f)
      bn = bn.substring(0, bn.lastIndexOf('.'))
      let outFile = path.normalize(path.join(outPath, bn+'.docstub.js')) // todo: use options for stubExtension
      writeStubFile(outFile, bn)
      yield outFile
    } else {
      yield stubOut()
    }
    f = files.shift()
  }
}

/**
 * Convert source text into documentation stub output
 *
 * @param {string} content
 *          The original source to convert
 * @param {DocOptions} options
 *          Options affecting stub creation
 */
export function docstub(content:string, options?:DocOptions) {
  if(!options) options = new DocOptions()
  return processSource(content, options.sourceType, recordModuleFunc, recordProperty, recordClass, recordEnum, recordTypedef)
}

export {processSource}
export {processSourceFile}


function recordModuleFunc(fi: FunctionInfo, source: string) {
  recordInfo(fi, source)
}

function recordProperty(pi: PropertyInfo, source: string) {
  recordInfo(pi, source)
}

function recordClass(ci: ClassInfo, source: string) {
  recordInfo(ci, source)
}

function recordEnum(ei:EnumInfo, source: string) {
  recordInfo(ei, source)
}

function recordTypedef(ti:TypedefInfo, source: string) {
  recordInfo(ti, source)
}

function readConfiguration() {
  let cf = opts.config || 'docholiday.conf'
  cf = path.resolve(cf.trim())
  if(!fs.existsSync(cf)) {
    console.error('No config found or specified.  use -c to specify location of a docholiday.conf file if not in current directory')
  }
  let contents = fs.readFileSync(cf).toString()
  config = hjson.parse(contents)
  // console.log('read config', config)

  // translate references
  for(let key of Object.getOwnPropertyNames(config)) {
    let value = config[key]
    if(typeof value === 'string') {
      let repl = '%'+key+'%'
      while(contents.indexOf(repl) !== -1) contents = contents.replace(repl, value)
    }
  }
  config = hjson.parse(contents)
  // console.log('translated config', JSON.stringify(config, null, 2))

}

function clean() {
  const gen = path.resolve(config.intermediate)
  const md = path.resolve(config.markdown)
  fs.removeSync(gen)
  fs.removeSync(md)
}

async function execute() {
  // now run the exec

  // insure we have the intermediate directory we've specified
  // (Should have been created by stub generation)
  const gen = path.resolve(config.intermediate)
  if(!fs.existsSync(gen)) {
    console.error("Specified intermediate directory "+gen+" does not exist!")
    throw Error()
  }
  if(config.engine === "jsdoc") {
    // read in jsdoc config and add our own values
    let jc = path.resolve(config.jsdocConfig)
    if (!fs.existsSync(jc)) {
      console.error('JSDOC config file ' + jc + ' does not exist')
      throw Error()
    }
    let cjc: any = path.resolve('jsdoc-conf.json')
    cjc = fs.readFileSync(cjc).toString()
    // canonical json config
    cjc = hjson.parse(cjc)
    let ctemp: any = fs.readFileSync(jc).toString()
    ctemp = hjson.parse(ctemp)
    let jst = Object.assign(ctemp, cjc)
    jst.opts = {
      template: config.template || "templates/default",
      sort: false
    }
    // console.log('resulting json config', jst)

    // put our jsdoc config in intermediate director
    fs.writeFileSync(path.join(gen, 'jsdoc.conf'), JSON.stringify(jst, null, 2))
  }


  let eng = config.engine
  let fmts = config.format.split(',')
  const execFmt = async (fmt:string) => {
    if(fmt) {
      let exec = config.execInfo[eng][fmt]['exec']
      console.log('exec', exec)

      const exp = exec.split(' ')
      const cmd = exp.shift()
      if (eng === 'jsdoc' && fmt=='html') {
        let dhroot = path.resolve('.')
        let dhIntercept = path.join(dhroot, 'templates')
        exp.unshift(dhIntercept)
        exp.unshift('-t')
      }
      return executeCommand(cmd, exp, '', true).then(rt => {
        // console.log(rt)
        return rt.retcode
      })
    }
  }
  let fmt
  while((fmt = fmts.shift())) {
    console.log('converting to '+fmt+'...')
    let rt = await execFmt(fmt)
    if(rt) break
  }
}