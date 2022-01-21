import {
    ClassInfo,
    EnumInfo,
    FunctionInfo,
    ParameterInfo,
    PropertyInfo,
    ReturnInfo,
    TypedefForm,
    TypedefInfo
} from "./types";
import {TypeConstraint} from "./TypeCheck";
import {handleInternalCustom} from "./CustomRender";


const customRE =  /\<\<\<[\w|\d|=|,|"|'|\s]+\>\>\>/g

export function renderCommentBlock(entityInfo:FunctionInfo|ClassInfo|PropertyInfo|EnumInfo|TypedefInfo, indent:number) {
    if(entityInfo instanceof FunctionInfo) {
        return renderFunctionComment(entityInfo, indent)
    }
    if(entityInfo instanceof ClassInfo) {
        return renderClassComment(entityInfo, indent)
    }
    if(entityInfo instanceof PropertyInfo) {
        return renderPropertyComment(entityInfo, indent)
    }
    if(entityInfo instanceof EnumInfo) {
        return renderEnumComment(entityInfo, indent)
    }
    if(entityInfo instanceof TypedefInfo) {
        return renderTypedefComment(entityInfo, indent)
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
    const cm = text.match(customRE)
    if (cm) {
        let post = ''
        for (let m of cm) {
            text += post
            let n = text.indexOf(m)
            if (n !== -1) {
                post = text.substring(n+m.length)
                let rendered = customGen(m, post)
                text = text.substring(0,n) + rendered
            }
        }
    }
    let spaces = inset ? ' '.repeat(inset) : ''
    let lines = text.split('\n')
    for(let ln of lines) {
        out += commentLine(indent, spaces+ln)
    }
    return out
}

function renderFunctionComment(fi:FunctionInfo, indent:number, forClass:string='') : string {
    let out = beginCommentBlock(indent)
    let name = fi.name
    if (forClass) {
        if (name === 'constructor') name = 'Constructor for ' + forClass
        out += commentLine(indent, name)
    }
    if(fi.description) out += commentText(indent, 0, fi.description+'\n')
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
            out += commentLine(indent, `@return {${type}} ${fi.return.description ||''}`)
            out += formatConstraints(indent, fi.return)
        }
    }
    out += commentLine(indent, '')
    if (fi.scope.async) {
        out += commentLine(indent, '@async')
    }
    if (fi.scope.static) {
        out += commentLine(indent, '@static')
    }
    if (fi.scope.private || (!forClass && !fi.scope.public)) {
        out += commentLine(indent, '@private')
    }
    out += endCommentBlock(indent)
    return out
}
function renderPropertyComment(pi:PropertyInfo, indent:number) : string {
    let out = beginCommentBlock(indent)
    let type = pi.type || '*'
    let name = pi.name
    let jsdocKey = pi.scope.const ? '@constant' : '@member'
    out += commentLine(indent, `${jsdocKey} {${type}} ${name}`)
    if(pi.description) out += commentText(indent, 0, pi.description)
    if(pi.default) out += commentLine(indent, `@default ${pi.default}`)
    out += formatConstraints(indent, pi)
    out += commentLine(indent, '')
    if(pi.scope.static) {
        out += commentLine(indent,'@static')
    }
    if(pi.scope.private || !pi.scope.public) {
        out += commentLine(indent,'@private')
    }
    out += endCommentBlock(indent)
    return out
}
function renderClassComment(ci:ClassInfo, indent:number) : string {
    let out = beginCommentBlock(indent)
    // out += commentLine(indent, ci.name)
    if(ci.extends) out += commentLine(indent, '@extends '+ci.extends)
    if(ci.mixins.length) {
        for(let mi of ci.mixins) {
            out += commentLine(indent, `   @implements ${mi}`)
        }
    }
    out += commentText(indent, 0, ci.description)
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
    if(ci.internals.functions.length) {
        for(let fi of ci.internals.functions) {
            if(!fi.scope.private) {
                let fn = fi.name || ''
                if(fn) fn += ' ('
                out += commentLine(indent,fn)
                for(let pi of fi.params) {
                    let type = pi.type || '*'
                    if(pi.optional) {
                        if(pi.default) {
                            out += commentLine(indent, ` @param {${type}} [${pi.name} = ${pi.default}]`)
                        } else {
                            out += commentLine(indent, ` @param {${type}} [${pi.name}]`)
                        }

                    } else {
                        out += commentLine(indent, ` @param {${type}} ${pi.name}`)
                    }
                    if(pi.description) out += commentText(indent, 8, pi.description)
                    out += formatConstraints(indent, pi)
                }
                if(fi.return) {
                    let type = fi.return.type || '*'
                    if(type !== 'void' && type !== 'undefined') {
                        out += commentLine(indent, '')
                        out += commentLine(indent, ` @return {${type}} ${fi.return.description ||''}`)
                        out += formatConstraints(indent, fi.return)
                    }
                }


            }
        }
    }
    out += commentLine(indent, '')
    if(ci.scope.private || !ci.scope.public) {
        out += commentLine(indent,'@private')
    }
    out += commentLine(indent, '')
    if(ci.isInterface) out += commentLine(indent, '@interface')
    else               out += commentLine(indent, '@class')
    out += endCommentBlock(indent)
    return out
}

