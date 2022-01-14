import * as path from "path"
import {FunctionInfo, PropertyInfo, ClassInfo, SourceInfo} from './src/types'
import { processSourceFile } from './src/ProcessFiles'
import {renderCommentBlock, renderFunctionStub, renderPropertyStub} from "./src/CommentBlock";
import {recordInfo, sortRecorded,stubOut,writeStubFile} from "./src/Output";
import {write} from "fs";

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
  else files.push(f)
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

console.log('Doc Holiday ', files)



for(let f of files) {
  let fp = path.normalize(f)
  processSourceFile(fp, recordModuleFunc, recordModuleProp, recordClass)
  sortRecorded()
  let outFile = outOption()
  if(outFile) {
    writeStubFile(outFile)
  } else {
    console.log(stubOut())
  }
}

function recordModuleFunc(fi:FunctionInfo, source:string) {
  recordInfo(fi, source)
}
function recordModuleProp(pi:PropertyInfo, source:string) {
  recordInfo(pi, source)
}

function recordClass(ci:ClassInfo, source:string) {
  recordInfo(ci, source)
}

