/*
Module for Constraint definitions and TypeCheck support
 */

/**
 * Enumeration of basic types
 * @see stringFromValueType
 * @see valueTypeFromString
 */
export enum ValueType {
    none,
    number,
    string,
    boolean,
    object,
    array,
    regex
}

/**
 * Base for all Constraint errors.
 * Defines the identifying class archetype and consistent error message prefix
 */
class ConstraintError extends Error {
    constructor() {
        super()
        this.message = 'Constraint Error: '
    }
}

/**
 * An error message for when a value fails validation.
 */
class ConstraintFail extends ConstraintError {
    constructor(failType:string, value:any) {
        super();
        this.message += `Failed ${failType}: ${value}`
    }
}

/**
 * An error for when the basic type is wrong
 */
class ConstraintBasicTypeError extends ConstraintError {
    constructor(value, expType) {
        super();
        this.message += `Incorrect type ${typeof value}, (${expType} expected) ${value}`
    }
}

/**
 * An error for when we expected null or undefined
 */
// class NullConstraintError extends ConstraintError {
//     constructor() {
//         super();
//         this.message += 'Expected NULL or undefined'
//     }
// }

/**
 * An error for when a min/max range has been violated, including what type of range.
 */
class RangeConstraintError extends ConstraintError {
    constructor(value:number, comp:number, rangeType:string = 'Number') {
        super();
        // we don't need to test both range ends, because we know we are here because of an error one way
        // or the other.
        if (value < comp) {
            this.message += `${rangeType} ${value} is less than range minimum of ${comp}`
        } else {
            this.message += `${rangeType} ${value} exceeds range maximum of ${comp}`
        }
        this.message += 'Value is outside of range'
    }
}

/**
 * An error for when an integer was expected
 */
class IntegerConstraintError extends ConstraintError {

    constructor(value) {
        super();
        if(value === undefined) {
            this.message += `Integer expected`
        } else {
            this.message += `Value ${value} is not an integer`
        }
    }
}

/**
 * An error for when a positive value was expected
 */
class PositiveConstraintError extends ConstraintError {
    constructor(value) {
        super();
        if(value === undefined) {
            this.message += `Positive value expected`
        } else {
            this.message += `Value ${value} is not positive`
        }
    }
}

/**
 * An error for when a negative value was expected
 */
class NegativeConstraintError extends ConstraintError {
    constructor(value) {
        super();
        if(value === undefined) {
            this.message += `Positive value expected`
        } else {
            this.message += `Value ${value} is not negative`
        }
    }
}

/**
 * An error for when zero was not expected.
 */
class ZeroValueConstraintError extends ConstraintError {
    constructor() {
        super();
        this.message += 'Zero is not an allowable value'
    }
}

/**
 * An error for declaring both ! and not ! variants of the same expression
 */
class ConstraintConflictError extends ConstraintError {
    constructor(conflictType) {
        super();
        this.message += `Both ${conflictType} and !${conflictType} declared`
    }
}

/**
 * Base form of TypeConstraint.
 * Defines the base type and the test method.
 */
export class TypeConstraint {
    /** The type this constraint applies to */
    public readonly type:string;
    /** a freeform note that appears in comments. No runtime verification. */
    public note?:string

    constructor(typeString:string = '') {
        this.type = typeString.trim().toLowerCase()
    }

    test(value:any):void | never  {
        if(typeof value !== this.type) {
            throw new ConstraintBasicTypeError(value, this.type)
        }
    }

    toString() {
        if(this.note) return this.note;
        return `- No Constraint`
    }
    describe() {
        if(this.note) return this.note;
        return 'No Constraint'
    }
}

// /**
//  * Enumeration of recognized status for a parameter or return constraint
//  */
// enum ConstraintStatus {
//     None = "",       // not parsed
//     NotConstraint = "NotConstraint", // doesn't start with '-', treat as description
//     Error = "Error",     // parsing error
//     NotProvided = "NotProvided", // no constraint block
//
//
// }

/**
 *  Null only applies to objects.
 */
