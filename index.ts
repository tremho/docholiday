#!/usr/bin/env node

// The cli executor and the main API import for Doc-holiday
//
// ##### Prime Export
//
// This is the prime module for import, and although other code modules are listed in the documentation
// as the source modules, do not try to import these modules directly.  All symbols can be found at the
// prime `index` root.
//
// _for example_:
//
// ```
// import {SourceInfo, analysisJSON} from "@tremho/doc-holiday"
// ```
// will work to bring in `SourceInfo` (from `types`) and `analysisJSON` (from `Output`)

import * as path from "path"
import * as fs from 'fs-extra'

import {FunctionInfo, PropertyInfo, ClassInfo, SourceInfo, EnumInfo, TypedefInfo} from './src/types'
import {processSourceFile, processSource} from './src/ProcessFiles'
import {recordInfo, sortRecorded, clearRecorded, analysisJSON, writeStubFile, readModuleDescription} from "./src/Output";
import {getGlobbedFiles} from "./src/Globber";
import {executeCommand} from "./src/execCmd";
import {validate} from "./src/TypeCheck"

export {FunctionInfo}
export {PropertyInfo}
export {ClassInfo}
export {SourceInfo}
export {EnumInfo}
export {TypedefInfo}
export {processSourceFile}
export {processSource}
export {recordInfo}
export {sortRecorded}
export {clearRecorded}
export {analysisJSON}
export {writeStubFile}
export {readModuleDescription}
export {getGlobbedFiles}
export {executeCommand}
export {validate}


import * as hjson from 'hjson'
import {exec} from "child_process";

import * as ac from "ansi-colors";

let files:string[] = []
let opts:any = {}
let config:any = {}

// Arguments passed to the CLI
// if invoked as a CLI, we will extract the args
const args = process.argv.slice(2)
let i = 0
let f:string
// If there are no args, we are either importing or else wee ran the executable without passing any args
if(!args.length) {
  if(process.argv[1].substring(process.argv[1].lastIndexOf('/')+1) === 'doc-holiday') { // run as CLI
    showHelp()
    process.exit(1)
  }
}
// look for options and gather the files from any passed globs
while((f = args[i])) {
  if(f === 'config') {
    opts['config'] = args[i+1]
  }
  if(f.substring(0,7) === 'config=') opts['config'] = f.substring(7)
  else if(f === '-c') {
    opts['config'] = args[i+1]
  }
  else if(f.substring(0,3) === '-c=') opts['config'] = f.substring(3)

  else if(f.substring(0,10) === '--no-clean') opts.noClean = true
  else if(f.substring(0,12) === '--stubs-only') opts.stubsOnly = true
  else if(f.substring(0,13) === '--render-only') opts.renderOnly = opts.noClean = true
  else if(f.substring(0,12) === '--analysis') opts.analyseOnly = true

  else if(f.substring(0,5) === 'help'|| f.substring(0,7) === '--help') {
    showHelp()
    process.exit(1)
  }

  // if(f.substring(0,9) === 'verbosity') opts['verbosity'] = args[i+1]
  // if(f.substring(0,10) === 'verbosity=') opts['verbosity'] = f.substring(10)
  // if(f.substring(0,3) === '-v') opts['verbosity'] = args[i+1]
  // if(f.substring(0,3) === '-v=') opts['verbosity'] = f.substring(3)

  else {
    let gfs = getGlobbedFiles(f)
    for(let gf of gfs) {
      files.push(gf)
    }
  }
  i++
}

// if we have arge, but no files, that is an error -- show help
if(args.length && !files.length && !opts.renderOnly) {
    showHelp()
    process.exit(1)
}

// if invoked as a CLI, we will process the files
let count = 0
if(files.length || opts.renderOnly) {
  // console.log('Doc Holiday ', files)
  readConfiguration()
  if(!opts.noClean) clean()
  let outPath = opts.analyseOnly ? '' : config.intermediate
  let generator = processFileList(files, outPath)
  let analyseOut = '['
  while(!opts.renderOnly) {
    let gen = generator.next()
    count++
    let value = gen.value
    if(!value) break;
    if(!outPath) {
      analyseOut += value
      analyseOut += ','
    }
    // if(stub) trace(1, stub)
    if(gen.done) break;
  }
  if(!opts.stubsOnly  && !opts.analyseOnly) {
    execute()
  }
  if(opts.analyseOnly) {
    analyseOut = analyseOut.substring(0, analyseOut.length-1) // remove last comma
    analyseOut += ']'
    console.log(analyseOut)
  }
}

