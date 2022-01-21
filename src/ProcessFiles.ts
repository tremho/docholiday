import * as fs from "fs";
import {FICallback, CICallback, PICallback, EICallback, EnumInfo, TICallback, TypedefInfo} from "./types"
import {SourceReader} from "./SourceReader";

/**
 * read and parse the given source file and
 * emit each instance of FunctionInfo via the given callback
 *
 * @param {string} srcPath
 * The path to the source file to read
 * @param {FICallback} fncallback
 * the function that will receive the FunctionInfo instances emitted by the parse.
 * @param {PICallback} prcallback
 * the function that will receive the PropertyInfo instances emitted by the parse.
 * @param {CICallback} clscallback
 * the function that will receive the ClassInfo instances emitted by the parse.
 * @param {EICallback} encallback
 * the function that will receive the EnumInfo instances emitted by the parse.
 *
 * @return {string}
 */
export function processSourceFile(srcPath:string, fncallback:FICallback, prcallback:PICallback, clscallback:CICallback, encallback:EICallback, tdcallback:TICallback) {
    const contents = fs.readFileSync(srcPath).toString()

    const ext = srcPath.substring(srcPath.lastIndexOf('.'))
    return processSource(contents, ext, fncallback, prcallback, clscallback, encallback, tdcallback)
}

/**
 * Process source as text
 *
 * @param contents Text to process
 * @param ext      'js' or 'ts' for javascript or typescript source
 * @param fncallback function to call on each FunctionInfo parse
 * @param prcallback function to call on each PropertyInfo parse
 * @param clscallback function to call on each ClassInfo parse
 * @param encallback function to call on each EnumInfo parse
 */
export function processSource(contents:string, ext:string, fncallback:FICallback, prcallback:PICallback, clscallback:CICallback, encallback:EICallback, tdcallback:TICallback) {
    const reader = new SourceReader(contents, ext)
    const apiResults = reader.getAPIInfo()

    apiResults.functions.forEach(fi => {
        fncallback(fi, contents)
    })
    apiResults.properties.forEach(pi => {
        prcallback(pi, contents)
    })
    apiResults.enums.forEach(si => {
        let ei = Object.assign(new EnumInfo(), si)
        encallback(ei, contents)
    })
    apiResults.typedefs.forEach(si => {
        let ti = Object.assign(new TypedefInfo(), si)
        tdcallback(ti, contents)
    })

    // console.log('---------- Class Parsing -----------')
    const cresults = apiResults.classes
    cresults.forEach(cls => {
        clscallback(cls, contents)
    })

}