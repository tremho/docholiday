# Doc Holiday

_Simplified and organized documentation solution for Javascript and Typescript using existing JSDoc technologies
in a sensible fashion_

### Avoid "Documentation Disillusionment"
Perhaps you've lived this scenario, or are living it now: You have created your masterwork of code and have been
generally good at commenting your functions, classes, and types using JSDoc syntax. Then you run it through JSDoc and
are dismayed to find that the code documentation is incomplete or incorrect in many cases, and you are forced to go
back into your source code to find and fix bad or missing elements. It can be confusing because JSDoc has so many
tags and not all of them work as you would expect.  

Perhaps more frustrating:  You are now using Typescript for your source code, and have adopted it for type declarations.
But JSDoc does not work well with Typescript, and does not recognize your type declarations or class properties.  Not
to mention your own defined types or enums.  

To document all these things properly you fear you will need to effectively learn to 
master another language in addition to your code -- JSDoc.  

And you thought you were near the end of your project! 

Instead, you need to buckle up for what may be several more weeks before you can get your code to parse into documentation
that properly represents your API.

You can use alternatives, via JSDoc templates such as 
[Better Docs](https://github.com/SoftwareBrothers/better-docs) or [DocStrap](https://github.com/docstrap/docstrap), 
or alternative engines such as [DocumentationJS](https://documentation.js.org),
and these will likely give you prettier output, but may not solve the fundamental problems of having your code recognized
and represented for what it is at the source level.

#### In rides Doc-Holiday
If the idea of shooting it out with JSDoc gives you a bad toothache from grinding your jaw, _Doc-Holiday_ can help.

Take a break from the status-quo of documentation hell and get on with getting published.

_Doc-Holiday_ reads your source code -- whether it be classic JavaScript or (better still) TypeScript -- and identifies
all of your documentable entities, including functions, classes, properties, enums, typedefs, interfaces, and more, and
creates valid JSDoc comment blocks for these written out as intermediate "stub" files before employing your JSDoc engine
(JSDoc, JSDoc2Md, or DocumentationJS) to generate your rendered API documentation.

__The result__: _No more worrying_ about a "second syntax" to learn just to say again what you've already written in code
for the sake of proper documentation.  No more jumping through hoops to get documentation to be rendered as it should be.

In addition, _Doc-Holiday_ comes with impressive features as well

#### Features
- Typescript-aware from the start.  Plain Javascript is also just fine.
- Uses existing JSDoc or DocumentationJS engines and templates, so your output can be styled as you like it to be.
- Recognizes and supports Typescript type declarations, enums, typedefs, interfaces, and more
- Recognizes and supports Mix-Ins
- Recognizes and supports basic JSDoc function comment blocks for @param and @return definitions if not provided by Typescript
- Supports multiple forms for comment descriptions.
- Supports adhoc use of JSDoc tags when needed for exceptional circumstances. 
- Introduces _Constraints_ to allow specification of value ranges in addition to type.
- Provides API support for runtime validation of _Constraints_, if desired.
- Supports [PlantUML](https://plantuml.com) diagrams from within your description blocks.
- May be integrated into larger documentation processing pipelines through either module API or via CLI options. 
