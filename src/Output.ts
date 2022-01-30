
/*
write ordered stubs out to a text file
process this with jsdoc or documentation.js
 */

import * as fs from 'fs'
import * as path from 'path'
import {ClassInfo, EnumInfo, FunctionInfo, PropertyInfo, SourceInfo, TypedefInfo} from "./types";
import {
    renderCommentBlock,
    renderFunctionStub,
    renderPropertyStub,
    renderClassStub,
    renderEnumStub
} from "./CommentBlock";

class OrderedParts {
    info:FunctionInfo|PropertyInfo|ClassInfo|EnumInfo|TypedefInfo
    indent:number
    start:number
}
const recorded:OrderedParts[] = []

export function clearRecorded() {
    recorded.splice(0,recorded.length)
}

export function recordInfo(info:ClassInfo|FunctionInfo|PropertyInfo|EnumInfo|TypedefInfo, source:string) {
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

export function readModuleDescription(source:string) {
    let description = ''
    let reading = false
    const lines = source.split('\n')
    for(let ln of lines) {
        ln = ln.trim()
        if(ln.substring(0,2) === '#!') continue; // skip shebang line
        if(ln.charAt(0) === '/') {
            reading = true
            ln = ln.substring(1)
        }
        if(reading) {
            if(!ln) break;
            if (ln.charAt(0) === '*') ln = ln.substring(1).trim()
            let eol = ln.length
            if (ln.charAt(1) === '*') {
                eol = ln.indexOf('*/')
                if(eol == -1) eol = ln.length
            }
            let dl = ln.substring(0, eol)
            while(dl.charAt(0) === '/') dl = dl.substring(1)
            while(dl.charAt(0) === '*') dl = dl.substring(1)
            if(dl.charAt(0) === '/') break;
            if(description) description += '\n * '
            description += dl.trim()
        }
    }
    return description
}

export function sortRecorded() {
    recorded.sort((a, b) => {
        return (a.start - b.start)
    })
}
export function stubOut():string {
    let out = ''
    for(let cb of recorded) {
        if(cb.start >=0) {
            let blktxt = renderCommentBlock(cb.info, cb.indent)
            if (cb.info instanceof FunctionInfo) {
                blktxt += renderFunctionStub(cb.info, cb.indent)
            } else if (cb.info instanceof PropertyInfo) {
                blktxt += renderPropertyStub(cb.info, cb.indent)
            } else if (cb.info instanceof ClassInfo) {
                blktxt += renderClassStub(cb.info, cb.indent)
            } else if (cb.info instanceof EnumInfo) {
                blktxt += renderEnumStub(cb.info, cb.indent)
            } else if (cb.info instanceof TypedefInfo) {
                blktxt += '\n'
            }
            out += blktxt
        }
    }
    return out
}
export function writeStubFile(filePath:string, moduleName:string, moduleDescription:string) {
    try {
        let pn = path.normalize(filePath)
        let pd = path.dirname(pn)
        fs.mkdirSync(pd, {recursive: true})
        let content = `/** @module ${moduleName} \n * @description\n * #### ${moduleName} (Module)\n * ${moduleDescription}\n *\n*/\n\n` + stubOut()
        fs.writeFileSync(pn, content)
    } catch(e) {
        console.error('Error', e)
    }
}

