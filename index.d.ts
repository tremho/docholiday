#!/usr/bin/env node
import { FunctionInfo, PropertyInfo, ClassInfo, SourceInfo, EnumInfo, TypedefInfo } from './src/types';
import { processSourceFile, processSource } from './src/ProcessFiles';
import { recordInfo, sortRecorded, clearRecorded, analysisJSON, writeStubFile, readModuleDescription } from "./src/Output";
import { getGlobbedFiles } from "./src/Globber";
import { executeCommand } from "./src/execCmd";
import { validate } from "./src/TypeCheck";
export { FunctionInfo };
export { PropertyInfo };
export { ClassInfo };
export { SourceInfo };
export { EnumInfo };
export { TypedefInfo };
export { processSourceFile };
export { processSource };
export { recordInfo };
export { sortRecorded };
export { clearRecorded };
export { analysisJSON };
export { writeStubFile };
export { readModuleDescription };
export { getGlobbedFiles };
export { executeCommand };
export { validate };
/**
 * Options for stub generation
 */
export declare class DocOptions {
    sourceType: string;
    stubExtension: string;
}
/**
 * Process a list of source files into comment-normalized stubs
 * output to an output path or generating an analysis JSON yield for each file processed.
 * @param {string[]} files
 * @param {string} outPath  if '', analysis JSON will be emitted instead on each yield
 *
 * @generator {string} with no outPath given, will generate successive analysis results from process files as JSON content.
 *                     with outPath, the generated file will be return on each iteration
 *
 * <<<jsdoc tag=example>>>
 *     ```
 *     // myFiles:string[] = [... an array of file paths to convert ]
 *     let generator = processFileList(files)
 *     while(true) {
 *         let gen = generator.next()
 *         let stub = gen.value
 *         if(stub) console.log(stub)
 *         if(gen.done) break;
 *       }
 *
 *     let outFile = processFileList(myFiles, myOutDir).next()
 *     // stub output will be in the file named by outFile
 *    ```
 */
export declare function processFileList(files: string[], outPath?: string): Generator<string>;
/**
 * Convert source text into documentation stub output
 *
 * @param {string} content
 *          The original source to convert
 * @param {DocOptions} options
 *          Options affecting stub creation
 */
export declare function docstub(content: string, options?: DocOptions): void;
/**
 * Executes the jsdoc or similar documentation generation according to the doc-holiday.conf file settings.
 * In normal flow, this is called after docstub generation for all source files is complete, and the configuration
 * is set to generate from the docstub .js files in the intermediate directory (gen).
 */
export declare function execute(): Promise<void>;
/**
 * Removes the ToC from a DocumentationJS generated markdown file.
 * Puts the title and attribution line at the top of a markdown output.
 */
export declare function capToc(): void;
