
/* Various modes of parameter declaration */
import {FooBar} from "./foobar";

//  name only, any type
export function one(a,b,c) {
}

//  name only with comments
export function two(a /* inline */,
                    b, /* sidebar, multiple
                          lines and verbose
                       */
                    c // sidebar single-line
) {
}

//  name:type (typescript)
export function three(a:string,b:number,c:FooBar) {
}

//  name:type with comment
export function four(a:string, // Comment one
                    b, // Comment two
                    c // Comment three
) {
}

//  ad-hoc object parameters
export function five(a: {foo:string, bar:number}, b:number, c:FooBar) {
}

//  ad-hoc object parameters, with comments
export function six(a: {
                         foo:string, // something to say about foo
                         bar:number  // belly up to the bar
                     }, /*
                        The a object holds properties that
                        are used for some reasan,
                        and we can document them.
                        */
                     b:number, // and we document the other parameters, too
                    c:FooBar // including good old FooBar
) {
}

// //  Nested a-hoc objects -- Big fail
// export function bugCase(a:{
//                         foo:string, // foo is a string trio
//                         crazy: {
//                             one: number // on is the lonliest number
//                             two: number // can be as bad as one
//                         }
//                         bar:string // a lonely bar
//                     }, // an ad-hoc type
//                     b:number, // yes, this is a number
//                     c:FooBar // what would we do without FooBar?
// ) {
// }


