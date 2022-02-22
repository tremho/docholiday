
## Rendering Differences

Different rendering engines and different options can sometimes produce
unexpected results.

If your resulting documentation is missing information, or mis-formatting it in some
way, you may want to try a different rendering engine or a different
style template.

##### Issues with Markdown rendering with j2doc2md
The following items may not appear correctly in your Markdown output
if you have chosen to use 'jsdoc' for your 'engine' configuration setting:

###### Multiple Types
Multiple type declarations for a parameter or return, such as
`string|number|undefined` may not be correctly represented in the
Markdown.  This may appear as `string `\  instead.

###### Array types
An array type that should display as `Array<type>` may appear in a mangled
form, such as `Array.&lt;type&gt;`

###### Other cases of improper XML escapes or quotes
Unwanted XML escapes, such as &quote; or &lt; or &gt; may appear around constant declarations, 
or strings may be represented with an unneccesary extra set of quote marks, such as `'"this is a string"'`
because the jsdoc2md escape handler may be rendering these types improperly.

###### Default `new Class()` and arrays in properties
Declaring a class property with a default value, where the
default value uses the `new` keyword will display incorrectly with the default
value of `new` and the class name in the description.

Also, a class property declared with `[]` or other literal array as the 
default value will also display incorrectly in a similar manner.

_This occurs with JSDoc HTML output as well and is not limited to the 
jsdoc2md behavior_


#### Use Documentation JS
Consider using Documentation JS (engine: 'docjs') if you have problems like the ones
listed above, since this engine outputs to markdown without these issues.

Alternately, you may be able to find templates for JSDoc that handle inconsistencies like these better than others.


