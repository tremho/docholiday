import * as fs from "fs";
import {FICallback, CICallback, PICallback} from "./types"
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
 * the function that will receive the FunctionInfo instances emitted by the parse.
 * @param {CICallback} clscallback
 * the function that will receive the FunctionInfo instances emitted by the parse.
 *
 * @return {string}
 */
export function processSourceFile(srcPath:string, fncallback:FICallback, prcallback:PICallback, clscallback:CICallback) {
    const contents = fs.readFileSync(srcPath).toString()

    const ext = srcPath.substring(srcPath.lastIndexOf('.'))
    const reader = new SourceReader(contents, ext)
    const apiResults = reader.getAPIInfo()

    apiResults.functions.forEach(fi => {
        fncallback(fi, contents)
    })
    apiResults.properties.forEach(pi => {
        prcallback(pi, contents)
    })

    // console.log('---------- Class Parsing -----------')
    const cresults = apiResults.classes
    cresults.forEach(cls => {
        clscallback(cls, contents)
    })
}
