
## Doc-holiday command line

Doc-holiday is meant to be invoked from the command line.

In its normal use case, one simply starts at a command prompt where
the current directory is the root of their project.

This project root is
expected to contain a `doc-holiday.conf` file, and source files to be documented
at one or more paths.

Then, running the command, as in

`doc-holiday  src/**`

will parse the sources, generate documentation stubs into an intermediate folder
designated by the configuration, and then render the documentation in the
chosen format (html or markdown, or both).

If no configuration file is present, an error is reported.  

You can specify the location of a config file that is not in the current 
directory with the config option, as in

`doc-holiday config /path/to/doc-holiday.conf src/**`

##### About file globs
Arguments passed to `doc-holiday` other than configuration location options
are meant to be one or more file globs.  
Globs are patterns that include and/or exclude files according to
pattern matching rules.  The basic concepts are that an `*` matches
any string of characters in a filename, a `**` recurses ino all directories,
but there is much more.  
See this [article](https://en.wikipedia.org/wiki/Glob_%28programming%29)
for more detailed information about glob syntax.

More than one glob pattern may be passed, so that source code in more
than one directory or tree may be processed with the single command invocation.

### Command options

typing `doc-holiday` without any arguments will give you the following help
listing:

```
doc-holiday                   

------------------------
     doc-holiday
------------------------

 doc-holiday [options] <file glob list>

 where <file glob list> is one or more glob pattern file locations
( for help on glob patterns, see https://en.wikipedia.org/wiki/Glob_%28programming%29 )
and [options] is one of:
 config <file> -- Specify doc-holiday.conf file location
 config=<file> -- same as above
 -c <file> -- same as above
 -c=<file> -- same as above

 --stubs-only -- Generate stubs to intermediate directory only
 --no-clean -- Do not clear intermediate directory before generation
 --render-only -- Run rendering from stubs (per configuration settings) only
 --analysis -- parse source code and emit analysis json only

```

the non-option arguments passed to _doc-holiday_ are the files or file globs you
wish to process.

You can process a single file:  
`doc-holiday myfile.ts`

Or a selection of files:
`doc-holiday *.ts`

Or all the files within a folder:  
`doc-holiday src/**`  
or `doc-holiday src/**/*.ts`

You can use more advanced glob construct like this one that selects only .js or .ts files
from the src folder:  
`doc-holiday src/**/*.[tj]s`

You can pass more than one location as arguments to create a single combined document
from all the sources.  
`doc-holiday index.ts src/** lib/**`

---
### Options

###### _[config | -c]_ [=] _file_

__Specify which _doc-holiday_ config file to use__  
By default, the options to use are to be found in the current directory
where the _doc-holiday_ command is invoked (typically the root of the project
being documented).  The file name should be `doc-holiday.conf`.   
To use a file with a different name, or in a different location, use the 
_config_ option.  
For example:  
`doc-holiday config alternateName.conf src/**`  
or  
`doc-holiday -c=/Users/myname/confis/doc-holiday.conf src/**`

###### --stubs-only

This will instruct _doc-holiday_ to only generate the jsdoc stub
content to the intermediate directory (as specified by the configuration)
but not run the JSDoc rendering process afterward.  
This may be useful in your own documentation pipeline constructions
if you wish to further post-process the stub files, add to the intermediate folder,
or otherwise defer rendering of the stub content.  
`doc-holiday --stubs-only src/**`

###### --no-clean

By default, _doc-holiday_ will remove all the files from the
intermediate directory before generating stubs.  the _--no-clean__
option disables this behavior, allowing new stubs to be generated
without removing any of the existing files.  Stub files generated with
the same name as an existing file will overwrite their predecessor, 
however.

This option may be useful in your own documentation pipeline construction
if you wish to aggregate conent into the intermediate directory prior
to rendering or some other custom process step.

_--no-clean_ may be combined with _--stubs-only_ also. 

`doc-holiday --no-clean --stubs-only src/**`

###### --render-only

The _--render-only_ option completes the second half of the normal
_doc-holiday_ flow: it invokes the configured JSDoc engine with
the selected options to render the intermediate stub files into
HTML and/or Markdown output.

The _--render-only_ option stands alone and requires no other arguments.

`doc-holiday --render-only`

###### --analysis

Through this option, the CLI presents a JSON output of the source code
analysis object generated by _Doc-Holiday_ from the parsing of the given
source files.  This JSON object array is an array of [`APIInfo`](API#module_types..APIInfo) 
objects representing the analysis for each module.
This CLI invoked mechanism for gathering this analysis for your own
coding uses may be a practical alternative to importing the module and
accessing the API.

`doc-holiday analysis src/**`










