### Generating Documentation

Generating the documentation for your project is as simple as:

1. Adding a `doc-holiday.conf` file to your project as described in the [Configuration](config) docmentation
2. Running doc-holiday src/** from your project root, substituting 'src' for whatever folder your javascript or typescript source code files may be found in.

#### Unprepared source code results

Even if you have not formatted descriptions, or parameter / return comments yet, your source code should still be documented according to
its code signature.  Check the output and see what you ended up with.

Note that only code exported with the `export` keyword may be visible in the output docs (depending on your config choices).

#### Preparing your source code documentation

Doc-holiday assumes each file is to be treated as a module.  Only code entities that are exported from the module with the 'export' keyword (
or else with an explicit @public notation in the comment block) will be marked public and may not appear in the output otherwise (depending upon your 
output engine and template choices).

Unless you are using JSDoc HTML output (without a template that hides private entities anyway), you will not see private entities in your rendered documentation.
Consult the documentation for the JSDoc engine and/or template you are using.

Follow the guidelines below for how to best document each of your code entities:

##### Module Description
The first lines of the module -- starting with the top line -- are considered the module description.  No @ - style prefix tags are needed to identify this
as the module description.  Any comment lines that appear here are considered to be the description of the module itself.  

There may be multiple lines in contiguous comment block to form this module description.

At least one blank line following the comment block must precede any other code in the file.

For example, consider a module file named "UserModule.ts":
```
    /* 
        This is the description of the UserModule module.
        It exports functions and data types related to the User login and status.
    */
    
    import fs from 'fs'
    ...    
```
This description will appear in the docs for UserModule (module). Any exported code entities that follow in the sources 
will appear within this section of the documentation.

If you do not wish to include a module description, you must leave at least one blank line at the top of the file.

_Note that if the first line of a module contains a "shebang" line (starting with #!), then the module description may start
on the follwing line_

#### Documenting a function

There are several supported ways to declare and document a function.

First, if we simply declare an exported function:
```
export function add(num1, num2) {
    return num1+num2
} 
```
It will get documented, similar to this:

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
exampleModule~add(num1, num2)</h5>


**Kind**: inner method of [`exampleModule`]()  
**Access**: public

| Param | Type |
| --- | --- |
| num1 | `*` | 
| num2 | `*` | 

Which is nice, but what we really want is to include our own description and specifications.

We can describe the function, like this:
```
/*
 Adds two numbers and returns the result
*/ 
export function add(num1, num2) {
    return num1+num2
} 
```
or, perhaps like this:
```
//
// Adds two numbers and returns the result
// 
export function add(num1, num2) {
    return num1+num2
} 
```
Both forms will render as something like this:

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    exampleModule~add(num1, num2)</h5>

<p>Adds two numbers and returns the result</p>

**Kind**: inner method of [`exampleModule`]()  
**Access**: public

| Param | Type |
| --- | --- |
| num1 | `*` | 
| num2 | `*` | 

Which is better, but we'd like our parameters and return values documented also.

Many code editors will produce a JSDoc comment block if you simply enter /** (return)  above the function.
These tools will autogenerate the @param tags for the parameters found in the function signature, like this:

```
/**
 *  
 * @param num1
 * @param num2
 */
```
Allowing us to add descriptions and types to this.  We can also document our return value by adding a @return tag, as JSDoc
convention provides:

```
/**
 * Adds two numbers and returns the result
 * @param {number} num1 The first number to be added
 * @param {number} num2 The second number to be added
 * 
 * @return {number} The result of the addition
 */
export function add(num1, num2) {
 return num1+num2
} 
```
and this gives us a more complete documentation rendering:

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    exampleModule~add(num1, num2)</h5>

<p>Adds two numbers and returns the result</p>

**Kind**: inner method of [`exampleModule`]()  
**Access**: public

| Param | Type |
| --- | --- |
| num1 | `number` | 
| num2 | `number` | 

Which is fine, but this is all just what one gets with JSDoc.  So What?

Let's look at these examples again, though, from a Typescript perspective.

If we simply define a function (we'll give it a description here, too), we can let the declaration syntax typescript
requires of us already to document the parameters and return.

```typescript