// class NullConstraint extends TypeConstraint {
//     test(value) {
//         if(value || typeof value !== 'object') {
//             throw new NullConstraintError()
//         }
//     }
// }

/**
 * Constraints recorded on a number
 * Integer, Positive, Negative, NotZero, min, max
 */
class NumberConstraint extends TypeConstraint {
    public min?:number; // min range
    public max?:number; // max range, inclusive
    public maxx?:number; // max, exclusive
    public isInteger?:boolean = false;  // number must be an integer
    public isPositive?:boolean = false; // number must be positive
    public isNegative?:boolean = false; // number must be negative
    public notZero?:boolean = false;    // number must not be zero

    constructor() {
        super('number')
    }
    test(value) {
        super.test(value)
        if(this.isInteger) {
            if(Math.floor(value) !== value) {
                throw new IntegerConstraintError(value)
            }
        }
        if(this.notZero) {
            if(value === 0) {
                throw new ZeroValueConstraintError()
            }
        }
        if(this.isPositive && this.isNegative) {
            throw new ConstraintConflictError('positive')
        }
        if(this.isPositive) {
            if(value < 0) {
                throw new PositiveConstraintError(value)
            }
        }
        if(this.isNegative) {
            if(value < 0) {
                throw new NegativeConstraintError(value)
            }
        }
        if(this.min !== undefined) {
            if(value < this.min) {
                throw new RangeConstraintError(value, this.min)
            }
        }
        if(this.max !== undefined) {
            if(value > this.max) {
                throw new RangeConstraintError(value, this.max)
            }
        }
        if(this.maxx !== undefined) {
            if(value >= this.maxx) {
                throw new RangeConstraintError(value, this.maxx)
            }
        }
    }

    toString() {
        const keys:string[] = []
        if(this.isInteger) keys.push('Integer')
        if(this.notZero) keys.push('Not Zero')
        if(this.isPositive) keys.push('Positive')
        if(this.isNegative) keys.push('Negative')
        if(this.min !== undefined) keys.push(`Min = ${this.min}`)
        if(this.max !== undefined) keys.push(`Max = ${this.max}`)
        if(this.maxx !== undefined) keys.push(`Maxx = ${this.maxx}`)
        if(this.note) keys.push(this.note)
        return keys.length ? '- '+keys.join(',') : super.toString()
    }
    describe(): string {
        const keys:string[] = []
        if(this.isInteger) keys.push('number must be an integer')
        if(this.notZero) keys.push('number must not be zero')
        if(this.isPositive) keys.push('number must be positive')
        if(this.isNegative) keys.push('number must be negative')
        if(this.min !== undefined) keys.push(`Minimum value is ${this.min}`)
        if(this.max !== undefined) keys.push(`Maximum value is ${this.max}`)
        if(this.maxx !== undefined) keys.push(`Maximum value is less than ${this.maxx}`)
        if(this.note) keys.push(this.note)
        return keys.length ? keys.join('\n') : super.describe()

    }

}

/**
 * Constraints recorded on a string
 * minLength, maxLength, (!)startsWith, (!)endsWith, (!)contains, (!)match
 */
class StringConstraint extends TypeConstraint {
    public minLength?: number; // minimum length of allowed string
    public maxLength?: number; // maximum length of allowed string
    public startsWith?: string; // string must start with this substring
    public notStartsWith?: string; // string must not start with this substring
    public endsWith?: string; // string must end with this substring
    public notEndsWith?: string; // string must not end with this substring
    public contains?:string; // string contains this substring
    public notContains?:string; // string does not contain this substring
    public match?:string; // regular expression (as string) that must be matched
    public notMatch?:string; // regular expression (as string) that must not be matched

