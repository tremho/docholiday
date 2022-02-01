// Handles {{{ }}} extensions
// currently supporting `text`, `jsdoc`, and `plantUML`

import {executeCommand} from "./execCmd";
const {geturl} = require('plantuml-api')

/**
 * Checks to see if one of the locally handled extensions is being referenced, and if so
 * performs the requested rendering.
 *
 * This is called by the CommentBlock processing when it detects a {{{ }}} pattern.
 *
 * @param name
 * @param argMap
 * @param text
 */
export function handleInternalCustom(name:string, argMap:any, text:string):string {
    let out = ''
    name = name.trim().toLowerCase()

    // must be done to avoid processing subsequent custom declarations as part of custom body
    let nc = text.indexOf('{{{')
    if(nc !== -1) text = text.substring(0, nc)

    if(name === 'text') {
        out = text
    }

    if(name === 'jsdoc') {
        let tag = argMap['tag']
        out = '@'+tag+ ' ' + text
    }
    else if(name === 'plantuml') {
        let alt = argMap['alt'] || 'plantUML'
        out = `![${alt}](${geturl(text)})`
    }

    return out;
}

/**
 * Checks to see if one of the locally handled extensions is being referenced, and if so
 * performs the requested rendering.
 *
 * This is called by the CommentBlock processing when it detects a {{{ }}} pattern.
 *
 * _Note: This is currently __NOT_ being called because we must do some refactoring before we can
 * perform an asynchronous rendering action, and external commands are inherently asynchronous_
 *
 * @param name
 * @param args
 * @param text
 */
export async function handleExternalCustom(name:string, args:string[], text:string):Promise<string> {
    args.push(text)
    console.warn(`TODO: launch command ${name} ${args}`)
    return executeCommand(name, args)

}
