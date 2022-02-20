
/*
Output module that processes the stub output.
 - records entities that have been parsed  for a module
 - writes ordered stubs out to a text file that can be processed by a JSDOC engine
 */

import * as fs from 'fs'
import * as path from 'path'
import {ClassInfo, EnumInfo, FunctionInfo, PropertyInfo, SourceInfo, TypedefInfo} from "./types";
import {
    renderCommentBlock,
    renderFunctionStub,
    renderPropertyStub,
    renderTypedefStub,
    renderClassStub,
    renderEnumStub
} from "./CommentBlock";

/**
 * A entry into the list of parsed items that have been recorded
 */
class OrderedParts {
    info:FunctionInfo|PropertyInfo|ClassInfo|EnumInfo|TypedefInfo // Any of the supported SourceInfo-derived entity types
    indent:number   // The indent margin in the code this entity was found
    start:number    // The position in the source code this entity was found
}
const recorded:OrderedParts[] = [] // the internal collection of parsed entities

// Clears the list of recorded entities
export function clearRecorded() {
    recorded.splice(0,recorded.length)
}

// Return the recorded analysis as JSON
export function analysisJSON() {
    return JSON.stringify(recorded)
}

/**
 * Records the information of a parsed entity into the collection
 *
 * @param info
 * @param source
 */
export function recordInfo(info:ClassInfo|FunctionInfo|PropertyInfo|EnumInfo|TypedefInfo, source:string) {
    const op = new OrderedParts()
    op.info = info
    op.indent = findSourceIndent(info, source)
    op.start = info.comStart
    recorded.push(op)
}

/*
Determines the indent of this source by counting whitespace characters from the preceding line start.
_Note: Does not consider tab expansion_
 */
export function findSourceIndent(si:SourceInfo, source:string) {
    let at = si.comStart
    let pr = source.lastIndexOf('\n', at)
    if(pr < 0) pr = 0
    return at - pr
}

/**
 * Examines the top lines of the source for a module description.
 *
 * A module description is any comment block of one or more lines
 * starting at the very first line and ending with a blank line below it.
 *
 * _Note: for source code that must include a "#!" "shebang" comment as the
 * first line, the module description comment block can begin on the second line_
 *
 * @param source
 */
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
            let eol = ln.indexOf('*/')
            if(eol == -1) eol = ln.length;
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

// Sorts the recorded collection of entity info so that the array is represented in the original
// source code order
export function sortRecorded() {
    recorded.sort((a, b) => {
        return (a.start - b.start)
    })
}

/**
 * Outputs all the recorded entities for a parsed module as a series of comment blocks and code stubs
 */
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
                blktxt += renderTypedefStub(cb.info, cb.indent)
            }
            out += blktxt
        }
    }
    return out
}
/**
 * Writes the stubbed version of af module source to the stub file
 */
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

