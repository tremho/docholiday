/**
 * Expresses stub output.
 * Converts SourceInfo-derived data objects into appropriate
 * JSDOC comment blocks and associated code stubs.
 */

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


/* the RegEx Pattern for a custom extension {{{ }}} */
const customRE =  /{{{[\w|\d|=|,|"|'|\s]+}}}/g

/**
 * Renders the comment block for the entity, and its associated stub code
 *
 * @param entityInfo the SourceInfo-derived data object of the parsed code entity
 * @param indent     the indent margin where the comment block begins
 */
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

/**
 * Renders the top line of a comment block.
 * JSDOC style is that this should be "/**"
 * @param indent
 */
function beginCommentBlock(indent:number):string {
    let out = indent ? ' '.repeat(indent) : ''
    out += '/**\n'
    return out
}

/**
 * Renders a single line in a comment block.
 * Handles the ' * ' indent of a jsdoc format block.
 *
 * @param indent
 * @param text
 */
function commentLine(indent:number, text:string):string {
    let out = indent ? ' '.repeat(indent) : ''
    out += ' * ' + text+ '\n'
    return out

}

/**
 * Renders the closing end-comment delimeter of the comment block
 * @param indent
 */
function endCommentBlock(indent:number):string {
    let out = indent ? ' '.repeat(indent) : ''
    out += ' */\n'
    return out
}

/**
 * Renders multiple lines of text into an inset comment block.
 * Also checks for and expands custom {{{}}} extensions.
 *
 * @param indent    indent to start of comment block
 * @param inset     inset within comment block
 * @param text      text to render
 */
function commentText(indent:number, inset:number, text:string=''):string {
    let out = ''
    const cm = text.match(customRE)
    if (cm) {
        let parts:string[] = []
        let offset = 0
        let lm = ''
        for (let m of cm) {
            let n = text.indexOf(m, offset)
            if (n !== -1) {
                let pre = text.substring(offset,n)
                if(lm && pre.substring(0, lm.length) === lm) pre = ''
                let post = text.substring(n+m.length)
                let rendered = customGen(m, post)
                if(pre) parts.push(pre)
                parts.push(rendered)
                offset = n
                lm = m
            }
        }
        text = parts.join('\n')
    }
    let spaces = inset ? ' '.repeat(inset) : ''
    let lines = text.split('\n')
    for(let ln of lines) {
        out += commentLine(indent, spaces+ln)
    }
    return out
}

/**
 * Renders the comment output for a Function
 * Note that this differs depending upon whether or not the function exists within a class,
 * and different still if part of an inner class.
 *
 * @param fi
 * @param indent
 * @param forClass
 */
function renderFunctionComment(fi:FunctionInfo, indent:number, forClass:string='') : string {

    let out = beginCommentBlock(indent)
    let name = fi.name

    let yieldType
    if(fi.return) {
        let type = (fi.return.type || '*').trim()
        if (fi.scope.generator) {
            let ti = type.indexOf('<')
            if (ti !== -1) {
                let te = type.indexOf('>', ti + 1)
                if (te !== -1) {
                    yieldType = type.substring(ti + 1, te)
                }
            }
        }
    }

    if (forClass) {
        if(forClass.indexOf('.') !== -1) { // todo ??

            let desc = ''
            if(fi.scope.generator) desc += `(\`generator\`) `
            if(yieldType) desc += `(\`yields {${yieldType}}\`) `
            if(fi.scope.private) desc += `(\`private\`) `
            if(fi.scope.static) desc += `(\`static\`) `
            if(fi.scope.async) desc += `(\`async\`) `
            if(fi.return && fi.return.type !== 'void') desc += `(\`returns {${fi.return.type || '*'}} ${fi.return.description || ''}\`) `
            if(desc) desc += ' <br/>  '
            desc += fi.description || ''

            return commentLine(indent, `@property {method} ${forClass}.${name} - ${desc}`)
        }
    }
    if(fi.description) out += commentText(indent, 0, fi.description+'\n')
    for(let pi of fi.params) {
        let type = pi.type || '*'
        // let objectBlock:ParameterInfo[] = getObjectProps(pi)
        // if(objectBlock.length) type = 'object'
        if (pi.optional) {
            if (pi.default) {
                out += commentLine(indent, `@param {${type}} [${pi.name} = ${pi.default}]`)

            } else {
                out += commentLine(indent, `@param {${type}} [${pi.name}]`)
            }
            // renderObjectProps(objectBlock)

        } else {
            out += commentLine(indent, `@param {${type}} ${pi.name}`)
            // renderObjectProps(objectBlock)
        }
        if (pi.description) out += commentText(indent, 8, pi.description)

        out += formatConstraints(indent, pi)
    }
    if(fi.return) {
        let type = fi.return.type.trim() || '*'
        if(fi.return.description || (type !== 'void' && type !== 'undefined')) {
            if(type.charAt(0) === '{') {
                // Output for ad-hoc type
                out += commentLine(indent, '')
                out += commentLine(indent, `@return {object} ${fi.return.description || ''}`)
                out += commentLine(indent, '')
                out += commentText(indent, 2, 'Object detail:')
                out += commentText(indent, 4, type)
                out += formatConstraints(indent, fi.return)
            } else {
                out += commentLine(indent, '')
                out += commentLine(indent, `@return {${type}} ${fi.return.description || ''}`)
                out += formatConstraints(indent, fi.return)
            }
        }
        if (yieldType) {
            out += commentLine(indent, `@yields {${yieldType}}`)
        }
    }
    // out += commentLine(indent, '')
    if (fi.scope.async) {
        out += commentLine(indent, '@async')
    }
    if (fi.scope.static) {
        out += commentLine(indent, '@static')
    }
    if(fi.scope.private || !fi.scope.public) {
        out += commentLine(indent,'@private')
    } else {
        out += commentLine(indent, '@public')
    }

    out += endCommentBlock(indent)
    return out
}

/**
 * Renders the comment output for a Property
 * Note that this differs depending upon whether or not the property exists within a class,
 * and different still if part of an inner class.

 * @param pi
 * @param indent
 * @param forClass
 */
function renderPropertyComment(pi:PropertyInfo, indent:number, forClass = '') : string {
    let out = beginCommentBlock(indent)

    let type = pi.type || '*'
    let name = pi.name.trim()

    if(forClass) {
        let desc = ''
        if(pi.scope.private) desc += `(\`private\`) `
        if(pi.scope.static) desc += `(\`static\`) `
        desc += pi.description || ''

        if(pi.default) {
            return commentLine(indent, `@property {${type}} [${forClass}.${name} = ${pi.default}] - ${desc}`)
        }
        return commentLine(indent, `@property {${type}} ${forClass}.${name} - ${desc}`)
    }

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
    } else {
        out += commentLine(indent, '@public')
    }

    out += endCommentBlock(indent)
    return out
}

/**
 * Renders the comment output for a Class
 * Note that this differs depending upon whether or not the class itself exist within a class.

 * @param ci
 * @param indent
 * @param forClass
 */
function renderClassComment(ci:ClassInfo, indent:number, forClass = '') : string {
    let out = beginCommentBlock(indent)

    let ifc = forClass ? ci.name +'.'+forClass : ci.name
    if(forClass) {
        let desc = ''
        if(ci.scope.private) desc += `(\`private\`) `
        if(ci.scope.static) desc += `(\`static\`) `
        if(ci.extends) desc += `(\`static\`) `
        if(ci.implements.length) desc += `(\`implements ${ci.implements.join(', ')}\`) `
        desc += ci.description || ''

        let type = (ci.isInterface) ? 'interface' : 'class'

        out = commentLine(indent, `@property {${type}} ${forClass}.${ci.name} - ${desc}`)
        for(let pi of ci.internals.properties) {
            out += renderPropertyComment(pi, indent, ifc)
        }
    } else {
        if (ci.mixins.length) {
            for (let mi of ci.mixins) {
                out += commentLine(indent, `   @mixes ${mi}`)
            }
        }
        if (ci.description) out += commentText(indent, 0, ci.description)

        if(ci.internals.properties.length) {
            for (let pi of ci.internals.properties) {
                if (!pi.scope.private) {
                    let {type, name} = pi
                    if(pi.default) name = `${name}=${pi.default}`
                    if (pi.scope.optional) name = '[' + name + ']'
                    let desc = ''
                    if(pi.scope.private) desc += `(\`private\`) `
                    if(pi.scope.static) desc += `(\`static\`) `
                    desc += pi.description || ''

                    let pline = `@property {${type}} ${name} - ${desc}`
                    out += commentText(indent, 4, pline)
                    out += formatConstraints(indent, pi)
                }
            }
        }
    }

    for(let ti of ci.internals.typedefs) {
        out += renderTypedefComment(ti, indent, ifc)
    }
    for(let ei of ci.internals.enums) {
        out += renderEnumComment(ei, indent, ifc)
    }
    if(ifc.indexOf('.') !== -1) {
        for(let fi of ci.internals.functions) {
            out += renderFunctionComment(fi, indent, ifc)
        }
    }
    for(let cci of ci.internals.classes) {
        out += renderClassComment(cci, indent, ifc)
    }

    out += commentLine(indent, '')
    if(forClass) {
        return out
        // out += commentLine(indent, '@memberOf '+forClass)
    } else {
        if (ci.scope.private || !ci.scope.public) {
            out += commentLine(indent, '@private')
        } else {
            out += commentLine(indent, '@public')
        }
        // out += commentLine(indent, '')
        if (ci.isInterface) out += commentLine(indent, '@interface')
        else out += commentLine(indent, '@class')
        if (ci.extends) {
            out += commentLine(indent, '@extends ' + ci.extends)
        }
        if (ci.implements.length) {
            for (let imp of ci.implements) {
                if (imp.trim()) out += commentLine(indent, '@implements ' + imp)
            }
        }
    }
    out += commentLine(indent, '')
    out += endCommentBlock(indent)
    return out
}

/**
 * Renders the comment output for an Enumeration
 * Note that this differs depending upon whether or not the enum exists within a class,
 * and different still if part of an inner class.
 *
 * @param ei
 * @param indent
 * @param forClass
 */
function renderEnumComment(ei:EnumInfo, indent:number, forClass='') : string {
    let out = beginCommentBlock(indent)

    if(forClass) {
        return commentLine(indent,`@property {enum} ${forClass}.${ei.name} - ${ei.description || ''}`)
    }

    out += commentText(indent, 0, ei.description || '')
    out += commentLine(indent, `@enum`)
    out += commentLine(indent, `@readonly`)

    out += endCommentBlock(indent)
    return out
}

/**
 * Renders the comment output for a TypeDef
 * Note that this differs depending upon whether or not the typedef exists within a class
 *
 * @param ti
 * @param indent
 * @param forClass
 */
function renderTypedefComment(ti:TypedefInfo, indent:number, forClass = ''): string {
    let out = beginCommentBlock(indent)

    if(forClass) {
        return commentLine(indent, `@property {${ti.type}} ${forClass}.${ti.name} - ${ti.description || ''}`)
    }

    out += commentLine(indent, '@name '+ti.name)
    out += commentLine(indent, '@typedef {'+ti.type+'}')
    if(ti.description) out += commentText(indent, 0, ti.description)
    out += formatConstraints(indent, ti)

    if(ti.form === TypedefForm.Object) {
        let ci = ti.declaration as ClassInfo
        for(let pi of ci.internals.properties) {
            if(!pi.scope.private) {
                let {type,name}  = pi
                if(pi.scope.optional) name = '['+name+']'
                let pline = `@property {${type}} ${name} - ${pi.description || ''}`
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

/**
 * Renders the code stub for a class.
 * Unless an inner class, the stub will encapsulate other comment blocks and stubs representing the
 * inner members of this class.
 *
 * @param ci
 * @param indent
 * @param forClass
 */
export function renderClassStub(ci:ClassInfo, indent:number, forClass = '') {
    let out = ''
    let spaces = (indent && ' '.repeat(indent)) || ''

    let extender = ' '
    if(ci.extends) {
        extender = ' extends '+ci.extends
    }

    out += spaces + `class ${ci.name}${extender}{\n`

    let ifc = forClass ? forClass+'.'+ci.name : ci.name

    if(ci.internals.functions?.length) {
        for(let fi of ci.internals.functions) {
            if(fi.name) {
                out += renderFunctionComment(fi, indent + 2, ifc)
                out += renderFunctionStub(fi, indent + 2, ifc)
            }
        }
    }
    out += spaces+'}\n\n'
    return out
}

/**
 * Renders the function stub.
 * The only purpose for the stub is to give JSDOC rendering engines the entity anchor for the comment
 * block above.  So the actual 'function' does not need to represent the contract.
 * Nevertheless, this rendering outputs the parameters and returns a value representing the primitive return type.
 * @param fi
 * @param indent
 * @param forClass
 */
export function renderFunctionStub(fi:FunctionInfo, indent:number, forClass:string='') {
    let type = fi.return?.type || ''
    let rv = returnValueFromType(type)
    let spaces = indent && ' '.repeat(indent) || ''
    let fn = ''
    // if(fi.scope.public) fn += 'export '
    if(!forClass) {
        fn += 'function'
    }
    if(fi.scope.generator) fn += '*'
    fn += ' '
    fn += fi.name
    fn += '('
    fn = fn.trim()
    let i = 0
    for (let pi of fi.params) {
        if(pi.name && pi.name.indexOf('.') === -1) {
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

/**
 * Renders a code stub for a declared property.
 * @param pi
 * @param indent
 */
export function renderPropertyStub(pi:PropertyInfo, indent:number) {
    let spaces = indent && ' '.repeat(indent) || ''
    let out = spaces+'    var '+pi.name
    if(pi.default) {
        out += ' = '+pi.default
    }
    else if(pi.scope.const) {
        out += ' = '+ returnValueFromType(pi.type)
    }
    out += '\n'

    return out
}

/**
 * Renders a code stub for an Enumeration
 * @param ei
 * @param indent
 */
export function renderEnumStub(ei:EnumInfo, indent:number) {
    const spaces = indent && ' '.repeat(indent) || ''
    let out = spaces+`    var ${ei.name} = {`
    for(let i=0; i<ei.values.length; i++) {
        let v = ei.values[i]
        if(i > 0) out += ','
        out += '\n'
        out += spaces+'        /** \n'
        if(v.description) out += spaces+'        *  '+v.description+'\n'
        if(v.value !== v.name) {
            let q = typeof v.value === 'string' ? '"': ''
            out += spaces + `        *  <b><i>(value = ${q}${v.value}${q})</i></b>\n`
        }
        out += spaces+`        *  @type {${v.type || typeof(v.value)}}\n`
        out += spaces+'        */\n'
        out += spaces+`        ${v.name}`
    }
    out += '\n'+spaces+'}\n\n'

    return out
}

/**
 * Formats the list of Contraints applies to a value into a series of comment lines
 * @param indent
 * @param info
 */
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
        out += commentLine(indent, '')
    }
    return out
}

/**
 * Checks the comment block given for custom extensions defined by the {{{}}} pattern
 * and calls upon the CustomRender extension handlers to format if appropriate.
 * @param block
 * @param text
 */
function customGen(block:string, text:string):string {
    let out = ''
    let args:string[] = block.substring(3, block.length-3).split(' ')
    let name:string = (args?.shift() || '')
    let argMap:any = {}
    for(let arg of args) {
        let kv = arg.split('=')
        if(!kv) continue
        let key = kv[0].trim().toLowerCase()
        let value = (kv[1] && kv[1].trim()) || ''
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

// Return a value that represents the primitive type given
// will return "" (any) for an unrecognized type
// Note that returned value may violate any contract Constraints, since these are not considered.
function returnValueFromType(type:string) {
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
    return rv
}