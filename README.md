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

- [ ] assigned functions are marked private. need to commute modifiers before assignment
- [ ] generators need * (and keyword?)
- [ ] anonymous function not recognized - no stub

- [ ] inline parameter comment fails if before comma
- [ ] typescript form parameters fail if no space after comma
- [ ] ad-hoc parameter type not represented in JSDOC stub (collapses to object)
- [ ] nested ad-hoc parameters fail big time

- [ ] ad-hoc return type not represented in JSDOC stub (collapses to object)
- [ ] ad-hoc return type also produces a property declaration with part of the ad-hoc statement
- [ ] void functions with return comments have no return tag or return comments
- [ ] @throws tag is ignored
- [ ] should be able to declare @throws in return comment space too.
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
    - [-] assigned classic function - one line and split
    - [-] assigned arrow function - one line and split
    - [-] anonymous function
    - [-] generator function recognized by *
    - [X] async keyword

###### Parameters
    - [X] name only, any type
    - [X] name only with comment
    - [-] name:type (typescript)
    - [-] name:type with comment
    - [X] name:{foo:string, bar:number} (ad-hoc type)
    - [X] name:{foo:string, bar:number} (ad-hoc type) with comment

###### Returns
    - [-] void
    - [ ] type
    - [ ] Promise
    - [-] ad-hoc type
    - [ ] w/wo comment

- [ ] Throws

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

