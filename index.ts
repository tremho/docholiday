import * as path from "path"
import {FunctionInfo, PropertyInfo, ClassInfo, SourceInfo} from './src/types'
import { processSourceFile } from './src/ProcessFiles'
import {renderCommentBlock, renderFunctionStub, renderPropertyStub} from "./src/CommentBlock";

let files = process.argv.slice(2)

console.log('Doc Holiday ', files)

class OrderedParts {
  info:FunctionInfo|PropertyInfo|ClassInfo
  indent:number
  start:number
}
const recorded:OrderedParts[] = []

for(let f of files) {
  let fp = path.normalize(f)
  processSourceFile(fp, recordModuleFunc, recordModuleProp, recordClass)
  sortRecorded()
  stubOut()
}

function findSourceIndent(si:SourceInfo, source:string) {
  let at = si.comStart
  let pr = source.lastIndexOf('\n', at)
  if(pr < 0) pr = 0
  return at - pr

}
function recordModuleFunc(fi:FunctionInfo, source:string) {
  let indent = findSourceIndent(fi, source)
  let op = new OrderedParts()
  op.info = fi;
  op.indent = indent
  op.start = fi.comStart
  recorded.push(op)
}
function recordModuleProp(pi:PropertyInfo, source:string) {
  let indent = findSourceIndent(pi, source)
  let op = new OrderedParts()
  op.info = pi
  op.indent = indent
  op.start = pi.comStart
  recorded.push(op)
}

function recordClass(ci:ClassInfo, source:string) {
  let op = new OrderedParts()
  op.info = ci
  op.indent = findSourceIndent(ci, source)
  op.start = ci.comStart
  recorded.push(op)
}

function sortRecorded() {
  recorded.sort((a, b) => {
    return (a.start - b.start)
  })
}
function stubOut() {
  for(let cb of recorded) {
    let out = renderCommentBlock(cb.info, cb.indent)
    if(cb.info instanceof FunctionInfo) {
      out += renderFunctionStub(cb.info, cb.indent)
    }
    else if(cb.info instanceof PropertyInfo) {
      out += renderPropertyStub(cb.info, cb.indent)
    }
    console.log(out)
  }
}