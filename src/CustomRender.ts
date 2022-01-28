
import {executeCommand} from "./execCmd";
const {geturl} = require('plantuml-api')

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

export async function handleExternalCustom(name:string, args:string[], text:string):Promise<string> {
    args.push(text)
    console.warn(`TODO: launch command ${name} ${args}`)
    return executeCommand(name, args)

}
