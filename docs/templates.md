
## Using JSDoc Templates

JSDoc allows custom style templates to be created and used
to inform the rendering of the final documents.

Popular JSDoc templates include 
- [better docs](https://github.com/SoftwareBrothers/better-docs)
- [docstrap](https://docstrap.github.io/docstrap/)
- [minami](https://github.com/Nijikokun/minami)
- [docdash](http://clenemt.github.io/docdash/)

and many others. Google the term 'jsdoc template' to find more.
 
To apply a style template, refer to the instructions associated with that template's documentation.

Typically, you will add the template to your project and
then, in the doc-holiday.conf file, set the "template": value
to "node_modules/template_name", to point to the location of the
template folder.  If this template exist elsewhere, set this path
accordingly.

Note that the templates are designed for the traditional HTML
output of JSDoc.

###### Markdown
`jsdoc2md` formats the markdown via `dmd` which uses `handlebars` templates
and replaceable `--partials`.  Some of these partials have been set for customized
output using replacements in the docholiday/tooling folder, and invoked
by the jsdoc2md command arguments as configured.

These changes follow the suggestions found in [this blog](https://medium.com/@kevinast/integrate-gitbook-jsdoc-974be8df6fb3)

##### DocumentationJS
Themes can also be applied to Documentation JS (html)

Athough the process is similar to that of JSDoc theme customization,
it is a little different.  Read the [instructions](https://github.com/documentationjs/documentation/blob/master/docs/THEMING.md) here.

Then you will need to modify the command for running documentationJS as 
configured in doc-holiday.conf to invoke the --theme option.