function renderEnumComment(ei:EnumInfo, indent:number) : string {
    let out = beginCommentBlock(indent)

    // determine type of enum
    let etype = 'number'

    out += commentText(indent, 0, ei.description)
    out += commentLine(indent, `@enum ${etype}`)
    out += commentLine(indent, `@readonly`)

    out += endCommentBlock(indent)
    return out
}

function renderTypedefComment(ti:TypedefInfo, indent:number): string {
    let out = beginCommentBlock(indent)
    out += commentLine(indent, '@name '+ti.name)
    out += commentLine(indent, '@typedef {'+ti.type+'}')
    out += commentText(indent, 0, ti.description)
    out += formatConstraints(indent, ti)

    if(ti.form === TypedefForm.Object) {
        let ci = ti.declaration as ClassInfo
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
    if(ti.form === TypedefForm.Function) {
        let fi = ti.declaration as FunctionInfo
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
                out += commentLine(indent, `@return {${type}} ${fi.return.description || ''}`)
                out += formatConstraints(indent, fi.return)
            }
        }

    }

    out += endCommentBlock(indent)
    return out
}

export function renderClassStub(ci:ClassInfo, indent:number) {
    let out = ''
    let spaces = (indent && ' '.repeat(indent)) || ''

    out += spaces + `function ${ci.name}() {}\n`

    // if(ci.internals.classes?.length) {
    //     for(let cci of ci.internals.classes) {
    //         out += renderClassComment(cci,indent+2)
    //         out += renderClassStub(ci, indent+2)
    //     }
    // }
    // if(ci.internals.functions?.length) {
    //     for(let fi of ci.internals.functions) {
    //         out += renderFunctionComment(fi,indent+2, ci.name)
    //         out += renderFunctionStub(fi, indent+2, ci.name)
    //     }
    // }
    // out += spaces+'}\n\n'
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
export function renderEnumStub(ei:EnumInfo, indent:number) {
    const spaces = indent && ' '.repeat(indent) || ''
    let out = spaces+`    var ${ei.name} = {`
    for(let i=0; i<ei.values.length; i++) {
        let v = ei.values[i]
        if(i > 0) out += ','
        out += '\n'
        out += spaces+'        /** '
        if(v.description) out += v.description+'\n'
        if(v.value !== v.name) {
            out += spaces+`         *  <b><i>(value = ${v.value})</i></b>\n`
            out += spaces+`         *  @type {${v.type || typeof(v.value)}}\n`
        }
        out += spaces+'         */\n'
        out += spaces+`        ${v.name}`
    }
    out += '\n'+spaces+'}\n\n'

    return out
}

function formatConstraints(indent: number, info:ParameterInfo|PropertyInfo|ReturnInfo|TypedefInfo) {
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

function customGen(block:string, text:string):string {
    let out = ''
    let args:string[] = block.substring(3, block.length-3).split(' ')
    let name:string = (args?.shift() || '')
    let argMap:any = {}
    for(let arg of args) {
        let kv = arg.split('=')
        let key = kv[0].trim().toLowerCase()
        let value = kv[1].trim()
        if(value.charAt(0) === value.charAt(value.length-1)) {
            let q = value.charAt(0)
            if(q === '"' || q === "'" || q === '`') {
                value = value.substring(1, value.length-1)
            }
            argMap[key] = value
        }
    }
    out = handleInternalCustom(name, argMap, text)
    // TODO: Can't call an async function from here. Text processing is inherently serial and synchronous
    // if(!out) out = handleExternalCustom(name, args, text)
    return out;
}

