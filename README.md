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

- [ ] Do enums need to be scoped? Currently they are not.

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

- [X] Developed problem running test.  test-direct is okay, but test hangs. Generation is okay.

_not sure what's going on, but it seems to be at the 'returns' test.
docstub call may be what's failing.  
Hard to trace._

_It was source reader not advancing pos past a distended body.

###### module Properties
    - [X] var, let, const 
    - [X] w/wo assignment
    - [X] top and side comments
    - [X] declared public
    - [X] multi dec behavior and workaround

###### Classes
    - [X] Functions and parameters
    - [X] Properties 
    - [X] constructors
    - [X] inner classes

---
- Inner class doc by listing props instead of creating stubs seems to work
- Findng other issues that are now in my way
- Can't verify items marked -
- [-] comments that do not start at column zero may not be getting skipped
- [-] Second property definition in class is screwy
- [-] a split method param list gives us an extra empty param
- [X] class prop without type is a problem
- [X] (above) was case of 'type' keyword initiated a bogus typedef parse
- [ ] should show default value on initialized class prop
- [ ] show modifiers on properties


    
###### JSDOC meta
    - [ ] params
    - [ ] return
    - [ ] {{{ }}} custom
        - [ ] jsdoc tag
        - [ ] plant UML

###### Use of semicolons
    - [ ] line endings
    - [ ] within one line
    - [ ] all element types