    constructor() {
        super('string')
    }
    test(value) {
        super.test(value)
        if(this.minLength) {
            if(value.length < this.minLength) {
                throw new RangeConstraintError(value.length, this.minLength, 'String Length')
            }
        }
        if(this.maxLength) {
            if(value.length > this.maxLength) {
                throw new RangeConstraintError(value.length, this.maxLength, 'String Length')
            }
        }
        if(this.startsWith && this.notStartsWith) {
            throw new ConstraintConflictError('startsWith')
        }
        if(this.startsWith || this.notStartsWith) {
            let comp = this.startsWith || this.notStartsWith || ''
            let not = !!this.notStartsWith
            if(value.substring(0, comp.length) === comp) {
                if(not) throw new ConstraintFail('!startsWith', value)
            } else {
                if(!not) throw new ConstraintFail('startsWith', value)
            }
        }
        if(this.endsWith && this.notEndsWith) {
            throw new ConstraintConflictError('endsWith')
        }
        if(this.endsWith || this.notEndsWith) {
            let comp = this.endsWith || this.notEndsWith || ''
            let not = !!this.notEndsWith
            if(value.substring(value.length - comp.length) === comp) {
                if(not) throw new ConstraintFail('!endsWith', value)
            } else {
                if(!not) throw new ConstraintFail('endsWith', value)
            }
        }
        if(this.contains && this.notContains) {
            throw new ConstraintConflictError('contains')
        }
        if(this.contains || this.notContains) {
            let comp = this.contains || this.notContains
            let not = !!this.notContains
            if(value.indexOf(comp) !== -1) {
                if(not) throw new ConstraintFail('!contains', value)
            } else {
                if(!not) throw new ConstraintFail('contains', value)
            }
        }
        if(this.match && this.notMatch) {
            throw new ConstraintConflictError('match')
        }
        if(this.match || this.notMatch) {
            let comp = this.match || this.notMatch
            let not = !!this.notMatch
            let re = new RegExp(comp || '')
            if( re.test(value) ) {
                if(not) throw new ConstraintFail('!match', value)
            } else {
                if(!not) throw new ConstraintFail('match', value)
            }
        }
    }
    toString() {
        const keys:string[] = []
        if(this.minLength) keys.push(`Min Length = ${this.minLength}`)
        if(this.maxLength) keys.push(`Max Length = ${this.maxLength}`)
        if(this.startsWith) keys.push(`Starts With = ${this.startsWith}`)
        if(this.notStartsWith) keys.push(`!StartsWith = ${this.startsWith}`)
        if(this.endsWith) keys.push(`Ends With = ${this.endsWith}`)
        if(this.notEndsWith) keys.push(`!EndsWith = ${this.endsWith}`)
        if(this.contains) keys.push(`Contains = ${this.contains}`)
        if(this.notContains) keys.push(`!Contains = ${this.notContains}`)
        if(this.match) keys.push(`Match = ${this.match}`)
        if(this.notMatch) keys.push(`!Match = ${this.notMatch}`)
        if(this.note) keys.push(this.note)
        return keys.length ? '- '+keys.join(',') : super.toString()
    }
    describe() {
        const keys:string[] = []
        if(this.minLength) keys.push(`string must be at least ${this.minLength} characters long`)
        if(this.maxLength) keys.push(`string must consist of less than ${this.maxLength} characters`)
        if(this.startsWith) keys.push(`string must start with "${this.startsWith}"`)
        if(this.notStartsWith) keys.push(`string must NOT start with "${this.startsWith}"`)
        if(this.endsWith) keys.push(`string must end with "${this.endsWith}"`)
        if(this.notEndsWith) keys.push(`string must NOT end with "${this.endsWith}"`)
        if(this.contains) keys.push(`must contain substring "${this.contains}"`)
        if(this.notContains) keys.push(`must NOT contain substring "${this.notContains}"`)
        if(this.match) keys.push(`must match Regular Expression "${this.match}"`)
        if(this.notMatch) keys.push(`must NOT match RegExp "${this.notMatch}"`)
        if(this.note) keys.push(this.note)
        return keys.length ? keys.join('\n') : super.describe()
    }

}

/**
 * Constraints recorded on an object
 * (!)empty, (!)hasProperties, notNested, noPrototype, canSerialize, noUndefinedProps
 */
