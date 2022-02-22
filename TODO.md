
#### Primary todo items
See the Github issues list for the official open-source project list of open items

###### Post-first-publish review

- [X] d.ts file needed
- [X] doc examples c&p errors from Foo.compute example -- is this a rendering issue or a stub problem? (if former, update rendering errata docs, if latter, fix)

- [-] also in typedef examples... looks like rendering, but the LocObject and LLTuples examples are particularly irksome.  
_this turns out to be artifacts introduced by GitHub pages._

- [X] linkage to filenames with spaces is broken.
- [X] jsdoc tag example does not show a jsdoc tag (and I'm not sure the example is proven, either)
- [X] Yep, turns out there's a bug.  Emitting @undefined 7.3 
- [X] the triple curly bracket seems to disappear. It is missing in extensions.md too.  backtick these puppies. also customRender api doc.
- [ ] plantUML should have a next link to publishing, and _that_ should have the next link to TOC.
- [ ] publishing: _index.hd_ should say _index.md_
- [ ] note the caveat about spaces in names in publishing edit while you are at it.
- [ ] module.md color coding on cli code is whack.
- [ ] cli doc needs updated help output (since we've added title)
- [ ] --title doc needs the prefix dashes.  others _appear_ to have only one dash.
- [ ] using jsdoc templates has no document
- [ ] nor does strategies for CI deployment (I think this can be removed)
- [ ] SourceReader constructor 'ext' parameter reveals a bug where markup is being parsed as a constraint.
- [ ] SourceReader repeats its documentation.  Is this a docJS thing?
- [ ] what's up with Typecheck ValueType See references?
- [ ] TypeCheck TypeContraint describe and toString are undocumented
- [ ] TypeCheck parseConstraintsToMap has odd-looking comment (indent?)
- [ ] types module doc collides with first comments
- 
##### Readiness for first publish

- [X] Finish docs and organize doc suite, API, readmes, etc.
- [X] Clean up scripts 
- [X] prepare and attach to Travis
- [X] verify clean tests
- [X] Prepare for npm publish
- [X] publish and check at npm
- [X] verify our module example is valid
- [X] make sure issues list is clean and has proper tags

##### Use for Jove

- [ ] start with Planet Facts
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