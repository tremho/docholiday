
import * as Tap from 'tap'
import * as path from 'path'
import * as fs from 'fs'
import {processSourceFile} from "../src/ProcessFiles";
import {docstub} from "../index";

async function docTests(name:string) {
    return Tap.test(name, undefined, t => {
        let testPath = path.resolve(path.join('examples', 'test-'+name+'.ts'))
        if(!fs.existsSync(testPath)) {
            testPath = testPath.substring(0, testPath.lastIndexOf('.'))+'.js'
        }
        const compPath = path.resolve(path.join('examples','comp', 'test-'+name+'.docstub.js'))
        if(!fs.existsSync(compPath)) {
            t.ok(false, 'Missing comp file')
            return t.end()
        }
        try {
            const content = fs.readFileSync(testPath).toString()
            docstub(content)
            const stubFile = path.join('.dh-temp', 'test-'+name+'.docstub.js')
            const stub = fs.readFileSync(stubFile).toString()
            const comp = fs.readFileSync(compPath).toString()
            const diff = compareLines(stub, comp)
            if(diff) {
                const csub = diff.cln.substr(diff.column, 8)
                const ssub = diff.sln.substr(diff.column, 8)
                t.ok(false, `Line ${diff.line+1} differs, at column ${diff.column+1}: "${ssub}" vs "${csub}"`)

            }
            t.ok(true, 'stub content matches comp')
        } catch(e) {
            t.ok(false, e)
        }
        t.end()
    })
}

(async function () {
    await docTests('enum')
    await docTests('functions')
    await docTests('parameters')
    await docTests('returns')
    await docTests('classes')
    await docTests('commentBlock')
    await docTests('properties')
    await docTests('publicExport')
    await docTests('semicolons')
})()


function compareLines(src:string, cmp:string) {
    const slines = src.split('\n')
    const clines = cmp.split('\n')
    let i = 0
    let total = Math.max(slines.length, clines.length)
    while(i < total) {
        const sln = slines[i].trim() || ''
        const cln = clines[i].trim() || ''
        if(cln !== sln) {
            let rs, re
            let c = 0
            let t = Math.max(cln.length, sln.length)
            while(c < t) {
                if(cln.charAt(c) !== sln.charAt(c)) {
                    if(rs === undefined) rs = c
                }
                c++
            }
            return {line: i, column:rs, sln, cln}
        }
        i++
    }
}