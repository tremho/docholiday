

// this is as plain as it gets
// a simple JS function
// marked as public so it will appear in output
// @public
function plainJane(a, b, c) {

}

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
export function publicJane(a,b,c) {
    return ''
}

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
separatedJane(
    a,
    b,
    c
) {
    return ''
}


// assigned classic function
export const assJane = function(a,b,c) {
    return ''
}

// classic assigned function, split
export
const sassJane =
    function(
        a,
        b,
        c
    ) {
        return ''
    }

// an arrow function
export const janeArrow = (foo:string, bar:number):string /* returns a value */ => {return ''}


// an anonymous function
export const anonymous = (function (a,b,c) {})


// a generator function
export function* indexGenerator(){
    var index = 0;
    while(true) {
        yield index++;
    }
}

// a typescript generator function
export function* indexGeneratorTS() : Generator<number>/* generates numbers */ {
    var index = 0;
    while(true) {
        yield index++;
    }
}

// a typescript example
export function typescript(a:string, b:number, c:boolean) {
}
// separated typescript
export function splitscript(
    a:string,   // the a parameter
    b:number,   // the b parameter
    c:boolean   // the c parameter
): string   // A value is returned
{
    return ''
}

// example of an async function
export async function fetch(url:string /* The url to fetch */): Promise<string> /* the body of the return */ {
    return ''
}

