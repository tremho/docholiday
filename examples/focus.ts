

export class PropExplorer {
    name = 'Kepler' // this is our dog
    type = 'Dog'    // he has skin issues
    age = 10       // but he is getting up there
    readonly foobar = 'FOOBAR'

    // We'll throw a constructor test in here, too.
    constructor(name?:string /* A name, if we want */, type?:string /* A type, if we want */) {
        if(name) this.name = name
        if(type) this.type = type
    }

}

    //
    // // this is a test
    // // of comments that are not left-flush
    //
    //
    //
    // // a function
    // import {BaseExample} from "./test-classes";
    //
    // export function foo() {}
    //
    // // a function with params
    // export function bar(a, b, c) {}
    //
    // // a param-split function
    // export function pSplitFunc(
    //     a:string, // first parameter
    //     b:string, // second parameter
    //     c:number // last parameter
    // ) {}
    //
    // // a param-split function with trailing comma
    // export function pSplitFuncComma(
    //     a:string, // first parameter
    //     b:string, // second parameter
    //     c:number, // last parameter
    // ) {}
    //
    //
    // // a property
    // export const label = "FOOBAR"
    //
    // // a class
    // export class Klassy {
    //     // A property in the class
    //     name = 'yowsa'
    //     // Another property
    //     second = 'second'
    //
    //     // This constructs a Klassy instance
    //     constructor() {}
    //
    //     // Split method param list test
    //     paramSplit(
    //             a:string, // first parameter
    //             b:string, // second parameter
    //             c:number // last parameter
    //     ) {}
    //
    //     // Split method param list test with comma
    //     paramSplitComma(
    //         a:string, // first parameter
    //         b:string, // second parameter
    //         c:number, // last parameter
    //     ) {}
    //
    // }
    //
    // // This is a base class test
    // export class BaseExample {
    //     name:string = ''
    //     type:string = ''
    //
    //     // Displays the values of the object
    //     display() {
    //         return `name: ${this.name}, type: ${this.type}`
    //     }
    // }
    //
    // // We declare a thing without a price
    // export class Thing1 extends BaseExample {
    //     name:string = 'Kepler'
    //     type:string = 'Dog'
    //
    //     // documentation for Thing1 constructor
    //     constructor(name?:string, type?:string) {
    //         super()
    //         if(name) this.name = name
    //         if(type) this.type = type
    //     }
    // }
