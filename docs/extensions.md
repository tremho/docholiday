
### Extensions

_Doc-Holiday_ supports a potentially expandable syntax for
extended capabilities.

Extensions are surrounded by triple curly brackets, as in 
{{{ }}}

Currently implemented extensions include:

###### {{{jsdoc tag=_tag name_}}
The jsdoc extenstion allows us to force a JSDoc tag into a comment block
if we really want to use one of the JSDoc tags in our own way.
See [JSDoc Tags](JSDoc).

###### {{{plantUML}}}
This allows the following text to be interpreted as PlantUML diagramming directives.
See the [plantUML page](plantUML) for examples.

###### {{{text}}}
This simply passes through the following text block as a normal
block of text, and by itself is simply a no-op.

This may be used to terminate a {{{plantUML}} block of text
and resume a normal comment text block.


