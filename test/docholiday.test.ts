
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
            const stubFile = path.join('gen', 'test-'+name+'.docstub.js')
            const stub = fs.readFileSync(stubFile).toString()
            const comp = fs.readFileSync(compPath).toString()
            const same = stub === comp
            t.ok(same, 'stub content matches comp')
        } catch(e) {
            t.ok(false, 'stub content does not match comp')
        }
        t.end()
    })
}

(async function () {
    await docTests('enum')
    await docTests('functions')
})()