// Adds two numbers and returns the results
export function add(num1:number, num2:number):number {
    return num1+num2
}
```
Even with this rather minimalist declaration, we will get documentation like this:

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    exampleModule~add(num1, num2) ⇒ `number`</h5>

<p>Adds two numbers and returns the results</p>

**Kind**: inner method of [`exampleModule`]()  
**Access**: public

| Param | Type |
| --- | --- |
| num1 | `number` | 
| num2 | `number` | 

and if we want to be more descriptive, we could write this as:
```typescript

/*
Adds two numbers and returns the result
 */
export function add(
    num1:number,  // The first number to add
    num2:number   // The second number to add
    
): number // the resulting sum of the addition.
{
    return num1+num2
}
```
And get all of the members documented without having to have created a redundant JSDoc block for that.

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    exampleModule~add(num1, num2) ⇒ `number`</h5>



<p>Adds two numbers and returns the result</p>

**Kind**: inner method of [`exampleModule`]()  
**Returns**: `number` - <p>the resulting sum of the addition.</p>  
**Access**: public

| Param | Type | Description |
| --- | --- | --- |
| num1 | `number` | <p>The first number to add</p> |
| num2 | `number` | <p>The second number to add</p> |


If you declare parameter and/or return values in _both_ a JSDoc comment block _and_ use Typescript types and/or comments, 
the Typescript types and the associated comments will be used instead of the JSDoc entries.  The JSDoc entries will be used
if there is not a typescript type or associated comment for the parameter or return.

Note that variations on the comment block style shown above are allowed.  Multiple lines (either successive // lines or a /* */ block are allowed, etc.)

##### Other function types.

functions may also be declared by assignment, either classically, or via the arrow operator:

```typescript
// assigned classic function
export const assignedClassic = function(a,b,c) {
    return ''
}

// an arrow function
export const assignedArrow = (foo:string, bar:number):string /* returns a value */ => {return ''}

```
Note that spreading whitespace among multiple lines is allowed for the above forms, too.

Anonymous functions are also allowed, as long as they are assigned.
```typescript
// an anonymous function
export const anonymous = (function (a,b,c) {})

```
Generator functions are fine.  You can use the @yield JSDoc tag to document the yield type:
```typescript
// a generator function
// @yields {number} each call to next() returns the successive number
export function* indexGenerator(){
    var index = 0;
    while(true) {
        yield index++;
    }
}
```
Or you can specify the return as a Generator or Iterator in Typescript to achieve the same result
```typescript
export function* indexGeneratorTS() : Generator<number>/* generates numbers */ {
    var index = 0;
    while(true) {
        yield index++;
    }
}
```
##### async functions
Prefix keywords such as `async` are recognized and reflected in the rendered docs.


#### Documenting a property

Your module may have an exported property you wish to document.  You can do this much the same as how you 
document a function.

```typescript
// Holds the ISO 639 code for the language and locale the user prefers
export let preferrredLanguage; 
```
Or, you may use a side-comment for this:
```typescript
export let preferrredLanguage; // Holds the ISO 639 code for the language and locale the user prefers 
```

You can use `let`, `var`, or `const` to declare your properties.  You may also assign a value:
Or, you may use a side-comment for this:
```typescript
export const supportedLanguage = 'en-US' // all we support for right  now 
```
Produces:

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    exampleModule~supportedLanguage : `string`</h5>

<p>all we support for right  now</p>

**Kind**: inner constant of [`exampleModule`]()  
**Default**: <code>&quot;&#x27;en-US&#x27;&quot;</code>  
**Access**: public  

Something that is ___not supported___ by _Doc-Holiday_ is a multiple declaration or assignment, such as either of the following:

```typescript
export let a, b, c
```
or 
```typescript
export let a=1, b=2, c=3
```
These attempts will only capture the first declaration (_a_).  
Avoid using these types of declarations if you wish these to be properly documented.

#### Documenting Enumerations
Enumerations are supported by Typescript and _Doc-Holiday_ will document these appropriately.

For example, the following enumeration
```typescript
// Constants for direction
enum Direction {
    Up ,   // vertical ascend
    Down,  // vertical descend
    Left,  // westward if facing north
    Right, // eastward if facing north
}
```
Would be represented as follows:

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    exampleModule~Direction</h5>

<p>Constants for direction</p>

**Kind**: inner enum of [`exampleModule`]()  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Up | `number` | <code>Up</code> | <p>vertical ascend <b><i>(value = 0)</i></b></p> |
| Down | `number` | <code>Down</code> | <p>vertical descend <b><i>(value = 1)</i></b></p> |
| Left | `number` | <code>Left</code> | <p>westward if facing north <b><i>(value = 2)</i></b></p> |
| Right | `number` | <code>Right</code> | <p>eastward if facing north <b><i>(value = 3)</i></b></p> |


_Note: To document a enum in plain Javascript, which does not support the enum keyword, create your enum as a class
with properties and apply the @enum JSDoc tag directly, using the {{{jsdoc tag=""}}} extension, like this:_

```typescript
// Constants for direction
// {{{jsdoc tag="enum"}}}
export class Direction {
    Up  = 0   // vertical ascend
    Down = 1  // vertical descend
    Left = 2  // westward if facing north
    Right = 3 // eastward if facing north
}

