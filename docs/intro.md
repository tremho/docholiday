
### Introducing Doc-holiday

Doc-holiday is a source-code documentation generation management system for
JavaScript / TypeScript source modules.

#### _More than "Yet Another Doc Gen"_
You may already use, or may have used source-code documentation 
generation tools in the past, and if so you know that the proposition
usually falls short of its promise and expectation.

The JSDOC standard was created years ago, in the infancy of JavaScript,
where there were dozens of ways of doing pretty much the same things,
but no good way to explain what it is you had done. 

As a result, JSDOC specifies nearly 70 tags designed to categorize and describe
some bit of code or another.

Specifying these tags is for the most part tedious and redundant. Modern
JavaScript, and especially TypeScript code has unambiguous syntax conventions
that specify code entities in context. And JSDOC honors some of this.
For example, if you use the `class` keyword to declare a class, 
there is no need to further note it with the @class tag, as you 
would need to do if you were creating a class by building it as a function
prototype explicitly.  Similarly, there's no need to use the @function or
@name tags with a classically declared function. But other things are not
so clear.  What about properties of a class? Typedefs?  Enums?  These things
can be documented in JSDOC, but it's often a battle to get it to work
the way you would like.

_Doc-holiday_ uses a different approach.  It does not replace JSDoc --
In fact, you will need to have JSDoc or one of the supported alternatives
installed before you can use Doc-holiday as designed.

Instead, _doc-holiday_ parses your source code for its code declarations and
generates intermediate 'stub' files that capture the metadata already 
present in your code and creates corresponding JSDoc comment blocks 
with the correct tags, and _that_ is what is sent to the JSDoc-compatible
renderer to produce the output.

Of course, if you have comment descriptions for your code entities, these
are also represented via the stub to the output.

This includes side-adjacent comments too, so

    expoort const foo = 'FOOBAR' // define our FOOBAR constant

will capture all the relevant information that can be gleaned from this 
statement in code and produce the JSDoc stub

/**
* @constant {string} foo
* defines our FOOBAR constant
* @default 'FOOBAR'
*
* @public
*/
  var foo = 'FOOBAR'

Which will render according to your rendering engine preferences and chosen template
to produce something like:

<hr/>

### foo : `string`


<p>defines our FOOBAR constant</p>

**Default**: <code>&quot;&#x27;FOOBAR&#x27;&quot;</code>  
**Access**: public  

<hr/>
If you use TypeScript, then it gets even better, because your parameter and return
types are read from your code and echoed in `@param {type} name` 
and `@return {type}` tags.  

Combined with using side-adjacent comments, you can write typescript
code like this:
```typescript
// Calculates the biorythm of the named indiidual
// using their birthdate as the starting point
export function computeBiorhythm(
        name:string, // The user's name
        birthdate: Date // the user's birthdate
                        // (time portion of date ignored)
):BiorhythmData // computed object returned
{
  // ... awesome code here...
}
```

and get this type of output:
<hr/>

### computeBiorhythm(timeportionofdateignored) ⇒ `BiorhythmData`

<p>Calculates the biorythm of the named indiidual
using their birthdate as the starting point</p>

**Returns**: `BiorhythmData` - computed object returned  
**Access**: public

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The user's name</p> |
| birthdate | <code>Date</code> | <p>the user's birthdate (time portion of date ignored)</p> |
<hr/>

## Features
 
- __Leverages industry standards__
  - Uses standard JSDOC rendering engines, such as
  [_JSDoc_](https://jsdoc.app), and _[DocumentationJS](https://documentation.js.org)_
  - Outputs to
  [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  or [Markdown](https://www.markdownguide.org)
  - Markdown files can be organized as part of a full document suite
  - Can use 
  [GitBook](https://www.gitbook.com) 
  or [HonKit](https://github.com/honkit/honkit/blob/master/README) 
  to publish document suite as html
- __Supports the code you write, the way you write it__ 
  - Supports TypeScript parameters and return types
  - Also supports JSDoc style @param and @return tags
  - Comments may be via // /* or /** (jsdoc-style) blocks 
  - Supports descriptions in comments above or to the side
  - Supports Functions, Properties, Classes, Enums, Typedefs, and Interfaces
- __Diagrams!__ 
  - Supports image diagrams using [PlantUML](https://plantuml.com) descriptive language
- __Roll your own__ 
  - Can be used as a library module that exposes each part of the process, including:  
    - Return the result object from source parsing, marking all comment
  and declaration start/end positions and associated parsed metadata
    - Process parsed elements on the fly
    - Produce JSDoc stub files
    - Execute the rendering pipeline per the configuration

<hr/>

##### Back <==  [Table of Contents](index) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next  ==>  [Getting Started](Getting Started)