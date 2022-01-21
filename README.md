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

###### If the template excludes private, like better-docs, it won't show
We _could_ have an `--all-public` flag that generates stubs ignoring private  
Defer this because this needs community input.


------------
##### Documentation types and test matrix

###### Enum
    - [ ] implicit
    - [ ] explicit
    - [ ] mixed with explicit start after first
    - [ ] explicit out of order
    - [ ] strings
    - [ ] strings with key==value

###### Functions
    - [ ] basic javascript type
    - [ ] separated lines
    - [ ] typescript - one line and split
    - [ ] assigned classic function - one line and split
    - [ ] assigned arrow function - one line and split
    - [ ] anonymous function
    - [ ] generator function recognized by *
    - [ ] async keyword

###### Parameters
    - [ ] name only, any time
    - [ ] name only with comment
    - [ ] name:type (typescript)
    - [ ] name:type with comment
    - [ ] name:{foo:string, bar:number} (ad-hoc type)
    - [ ] name:{foo:string, bar:number} (ad-hoc type) with comment

###### Returns
    - [ ] void
    - [ ] type
    - [ ] Promise
    - [ ] ad-hoc type
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

