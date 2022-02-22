/*
Case study for typecheck runtime
 */

import {validate} from "../index";


/*
An example of using constraints
 */
export function typeCheckCase1(
    name:string, //<minLength=4, maxLength=32>
    age:number,  // <positive, integer, non-zero>
    phone: string, //<match=\\([0-9]{3}\) [0-9]{3}-[0-9]{4}>

):string // <minLength=4 match=[okay|bad \w+]
{
    let out = ''
    let err = ''
    err = validate(name,'minLength=4, maxLength=32')
    if(err) {
        out += '"'+err + '" '
    }
    err = validate(age, 'positive, integer, nonzero, maxx=100')
    if(err) {
        out += '"'+err + '" '
    }
    err = validate(phone, 'match=\([0-9]{3}\) [0-9]{3}-[0-9]{4}')
    if(err) {
        out += '"'+err + '" '
    }
    if(!out) out = "okay"
    return out
}

export function typeCheckCase2(
    objectParam:object, // <!empty, !hasProperties(foo,bar,baz), hasProperties(name), notNested, noPrototype, canSerialize, noFalseyProps>
    emptyObject:object, // <empty, noTruthyProps>
    arrayParam:any[], // <minLength=100, maxLength=1000, contains="Foobar", checkType=all, each(string,minLength=3, maxLength=10|number, min=0, max=100)>
) {
    let out = ''
    let err = ''
    err = validate(objectParam, '!empty, !hasProperties(foo,bar,baz), hasProperties(name), noPrototype, notNested, canSerialize, noFalseyProps');
    if(err) {
        out += '"'+err + '" '
    }
    err = validate(emptyObject, 'empty, noTruthyProps')
    if (err) {
        out += '"'+err + '" '
    }
    err = validate(arrayParam, 'minLength=100, maxLength=1000, contains="Foobar", checkType=all, each(string,minLength=3, maxLength=10|number, min=0, max=100)')
    if(err) {
        out += '"'+err + '" '
    }

    if(!out) out = "okay"
    return out

}


console.log('test1 = ', typeCheckCase1('Steve', 60, '(206) 491-6084'))
console.log('test2 = ', typeCheckCase1('Og', 60, '(206) 491-6084'))
console.log('test3 = ', typeCheckCase1('Steve', 0, '(206) 491-6084'))
console.log('test4 = ', typeCheckCase1('Steve', 60, '206-491-6084'))
console.log('test5 = ', typeCheckCase1('Og', -10000, 'ugh'))
console.log('test6 = ', typeCheckCase1('Steve', 100, '(206) 491-6084'))

function randomString() {
    let out = ''
    for(let i=0; i<10; i++) {
        out += String.fromCharCode(Math.floor(Math.random()* 26) + 65)
        if(i > 2 && Math.random() < 0.1) break;
    }
    return out;
}
const testArray:any[] = []
for(let i=0; i<100; i++) {
    if (Math.random() < 0.5) {
        testArray[i] = Math.floor(Math.random() * 6 + 4)
    } else {
        testArray[i] = randomString()
    }
}
testArray[Math.floor(Math.random() * 100)] = 'Foobar' // must contain
console.log('\n-----------\n')

console.log('testA = ', typeCheckCase2({name:"okay"}, {}, testArray))
console.log('testB = ', typeCheckCase2({foo:true,bar:true,baz:"yes"}, {notso:true}, testArray))

testArray[Math.floor(Math.random() * 100)] = 'X' // will fail due to min length
testArray[Math.floor(Math.random() * 100)] = -1 // will fail due to min value
testArray[Math.floor(Math.random() * 100)] = 100 // will fail due to max value

console.log('testC = ', typeCheckCase2({name:"okay"}, {}, testArray))
