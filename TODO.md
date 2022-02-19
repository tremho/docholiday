
#### Primary todo items
See the Github issues list for the official open-source project list of open items

But as we prep:

- [ ] review docs. SourceReader class looks bunged up.
- [ ] get rid of Not-JSDOC form 'errors'
- [ ] verify that unrecognized constraint keyword results in error
- [ ] verify use of <list> with comma delimeters in contraints (e.g. object hasProperties)
- [ ] verify array processing, especially 'each'

##### Readiness for first publish

- [ ] Finish docs and organize doc suite, API, readmes, etc.
- [ ] Clean up scripts 
- [ ] prepare and attach to Travis
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

