
### Public vs. Private declaration

_Doc-Holiday_ is geared primarily to those creating _modules_, such as
those used for _NodeJS_ or in _AMD_ format (using _require_).

As such, typically one would like to document the exported API of the module,
and not necessarily the local, non-exported worker functions, classes, or other properties
where the sausage is actually made.

_Doc-Holiday_ relies primarily upon the ES6 `export` keyword to determine which 
entities are meant to be public, as this keyword will also tell the module system
that this is a publically exported item.

However, there are other ways in which a module might export its interface
members, and there are other reasons why an author may wish an otherwise private function 
to be represented as public.

For example, consider this module:

```typescript
/*
A module exporting key functions only
 */

// the main entry point
function main(...args:string[]) {
    // blah blah
}
// the inner workings
function doWork(param1:string, param2:string) {
    // blah blah
}

export {
    main
}

```
Here we are exporting the `main` function (if this was an _AMD_ module, the
export might be a `return` statement instead).

But the documentation engine doesn't know this.  So to insure our
public function is correctly noted as such, we can use the JSDoc 
tag @public in our comment block, like this:
```typescript
// the main entry point
// @public
function main(...args:string[]) {
    // blah blah
}

```
to make sure this otherwise private function is promoted to public
status for documentation.  This is also the technique to use if you
are not writting modules, but want only certain API elements of
your script exposed.

#### Forcing something private
Conversely, there may be situations in which you _don't_ want an exported
function to be documented as public.  Perhaps your application architecture
requires that you expose some APIs between modules for internal processing purposes,
but you don't want these to be exposed to public consumers of your
API.  So you might do this:

````typescript
/*
This module exports everything for inter-module access,
but only allows public access to some
 */

// This is an internal processing export
// @private
export function firstModuleFunction() {
    
} 
// This is another hidden function
// @private
export function secondModuleFunction() {
    
}
// This is a public export
// @public
export function moduleAPIAccess1() {
    
}
// This is also public because it is exported
// and not marked private
export function moduleAPIAccess2() {
    
}

````
Note that JSDoc _can_ support the rendering of both private and public APIs.
and _Doc-Holiday_ is configured to request that JSDoc do so.

However, many JSDoc style templates, (such as Better Docs, for example) 
will supercede this request and ignore private entities.
So will use of _DocumentationJS_ as your rendering engine choice.

To document your private methods, choose "jsdoc" as the _engine_ in 
your configuration, and "html" as the _format_, and remove any _template_
setting there may be.  You should find your private entities as well as your
public declarations in the resulting HTML. Consult the documentation for any 
JSDoc template you may be using to see about its support for private
APIs.   
Generation to Markdown, whether
through either _jsdoc2md_ or _documentationJS_ will result in stripping away
the private entities.






##### Back <==  [Generating docs](generating) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next  ==>  [JSDoc Tags](JSDoc)