class ObjectConstraint extends TypeConstraint {
    public empty?:boolean; // object must have no properties
    public notEmpty?:boolean; // object must have some properties
    public hasProperties?:string[] // object must have these specific properties defined
    public notHasProperties?:string[] // object must note have these specific properties defined
    public notNested?:boolean // object must not contain object members (arrays are okay)
    public noPrototype?:boolean // object must not have a prototype other than Object.
    public canSerialize?:boolean // object must survive standard js (structured clone) serialization (i.e. stringify w/o error)
    public noFalseyProps?:boolean // all property values must evaluate at truthy
    public noTruthyProps?:boolean // all property values must evaluate as falsey
    public instanceOf?:string // object must pass the instanceof test on this value

    constructor() {
        super('object')
    }
    test(value) {
        super.test(value)
    }
    toString() {
        const keys:string[] = []
        if(this.empty) keys.push(`Empty`)
        if(this.notEmpty) keys.push(`!Empty`)
        if(this.hasProperties) keys.push(`Has Properties =${this.hasProperties.join(',')}`)
        if(this.notHasProperties) keys.push(`!Has Properties =${this.notHasProperties}`)
        if(this.notNested) keys.push(`Not Nested`)
        if(this.noPrototype) keys.push(`No Prototype`)
        if(this.canSerialize) keys.push(`Can Serialize`)
        if(this.noFalseyProps) keys.push(`No Falsey Props`)
        if(this.noTruthyProps) keys.push(`No Truthy Props`)
        if(this.instanceOf) keys.push(`Instance Of = ${this.instanceOf}`)
        if(this.note) keys.push(this.note)
        return keys.length ? '- '+keys.join(',') : super.toString()
    }
    describe() {
        const keys:string[] = []
        if(this.empty) keys.push(`object must be empty`)
        if(this.notEmpty) keys.push(`object must not be empty`)
        if(this.hasProperties) keys.push(`object must contain properties "${this.hasProperties.join(',')}"`)
        if(this.notHasProperties) keys.push(`object must not contain properties "${this.notHasProperties.join(',')}"`)
        if(this.notNested) keys.push(`object must not contain nested objects`)
        if(this.noPrototype) keys.push(`object must not derive from a prototype`)
        if(this.canSerialize) keys.push(`object can be serialized`)
        if(this.noFalseyProps) keys.push(`object can contain no properties that evaluate as false`)
        if(this.noTruthyProps) keys.push(`object can contain no properties that evaluate as true`)
        if(this.instanceOf) keys.push(`object must be an instance of "${this.instanceOf}"`)
        if(this.note) keys.push(this.note)
        return keys.length ? keys.join('\n') : super.describe()
    }

}

/**
 * Enumeration of checkType parsed results
 * parameters (p1, p2) are parsed at same time, and meaning does vary per checkType.
 */
export enum ElementCheckType {
    none,   // don't test the elements
    all,    // test all the elements
    random, // test up to a given number (p1) of elements, randomly chosen
    step,   // test every (p1) elements
    firstThenStep, // test all up to (p1) elements, then every (p2) thereafter
    firstThenRandom// test all up to (p1) elements, then up to (p2) of the remaining, chosen at random
}

/**
 * Constraints recorded on an array
 * minLength, maxLength, (!)contains, checkType, each
 */
