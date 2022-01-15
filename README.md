# Doc Holiday

O.K., corral your documentation backlog and 
take a break from disappointing documentation generation

A JSDoc source block re-generator targeting Typescript

### Goals
- generates normalized JSDoc comment blocks from un-normalized
source with some additional features
- parse existing jsdoc or simple comment forms
- parse typescript type info
- support side-comments
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
###### 0.0.1-pr.2
The 'focus' script task reads what we are working on
in terms of example.

- functions in js and ts form, including side-comments
- module properties

###### Issues
- [X] allow commented out sections
- [X] auto-assign type on default, and fix parse

- [X] parsing of constraints
- [X] rendering of constraints

__Will still want to do__  

- write to file
- class doc and recursion.
- module header documentation (perhaps use namespace)
- generate jsdoc by command option.
- command option for private inclusion
-----------------
##### Tasks

  - [X] classes with properties, classes, and functions
  - [ ] constraint note=whatever for freeform constraint comment (no runtime)
  - [ ] @docgen name option for extension (calls named function, passing the comment block via stdin)
  - [ ] tests for everything I can think of
    - functions descriptions, parameters, returns (constraints)
    - properties (constraints)
    - class functions, properties, subclasses
--------------
##### Status
 - classes are in place
 - constraints are parsed and rendered

###### Functions
- functions parse with or without comment descriptions
- /** /* or // are all treated equally
- export == public, lack of export is private
- optional and default parameters expressed in JSDoc form

_do we want to process a split typescript declaration?_  
Downside is awkward for recombining, but good as a stub pipeline.
- answer is __yes__
- if both doc types exist, the typescript comments will rule
  - although we _could_ predicate an option for comment-block preference
- errors are reported in apiInfo return
