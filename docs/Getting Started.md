
## Getting started

#### 1. Install your rendering engine(s)

_Doc-holiday_ does not render directly to html or markdown.  It creates
intermediate files that are rendered to html or markdown using standard
industry tools that respect the JDDoc markup conventions.

Three tools are directly supported by _doc-holiday_.  You may
choose to have all three of these tools installed, or you may elect
to only install those you will use for your output needs.

The most canonical of these is of course JSDoc itself.

Out of the box, JSDoc produces HTML output only. To support Markdown output, you need JSDoc2MD.

DocumentationJS is a JSDoc alternative with some interesting features and
a simplifying philosophy, as well as a clean default output style. It uses a different templating scheme than 
JSDoc, and may thus be more difficult to customize the styling.

If you want both html and markdown, you must install either just DocumentationJS (which
can do both) or both of JSDoc (for html) and JSDoc2MD (for markdown).

| engine | config engine | config format | HTML | Markdown | private entities |
| ------ | ------------- | ------------- | ---- | -------- | ---------------- |
| JSDoc  |  jsdoc       |  html          | YES  |  NO      | yes _(unless supressed by template)_ |
| JSDoc2Md |  jsdoc     |  markdown      | NO   |  YES     | no |
| DocumentationJS | docjs | html | YES | NO | no |
| DocumentationJS | docjs | markdown | NO | YES | no |

_Doc-holiday_ is configured to allow JSDoc to include private entities in 
the output.  However, many templates disable this option as part of their
normal gestalt.

_Doc-holiday_ also forces the output to appear in source-file order, rather
than the JSDoc-default behavior of sorting alphabetically, grouped by
type. 

At this point you may want to read the section 
[Publishing your documentation](publishing.md)
to get an idea of what formats you will need to output to match
the publishing scheme you will be using.

##### installing with npm

Although there is more than one way to install these tools, perhaps the
most direct is to install them from __npm__.

These engines may be installed globally, and thus used for any of your source
projects (recommended), or may be installed locally for each project.

Note that if installed locally, the doc-holiday command should be invoked 
by an npm run script so that the path will contain the engine executable location
when run.

###### Installing jsdoc
(globally)   
    `npm install -g jsdoc`

(locally)  
    `npm install --save-dev jsdoc`

###### Installing jsdoc2md
(globally)   
`npm install -g jsdoc2md`

(locally)  
`npm install --save-dev jsdoc2md`

###### Installing Documentation JS
(globally)   
`npm install -g documentation`

(locally)  
`npm install --save-dev documentation`


##### Back <==  [Introduction](intro.md) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next  ==>  [Configuration](config.md)