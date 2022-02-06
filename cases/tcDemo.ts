import {validate} from "../src/TypeCheck";


function typeCheckCase1(
    name:string, //<minLength=4, maxLength=32>
    age:number,  // <positive, integer, non-zero>
    phone: string, //<match=\\([0-9]{3}\) [0-9]{3}-[0-9]{4}>

):string
{
    let out = ''
    if(!validate(name,'minLength=4, maxLength=32')) {
        out += 'bad name '
    }
    if(!validate(age, 'positive, integer, nonzero, maxx=100')) {
        out += 'bad age '
    }
    if(!validate(phone, 'match=\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}')) {
        out +='bad phone '
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
