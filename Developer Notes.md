
### Notes on the organization of this code 

This is a NodeJS project (you've probably already guessed that).
Main Source files are written in typescript and found in the `src` directory.
The entry point and API export is in `index.ts`, at the project root.

Typescript is assumed to be installed globally.
The `tsconfig.json` setup specifies that `tsc` will generate js files in `build`.

The `examples` directory holds various scenario cases for code elements
to be documented.  The focus.ts file is meant as a singular case to focus in
on a particular bit during development.  The test- prefixed items are used in the
unit test case, where the output from these are compared to the corresponding
file in `examples/comp`.

The `gen` folder is the intermediate temporary space where the doc stubs
are generated.

The `templates` folder contains a `publish.js` file designed to operate as
an interceptor to whatever template is being used and disabling the default 
sorting behavior.

The remaining files I think are self-explanatory.

The package.json file defines the following NPM style script actions:

- __build__ : clean and compile to build folder
- __go__ : run at the CLI entry point, passing parameters.
- __examples__ : process the examples folder to stdout
- __examples-file__ : process the examples folder to files in `gen`
- __examples-render__ : process examples to html and invoke Chrome to view
- __focus__ : process focus.ts to stdout
- __focus-file__ : process focus.ts to docstub in `gen`
- __focus-render__: process focus.ts to html and invoke Chrome to view
- __test__: run the tests using TapJS
- __test-direct__: run the tests without the test runner
- __docgen__: generate the html with the chosen engine then invoke Chrome to view
- __docgen-docjs__ : doc generation using Documentation JS
- __docgen-jsdoc__ : doc generation using JSDOC
- __docgen-tsdoc__ : doc generation using TSDOC

