/**
 * Topic Documentation for Constraint declarations
 *
 * A protocol for utilizing and extending JSDoc comment syntax to declare parameters and return values
 * with their runtime constraints as well as their types.
 *
 * Declare parameters in traditional JSDoc style:
 *  ```
 *      @param {type} name  Description
 *  ```
 *  N.B. that reversing the order of {type} and name are allowed here, but that is not canonical JSDoc style.
 *  Also supported (and also canonical) is the use of [ ] brackets around the name to declare an optional parameter.
 *  e.g. ` @param {string} [foobar]  The foobar parameter is not required `
 *
 * Descriptions may be on the same, line, or may start or continue on the lines below up until the next @param or other
 * statement or end of comment block:
 * ```
 *      @param {type} [name]
 *      The description can go here as well as on the line above, or it can continue the line above if there is one.
 *      The description can run multiple lines, and if JSDoc is configured for it, can support *markdown* syntax, as
 *      well as inline html.
 *```
 * #### Introducing Constraints
 *
 * Constraints are a formatted set of expressions that may either precede or follow the description, either starting
 * on the first line or the line below.
 * Constraint expressions start with a dash '-' character to distinguish them from the description comments and end
 * with the next newline.
 * The full constraint expression must be contained on the line it starts on.
 * e.g.```
 *      @param {number} ordinal  The ordinal value of this thing
 *      - Integer,Positive,NotZero
 * ```
 * The example declares a parameter with conventional JSDoc style, but also provides constraint keywords that
 * will apply to this numeric type of value that specify the acceptable characteristics of that value.
 *
 * Syntactically, the order of description and constraint do not matter, so this is equivalent to the above:
 * ```
 *      @param ordinal {number} - Integer,Positive,NotZero
 *      The ordinal value of this thing
 * ```
 * The output documentation may vary, between these style, however,
 * as the JSDoc renderer is unaware of the role of Constraint declarations themselves.
 *
 * Note that all the above syntax, including constraints, also applies to the JSDoc `@return` (or `@returns`) statement,
 * with the only difference being that the return value does not specify a name.
 *
 * #### Multiple type constraints
 * if there are multiple types (e.g. {string|number}) then the corresponding multiple constraint declarations may
 * be given separated by " | ".  Each declaration must start with '-'
 * Note the spaces on either side of the | is required as some constraint expressions may use the | character as an
 * item delimiter as well.
 * example:
 * `@param {string|number} foo - minLength=3 | - Integer, min=100, max=999
 *
 * #### Constraint keywords and syntax
 * - Some keywords accept a value parameter, such as `min=5` or `endsWith = .png`
 * - Values may be quoted or not, but must not contain a comma or a | delimiter within the value itself, regardless of quoting.  // todo
 * but others are implicitly boolean, such as `Integer` or `NotZero` and take no assignment.
 * - Some keywords have a 'not' complement that is noted by a preceding ! character.  For example,
 * `contains` and `!contains` both accept a value that is either required to exist or to not exist, depending upon
 * the presence or absence of the ! prefix.
 * - A few keywords accept a list of values.  Such values are given using the | character as a delimiter, as in
 * `|one|two|three|four`. Take care when using with multiple type and mind spacing, as noted under *Multiple type constraints*
 * - Each keyword in the declaration is separated by the comma (,) character.
 *
 * - Specifying conflicting or redundant constraints (e.g. `startsWith = "ab"` and `!startsWith="cd") will result
 * in and error.
 *
 * - Unrecognized keywords or improper expression syntax will result in an error
 *
 * ##### constraints for `number`
 *
 * - `Integer` - If specified, number must be an integer.  If not specified, floating point values are allowed.
 * - `Float ` -  Optional, ignored. Same as default.
 * - `Positive` - If specified, number must be positive (not less than zero).
 * - `Negative` - If specified, number must be negative (less than zero).
 * - `NotZero`  - If specified, number must not be zero.
 * - `min=<val>` - Specifies the minimum allowed value (inclusive)
 * - `max=<val>` - Specifies the maximum allowed value (inclusive) (e.g. integer, min=0, max=9)
 * - 'maxx=<val>` - Specifies the first exclusive value outside the maximum. (e.g. float, min=0, maxx=10)
 *
 * ##### constraints for `string`

 * - `minLength=<val>` - Specifies the minimum length of this string
 * - `maxLength=<val>` - Specifies the maximum string length
 * - `[!]startsWith=<val>` - value defines prefix that string must start with (or must NOT start with if ! prefix used)
 * - `[!]endsWith=<val>` - value defines suffix that string must end with (or must NOT end with if ! prefix used)
 * - `[!]contains=<val>` - value defines substring that string must contain (or must NOT contain if ! prefix used)
 * - `[!]match=<val>` - value defines regular expression that string must match (or must NOT match if ! prefix used)
 *
 * ##### constraints for `object`
 *
 * - `[!]empty` - If specified object must have no properties (or must have at least one property if ! prefix specified)
 * - `[!]hasProperties=<list>` list is a | separated set of property keys the object must have (or must NOT have if ! prefix used)
 * - `notNested` - If specified, object must not contain object type properties (arrays are allowable)
 * - `noPrototype` - If specified, object must not inherit from anything other than Object.
 * - `canSerialize` - If specified, object must not have functions or other attributes that prevent standard JS serialization.
 * - `noFalseyProps` - If specified, the values of all object properties must evaluate as `truthy`
 * - `noTruthyProps` - If specified, the values of all object properties must evaluate as `falsey`
 * - `instanceOf=<val>` - Object must be an instance of the given prototype. Automatically derived from JSDoc or Typescript type declaration.
 *
 * ##### constraints for 'array'
 *
 * - `minLength=<val>` - Specifies the minimum length of this string
 * - `maxLength=<val>` - Specifies the maximum string length
 * - `[!]contains=<val>` - value defines substring that string must contain (or must NOT contain if ! prefix used)
 * - `checkType=<val>` - where <val> represents an expression that is one of:
 *  - `none` - none of the elements of the array will be tested for type or constraint
 *  - `all`  - all of the elements of the array will be tested for type and any constraints (this is the default).
 *  - `random(num) - up to <num> elements, randomly chosen among the elements, will be tested
 *  - `step(num)` - each <num>th element will be tested
 *  - `firstThenRandom(first, rand) - The first <first> elements and up to <rand> of the remaining will be tested
 *  - `firstThenStep(first, step) - The first <first> elements then each <step>th element thereafter is tested
 * - `each=<list>` - list describes a variant of a constraint declaration. The first expression must be the name of
 * the primitive type of the constraint (e.g. 'number'), and each expression must be separated by a | character.
 * for example: `each = string|minLength=10|endsWith=.png`
 *
 *
 * #### Consistency with Typescript
 *
 * Typescript has in-code syntax for declaring parameter types and returns.  These are recognized by the TypeCheck
 * parser and reconciled with the JSDoc equivalents.  Discrepancies are flagged and reported as errors.
 * (Re)generated comment blocks will have JSDoc output to match the prevailing specification so that all declarations
 * are in agreement and documentation will reflect this accordingly.
 *
 * #### Interpretation of JSDoc Types
 *
 * The {type} descriptor in a @param or @return statement is taken as-is if it defines a basic type (i.e. one that
 * will represent the typeof operator for that value).
 * Other derivations are made from the following forms:
 * - {string[]} - will describe an array of the given type (in this case, a string array).
 * - {FooBar} - will describe an object that is an instance of the given class or prototype (in this case FooBar).
 * The basic type will be 'object' and a constraint will be registered for instanceOf = FooBar automatically.
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
    public readonly type:string;

    constructor(typeString:string = '') {
        this.type = typeString.trim().toLowerCase()
    }

    test(value:any):void | never  {
        if(typeof value !== this.type) {
            throw new ConstraintBasicTypeError(value, this.type)
        }
    }

    toString() {
        return `- No Constraint`
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
        if(this.isPositive) keys.push('Positive')
        if(this.isNegative) keys.push('Negative')
        if(this.notZero) keys.push('Not Zero')
        if(this.min !== undefined) keys.push(`Min = ${this.min}`)
        if(this.max !== undefined) keys.push(`Max = ${this.max}`)
        if(this.maxx !== undefined) keys.push(`Maxx = ${this.maxx}`)
        return keys.length ? '- '+keys.join(',') : super.toString()
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
        return keys.length ? '- '+keys.join(',') : super.toString()
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
        if(this.hasProperties) keys.push(`Has Properties =${this.hasProperties.join('|')}`)
        if(this.notHasProperties) keys.push(`!Has Properties =${this.notHasProperties}`)
        if(this.notNested) keys.push(`Not Nested`)
        if(this.noPrototype) keys.push(`No Prototype`)
        if(this.canSerialize) keys.push(`Can Serialize`)
        if(this.noFalseyProps) keys.push(`No Falsey Props`)
        if(this.noTruthyProps) keys.push(`No Truthy Props`)
        if(this.instanceOf) keys.push(`Instance Of = ${this.instanceOf}`)
        return keys.length ? '- '+keys.join(',') : super.toString()
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
        if(this.elementConstraints) keys.push(`Each = ${this.elementConstraints.toString().substring(2).replace(/,/g, '|')}`)
        return keys.length ? '- '+keys.join(',') : super.toString()
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
        return str.split('|') // return the split array
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


// New approach allows multiple types to be defined with constraints separated by " | "
export function parseConstraintsToMap(typeString:string, blockSet:string= ''): Map<string, TypeConstraint> {
    let map = new Map<string, TypeConstraint>()
    let types = typeString.split('|')
    let blocks = blockSet.split(' | ')
    let i = types.length;
    while(--i >=0 ) {
        let type = types[i] || ''
        let block = blocks[i] || ''
        type.trim()
        block.trim()
        let constraint = parseConstraints(type,block) || new TypeConstraint()
        map.set(type, constraint)
    }
    return map;
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
    block.trim()
    if(block.charAt(0) !== '-') return;

    let cblock = block.substring(1).trim()
    // another split hack. this one for check type parameters
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

                    case 'minlength':
                        constraint.minLength = expVal;
                        break;
                    case 'maxlength':
                        constraint.maxLength = expVal;
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

