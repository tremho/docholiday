import {executeCommand} from "../index";
import * as Tap from 'tap'

const comp =
`test1 =  okay
test2 =  "Constraint Error: String Length 2 is less than range minimum of 4" 
test3 =  "Constraint Error: Zero is not an allowable value" 
test4 =  okay
test5 =  "Constraint Error: String Length 2 is less than range minimum of 4" "Constraint Error: Value -10000 is not positive" 
test6 =  "Constraint Error: Number 100 exceeds range maximum of 100" 

-----------

testA =  okay
testB =  "Constraint Error: Failed hasProperties: name" "Constraint Error: Failed empty: object contains 1 props"
`
// The last result is not consistent because the random mutations of the array might be done with different random element
// order.  So we strip it out of the response.

//testC =  "Constraint Error: Number -1 is less than range minimum of 0"
//testC =  "Constraint Error: String Length 1 is less than range minimum of 3"

function runTcDemo() {
    return Tap.test('tcDemo', undefined, t => {
        executeCommand('node', ['build/cases/tcDemo.js']).then(rt => {
            if(rt.retcode) {
                t.ok(false, 'return code '+rt.retcode+' received from tcDemo')
            } else {
                let resp = rt.stdStr
                let trim = resp.lastIndexOf('testC = ') // strip TestC away
                resp = resp.substring(0, trim)
                let ok = resp.trim() === comp.trim()
                if(ok) {
                    t.ok(ok, 'response is as expected')
                } else {
                    t.ok(ok, "unexpected response. got '"+resp+"'  expected '"+comp+"'")
                }
            }
            t.end()
        })
    })
}
runTcDemo()