import {executeCommand} from "../index";
import * as Tap from 'tap'

const comp =
`test1 =  bad phone 
test2 =  bad name bad phone 
test3 =  bad age bad phone 
test4 =  bad phone 
test5 =  bad name bad age bad phone 
test6 =  bad age bad phone 

-----------

testA =  okay
testB =  bad object 1 bad object 2 
testC =  bad array 
`

function runTcDemo() {
    return Tap.test('tcDemo', undefined, t => {
        executeCommand('node', ['build/cases/tcDemo.js']).then(rt => {
            if(rt.retcode) {
                t.ok(false, 'return code '+rt.retcode+' received from tcDemo')
            } else {
                let resp = rt.stdStr
                t.ok(resp === comp, 'response is as expected')
            }
            t.end()
        })
    })
}
runTcDemo()