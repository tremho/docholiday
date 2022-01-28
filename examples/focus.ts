// Focus is a module used for development testing
// designed to investigate issues spotted during development
// in an isolated context


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

// one liners

let foo = 'one line foo' /* one line foo */; let bar = 'one line bar' /* one line bar */






