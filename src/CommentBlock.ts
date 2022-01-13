import {ClassInfo, FunctionInfo, PropertyInfo} from "./types";


export function renderCommentBlock(entityInfo:FunctionInfo|ClassInfo|PropertyInfo, indent:number) {
    if(entityInfo instanceof FunctionInfo) {
        return renderFunctionComment(entityInfo, indent)
    }
    if(entityInfo instanceof ClassInfo) {
        return renderClassComment(entityInfo, indent)
    }
    if(entityInfo instanceof PropertyInfo) {
        return renderPropertyComment(entityInfo, indent)
    }
}

function beginCommentBlock(indent:number):string {
    let out = indent ? ' '.repeat(indent) : ''
    out += '/**\n'
    return out
}
function commentLine(indent:number, text:string):string {
    let out = indent ? ' '.repeat(indent) : ''
    out += ' * ' + text+ '\n'
    return out

}
function endCommentBlock(indent:number):string {
    let out = indent ? ' '.repeat(indent) : ''
    out += ' */\n'
    return out
}

function commentText(indent:number, inset:number, text:string=''):string {
    let out = ''
    let spaces = inset ? ' '.repeat(inset) : ''
    let lines = text.split('\n')
    for(let ln of lines) {
        out += commentLine(indent, spaces+ln)
    }
    return out
}

function renderFunctionComment(fi:FunctionInfo, indent:number) : string {
    let out = beginCommentBlock(indent)
    if(fi.scope.async) {
        out += commentLine(indent, '@async')
    }
    if(fi.scope.static) {
        out += commentLine(indent,'@static')
    }
    if(fi.scope.private || !fi.scope.public) {
        out += commentLine(indent,'@private')
    }
    out += commentLine(indent, fi.name)
    if(fi.description) out += commentText(indent, 2, fi.description+'\n')
    for(let pi of fi.params) {
        let type = pi.type || '*'
        if(pi.optional) {
            if(pi.default) {
                out += commentLine(indent, `@param {${type}} [${pi.name} = ${pi.default}]`)

            } else {
                out += commentLine(indent, `@param {${type}} [${pi.name}]`)

            }

        } else {
            out += commentLine(indent, `@param {${type}} ${pi.name}`)
        }
        if(pi.description) out += commentText(indent, 8, pi.description)
        // todo: constraints
    }
    if(fi.return) {
        let type = fi.return.type || '*'
        out += commentLine(indent, '')
        out += commentLine(indent, `@return {${type}} ${fi.return.description}`)
    }
    out += endCommentBlock(indent)
    return out
}
function renderPropertyComment(pi:PropertyInfo, indent:number) : string {
    let out = beginCommentBlock(indent)
    if(pi.scope.static) {
        out += commentLine(indent,'@static')
    }
    if(pi.scope.private || !pi.scope.public) {
        out += commentLine(indent,'@private')
    }
    let type = pi.type || '*'
    let name = pi.name
    let jsdocKey = pi.scope.const ? '@constant' : '@member'
    out += commentLine(indent, `${jsdocKey} {${type}} ${name}`)
    if(pi.description) out += commentText(indent, 2, pi.description)
    if(pi.default) out += commentLine(indent, `@default ${pi.default}`)
    out += endCommentBlock(indent)
    return out
}
function renderClassComment(ci:ClassInfo, indent:number) : string {
    let out = ''
    out += JSON.stringify(ci, null, 2)
    return out
}

export function renderFunctionStub(fi:FunctionInfo, indent:number) {
    let type = fi.return?.type || ''
    let rv
    switch(type) {
        case 'string':
            rv = "''"
            break;
        case 'number':
            rv = "0"
            break;
        case 'boolean':
            rv = 'true'
            break;
        case 'array':
            rv = "[]"
            break;
        case 'object':
            rv = "{}"
            break;
        case 'null':
            rv = "null"
            break;
    }
    let spaces = indent && ' '.repeat(indent) || ''
    let out = spaces + '{\n'
    out += spaces+'    return '+rv+'\n'
    out += spaces+'}'

    return out
}
export function renderPropertyStub(pi:PropertyInfo, indent:number) {
    let spaces = indent && ' '.repeat(indent) || ''
    let out = spaces+'    var '+pi.name
    if(pi.default) {
        out += ' = '+pi.default
    }
    out += '\n'

    return out

}
