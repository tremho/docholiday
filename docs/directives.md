
### _Doc-Holiday_ parsing directives


#### Using // ##DH-OFF and // ##DH-ON

By default _Doc-Holiday_ will parse all the code
in a given source file, looking for entities and extracting
metadata from these and the associated comment blocks.

It may be desireable to exclude some sections of your source
code from parsing.  Reasons for this might include

- Portions of the API you wish to remain hidden from public documentation
- Parsing problems with unusual code declarations.

Simply include a comment line that begins with ##DH-OFF,
such as these examples:

```typescript
// ##DH-OFF

// ##DH-OFF  Exclude this section from documentation

 /* ## DH-OFF
    the following sections are excluded
  */
```

and then you can turn it back on again later in the file if you wish
with ##DH-ON:

`// ##DH-ON` or 
`// ##DH-ON Resume documentation parsing`

_Using directives to avoid parsing errors_:  
Some declarations may be mistaken for other types of entities by the parser
and thus generate incorrect or garbled stub output.

For example, this code defines some HTML markup as a string.
However, the html notation confuses the _Doc-Holiday_ parser, so it is surrounded
with // ##DH-OFF and // ##DH-ON directives to exclude it from parsing.

```typescript
// ##DH-OFF
const markup = `<span style="float:right; margin-top:-15px; font-size:smaller; color:darkred;">${content}</span>`
// ##DH-ON

```
The `markup` property will not appear in the resulting documentation for this file.


Use of the ##DH-OFF / ##DH-ON directives to avoid parsing issues
should occur only in rare and exceptional cases.  If you feel you are
forced to use these directives to exclude valid code that should be correctly
parsed and documented, please file an issue on the 
_Doc-Holiday_ [issue tracker](https://github.com/tremho/docholiday/issues).


