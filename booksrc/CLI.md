
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
pattern matching rules.  The basic concepts are that an '*' matches
any string of characters in a filename, a '**' recurses ino all directories,
but there is much more.  
See this [article](https://en.wikipedia.org/wiki/Glob_%28programming%29)
for more detailed information about glob syntax.

More than one glob pattern may be passed, so that source code in more
than one directory may be processed with the single command.



