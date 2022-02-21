
### Constraints -- Understanding and utilizing the TypeCheck APIs
_TypeCheck_ is a secondary feature of the _Doc-Holiday_ offering.
It is embodied in the use of [constraints](constraints) when documenting
sources. But there is more to the _TypeCheck_ story.

 _TypeCheck_ is a protocol for utilizing and extending JSDoc comment syntax to declare parameters and return values
 with their runtime constraints as well as their types.

 We begin our description of specifying constraints with a review of the support for JSDoc-style comment blocks:

 Declare parameters in traditional JSDoc style:
  ```
      @param {type} name  Description
  ```
  _Side Note: Reversing the order of {type} and name are allowed here, but that is not canonical JSDoc style._

  Also supported (and also canonical) is the use of [ ] brackets around the name to declare an optional parameter.   
  e.g. ` @param {string} [foobar]  The foobar parameter is not required `

 Descriptions may be on the same, line, or may start or continue on the lines below up until the next @param or other
 statement or end of comment block:
 ```
      @param {type} [name]
      The description can go here as well as on the line above, or it can continue the line above if there is one.
      The description can run multiple lines, and if JSDoc is configured for it, can support markdown syntax, as
      well as inline html.
```
 #### Introducing Constraints

 Constraints are a formatted set of expressions that may either precede or follow the description, either starting
 on the first line or the line below.
 Constraints are encapulated between < and > brackets when used in a comment block.    
Zero or more constraints may be included in the comment block of a parameter or
return declaration.
 e.g.:
```
      @param {number} ordinal  The ordinal value of this thing
      <Integer,Positive,NotZero>
 ```
 The example declares a parameter with conventional JSDoc style, but also provides constraint keywords that
 will apply to this numeric type of value that specify the acceptable characteristics of that value.

 Syntactically, the order of description and constraint do not matter, so this is equivalent to the above:
 ```
      @param ordinal {number}  <Integer,Positive,NotZero>
      The ordinal value of this thing
 ```
 as is this:
 ```
      @param ordinal {number}  <Integer>
      The ordinal value of this thing <Positive>
      <NotZero>
 ```

 The output JSDoc block will include embedded HTML to render the constraint block,
 as the JSDoc renderer is unaware of the role of Constraint declarations themselves.
 The block is assigned the CSS class "doc-constraints" should you wish to provide additional styling to this block if you are staging your own HTML pages for the documentation.

 Note that all the above syntax, including constraints, also applies to the JSDoc `@return` (or `@returns`) statement,
 with the only difference being that the return declaration does not specify a name.

 #### Multiple type constraints
 if there are multiple types (e.g. {string|number}) then the corresponding multiple constraint declarations may
 be given.
 example:
 `@param {string|number} foo
          <minLength=3>
          <Integer, min=100, max=999>

 #### Constraint keywords and syntax
 - a constraint declaration is specified between < and > brackets.
 - There may be multiple constraint declarations in a single comment block
 - there may be multiple constraint expressions within a declaration.
 - each constraint expression (keyword[=value]) within a declaration is separated by a comma
 - Some keywords accept a value parameter, such as `min=5` or `endsWith = ".png"`
 - Values may be quoted or not, but must not contain a comma within the value itself, regardless of quoting.
  Other keywords are implicitly boolean, such as `integer` or `nonzero` and take no assignment.
 - Some keywords have a 'not' complement that is noted by a preceding ! character.  For example,
 `contains` and `!contains` both accept a value that is either required to exist or to not exist, depending upon
 the presence or absence of the ! prefix.
 - A few keywords accept a list of values.  Such values are given using the a comma a delimiter, as in
 `"one,two,three,four"`.

 - Keywords are not case-sensitive

 - Specifying conflicting constraints (e.g. `<positive, negative>`)
   will not be checked for validity in the creation of documentation, but will be checked 
   and throw an error if the runtime `validate` test is used.
 - Constraints that are redundant, but non-conflicting may be defined
   (e.g. `<min=4, nonzero, positive>`, or `<startsWith="foobar" minLength=3>`).  There is no redundancy checker. 

 - Unrecognized keywords will produce an "unrecognized constraint" message in the rendered documentation where the constraints are listed.
 - improper expression syntax may result in unwanted results in the rendered output.

 ##### constraints for `number`

 - `Integer` - If specified, number must be an integer.  If not specified, floating point values are allowed.
 - `Float ` -  Optional, ignored. Same as default.
 - `Positive` - If specified, number must be positive (not less than zero).
 - `Negative` - If specified, number must be negative (less than zero).
 - `NotZero`  - If specified, number must not be zero.
 - `NonZero`  - Alias for NotZero
 - `min=<val>` - Specifies the minimum allowed value (inclusive)
 - `max=<val>` - Specifies the maximum allowed value (inclusive) (e.g. integer, min=0, max=9)
 - 'maxx=<val>` - Specifies the first exclusive value outside the maximum. (e.g. float, min=0, maxx=10)

 ##### constraints for `string`

 - `minLength=<val>` - Specifies the minimum length of this string
 - `maxLength=<val>` - Specifies the maximum string length
 - `[!]startsWith=<val>` - value defines prefix that string must start with (or must NOT start with if ! prefix used)
 - `[!]endsWith=<val>` - value defines suffix that string must end with (or must NOT end with if ! prefix used)
 - `[!]contains=<val>` - value defines substring that string must contain (or must NOT contain if ! prefix used)
 - `[!]match=<val>` - value defines regular expression that string must match (or must NOT match if ! prefix used)

 ##### constraints for `object`

 - `[!]empty` - If specified object must have no properties (or must have at least one property if ! prefix specified)
 - `[!]hasProperties(<list>)` list is a comma-separated set of property keys the object must have (or must NOT have if ! prefix used)
 - `notNested` - If specified, object must not contain object type properties (arrays are allowable)
 - `noPrototype` - If specified, object must not inherit from anything other than Object.
 - `canSerialize` - If specified, object must not have functions or other attributes that prevent standard JS serialization.
 - `noFalseyProps` - If specified, the values of all object properties must evaluate as `truthy`
 - `noTruthyProps` - If specified, the values of all object properties must evaluate as `falsey`
 - `[!]instanceOf=<val>` - Object must be an instance of the given prototype.

 ##### constraints for 'array'

 - `minLength=<val>` - Specifies the minimum length of this array
 - `maxLength=<val>` - Specifies the maximum array length
 - `[!]contains=<val>` - value defines an element value that array must contain (or must NOT contain if ! prefix used)
 - `checkType=<val>` - where `<val>` represents an expression that is one of:
   - `none` - none of the elements of the array will be tested for type or constraint
   - `all`  - all of the elements of the array will be tested for type and any constraints (this is the default).
   - `first(num)` - the first `<num>` elements only are tested.
   - `last(num)` - the last `<num>` elements only are tested.
   - `random(num)` - up to `<num>` elements, randomly chosen among the elements, will be tested
   - `step(num)` - each `<num>th` element will be tested
   - `firstThenLast(first, last)` The first `<first>` elements and the last `<last>` elements are tested.
   - `firstThenRandom(first, rand)` - The first `<first>` elements are tested and up to `<rand>` of the remaining will be randomly tested
   - `firstThenStep(first, step)` - The first `<first>` elements are tested then each `<step>th` element thereafter is tested
   - `each=<typeconstraint>` - `<typeconstraint>` describes a variant of a constraint declaration. The first value in the expression must be the name of
   the primitive type of the constraint (e.g. 'number'), followed by a comma and one or more constraints to apply to that type,
   comma separated. Each sucessive expression for a new type must be separated by a | character.
   for example: `each(string,minLength=10,endsWith=".png"|number, positve,nonzero,integer)`  
   This allows an array with mixed types to be evaluated with a constraint constructed for that type.
   The `each` directive can be combined with `checkType` to also specify the range for testing.
   Note that an 'each' declaration is necessary even for single-type arrays. 

 #### The `note` keyword
 The expression such as note="your comment here" allows a constraint comment to be generated specifying a constraint
 that should be noted. example:

      @param {number} prime <integer, nonzero, note="must be a prime number">

  Although no runtime checking is available for a `note` constraint, the note will appear as part of
  the constraint comment documentation.

