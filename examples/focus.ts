/* Some verifications
- [X] verify that unrecognized constraint keyword results in 'unrecognized constraint' in doc
- [X] verify use of <list> with comma delimeters in contraints (e.g. object hasProperties)
- [-] verify array processing, especially 'each'

- [X] only first < > block is realized

- [X] added first, last, firstThenLast, notInstanceOf

*/

export function verification(
    param1:number, // unrecognized constraint <nonzero, integer, notzero, kepler, min=4, maxx=10> <positive>
    param2:object, // check list <!hasProperties(foo,bar,baz), !empty, instanceOf="Foobar">
    param3:string, // check = assigns <minLength=4, maxLength=10>
    param4:string[], // <checkType=firstThenlast(100, 100), each(string,minLength=8, endsWith=".png"|number,integer,nonzero)>
) {

}

export function noteworthy(
    param1:number, // <note("note  is okay")>
    param2:string, // <note(note okay)>
    param3:string[], // <note("note okay")>
    param4:object, // <note(note okay)>
    param5 // <note(note okay)>
){

}