```


### Documenting a class

When you document a class, the documentation will reflect the aspects and comments of the class itself, as
well as all of the inner properties, functions, and inner classes.

For example, consider this simple made up class declaration:
```typescript
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
```
would render the following:


<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~Foo</h5>



<p>The Foo class demonstrates
how a simple class is documented</p>

**Kind**: inner class of [`example`](#module_focus)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` |  | <ul> <li></li> </ul> |
| seed | `string` | <code>"aklafg783yd8jccide-dkhei7s"</code> | <ul> <li></li> </ul> |
| Foo.InnerClass | `class` |  | <p>This class is scoped within the Foo class</p> |
| InnerClass.Foo.InnerClass | `string` |  | <p>a property of InnerClass</p> |
| InnerClass.Foo.property | `string` |  | <p>another InnerClass property</p> |
| InnerClass.Foo.method | `method` |  | <p>a method of InnerClass</p> |


<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    foo.compute(time) ⇒ `number`</h5>



<p>Compute the sequence over the given time</p>

**Kind**: instance method of [`Foo`](#module_focus..Foo)  
**Returns**: `number` - <p>blah blah</p>  
**Access**: public

| Param | Type | Description |
| --- | --- | --- |
| time | `number` | <p>number of seconds</p>    <ul class="doc-constraints" style="font-style:italic; margin-top: 0; margin-left: 33px">         <li>number must be an integer</li>         <li>number must be positive</li>    </ul> |

-----

Note how the properties and methods of an inner class are represented within the properties
block of the parent class itself rather than being represented in their own
rendered blocks like the first-order entities of the containing class.
This is how JSDoc is equipped to handle inner classes.


##### Documenting an interface
Documenting an interface is much the same as documenting a class.

The example below imagines two functional interfaces and an implementing 
class that uses them.

```typescript
// Interface for providing print capability
export interface PrintAction {
    print(device:string, orientation:PrinterOrientation, pages:number): boolean
}

// Interface providing persistence capability
export interface SaveAction {
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
```
resulting in the following rendered documentation:

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~PrintAction</h5>



<p>Interface for providing print capability</p>

**Kind**: inner interface of [`example`](#module_focus)  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printAction.print(device, orientation, pages) ⇒ `boolean`</h5>



**Kind**: instance method of [`PrintAction`](#module_focus..PrintAction)  
**Access**: public

| Param | Type |
| --- | --- |
| device | `string` | 
| orientation | `PrinterOrientation` | 
| pages | `number` | 


<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~SaveAction</h5>



<p>Interface providing persistence capability</p>

**Kind**: inner interface of [`example`](#module_focus)  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    saveAction.save(device) ⇒ `boolean`</h5>



**Kind**: instance method of [`SaveAction`](#module_focus..SaveAction)  
**Access**: public

| Param | Type |
| --- | --- |
| device | `string` | 


-----

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExample.exmpleLocal(foo) ⇒ `boolean`</h5>



<p>Local function to print Example.</p>

**Kind**: instance method of [`PrintExample`](#module_focus..PrintExample)  
**Access**: public

| Param | Type | Description |
| --- | --- | --- |
| foo | `string` | <p>device if not default</p> |


<hr/>


<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExample.print(device, orientation, pages) ⇒ `boolean`</h5>



<p>implementation of primt</p>

**Kind**: instance method of [`PrintExample`](#module_focus..PrintExample)  
**Returns**: `boolean` - <p>implementation of save</p>  
**Access**: public

| Param | Type |
| --- | --- |
| device | `string` | 
| orientation | `PrinterOrientation` | 
| pages | `number` | 


<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExample.save(device) ⇒ `boolean`</h5>



<p>implementation of save</p>

**Kind**: instance method of [`PrintExample`](#module_focus..PrintExample)  
**Access**: public

| Param | Type |
| --- | --- |
| device | `string` | 


----



##### Documenting a Mix-In

If you are not using Typescript, you may not be able to use the `interface` and
`implements` keywords.  Javascript has long had the ability to mix properties into
a functional object as a way to emulate interfaces or multiple-inheritance 
behaviors.  The so-called "Mix-In" pattern, 
as documented by [this example from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#mix-ins)
is recognized and supported by _Doc-Holiday_:
```typescript
// used in mix-in example from MDN
export let calculatorMixin = Base => class extends Base {
    calc() { }
};

// used in mix-in example from MDN
export let randomizerMixin = Base => class extends Base {
    randomize() { }
};

// used in mix-in example from MDN
export class Foo { }
// This is the class that extends Foo and implements the 2 mixins
export class MixInExample extends calculatorMixin(randomizerMixin(Foo)) { }

```
The mixins will be identified as such in the documentation, per JSDoc tag support,
and the `MixInExample` class that uses them will list these under `mixes`.

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~Foo</h5>



<p>used in mix-in example from MDN</p>

**Kind**: inner class of [`example`](#module_focus)  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~MixInExample ⇐ `Foo`</h5>



**Kind**: inner class of [`example`](#module_focus)  
**Extends**: `Foo`  
**Mixes**: `calculatorMixin`, `randomizerMixin`  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~calculatorMixin ⇐ `Base`</h5>



**Kind**: inner mixin of [`example`](#module_focus)  
**Extends**: `Base`  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    calculatorMixin.calc()</h5>



**Kind**: instance method of [`calculatorMixin`](#module_focus..calculatorMixin)  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~randomizerMixin ⇐ `Base`</h5>



**Kind**: inner mixin of [`example`](#module_focus)  
**Extends**: `Base`  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    randomizerMixin.randomize()</h5>



**Kind**: instance method of [`randomizerMixin`](#module_focus..randomizerMixin)  
**Access**: public

-------

#### Documenting a type definition
Type definitions are very useful code constructs, as they allow us
to define our own types to suit the data we use in our applications
in the way we think of them.

Type definitions are supported in TypeScript using the `type` keyword.

For example, we might like to define a type that may consist of any of
a number of types, like this one:

```typescript
// used to define multi-type aliases
export type NumberLike = string|number
```

or to define a type that must be one of a constant set of values, like these:
```typescript
// used to define acceptable string values
export type Office = "Seattle" | "Los Angeles" | "New York" | "London" | "Paris"

// used to define acceptable number values
export type ValueSet = 0 | 1 | 2 | 4 | 8 | 12 | 16
```

Often, we use a type definition to define the structure of an
object, as an alternative to declaring a class to define the type.
```typescript
// used to define a complex type
export type Complex = {
    name:string, // name of person
    age: NumberLike, // age of person
    office:Office, // which office
    value: ValueSet // which value
}
```
Some geospatial libraries define a Latitude, Longitude coordinate
a variety of ways.  Sometimes as a object with properties, and other 
times simply as an array with values in a defined order.  Such a
case can be handled by type definitions handily:
```typescript
// lat, lon as object props
export type LocObj = {lat:number, lon:number}

// lon, lat as a  2-element array, in that order
export type LLTuple = [lon:number, lat:number]
```

The rendered documentation for the typedef examples above would appear
like this:

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~NumberLike : `string` \| `number`</h5>



<p>used to define multi-type aliases</p>

**Kind**: inner typedef of [`example`](#module_focus)

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~Office : `&quot;Seattle&quot;` \| `&quot;Los Angeles&quot;` \| `&quot;New York&quot;` \| `&quot;London&quot;` \| `&quot;Paris&quot;`</h5>



<p>used to define acceptable string values</p>

**Kind**: inner typedef of [`example`](#module_focus)

<hr/>


<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~ValueSet : `0` \| `1` \| `2` \| `4` \| `8` \| `12` \| `16`</h5>



<p>used to define acceptable number values</p>

**Kind**: inner typedef of [`example`](#module_focus)

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~Complex : `object`</h5>



<p>used to define a complex type</p>

**Kind**: inner typedef of [`example`](#module_focus)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | `string` | <p>name of person</p> |
| age | `NumberLike` | <p>age of person</p> |
| office | `Office` | <p>which office</p> |
| value | `string` | <p>which value</p> |


<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~LocObj : `object`</h5>



<p>lat, lon as object props</p>

**Kind**: inner typedef of [`example`](#module_focus)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| lat | `number` | <ul> <li></li> </ul> |
| lon | `number` | <ul> <li></li> </ul> |


<hr/>


<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~LLTuple : `array`</h5>



<p>lon, lat as a  2-element array, in that order</p>

**Kind**: inner typedef of [`example`](#module_focus)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| lon | `number` | <ul> <li></li> </ul> |
| lat | `number` | <ul> <li></li> </ul> |



-----


##### Documenting an intersection of interfaces

An interface is a kind of type, so in Typescript we can declare a
combination of interfaces as its own type definition.  Consider the following:

```typescript
// used for intersection example
export interface Hunter {
    hunt(speed: number): number;
}
// used for intersection example
export interface Gatherer {
    gather(speed: number): number;
}

// assign intersection type definition to alias interface combo
export type HunterGatherer = Hunter & Gatherer;
```
This form is recognized and supported by _Doc-Holiday_ so the output would 
appear as you might expect:

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~Hunter</h5>



<p>used for intersection example</p>

**Kind**: inner class of [`example`](#module_focus)  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    hunter.hunt(speed) ⇒ `number`</h5>



**Kind**: instance method of [`Hunter`](#module_focus..Hunter)  
**Access**: public

| Param | Type |
| --- | --- |
| speed | `number` | 


<hr/>


<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~Gatherer</h5>



<p>used for intersection example</p>

**Kind**: inner class of [`example`](#module_focus)  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    gatherer.gather(speed) ⇒ `number`</h5>



**Kind**: instance method of [`Gatherer`](#module_focus..Gatherer)  
**Access**: public

| Param | Type |
| --- | --- |
| speed | `number` | 


<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~HunterGatherer : `class`</h5>



<p>assign intersection type definition to alias interface combo</p>

**Kind**: inner typedef of [`example`](#module_focus)  
**Implements**: `Hunter`, `Gatherer`


-----

##### Defining a callback function as a type definition

It is helpful to define a type for a callback so that code can
avoid simply declaring an "any" type here as poorly documented and error-prone
catch-all.  Although there are a couple ways in which a function
type can be declared, the preferred method supported by _Doc-Holiday_
is as follows:

```typescript
// function typedef (callback)
export type MyFunction = (str:string, num:number) => boolean
```
You can also document the parameters and return of such a callback
declaration:

```typescript
// commented version
export type TheCallbck = (
    str:string, // the string to process
    num:number // the number to process it with
) => boolean // false to abort further processing

```
<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~MyFunction ⇒ `boolean`</h5>



<p>function typedef (callback)</p>

**Kind**: inner typedef of [`example`](#module_focus)

| Param | Type |
| --- | --- |
| str | `string` | 
| num | `number` | 


<hr/>


<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~TheCallbck ⇒ `boolean`</h5>



<p>commented version</p>

**Kind**: inner typedef of [`focus`](#module_focus)  
**Returns**: `boolean` - <p>false to abort further processing</p>

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | <p>the string to process</p> |
| num | `number` | <p>the number to process it with</p> |

-------


##### Back <==  [Configuration](config) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next  ==>  [Public and Private](public_private)

