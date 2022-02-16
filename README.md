# Doc Holiday

There are some unresolved issues below.  Tracking now:
- [X] Callback typedefs need work:
    - [X] uncommented form now working
    - [X] commented form has issues that imply similar arrow function would also be a problem


- [X] Now have pushmi-pullyu errors in Semicolon tests.

Remaining minutiae:
- [ ] PropExplorer some unassigned commented docs are whack; Semicolon version fixes it

- __REVERSION!__  <span style="color:darkgreen; font-size:larger"> ☜ You are here</span>
- [ ] LocObj, LLTuple typedefs no workie.
- [ ] interface parsing for Hunter/Gatherer example goes awry.

- [ ] get back to documentation... remember multi-dec behavior and stall warnings
- [ ] document mixins and union interfaces
- [ ] validate all test comps 

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
- [X] Tests and approved comps
- [ ] Manual test config options
  - [X] jsdoc, no template
  - [X] jsdoc, with template
  - [X] docjs
  
  - <del>- [ ] tsdoc (_still need to install_)</del>   
  - Turns out ts-doc is not a cli app like jsdoc or docjs. It's a parser library
  
  - [X] remove tsdoc config options

- [X] @throw
- [X] tweaks from blog to markdown (Kevin Bridges https://medium.com/@kevinast/integrate-gitbook-jsdoc-974be8df6fb3
  )
- <del>[ ] attribution hack?</del>

_Able to generate self-doc. Need to write the docs.  
I should re-export  
Also, do a test of module import and make sure we don't execute  
Add verbosity logger and do a console sweep_


- [X] make cli and do npm private publish
- [X] temp link of global to build/index.js for dev test
- [X] use ansi colors for help display
- <del>[ ] add a verbosity option (0 - 3) default 0</del> 
- [X] (rev) cli defaults and process detection
- [X] ignore shebang line when parsing module description
- [X] use to self-document
- [ ] fix issues below
- [ ] put to travis
- [ ] add badges for readme
- [ ] use to document jove
- [ ] public publish to npm

-----------

### Issues

- [X] --analysis cli option is not working

- [X] Mix In is not recognized; does not work
  - current focus example is set for the MDN case. Debug from here.

- [X] Constraints not working (see focus)


- [-] type defs are not working.  I also have no test for them.
_partial fix -- still having issues with callbacks_


- [ ] double check the output of all the tests to verify all are still okay.

- [X] refactor how constraints are parsed for params/return so that
we do this at end, after gatherMetadata, and we have the chance 
to apply constraints in the JSDoc block.
This also fixes the reappearance of constraint comment on inline-return. 

<del>- [ ] I want to be able to use any form of comment block header</del>

- [ ] document TypeCheck and show practical use of runtime
- [ ] document examples of all entity types with variations.
- [ ] callbacks are best defined as an interface, but do not
capture parameter, return info.  Best to put this into def block
yourself

- [X] go src/** works as expected
- [X] API docs look right
  - NB: Multiple types with | renders okay in html but not markdown
  - NB: ditto for string[] (Array<string>)
  - NB: property defaults with new, [] do not render correctly in markdown
  - Note: All nb items above not present under docJS 
  

- [X] executeCommand parmeters not represented properly
  - goes awry at cmd='', somehow picked up the words process and set
  

- [X] Refactor to be more Github Pages friendly.
  - change html output to docs/html
  - get rid of docs/ test
  - change booksrc to docs
  - Rewrite the whole publishing section to discuss github pages
  - mention other methods without explicit how to.



- [X] 'Biorhythm' example in intro doesn't really work as advertised
  - parameters mangled
  - return type wrong
  - multi-line comment has // 
  - hbs template is inserting &lt;code&gt; and &lt;p&gt; tags

- [X] we should have a sort (true/false) option we can honor
  in our plugin (default: false == use our intercept)
- [X] console logs for execute and plugin intercept should be removed

- [X] Commented SourceReader is failing.  Out of sync in private functions
past GatherCommentMeta -- inside `readCommentBlockForm1` is picking up
`clean` and `lns` and treating as properties outside of class -- and whack.

- [X] also in SourceReader -- multiline comment for comments property was failing.


- [X] create CLI options for 
  - just make stubs
  - just render stubs
  - just make collection and output as JSON
- [ ] add CLI docs


----
##### Issues documenting our sources

- [ ] TypeCheck~TypeConstraint - bad docs for [name] and constructor

- [ ] jsdoc block dash ( - ) in parameter descriptions should be ignored `TypeCheck~parseConstraints`

- [ ] types are not linking.

- [ ] support line spacing options (end with period or cap next, deliberate line)

- [ ] see if we can mitigate the problem with spaces in a default value `new ScopeModifiers()`.
_I believe this is a jsdoc rendering issue_

- [ ] callbacks are not representing parameter and return info (any info)

- [ ] SpecificationStatus is a misnomer for this context. Remove jsdoc form errors. maybe note the block type.

- [ ] Ignore any number of sequential - or * at start of comment lines


----
###### Can live with for now

- [ ] (properties) multi-value assignment provides incorrect default and type


-----------

##### Fixed

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
- [X] nested ad-hoc parameters fail big time
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

- [X] Complete for this stage 

###### Enum
- [X] implicit
- [X] explicit
- [X] mixed with explicit start after first
- [X] explicit out of order
- [X] strings
- [X] strings with key==value

- Do enums need to be scoped? Currently they are not.
- [X] No, but allow and ignore 'const' modifier

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
- [X] should show default value on initialized class prop
- [X] show modifiers on properties

√ _NEED TO WRITE TESTS FOR THESE ITEMS_


###### JSDOC meta
- [X] params
- [X] return
- [X] {{{ }}} custom
    - [X] jsdoc tag
    - [X] plant UML

###### Use of semicolons
- [X] line endings
- [X] within one line
- [x] all element types

