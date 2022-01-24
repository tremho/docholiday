// a generator function
// @yields {number} a number is generated on each next() operation
// @returns {string} Says "hello"
export function* indexGenerator(){
    var index = 0;
    while(true) {
        yield index++;
    }
    return "hello"
}

// a typescript generator function

export function* indexGeneratorTS() : Generator<number> {

    var index = 0;
    while(true) {
        yield index++;
    }
}
