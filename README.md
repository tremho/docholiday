# Doc Holiday

If your documentation pipeline goes earp a bit too much,
and you need to make it O.K., corral your documentation backlog and 
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
- support documentation construction

----------

#### End game

In the closing phase...(I think).... just need to finish the following:

- [X] html,markdown both
- [ ] Tests and approved comps
- [ ] Manual test config options
- [ ] @throw
- [ ] tweaks from blog
- [ ] self-document

-----------

### Issues 

- [X] enum bug case lack of comma on last element fails to read value
- [X] enum key strings redundant value comment 

- [X] assigned functions are marked private. need to commute modifiers before assignment
- [X] generators need * (and keyword?)
- [X] generator should support @yields 
- [X] generator should produce @yields from Generator or Iterator returns.
- [X] anonymous function not recognized - no stub

- [X] inline parameter comment fails if before comma
- [X] typescript form parameters fail if no space after comma
- 
- [X] ad-hoc parameter type not represented in JSDOC stub (collapses to object)
- [ ] nested ad-hoc parameters fail big time
- [X] ad-hoc return type not represented in JSDOC stub (collapses to object)
- [X] ad-hoc return type also produces a property declaration with part of the ad-hoc statement
- 
- [X] void functions with return comments have no return tag or return comments
- [X] @throws tag is ignored
- 

###### If the template excludes private, like better-docs, it won't show
We _could_ have an `--all-public` flag that generates stubs ignoring private  
Defer this because this needs community input.


------------
##### Documentation types and test matrix

<span style="color:darkgreen; font-weight: bolder; font-size:larger"> <== You Are Here</span>

###### Enum
    - [X] implicit
    - [X] explicit
    - [X] mixed with explicit start after first
    - [X] explicit out of order
    - [X] strings
    - [X] strings with key==value

###### Functions
    - [X] basic javascript type
    - [X] separated lines
    - [X] typescript - one line and split
    - [X] assigned classic function - one line and split
    - [X] assigned arrow function - one line and split
    - [X] anonymous function
    - [X] generator function recognized by *
    - [X] async keyword

###### Parameters
    - [X] name only, any type
    - [X] name only with comment
    - [X] name:type (typescript)
    - [X] name:type with comment
    - [X] name:{foo:string, bar:number} (ad-hoc type)
    - [X] name:{foo:string, bar:number} (ad-hoc type) with comment

###### Returns
    - [X] void
    - [X] type
    - [X] Promise
    - [X] ad-hoc type
    - [X] w/wo comment

- [X] Throws

###### module Properties
    - var, let, const 
    - w/wo assignment

###### Classes
    - [ ] Functions and parameters
    - [ ] Properties 
    - [ ] constructors
    - [ ] inner classes
    
###### JSDOC meta
    - [ ] params
    - [ ] return

###### Use of semicolons
    - [ ] line endings
    - [ ] within one line
    - [ ] all element types