class ArrayConstraint extends TypeConstraint {
    public minLength?: number; // minimum array length
    public maxLength?: number; // maximum array length
    public contains?: any; // at least one element must be of this value
    public notContains?: any // no elements can be of this value
    public elementConstraints: TypeConstraint[] // elements are tested for compliance under these rules
    public elementCheckType: ElementCheckType // defines the extent of runtime coverage on elements
    public elementCheckParameter: number; // defined by elementCheckType
    public elementCheckParameter2: number; // defined by elementCheckType
    constructor() {
        super('array')
    }
    test(value) {
        if(!Array.isArray(value)) {
            throw new ConstraintBasicTypeError(value,'array')
        }
    }
    toString() {
        const keys:string[] = []
        if(this.minLength) keys.push(`Min Length = ${this.minLength}`)
        if(this.maxLength) keys.push(`Max Length = ${this.maxLength}`)
        if(this.contains) keys.push(`Contains = ${this.contains}`)
        if(this.notContains) keys.push(`!Contains = ${this.notContains}`)
        if(this.elementConstraints && this.elementConstraints.length) keys.push(`Each = ${this.elementConstraints}`)
        if(this.elementCheckType) keys.push(`Check Type = ${checkTypeToString(this.elementCheckType, this.elementCheckParameter, this.elementCheckParameter2)}`)
        if(this.elementConstraints) keys.push(`Each = ${this.elementConstraints.toString().substring(2).replace(/,/g, ',')}`)
        if(this.note) keys.push(this.note)
        return keys.length ? '- '+keys.join(',') : super.toString()
    }
    describe() {
        const keys:string[] = []
        if(this.minLength) keys.push(`array must contain at least ${this.minLength} elements`)
        if(this.maxLength) keys.push(`array must contain no more than ${this.maxLength} elements`)
        if(this.contains) keys.push(`array must contain element value "${this.contains}"`)
        if(this.notContains) keys.push(`array must not contain an element value "${this.notContains}"`)
        if(this.elementConstraints && this.elementConstraints.length) keys.push(`each element of the array has the following constraints: "${this.elementConstraints.toString().substring(2).replace(/,/g, ',')}`)
        if(this.elementCheckType) keys.push(`(elements will be tested using the ${checkTypeToString(this.elementCheckType)} method)`)
        if(this.note) keys.push(this.note)
        return keys.length ? keys.join('\n') : super.describe()
    }
}

/**
 * Translates a type string (number, string, boolean, object, array, regex) into the corresponding ValueType enum
 * Note that strings beside none, array, and regex are synonymous with the `typeof` operator value
 * @param str
 */
export function valueTypeFromString(str:string): ValueType {

    switch(str.trim().toLowerCase()) {
        default: return str.trim().length ? str.indexOf('[]') !== -1 ? ValueType.array : ValueType.object : ValueType.none;
        case 'number': return ValueType.number;
        case 'string': return ValueType.string;
        case 'boolean': return ValueType.boolean;
        case 'object': return ValueType.object;
        case 'array': return ValueType.array;
        case 'regex': return ValueType.regex;
        case 'regexp': return ValueType.regex;
    }
}

/**
 * Translates a ValueType enum value into the corresponding string.
 * Note that strings beside none, array, and regex are synonymous with the `typeof` operator value
 * @param vt
 */
export function stringFromValueType(vt:ValueType): string {

    switch(vt) {
        case ValueType.none: return ''
        case ValueType.number: return 'number'
        case ValueType.string: return 'string'
        case ValueType.boolean: return 'boolean'
        case ValueType.object: return 'object'
        case ValueType.array: return 'array'
        case ValueType.regex: return 'regex'
    }
}

/**
 * Read either a value or a list from a the right-side string parsed from an assignment expression.
 * N.B.:  Quotes will be stripped, but note that the first parsing split that called us here does not respect the quotes, // todo
 * so unexpected results may occur.
 * @param str
 */
function constraintListParse(str = '') {
    str.trim()
    if(str.charAt(0) === '"' || str.charAt(0) === "'") {
        str = str.substring(1, str.length-1)
    }
    if(str.indexOf('|') !== -1) {
        return str.split(',') // return the split array
    }
    if (isFinite(Number(str))) {
        return Number(str)
    }
    return str; // return the unquoted string value
}


/**
 * Parse out the checkType and return the resulting type name and the parsed parameters in a structure.
 * @param ctStr
 * @return {{string}name,{number}[p1],{number}[p2]}
 */
function parseCheckType(ctStr:string): {name:string, p1?:number, p2?:number} {
    let opi = ctStr.indexOf('(')
    if(opi === -1) opi = ctStr.length
    let name = ctStr.substring(0,opi)
    let cpi = ctStr.indexOf(')', opi)
    if(cpi === -1) cpi = ctStr.length;
    let p = ctStr.substring(opi+1, cpi).split(',')
    let p1, p2;
    try {
        p1 = p[0] && parseInt(p[0])
        p2 = p[1] && parseInt(p[1])
    } catch(e) {}
    return {name, p1, p2}
}

