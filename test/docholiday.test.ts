
import * as Tap from 'tap'
import * as path from 'path'
import * as fs from 'fs'
import {processSourceFile} from "../src/ProcessFiles";

function docTests(name:string) {
    let testPath = path.resolve(path.join('examples', +'test-'+name+'.ts'))
    if(!fs.existsSync(testPath)) {
        testPath = testPath.substring(0, testPath.lastIndexOf('.'))+'.js'
    }
    const compPath = path.resolve(path.join('examples','comp', name+'.txt'))

    try {
        const content = fs.readFileSync(testPath)
    } catch(e) {
        console.error(e)
    }
}