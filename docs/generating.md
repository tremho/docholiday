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
**Access**: public

| Param | Type |
| --- | --- |
| num1 | `number` | 
| num2 | `number` | 

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
well as all of the inner properties, functions, enums and typedefs


##### Documenting an interface

##### Documenting a Mix-In

#### Documenting a type definition

##### Documenting an intersection of interfaces

##### Defining a callback function as a type definition

##### Inner class docmentation representation



##### Back <==  [Configuration](config) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next  ==>  [Public and Private](public+private)

