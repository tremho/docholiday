/*
Module for evaluating glob patterns
 */

const picomatch = require('picomatch');
import * as fs from 'fs'
import * as path from 'path'

/**
 * Returns a list of files matching glob expression
 *
 * @param {string} lobexp
 *
 * @return {string[]} array of paths that match
 */
export function getGlobbedFiles(globexp:string):string[] {

    const files:string[] = []
    const addFiles = (dir:string) => {
        const ifi = fs.lstatSync(dir)
        if(ifi.isFile()) {
            // handles case of passing in a file instead of a folder
            files.push(dir)
            return files
        }
        const dirFiles = fs.readdirSync(dir)
        for(let f of dirFiles) {
            let fp = path.join(dir, f)
            const fi = fs.lstatSync(fp)
            if(fi.isDirectory()) {
                return addFiles(fp)
            } else if(fi.isFile()) {
                if(picomatch.isMatch(fp, globexp)) {
                    files.push(fp)
                }
            }
        }

    }
    const scan = picomatch.scan(globexp)
    addFiles(scan?.base || '.')
    return files
}