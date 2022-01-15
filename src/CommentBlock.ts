import {ClassInfo, FunctionInfo, ParameterInfo, PropertyInfo, ReturnInfo} from "./types";
import {TypeConstraint} from "./TypeCheck";


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

function renderFunctionComment(fi:FunctionInfo, indent:number, forClass:string='') : string {
    let out = beginCommentBlock(indent)
    if (fi.scope.async) {
        out += commentLine(indent, '@async')
    }
    if (fi.scope.static) {
        out += commentLine(indent, '@static')
    }
    if (fi.scope.private || (!forClass && !fi.scope.public)) {
        out += commentLine(indent, '@private')
    }
    let name = fi.name
    if (forClass) {
        if (name === 'constructor') name = 'Constructor for ' + forClass
        out += commentLine(indent, name)
    }
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

        out += formatConstraints(indent, pi)
    }
    if(fi.return) {
        let type = fi.return.type || '*'
        if(type !== 'void' && type !== 'undefined') {
            out += commentLine(indent, '')
            out += commentLine(indent, `@return {${type}} ${fi.return.description}`)
            out += formatConstraints(indent, fi.return)
        }
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
    out += formatConstraints(indent, pi)
    out += endCommentBlock(indent)
    return out
}
function renderClassComment(ci:ClassInfo, indent:number) : string {
    let out = beginCommentBlock(indent)
    if(ci.scope.private || !ci.scope.public) {
        out += commentLine(indent,'@private')
    }
    // out += commentLine(indent, ci.name)
    if(ci.extends) out += commentLine(indent, '@extends '+ci.extends)
    out += commentText(indent, 2, ci.description)
    if(ci.internals.properties.length) {
        for(let pi of ci.internals.properties) {
            if(!pi.scope.private) {
                let {type,name}  = pi
                if(pi.scope.optional) name = '['+name+']'
                let pline = `@property {${type}} ${name} - ${pi.description}`
                out += commentText(indent, 4, pline)
                out += formatConstraints(indent, pi)
            }
        }
    }
    out += endCommentBlock(indent)
    return out
}

export function renderClassStub(ci:ClassInfo, indent:number) {
    let out = ''
    let spaces = (indent && ' '.repeat(indent)) || ''
    out += spaces+'class '+ci.name+ ' {\n'

    if(ci.internals.classes?.length) {
        for(let cci of ci.internals.classes) {
            out += renderClassComment(cci,indent+2)
            out += renderClassStub(ci, indent+2)
        }
    }
    if(ci.internals.functions?.length) {
        for(let fi of ci.internals.functions) {
            out += renderFunctionComment(fi,indent+2, ci.name)
            out += renderFunctionStub(fi, indent+2, ci.name)
        }
    }
    out += spaces+'}\n\n'
    return out
}

export function renderFunctionStub(fi:FunctionInfo, indent:number, forClass:string='') {
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
    let fn = ''
    // if(fi.scope.public) fn += 'export '
    if(!forClass) fn += 'function '
    fn += fi.name
    fn += '('
    let i = 0
    for (let pi of fi.params) {
        if(pi.name) {
            fn += pi.name
            if(++i < fi.params.length) fn += ', '
        }
    }
    fn += ')'

    let out = spaces + fn + ' { \n'
    if(rv && rv !== 'undefined') out += spaces+'    return '+rv+'\n'
    out += spaces+'}\n\n'

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
function formatConstraints(indent: number, info:ParameterInfo|PropertyInfo|ReturnInfo) {
    let out = ''
    let spaces = indent ? ' '.repeat(indent) : ''
    if(info.constraintMap?.size) {
        // block must not have more than 3 inset spaces or it will be treated as markdown literal
        out += commentLine(indent, `   <ul class="doc-constraints" style="font-style:italic; margin-top: 0; margin-left: ${indent*11}px">`)
        info.constraintMap.forEach((value: TypeConstraint) => {
            let clns = value.describe().split('\n')
            for(let ln of clns) {
                if(ln) out += spaces + ' *         <li>' + ln +'</li>\n'
            }
         })
        out += commentLine(indent, '   </ul>')
    }
    return out

}