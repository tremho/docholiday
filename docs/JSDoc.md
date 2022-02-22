

### JSDoc tags recognized by _Doc-Holiday_

A key point of _Doc-Holiday_ is to _not_ require tags that define
how to document code that has already been constructed with enough
information that these things should be already apparent.

So, ideally, a Typescript declaration with its robust type declaration capabilities
should only need comments next to the elements in question.

However, not everyone uses Typescript, and even within Typescript,
not every declaration may be completely specified.

So, these JSDoc tags are recognized in a comment block for a function:

- @param
- @return (or @returns)
- @yield (or @yields)
- @public
- @private

But no other tags are recognized, since they are not necessary.

#### Forcing a JSDoc tag

If for some reason you really want to insert a JSDoc tag into the mix,
you can do so with the _extension_ syntax for this.  

For example:

```typescript

// Do something important
// blah blah blah
// This was added in version 7.3 to support foobars
// {{{jsdoc tag=since}}} 7.3
function addedFoobar() {
    
}
```
Will introduce the jsdoc @since tag to denote the version of this API change.

Documentation authors may decide if they prefer to note such things
by using JSDoc tags or by their own markdown or html convention (see next section).
Using JSDoc tags potentially allows for theme-consistent treatment of these special 
entries between style templates, but this is not guaranteed.



##### Back <==  [Public and Private](public_private) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next  ==>  [Using Markdown](markdown)
