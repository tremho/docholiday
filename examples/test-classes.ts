
// This is a base class test
export class BaseExample {
    name:string = ''
    type:string = ''

    // Displays the values of the object
    display() {
        return `name: ${this.name}, type: ${this.type}`
    }
}

// Another base class, but it inherits from BaseExample
export class PricedExample extends BaseExample {
    price:number = 0
    unit = 'dollars'

    // Displays the values and price of the object
    display() {
        return super.display()+'\n'+ `price: ${this.price} ${this.unit}`
    }
}

// We declare a thing without a price
export class Thing1 extends BaseExample {
    name = 'Kepler'
    type = 'Dog'
}

// We declare a thing with a price
export class Thing2 extends PricedExample {
    name = 'Jove'
    type = 'Framework'
    price = 49.95
}

// We declare a working class
export class Construction {
    name?:string // name of the work
    place?:string // place of the work
    other?:any // other stuff, optional

    // creates a Construction instance
    constructor(name?:string, place?:string) {
        this.name = name
        this.place = place
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
        return 'you suck'
    }

    /**
     * A method documented in classic JSDoc style.  *
     * But we'll let the param types and return be generated
     * @param a // a number we pass in
     */
    jsdocStyleFunction(a:number):Promise<unknown> {
        return Promise.resolve()
    }
}

enum PrinterOrientation {
    Portrait,
    Landscape
}

interface PrintAction {
    print(device:string, orientation:PrinterOrientation, pages:number): boolean
}
interface SaveAction {
    save(device:string):boolean
}

// An example of implemented interfaces
export class PrintExample implements PrintAction, SaveAction {

    // Local function to print Example.
    exmpleLocal(foo:string // device if not default
    ):boolean {
        const device = foo || 'default'
        return this.save(device) && this.print(device, PrinterOrientation.Portrait, 1)
    }

    // implementation of primt
    print(device:string, orientation:PrinterOrientation, pages:number): boolean { return true }
    // implementation of save
    save(device:string):boolean { return true }
}

// Test of an assignment class
export const AssigmentClass = class {
    // we have a method
    dubious():string { return ''}
}

// Test of having an inner class
export class Container {
    // this class is a public property of Container
    public Insider = class {
        name?:string

        public foobar():void {

        }

        // declare the constructor to make it public outside of Container
        public constructor() {
            this.name = 'Insider'
        }
    }
}

// mix-in version
// other ways of declaring a class


