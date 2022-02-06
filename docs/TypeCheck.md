
### Topic Documentation for Constraint declarations
 A protocol for utilizing and extending JSDoc comment syntax to declare parameters and return values
 with their runtime constraints as well as their types.

 Declare parameters in traditional JSDoc style:
  ```
      @param {type} name  Description
  ```
  N.B. that reversing the order of {type} and name are allowed here, but that is not canonical JSDoc style.
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
 Constraint expressions start with a dash '-' character to distinguish them from the description comments and end
 with the next newline.
 The full constraint expression must be contained on the line it starts on.
 e.g.```
      @param {number} ordinal  The ordinal value of this thing
      <Integer,Positive,NotZero>
 ```
 The example declares a parameter with conventional JSDoc style, but also provides constraint keywords that
 will apply to this numeric type of value that specify the acceptable characteristics of that value.

 Syntactically, the order of description and constraint do not matter, so this is equivalent to the above:
 ```

 ```
      @param ordinal {number}  <Integer,Positive,NotZero>
      The ordinal value of this thing
 ```
 
 The output JSDoc block will include embedded HTML to render the constraint block,
 as the JSDoc renderer is unaware of the role of Constraint declarations themselves.
 The block is assigned the CSS class "doc-constraints" should you wish to provide additional styling to this block.

 Note that all the above syntax, including constraints, also applies to the JSDoc `@return` (or `@returns`) statement,
 with the only difference being that the return value does not specify a name.

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

 - Keywords are case insensitive

 - Specifying conflicting or redundant constraints (e.g. `startsWith = "ab"` and `!startsWith="cd")
   will result in an error.

 - Unrecognized keywords or improper expression syntax will result in an error

 ##### constraints for `number`

 - `Integer` - If specified, number must be an integer.  If not specified, floating point values are allowed.
 - `Float ` -  Optional, ignored. Same as default.
 - `Positive` - If specified, number must be positive (not less than zero).
 - `Negative` - If specified, number must be negative (less than zero).
 - `NotZero`  - If specified, number must not be zero.
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
 - `[!]hasProperties=<list>` list is a | separated set of property keys the object must have (or must NOT have if ! prefix used)
 - `notNested` - If specified, object must not contain object type properties (arrays are allowable)
 - `noPrototype` - If specified, object must not inherit from anything other than Object.
 - `canSerialize` - If specified, object must not have functions or other attributes that prevent standard JS serialization.
 - `noFalseyProps` - If specified, the values of all object properties must evaluate as `truthy`
 - `noTruthyProps` - If specified, the values of all object properties must evaluate as `falsey`
 - `instanceOf=<val>` - Object must be an instance of the given prototype. Automatically derived from JSDoc or Typescript type declaration.

 ##### constraints for 'array'

 - `minLength=<val>` - Specifies the minimum length of this string
 - `maxLength=<val>` - Specifies the maximum string length
 - `[!]contains=<val>` - value defines substring that string must contain (or must NOT contain if ! prefix used)
 - `checkType=<val>` - where <val> represents an expression that is one of:
  - `none` - none of the elements of the array will be tested for type or constraint
  - `all`  - all of the elements of the array will be tested for type and any constraints (this is the default).
  - `random(num) - up to <num> elements, randomly chosen among the elements, will be tested
  - `step(num)` - each <num>th element will be tested
  - `firstThenRandom(first, rand) - The first <first> elements and up to <rand> of the remaining will be tested
  - `firstThenStep(first, step) - The first <first> elements then each <step>th element thereafter is tested
 - `each=<list>` - list describes a variant of a constraint declaration. The first expression must be the name of
 the primitive type of the constraint (e.g. 'number'), and each expression must be separated by a | character.
 for example: `each = string|minLength=10|endsWith=.png`

 #### The `note` keyword
 The expression such as note="your comment here" allows a constraint comment to be generated specifying a constraint
 that should be noted. example:

      @param {number} prime <integer, nonzero, note="must be a prime number">

  Although no runtime checking is available for a `note` constraint, the note will appear as part of
  the constraint comment documentation.

 #### Consistency with Typescript

 Typescript has in-code syntax for declaring parameter types and returns.  These are recognized by the TypeCheck
 parser and reconciled with the JSDoc equivalents.  Discrepancies are flagged and reported as errors in the status.

 Typescript declared parameters and returns may be commented as 'side-comments' after the declaration, as in this
 example:
      function example(param1:string, // comment for param1
                       param2:number, // comment for param2
      ) : number // comment for return value
      {
          // body of function
      }

 Values that come from typescript will override any conflicts found in the JSDoc block.
 JSDoc specified values, if present, will be used only if not specified in the typescript area.

