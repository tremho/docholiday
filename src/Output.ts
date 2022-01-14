
/*
write ordered stubs out to a text file
process this with jsdoc or documentation.js
 */

import * as fs from 'fs'
import * as path from 'path'
import {ClassInfo, FunctionInfo, PropertyInfo, SourceInfo} from "./types";
import {renderCommentBlock, renderFunctionStub, renderPropertyStub, renderClassStub} from "./CommentBlock";

class OrderedParts {
    info:FunctionInfo|PropertyInfo|ClassInfo
    indent:number
    start:number
}
const recorded:OrderedParts[] = []

export function recordInfo(info:ClassInfo|FunctionInfo|PropertyInfo, source:string) {
    const op = new OrderedParts()
    op.info = info
    op.indent = findSourceIndent(info, source)
    op.start = info.comStart
    recorded.push(op)
}

export function findSourceIndent(si:SourceInfo, source:string) {
    let at = si.comStart
    let pr = source.lastIndexOf('\n', at)
    if(pr < 0) pr = 0
    return at - pr
}

export function sortRecorded() {
    recorded.sort((a, b) => {
        return (a.start - b.start)
    })
}
export function stubOut():string {
    let out = ''
    for(let cb of recorded) {
        let blktxt = renderCommentBlock(cb.info, cb.indent)
        if(cb.info instanceof FunctionInfo) {
            blktxt += renderFunctionStub(cb.info, cb.indent)
        }
        else if(cb.info instanceof PropertyInfo) {
            blktxt += renderPropertyStub(cb.info, cb.indent)
        }
        else if(cb.info instanceof ClassInfo) {
            blktxt += renderClassStub(cb.info, cb.indent)
        }
        out += blktxt
    }
    return out
}
export function writeStubFile(filePath:string) {
    try {
        let pn = path.normalize(filePath)
        let pd = path.dirname(pn)
        fs.mkdirSync(pd, {recursive: true})
        let content = stubOut()
        fs.writeFileSync(pn, content)
    } catch(e) {
        console.error('Error', e)
    }
}

