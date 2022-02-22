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
testC =  "Constraint Error: String Length 1 is less than range minimum of 3"  
`

function runTcDemo() {
    return Tap.test('tcDemo', undefined, t => {
        executeCommand('node', ['build/cases/tcDemo.js']).then(rt => {
            if(rt.retcode) {
                t.ok(false, 'return code '+rt.retcode+' received from tcDemo')
            } else {
                let resp = rt.stdStr.trim()
                t.ok(resp === comp.trim(), 'response is as expected')
            }
            t.end()
        })
    })
}
runTcDemo()