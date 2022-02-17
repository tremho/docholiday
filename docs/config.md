
### The `doc-holiday.conf` configuration file

The behavior of doc-holiday for any given invocation is determined
by the settings within the `doc-holiday.conf` file that resides in the 
current directory (presumed to be the root directory of a project being 
documented), or another file if so specified via the _config_ argument passed on the command line.

This file is in ['h-json'](https://hjson.github.io) format.

Here is an example file.  Copy and paste this example into your own `doc-holiday.conf`
text file at the root of your project directory and modify it to suit your preferences.
```json5

// This is the configuation file for Doc Holiday
// It is in JSON5 format, supporting comments
// such as per HJSON or JSON5
// As such, note also that key identifiers need not be quoted
// and single quotes work for strings as well as double quotes
// See the HJSON spec for more info (https://hjson.github.io/faq.html)
// or JSON5 (https://github.com/json5/json5)
{

  /*
    Output format(s)
      May be "html" or "markdown" or "html,markdown" for both
  */
  format: "markdown",


  /*
   Which primary documentation engine to use.
   One of:
    - "jsdoc" (JSDOC) Traditional Javascript documentation to HTML
    - "docjs" (Documentation JS) Simplified JSDOC alternative to HTML or Markdown
    - "other" (???) The enginePath option specifies an executable by absolute path to run.
  */
  engine: "jsdoc",

  /*
   The chosen engine executable is expected to exist in the system path at runtime.
   If it is not, supply the path to the executable to run here directly.
   If this is a path to a directory, this directory is expected to contain the executable for the chosen engine.
   If the chosen engine is "other", this path should be to the executable command or script to run.
   The executable will be run with a series arguments in key=value form.
   A custom command or script must be able to understand these arguments.
  */
  enginePath: "",

  /*
    Which template to use (per the engine chosen)
      If the template is locally installed in the project,
      specify a path relative to the project (e.g. "node_modules/<template_name>")
      For templates outside of the project tree, use an absolute path.
      Defaults to "templates/default"
  */
  template: "",

  /*
   Folder to generate intermediate stub files into.
   Relative to project root, or an absolute path
  */
  intermediate: "gen",

  /*
   Folder to output HTML files (if not using Markdown)
   Relative to project root, or an absolute path
  */
  html: "doc",

  /*
   Output location for Markdown output
   Specify the file path (e.g. booksrc/API) to receive this output
   Or if set up for GitBook (HonKit) output / publish
  */
  markdown: "booksrc/API ",

  /*
    intermal JSDOC configuration file location, if applicable
    Not normally recommended to modify by user.
  */
  jsdocConfig: "jsdoc-conf.json",

  /*
   Executable info
   Not normally recommended to modify by user.
  */
  execInfo: {
    jsdoc: {
      html: {
        exec: "jsdoc -p -d %html% -r -c %intermediate%/jsdoc.conf %intermediate%"
      },
      markdown: {
        // normal jsdoc2md output (not used)
        // exec: "jsdoc2md --configure %intermediate%/jsdoc.conf --files %intermediate%/**/*.js > %markdown%"
        // This one uses modified hbs templates per Kevin Bridges (https://medium.com/@kevinast/integrate-gitbook-jsdoc-974be8df6fb3) 
        exec: "jsdoc2md --global-index-format none --module-index-format table --partial tooling/j2mdhbs/header.hbs --partial tooling/jdmdhbs/link.hbs --partial tooling/jdmdhbs/body.hbs --configure %intermediate%/jsdoc.conf --files %intermediate%/**/*.js > %markdown%"
      },
    },
    docjs: {
      html: {
        exec: "documentation build -f html -o %html% %intermediate%"
      },
      markdown: {
        exec: "documentation build -f md -o %markdown% %intermediate%"
      }
    },
    other: {
      html: {
        exec: "%enginePath% template=%template% format=html output=%html% config=%intermediate%/jsdoc.conf input=%intermediate%"
      },
      markdown: {
        exec: "%enginePath% template=%template% format=markdown output=%markdown% config=%intermediate%/jsdoc.conf input=%intermediate%"
      }
    }

  }

}
```
Key elements of this file are:

__format__  
This specifies which format(s) of output documentation should be rendered.  
The value can be "markdown" or "html", or "html,markdown" (or "markdown,html")

__engine__  
Specifies which rendering engine to use.  
Supported documentation rendering comes from separately installed
versions of `jsdoc`, `jsdoc2md`, and/or `documentation`, as detailed
in the [Getting Started](Getting Started) section.  
Values here may be:
- "jsdoc" to use JSDoc or JSDoc2md
- "docjs" to use DocumentationJS

It may also be "other" to invoke a custom script or command rather than
one of the supported engines directly.  This feature is considered experimental.

__enginePath__  
The chosen engine executable is expected to exist in the system path at runtime.
If it is not, supply the path to the executable to run here directly.
Leave blank in most cases.
If this is a path to a directory, this directory is expected to contain the executable for the chosen engine.   
If the chosen engine is "other", this path should be to the executable command or script to run.
The executable will be run with a series arguments in key=value form.
A custom command or script must be able to understand these arguments.
This is considered an experimental feature.

__template__
This specifies the path to a JSDoc template, if any.  
A template is used to change the appearance of the JSDoc rendered
output.

A number of templates are available for JSDoc.  Some of the more popular include

- [better docs](https://github.com/SoftwareBrothers/better-docs)
- [docstrap](https://docstrap.github.io/docstrap/)
- [minami](https://github.com/Nijikokun/minami)
- [docdash](http://clenemt.github.io/docdash/)

__intermediate__  
This names a directory, relative to the current directory (e.g. project root),
that will be used for generated intermediate files.   
__This directory will be destroyed on each command invocation__ (unless the _--no-clean_ option is passed), so 
it should not be one used to store any project files.  
You should also add this folder to your `.gitignore` list, to keep it excluded
from your repository.

__html__  
This specifies a directory, relative to the current directory (e.g. project root),
that will be used for generated html documentation output.  
This is only used when the _format_ setting specifies html output.  
This folder is created if it does not exist when the command is run, but
is not removed.  You may wish to delete this folder before running a final
documentation pass, as obsolete pages can be left behind from previous runs.

__markdown__  
This specifies a file path, relative to the current directory (e.g. project root),
specifying the markdown file to output for the rendered API (e.g. `docs/API.md `).

This file is created if it does not exist. Any existing file will be
overwritten.

__remaining settings__  
The remainder of the configuration file, as shown in the above example,
is for internal and/or specialized usage, and should not normally be changed.
In any normal circumstance, you will want to keep these values as they are shown
in the example.


##### Back <==  [Getting Started](Getting+Started) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next  ==>  [Generating docs](generating)


