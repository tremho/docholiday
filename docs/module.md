
### Using _Doc-Holiday_ as a code module

_Doc-Holiday_ is a great tool, but perhaps you are a tool writer yourself
and you want to harness the capabilities of _Doc-Holiday_ in your own
app.  That's cool.  And here's how you do it...

But first, are you sure you can't make use of the existing [Command Line Interface](CLI)
to do what you want? Perhaps as part of a larger processing script?

#### Installing and importing the module

First, install doc-holiday locally into the project that will be using it:
```
install @tremho/doc-holiday
```

Look at the exported types and functions as documented in the [API](API) 
and import these from the main module.  
Note that although different portions of the API are portioned off 
and documented as coming from other modules, that all the symbols
are exported from the primary import point at `@tremho/doc-holiday`

import what you will use from this import

```
import {SourceInfo, docstub, analysisJSON, getGlobbedFiles} from "@tremho/doc-holiday"

```

Then use the exposed [API](API) to perform what it is you would like to do.

For example, you could do this:

```typescript
import {processFileList} from "@tremho/doc-holiday"

let generator = processFileList('mySource.ts')
let gen = generator.next()
console.log(gen.value)
```
to output a JSON object analysis of the entities within _mySource.ts_.

See the [API](API) documentation for more information.

