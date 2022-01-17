import * as path from "path"
import {FunctionInfo, PropertyInfo, ClassInfo, SourceInfo, EnumInfo} from './src/types'
import { processSourceFile, processSource } from './src/ProcessFiles'
import {renderCommentBlock, renderFunctionStub, renderPropertyStub} from "./src/CommentBlock";
import {recordInfo, sortRecorded, clearRecorded, stubOut,writeStubFile} from "./src/Output";
import {write} from "fs";
import {getGlobbedFiles} from "./src/Globber";

let files:string[] = []
let opts:string[] = []
const args = process.argv.slice(2)
let i = 0
let f:string
while((f = args[i])) {
  if(f === 'stub') {
      f += '='+(args[i+1] || '')
  }
  if(f.substring(0,5) === 'stub=') opts.push(f)
  else {
    let gfs = getGlobbedFiles(f)
    for(let gf of gfs) {
      files.push(gf)
    }
  }
  i++
}

function outOption():string {
  for(let o of opts) {
    if(o.substring(0,5) === 'stub=') {
      return o.substring(5)
    }
  }
  return ''
}

if(files.length) {
  console.log('Doc Holiday ', files)
  let generator = processFileList(files, outOption())
  while(true) {
    let gen = generator.next()
    let stub = gen.value
    if(stub) console.log(stub)
    if(gen.done) break;
  }
}

/**
 * Sort option values
 */
export enum SortType {
  SourceOrder, // output stubs in the order of the original source (default)
  NameAscending, // output stubs in order of name, alphabetically ascending
  NameDescending // output stubs in order of name, alphabetically descending
}

/**
 * Options for stub generation
 */
export class DocOptions {
  sourceType:string = 'ts'
  sortType:SortType = SortType.SourceOrder
  stubExtension:string = '.docstub.txt'
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
 *
 */
export function* processFileList(files:string[], outPath=''):Generator<string> {

  console.log('processing files', files)
  let f = files.shift()
  while(f) {
    clearRecorded()
    let fp = path.normalize(f)
    processSourceFile(fp, recordModuleFunc, recordProperty, recordClass, recordEnum)
    sortRecorded()
    if (outPath) {
      let bn = path.basename(f)
      bn = bn.substring(0, bn.lastIndexOf('.'))
      let outFile = path.normalize(path.join(outPath, bn+'.docstub.js'))
      writeStubFile(outFile)
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
export function docstub(content:string, options:DocOptions) {
  return processSource(content, options.sourceType, recordModuleFunc, recordProperty, recordClass, recordEnum)
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