function checkTypeToString(ct:ElementCheckType, p1?:number|string, p2?:number|string) {
    switch(ct) {
        case ElementCheckType.random:
            return `random(${p1})`
        case ElementCheckType.step:
            return `step(${p1})`
        case ElementCheckType.firstThenStep:
            return `firstThenStep(${p1},${p2})`
        case ElementCheckType.firstThenRandom:
            return `firstThenRandom(${p1},${p2})`
        case ElementCheckType.none:
            return 'none'
        default:
        case ElementCheckType.all:
            return 'all'
    }
}
function checkTypeFromString(ctstr:string) : ElementCheckType {
    switch(ctstr.trim().toLowerCase()) {
        case 'random': return ElementCheckType.random;
        case 'step': return ElementCheckType.step;
        case 'firstthenstep': return ElementCheckType.firstThenStep;
        case 'firstthenrandom': return ElementCheckType.firstThenRandom;
        case 'none': return ElementCheckType.none
        default:
        case 'all': return ElementCheckType.all
    }
}

// parse constraints from what may be more than one type (e.g. string|number)
export function parseConstraintsToMap(typeString:string, blockSet:string= ''): Map<string, TypeConstraint> {
    let map = new Map<string, TypeConstraint>()
    let types = typeString.split('|')
    let blocks = blockSet.split(',')
    for(let type of types) {
        type = (type||'').trim()
        let constraint = parseConstraints(type, blockSet) || new TypeConstraint()
        map.set(type, constraint)
    }
    return map
}

/**
 * Given a block of text, parse as constraints and return the set if this is a constraint declaration
 * otherwise, return ConstraintStatus.NotConstraint  to signify this is a description block and not a constraint declaration
 * @param block - the block of text to evaluate
 * @param type - the type parsed from the param or return declaration
 */