// If used as a module, the rest of this file represents the exposed API

/**
 * Options for stub generation
 */
export class DocOptions {
  sourceType:string = 'ts'  // either 'ts' (typescript) or 'js' (javascript)
  stubExtension:string = '.docstub.js'
}


/**
 * Process a list of source files into comment-normalized stubs
 * output to an output path or generating an analysis JSON yield for each file processed.
 * @param {string[]} files
 * @param {string} outPath  if '', analysis JSON will be emitted instead on each yield
 *
 * @generator {string} with no outPath given, will generate successive analysis results from process files as JSON content.
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

      let content = fs.readFileSync(fp).toString()
      const desc = readModuleDescription(content)

      writeStubFile(outFile, bn, desc)
      yield outFile
    } else {
      yield analysisJSON()
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
  let cf = opts.config || 'doc-holiday.conf'
  cf = path.resolve(cf.trim())
  // console.log(cf)
  if(!fs.existsSync(cf)) {
    showHelp()
    console.error(ac.bold.red('No config found or specified.  use config option to specify location of a doc-holiday.conf file if not in current directory'))
    process.exit(3)
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

/**
 * Executes the jsdoc or similar documentation generation according to the doc-holiday.conf file settings.
 * In normal flow, this is called after docstub generation for all source files is complete, and the configuration
 * is set to generate from the docstub .js files in the intermediate directory (gen).
 */
export async function execute() {
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
      sort: config.sort
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
      // console.log('exec', exec)

      const exp = exec.split(' ')
      const cmd = exp.shift()
      if (eng === 'jsdoc' && fmt=='html') {
        let dhroot = path.resolve('.')
        let dhIntercept = path.join(dhroot, 'templates')
        exp.unshift(dhIntercept)
        exp.unshift('-t')
      }

      // todo: use enginePath to prefix cmd

      return executeCommand(cmd, exp, '', true).then(rt => {
        // console.log(rt)
        return rt.retcode
      })
    }
  }
  let fmt
  while((fmt = fmts.shift())) {
    fmt = fmt.trim()
    console.log('converting to '+fmt+'...')
    let rt = await execFmt(fmt)
    if(rt) break
  }
}

function showHelp() {
  console.log(ac.bold.green("\n------------------------"))
  console.log( ac.bold.green('     doc-holiday'))
  console.log(ac.bold.green("------------------------"))
  console.log("")
  console.log(ac.italic.grey(" doc-holiday [options] <file glob list>"))
  console.log("")
  console.log(ac.italic.grey(" where <file glob list> is one or more glob pattern file locations"))
  console.log(ac.dim.italic.grey("( for help on glob patterns, see https://en.wikipedia.org/wiki/Glob_%28programming%29 )"))
  console.log(ac.italic.grey("and [options] is one of:"))
  console.log(ac.bold.black(" config <file>"), ac.black.italic("-- Specify doc-holiday.conf file location"))
  console.log(ac.bold.black(" config=<file>"),ac.black.italic("-- same as above"))
  console.log(ac.bold.black(" -c <file>"), ac.black.italic("-- same as above"))
  console.log(ac.bold.black(" -c=<file>"), ac.black.italic("-- same as above"))
  console.log('')
  console.log(ac.bold.black(" --stubs-only"), ac.black.italic("-- Generate stubs to intermediate directory only"))
  console.log(ac.bold.black(" --no-clean"), ac.black.italic("-- Do not clear intermediate directory before generation"))
  console.log(ac.bold.black(" --render-only"), ac.black.italic("-- Run rendering from stubs (per configuration settings) only"))
  console.log(ac.bold.black(" --analysis"), ac.black.italic("-- parse source code and emit analysis json only"))

  console.log("")
}

/*
export function trace(level:number, ...args) {
  const verb = Number(opts.verbosity)
  if(!isFinite(verb) || verb < 0 || verb > 3) {
    console.error('illegal verbosity value "'+opts.verbosity+'"')
    process.exit(2)
  }
  if(verb && level <= verb) {
    console.log(args)
  }
}
 */