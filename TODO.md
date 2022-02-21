
#### Primary todo items
See the Github issues list for the official open-source project list of open items

But as we prep:

- [X] review docs. SourceReader class looks bunged up.

It is.  findBracketBoundaries has a mess of brackets in the declaration and I can't seem to figure out what the 
parse is doing with it.  Problem is with the ad-hoc return dec (I believe) so it becomes a false body boundary.


- [X] get rid of Not-JSDOC form 'errors'
- [X] put a title at the top of the API.md output and remove the DocJS TOC.
- 
- [X] verify that unrecognized constraint keyword results in error
- [X] verify use of <list> with comma delimeters in contraints (e.g. object hasProperties)
- [X] verify array processing, especially 'each' -- define what this is better.
- [X] fix the rendering of an each constraint

Yeah, there's some fubar going on here.  Gonna refactor TypeCheck:
- [X] note the badName on an unrecognized expr and report it accordingly
- [X] change the forEach loops to for of
- [X] make sure we handle note in each type group
- [X] protect list delimiters inside quotes

- [X] first, last, and firstThenLast added
- [X] document these. Also - conflicts only throw at runtime.  Constraint docs may state contradictory values.
- [X] test() for Object and Array types

##### Readiness for first publish

- [X] Finish docs and organize doc suite, API, readmes, etc.
- [X] Clean up scripts 
- [X] prepare and attach to Travis
- [ ] verify clean tests
- [ ] Prepare for npm publish
- [ ] publish and check at npm
- [ ] verify our module example is valid
- [ ] make sure issues list is clean and has proper tags

##### Use for Jove

- [ ] do Jove API docs with this
- [ ] verify working well / add to issues list if not
- [ ] write a blog-style article for Medium as announcement
- [ ] post to Medium.  Shout out on LinkedIn, FB, Twitter


##### Index aggregation
Create a means by which we can pull the documentation from other modules
so like if we have fubar() defined in module Foo, and want to export it as an exposed API in index
we would do this in code

```typescript
import {fubar} from "Foo"

// {{{copydoc source=Foo~fubar}}}
export {fubar} // exports from index
```
Tried to do this with @borrows, but (no surprise) no luck.

_for now_  
Just do the export (code) and put a code note in the module description that says that even though the
docs reference different source modules, all elements are available at the prime export.

TODO - weird parsing stuff happening here.  Try other forms.

##### Better API generation control

- turn on / off sort behavior
- incremental stub creation and index to individually rendered module docs
- post process to (a) remove ToC (b) rearrange order


#### To read when I do the blog
https://medium.com/swlh/why-is-nobody-talking-about-this-passive-income-method-85791d5350fc