export function parseConstraints(type, block):TypeConstraint | undefined {

    let constraint;
    if(!block || !type) return;
    let valueType = valueTypeFromString(type)
    let cblock = block.trim()
    // get any constraint parameters
    let fpi = cblock.indexOf(('('))
    if(fpi !== -1) {
        let cpi = cblock.indexOf(')', fpi)
        if(cpi === -1) cpi = cblock.length;
        let swap = cblock.substring(fpi, cpi).replace(/,/g, ';;')
        cblock = cblock.substring(0,fpi) + swap + cblock.substring(cpi)
    }

    const expressions = cblock .split(',')
    expressions.forEach(expr => {
        let expVal;
        let not = false;
        expr = expr.trim()
        if(expr.charAt(0) === '!') {
            not = true;
            expr = expr.substring(1)
        }
        if(expr.indexOf('=') !== -1) {
            let p = expr.split('=')
            if(p.length > 2) {
                p[1] = p.slice(1).join('=')
            }
            expr = p[0]
            expVal = constraintListParse(p[1].replace(/;;/g, ',')) // fix hack

        }
        expr = expr.trim().toLowerCase()
        switch (valueType) {
            case ValueType.number:
                constraint = constraint || new NumberConstraint()
                switch(expr) {
                    case 'noconstraint':
                    case 'no constraint':
                        return constraint; // early exit if we encounter "- No Constraint"

                    /* Integer, Positive, Negative, NotZero, min, max */
                    case 'integer':
                        constraint.isInteger = true;
                        break;
                    case 'positive':
                        constraint.isPositive = true;
                        break;
                    case 'negative':
                        constraint.isNegative = true;
                        break;
                    case 'notzero':
                    case 'not zero':
                    case 'nonzero':
                        constraint.notZero = true;
                        break;
                    case 'min':
                        constraint.min = expVal;
                        break;
                    case 'max':
                        constraint.max = expVal;
                        break;
                    case 'maxx':
                        constraint.maxx = expVal;
                        break;
                }

                break;
            case ValueType.string:
                // minLength, maxLength, (!)startsWith, (!)endsWith, (!)contains,  (!)match
                constraint = constraint || new StringConstraint()
                switch(expr) {
                    case 'noconstraint':
                    case 'no constraint':
                        return constraint; // early exit if we encounter "- No Constraint"

                    case 'note':
                        constraint.note = expVal
                        break;

                    case 'minlength':
                        constraint.minLength = expVal
                        break;
                    case 'maxlength':
                        constraint.maxLength = expVal
                        break;
                    case 'startswith':
                        not ? constraint.notStartsWith = expVal : constraint.startsWith = expVal
                        break;
                    case 'endswith':
                        not ? constraint.notEndsWith = expVal : constraint.endsWith = expVal
                        break;
                    case 'contains':
                        not ? constraint.notContains = expVal : constraint.contains = expVal
                        break;
                    case 'match':
                        not ? constraint.notMatch = expVal : constraint.match = expVal
                        break;
                }
                break;
            case ValueType.object:
                //(!)empty, (!)hasProperties, notNested, noPrototype, canSerialize, noUndefinedProps
                constraint = constraint || new ObjectConstraint()
                switch(expr) {
                    case 'noconstraint':
                    case 'no constraint':
                        return constraint; // early exit if we encounter "- No Constraint"

                    case 'empty':
                        constraint.empty = !not;
                        constraint.notEmpty = not;
                        break;
                    case 'hasproperties':
                    case 'has properties':
                        not ? constraint.notHasProperties = expVal : constraint.hasProperties = expVal;
                        break;
                    case 'notnested':
                    case 'not nested':
                        constraint.notNested = true;
                        break;
                    case 'noprototype':
                    case 'no prototype':
                        constraint.noPrototype = true;
                        break;
                    case 'canserialize':
                    case 'can serialize':
                        constraint.canSerialize = true;
                        break;
                    case 'notruthyprops':
                    case 'no truthy props':
                        constraint.noTruthyProps = true;
                        break;
                    case 'nofalseyprops':
                    case 'no falsey props':
                        constraint.noFalseyProps = true;
                        break;
                    case 'instanceof':
                    case 'instance of':
                        constraint.instanceOf = expVal
                        break;

                }
                break;
            case ValueType.array:
                // minLength, maxLength, (!)contains, each:
                constraint = constraint || new ArrayConstraint()
                switch(expr) {
                    case 'noconstraint':
                    case 'no constraint':
                        return constraint; // early exit if we encounter "- No Constraint"

                    case 'minlength':
                    case 'min length':
                        constraint.minLength = expVal;
                        break;
                    case 'maxlength':
                    case 'max length':
                        constraint.maxLength = expVal;
                        break;
                    case 'contains':
                        not ? constraint.notContains = expVal : constraint.contains = expVal
                        break;
                    case 'checktype':
                    case 'check type':
                        const pct = parseCheckType(expVal)
                        constraint.elementCheckType = checkTypeFromString(pct.name)
                        constraint.elementCheckParameter = pct.p1
                        constraint.elementCheckParameter2 = pct.p2
                        break;
                    case 'each':
                        let type = expVal[0]
                        let eCons = parseConstraints(type, '- '+ expVal.slice(1).join(','))
                        constraint.elementConstraints = eCons;
                        break;
                }
                break;
            default: // none, boolean, regex
                if(expr === 'no constraint') return;
                constraint = constraint || new TypeConstraint(stringFromValueType(valueType))
                break;
        }
    })
    return constraint || undefined

}

/**
 * Simple test to see if a value adheres to a set of constraints
 */
export function validate(

    value:any, // The value to test for constraints. Must be one of the basic types supported by contraints
    constraintString:string // the constraints to test it against. Constraints listed must match the type being tested. Do not include < > brackets.

):boolean // returns true if value passes all constraint tests.
{
    let tc = parseConstraints(typeof value, constraintString || '')
    let ok:boolean = true
    try {
        if(tc) tc.test(value)
    } catch(e) {
        ok = false
    }
    return ok

}

