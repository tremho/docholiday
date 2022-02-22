// doc checks


// The Foo class demonstrates
// how a simple class is documented
export class Foo {
    name:string
    readonly seed:string = "aklafg783yd8jccide-dkhei7s"

    // This class is scoped within the Foo class
    InnerClass = class {
        prop1:string // a property of InnerClass
        prop2:number // another InnerClass property

        // a method of InnerClass
        method() {
        }
    }

    // Compute the sequence over the given time
    compute(
        time:number // number of seconds <positive, integer>
    ): number {
        // blah blah
        return 0
    }
}