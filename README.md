# Doc Holiday

Take a break from disappointing documentation generation

A JSDoc source block re-generator targeting Typescript

### Goals
- generates normalized JSDoc comment blocks from un-normalized
source with some additional features
- produce analysis json detailing commented items and source details
- produce stub-only output for documentation generation only
- produce normalized version attached to original code
- can update source in-place or by copy
- designed to process Typescript, but also helps Javascript
- normalize ts types into jsdoc parameters / return
- support side-comments
- support special block formatting (e.g. @attention)

----------

Intend to extend previous exposé work.

-----------
###### 0.0.1-pr.1
Demonstration of case:  
Raw documentation of spitball.js (from spitball.ts)
produces the following shortcomings:

- parameters are not typed (they assume `any`)
- non-exported should default to private
- ts-clear-classdoc needed for class
- class properties should have table generated
- general and constructor blocks should be merged
- no detail on enum (generate a table / list)

-----------------
##### Tasks

- [ ] bring over processing bits from exposé
- [ ] create json object