### Runtime use of TypeCheck
_Doc-Holiday_ utilizes the _TypeCheck_ library to parse and define constraints
and render these in the documentation.

While its great to be able to declare the specification
of values in the API docs, it is up to the programmer
to insure that appropriate error handling is in place for
incoming values that are outside of these specifications.

To help with that, the `validate` function is available for 
developers to use in their functions.

__validate__ _(value, constraint_definition_string)_

Using the `validate` function is simple.

Import it from the `doc-holiday` module:

```typescript
import {validate} from "@tremho/doc-holiday";
```
then use it in your functions to validate against the constraints
specified for your values.  Use the same string as the constraint
declaration itself (without the `<` and `>` brackets).

```typescript
/*
An example of using constraints
 */
export function typeCheckCase1(
    name:string, // <minLength=4, maxLength=32>
    age:number,  // <positive, integer, non-zero>
    phone: string, //<match=\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}>
)
{
    if(!validate(name,'minLength=4, maxLength=32')) {
        throw Error('bad name')
    }
    if(!validate(age, 'positive, integer, nonzero, maxx=100')) {
        throw Error('bad age')
    }
    if(!validate(phone, 'match=\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}')) {
        throw Error('bad phone')
    }
}
```
This crude example simply uses validate as an assertion, and throws
an Error if the assertion fails.  More nuanced use of `validate` can allow for
more sophisticated error management in other scenarios.

Of course, you don't need to use `validate` to check your values.
As a good programmer,  you've probably already done that, after all. 

Still, you might want to run your values through `validate` anyway, at least during unit testing, just to make
sure your functions honors the constraints _as specified_ by  your API.





