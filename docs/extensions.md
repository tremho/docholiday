
### Extensions

_Doc-Holiday_ supports a potentially expandable syntax for
extended capabilities.

Extensions are surrounded by triple curly brackets, as in 

&#123;&#123;&#123;  &#125;&#125;&#125;

Currently implemented extensions include:

###### &#123;&#123;&#123;jsdoc tag=_"tag name"_&#125;&#125;&#125;
The jsdoc extenstion allows us to force a JSDoc tag into a comment block
if we really want to use one of the JSDoc tags in our own way.
See [JSDoc Tags](JSDoc).  The tag name given for the tag= property must be within quotes.
place any content this tag may require after the extension expression. 

###### &#123;&#123;&#123;plantUML&#125;&#125;&#125;
This allows the following text to be interpreted as PlantUML diagramming directives.
See the [plantUML page](plantUML) for examples.

###### &#123;&#123;&#123;text&#125;&#125;&#125;
This simply passes through the following text block as a normal
block of text, and by itself is simply a no-op.

This may be used to terminate a &#123;&#123;&#123;plantUML&#125;&#125;&#125; block of text
and resume a normal comment text block.


