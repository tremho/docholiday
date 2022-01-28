

// this is as plain as it gets
// a simple JS function
// marked as public so it will appear in output
// @public
function plainJaneSC(a, b, c) {

};

/**
 * This is the same as plainJane, but
 * in this case we are exporting it from the module
 * and using a JSDoc form comment block
 * @param a
 * @param b
 * @param c
 *
 * @return {string} something is output
 */
export function publicJaneSC(a,b,c) {
    return ''
};

/**
 * All keywords are separated
 * @param a
 * @param b
 * @param c
 *
 * @return {string} something is output
 */
export
function
separatedJaneSC(
    a,
    b,
    c
) {
    return ''
};


// assigned classic function
export const assJane = function(a,b,c) {
    return ''
};

// classic assigned function, split
export
const sassJaneSC =
    function(
        a,
        b,
        c
    ) {
        return ''
    };

// an arrow function
export const janeArrowSC = (foo:string, bar:number):string /* returns a value */ => {return ''};


// an anonymous function
export const anonymousSC = (function (a,b,c) {});


// a generator function
// @yields {number} each call to next() returns the successive number
export function* indexGeneratorSC(){
    var index = 0;
    while(true) {
        yield index++;
    }
};

// a typescript generator function
export function* indexGeneratorTSSC() : Generator<number>/* generates numbers */ {
    var index = 0;
    while(true) {
        yield index++;
    }
};

// a typescript example
export function typescriptSC(a:string, b:number, c:boolean) {
};

// separated typescript, including separated semicolon
export function splitscriptSC(
    a:string,   // the a parameter
    b:number,   // the b parameter
    c:boolean   // the c parameter
): string   // A value is returned
{
    return ''
}
;

// example of an async function
export async function fetchSC(url:string /* The url to fetch */): Promise<string> /* the body of the return */ {
    return ''
};

// void functions do not document a return type
export function simpleVoidSC() {};

// typescript void functions do not document a return type
export function simpleVoidTSSC():void {};

// typescript with documented void return
export function docVoidSC():void { // a void return
};

// javascript post-dec comments also documented as return type
export function jsVoidSC() // nothing to see here
{};



/* Two variables are declared on the same line, separated by semicolons */
let oneLineFoo = 'one line foo' /* one line foo */; let oneLineBar = 'one line bar' /* one line bar */



// This is a base class test
export class BaseExampleSC {
    name:string = '';
    type:string = '';

    // Displays the values of the object
    display() {
        return `name: ${this.name}, type: ${this.type}`;
    };
}

// Another base class, but it inherits from BaseExample
export class PricedExampleSC extends BaseExampleSC {
    price:number = 0;
    unit = 'dollars';

    // Displays the values and price of the object
    display() {
        return super.display()+'\n'+ `price: ${this.price} ${this.unit}`;
    }
}

// We declare a thing without a price
export class Thing1SC extends BaseExampleSC {
    name = 'Kepler';
    type = 'Dog';
}

// We declare a thing with a price
export class Thing2SC extends PricedExampleSC {
    name = 'Jove';
    type = 'Framework';
    price = 49.95;
}

// We declare a working class
export class ConstructionSC {
    name?:string; // name of the work
    place?:string; // place of the work
    other?:any; // other stuff, optional

    // creates a Construction instance
    constructor(name?:string, place?:string) {
        this.name = name;
        this.place = place;
    }

    // Plans the construction
    plan() {

    }

    // generates the next milestone
    * milestone() {

    }

    // complete building
    finish(timeSpent:number,    // hours of actual work
           timeEstimated:number, // hours estimated at start
           notes:string    // notes about the work
    ) : string // returns a report
    {
        return 'you suck';
    }

    /**
     * A method documented in classic JSDoc style.  *
     * But we'll let the param types and return be generated
     * @param a // a number we pass in
     */
    jsdocStyleFunction(a:number):Promise<unknown> {
        return Promise.resolve();
    }
}

enum PrinterOrientationSC {
    Portrait,
    Landscape
}

interface PrintActionSC {
    print(device:string, orientation:PrinterOrientationSC, pages:number): boolean;
}
interface SaveActionSC {
    save(device:string):boolean;
}

// An example of implemented interfaces
export class PrintExampleSC implements PrintActionSC, SaveActionSC {

    // Local function to print Example.
    exmpleLocal(foo:string // device if not default
    ):boolean {
        const device = foo || 'default';
        return this.save(device) && this.print(device, PrinterOrientationSC.Portrait, 1);
    }

    // implementation of primt
    print(device:string, orientation:PrinterOrientationSC, pages:number): boolean { return true; }
    // implementation of save
    save(device:string):boolean { return true; }
}

// Test of an assignment class
export const AssigmentClassSC = class {
    // we have a method
    dubious():string { return '';}
}

// Test of having an inner class
export class ContainerSC {
    // this class is a public property of Container
    public static InsiderSC = class {
        name?:string; // a name property

        // Everyone needs a foobar function
        public foobar():void {

        }

        // construct an Insider with `new Container.Insider()`
        public constructor() {
            this.name = 'Insider';
        }
    }
}

// Explore class properties
export class PropExplorerSC {
    name = 'no type provided';
    value = 10; // no type provided here either
    commented = 'no type provided'; // but I have a comment about it

    unassigned:string;
    novalue:number ;     // also unassigned

    anything:any ;   // unassigned any

    justMe; // undeclared and unassigned
    noComment;

    private mysecret:string = 'adkf98adf';

    static readonly Label:string = 'Foobar';

    static readonly InnerClass = class {

        // a chance to comment the inner constructor
        constructor() {

        }

        // say hi
        hello(a: string, b: number) {
        }

        // fetch a number
        static async getNumber(): Promise<number> // resolves to the magic value
        {
            return 123;
        }
    }
}


