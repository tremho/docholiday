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
- <del>produce normalized version attached to original code</del>
- <del>can update source in-place or by copy</del>
- designed to process Typescript, but also helps Javascript
- normalize ts types into jsdoc parameters / return
- support side-comments
- support special block formatting (e.g. plantUML)

----------

Intend to extend previous exposé work.

-----------
###### 0.0.1-pr.3
- basic functionality for most features in place.
- generates plantUML diagrams now too.
- most recent addition was enums.  Typedefs next.
- globbing is working

__Will still want to do__  

- [ ] typedef
- [ ] tests
- [ ] validate test comps

- document construction (doc-org.json)
  - idea is to have a configuration that names source paths
  - each block is generated into a separate api doc
  - a block can reference some freeform content in markdown
  - combine blocks into a single document
  - generate a chapter index

- basic config (docholiday.json)
  - choose output script / engine
  - declare engine options
  - pass additional engine options
  - choose doc output directory
  - choose stub directory
  - option to not clear stub directory
  - construction section or reference

-----------------
##### Tasks

  - [X] classes with properties, classes, and functions
  - [X] constraint note=whatever for freeform constraint comment (no runtime)
  - [X] <<<name key1=value key2="value">>> option for extension (calls named function, passing the comment block via stdin)
    - [X] basic parse and call, multiple
    - [X] internal for jsdoc and plantUML
    - [ ] invoke executable
      - <span style="color:red">Unable to make async call in the processing of a commentText block</span>
        - idea: _do at source read and add to a custom array in functionInfo_
        - _replace `%%custom<index>%%` with custom array element on commentText render_
        - _this would make extract--Info and getApiInfofunctions async_
        - _which is okay because getApiInfo is called from processFiles_

  - [X] implement globber for file list  
  - [ ] enums
  - [ ] typedefs


  - [ ] tests for everything I can think of
    - functions descriptions, parameters, returns (constraints)
    - properties (constraints)
    - class functions, properties, subclasses
    - enums and typedefs

  - [ ] main API
  - [ ] command line reference / proper readme
  - [ ] npm publish
--------------
##### Status
 - classes are in place
 - constraints are parsed and rendered

##### Issues
- [ ] /* */ comment on return type (in arrow example) parse problem
- [ ] generator function should set a scope modifier / does not render proper stub.
- 