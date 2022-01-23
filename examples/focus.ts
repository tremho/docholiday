//  name:{foo:string, bar:number} (ad-hoc type)
import {FooBar} from "./foobar";


export function sanity(a:string, b:number, c:FooBar) {}

export function five(a:{foo:string, bar:number}, b:number, c:FooBar) {
}

//  name:{foo:string, bar:number} (ad-hoc type) with comment
export function six(a:{
                        foo:string, // foo is a string trio
                        bar:number // bar is the loneliest number
                    }, // an ad-hoc type
                    b:number, // yes, this is a number
                    c:FooBar // what would we do without FooBar?
) {
}
