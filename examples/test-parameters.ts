
/* Various modes of parameter declaration */
import {FooBar} from "./foobar";

//  name only, any type
export function one(a,b,c) {
}

//  name only with comments
export function two(a, /* inline */
                    b, /* sidebar, multiple
                          lines and verbose
                       */
                    c // sidebar single-line
) {
}

//  name:type (typescript)
export function three(a:string, b:number, c:FooBar) {
}

//  name:type with comment
export function four(a:string, // Comment one
                    b, // Comment two
                    c // Comment three
) {
}

//  name:{foo:string, bar:number} (ad-hoc type)
export function five(a:{foo:string, // something to say about foo
                        bar:number},  // belly up to the bar
                     b:number, c:FooBar) {
}

//  name:{foo:string, bar:number} (ad-hoc type) with comment
export function six(a:{foo:string, bar:number}, // an ad-hoc type
                     b:number, // yes, this is a number
                     c:FooBar // what would we do without FooBar?
) {
}


