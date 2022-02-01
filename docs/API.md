## Modules

<table>
  <thead>
    <tr>
      <th>Module</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><a href="#module_Globber">Globber</a></td>
    <td><h4>Globber (Module)</h4>
<p>Module for evaluating glob patterns</p></td>
    </tr>
<tr>
    <td><a href="#module_Output">Output</a></td>
    <td><h4>Output (Module)</h4>
<p>Output module that processes the stub output.</p>
<ul>
<li>records entities that have been parsed  for a module</li>
<li>writes ordered stubs out to a text file that can be processed by a JSDOC engine</li>
</ul></td>
    </tr>
<tr>
    <td><a href="#module_ProcessFiles">ProcessFiles</a></td>
    <td><h4>ProcessFiles (Module)</h4>
<p>Module for handling processing of source files</p></td>
    </tr>
<tr>
    <td><a href="#module_SourceReader">SourceReader</a></td>
    <td><h4>SourceReader (Module)</h4>
<p>Source code reader and parser to identify code entities and extract metadata</p></td>
    </tr>
<tr>
    <td><a href="#module_TypeCheck">TypeCheck</a></td>
    <td><h4>TypeCheck (Module)</h4>
<p>Module for Constraint definitions and TypeCheck support</p></td>
    </tr>
<tr>
    <td><a href="#module_execCmd">execCmd</a></td>
    <td><h4>execCmd (Module)</h4>
<p>Module for the <code>executeCommand</code> function</p></td>
    </tr>
<tr>
    <td><a href="#module_index">index</a></td>
    <td><h4>index (Module)</h4>
<p>The cli executor and the main API import for Doc-holiday</p></td>
    </tr>
<tr>
    <td><a href="#module_types">types</a></td>
    <td><h4>types (Module)</h4>
<p>Details about the scope of an entity</p>
<p>export class ScopeModifiers {
public static?:boolean;
public public?:boolean;
public private?:boolean;
public optional?:boolean;
public const?:boolean;
public async?:boolean;
public generator?:boolean;
}</p></td>
    </tr>
</tbody>
</table>


<hr/>

<a name="module_Globber" id="module_Globber"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Globber</h5>



<h4>Globber (Module)</h4>
<p>Module for evaluating glob patterns</p>


<hr/>

<a name="module_Globber..getGlobbedFiles" id="module_Globber..getGlobbedFiles"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Globber~getGlobbedFiles(globexp) ⇒ <code>Array.&lt;string&gt;</code></h5>



<p>Returns a list of files matching glob expression</p>

**Kind**: inner method of [<code>Globber</code>](#module_Globber)  
**Access**: public  

| Param | Type |
| --- | --- |
| globexp | <code>string</code> | 


<hr/>

<a name="module_Output" id="module_Output"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output</h5>



<h4>Output (Module)</h4>
<p>Output module that processes the stub output.</p>
<ul>
<li>records entities that have been parsed  for a module</li>
<li>writes ordered stubs out to a text file that can be processed by a JSDOC engine</li>
</ul>


* [Output](#module_Output)
    * [~clearRecorded()](#module_Output..clearRecorded)
    * [~recordInfo(info, source)](#module_Output..recordInfo)
    * [~findSourceIndent(si, source)](#module_Output..findSourceIndent)
    * [~readModuleDescription(source)](#module_Output..readModuleDescription)
    * [~sortRecorded()](#module_Output..sortRecorded)
    * [~stubOut()](#module_Output..stubOut) ⇒ <code>string</code>
    * [~writeStubFile(filePath, moduleName, moduleDescription)](#module_Output..writeStubFile)


<hr/>

<a name="module_Output..clearRecorded" id="module_Output..clearRecorded"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~clearRecorded()</h5>



<p>Clears the list of recorded entities</p>

**Kind**: inner method of [<code>Output</code>](#module_Output)  
**Access**: public  

<hr/>

<a name="module_Output..recordInfo" id="module_Output..recordInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~recordInfo(info, source)</h5>



<p>Records the information of a parsed entity into the collection</p>

**Kind**: inner method of [<code>Output</code>](#module_Output)  
**Access**: public  

| Param | Type |
| --- | --- |
| info | <code>ClassInfo</code> \| <code>FunctionInfo</code> \| <code>PropertyInfo</code> \| <code>EnumInfo</code> \| <code>TypedefInfo</code> | 
| source | <code>string</code> | 


<hr/>

<a name="module_Output..findSourceIndent" id="module_Output..findSourceIndent"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~findSourceIndent(si, source)</h5>



<p>Determines the indent of this source by counting whitespace characters from the preceding line start.
<em>Note: Does not consider tab expansion</em></p>

**Kind**: inner method of [<code>Output</code>](#module_Output)  
**Access**: public  

| Param | Type |
| --- | --- |
| si | <code>SourceInfo</code> | 
| source | <code>string</code> | 


<hr/>

<a name="module_Output..readModuleDescription" id="module_Output..readModuleDescription"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~readModuleDescription(source)</h5>



<p>Examines the top lines of the source for a module description.</p>
<p>A module description is any comment block of one or more lines
starting at the very first line and ending with a blank line below it.</p>
<p><em>Note: for source code that must include a &quot;#!&quot; &quot;shebang&quot; comment as the
first line, the module description comment block can begin on the second line</em></p>

**Kind**: inner method of [<code>Output</code>](#module_Output)  
**Access**: public  

| Param | Type |
| --- | --- |
| source | <code>string</code> | 


<hr/>

<a name="module_Output..sortRecorded" id="module_Output..sortRecorded"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~sortRecorded()</h5>



<p>Sorts the recorded collection of entity info so that the array is represented in the original
source code order</p>

**Kind**: inner method of [<code>Output</code>](#module_Output)  
**Access**: public  

<hr/>

<a name="module_Output..stubOut" id="module_Output..stubOut"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~stubOut() ⇒ <code>string</code></h5>



<p>Outputs all the recorded entities for a parsed module as a series of comment blocks and code stubs</p>

**Kind**: inner method of [<code>Output</code>](#module_Output)  
**Access**: public  

<hr/>

<a name="module_Output..writeStubFile" id="module_Output..writeStubFile"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~writeStubFile(filePath, moduleName, moduleDescription)</h5>



<p>Writes the stubbed version of af module source to the stub file</p>

**Kind**: inner method of [<code>Output</code>](#module_Output)  
**Access**: public  

| Param | Type |
| --- | --- |
| filePath | <code>string</code> | 
| moduleName | <code>string</code> | 
| moduleDescription | <code>string</code> | 


<hr/>

<a name="module_ProcessFiles" id="module_ProcessFiles"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    ProcessFiles</h5>



<h4>ProcessFiles (Module)</h4>
<p>Module for handling processing of source files</p>


* [ProcessFiles](#module_ProcessFiles)
    * [~processSourceFile(srcPath, fncallback, prcallback, clscallback, encallback, tdcallback)](#module_ProcessFiles..processSourceFile)
    * [~processSource(contents, ext, fncallback, prcallback, clscallback, encallback, tdcallback)](#module_ProcessFiles..processSource)


<hr/>

<a name="module_ProcessFiles..processSourceFile" id="module_ProcessFiles..processSourceFile"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    ProcessFiles~processSourceFile(srcPath, fncallback, prcallback, clscallback, encallback, tdcallback)</h5>



<p>read and parse the given source file and
emit each instance of FunctionInfo via the given callback</p>

**Kind**: inner method of [<code>ProcessFiles</code>](#module_ProcessFiles)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| srcPath | <code>string</code> | <p>The path to the source file to read</p> |
| fncallback | <code>FICallback</code> | <p>the function that will receive the FunctionInfo instances emitted by the parse.</p> |
| prcallback | <code>PICallback</code> | <p>the function that will receive the PropertyInfo instances emitted by the parse.</p> |
| clscallback | <code>CICallback</code> | <p>the function that will receive the ClassInfo instances emitted by the parse.</p> |
| encallback | <code>EICallback</code> | <p>the function that will receive the EnumInfo instances emitted by the parse.</p> |
| tdcallback | <code>TICallback</code> |  |


<hr/>

<a name="module_ProcessFiles..processSource" id="module_ProcessFiles..processSource"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    ProcessFiles~processSource(contents, ext, fncallback, prcallback, clscallback, encallback, tdcallback)</h5>



<p>Process source as text</p>

**Kind**: inner method of [<code>ProcessFiles</code>](#module_ProcessFiles)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| contents | <code>string</code> | <p>to process</p> |
| ext | <code>string</code> | <p>or 'ts' for javascript or typescript source</p> |
| fncallback | <code>FICallback</code> | <p>to call on each FunctionInfo parse</p> |
| prcallback | <code>PICallback</code> | <p>to call on each PropertyInfo parse</p> |
| clscallback | <code>CICallback</code> | <p>to call on each ClassInfo parse</p> |
| encallback | <code>EICallback</code> | <p>to call on each EnumInfo parse</p> |
| tdcallback | <code>TICallback</code> |  |


<hr/>

<a name="module_SourceReader" id="module_SourceReader"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    SourceReader</h5>



<h4>SourceReader (Module)</h4>
<p>Source code reader and parser to identify code entities and extract metadata</p>


* [SourceReader](#module_SourceReader)
    * [~SourceReader](#module_SourceReader..SourceReader)
        * [new SourceReader(srcText, ext)](#new_module_SourceReader..SourceReader_new)
        * [.skipTop()](#module_SourceReader..SourceReader+skipTop)
        * [.skipWhite()](#module_SourceReader..SourceReader+skipWhite)
        * [.findWhite(str, startIndex)](#module_SourceReader..SourceReader+findWhite)
        * [.readNextWord(str, startIndex)](#module_SourceReader..SourceReader+readNextWord)
        * [.skipImport()](#module_SourceReader..SourceReader+skipImport)
        * [.skipExport()](#module_SourceReader..SourceReader+skipExport)
        * [.skipRequire()](#module_SourceReader..SourceReader+skipRequire)
        * [.nextEnd()](#module_SourceReader..SourceReader+nextEnd)
        * [.readSourceLine()](#module_SourceReader..SourceReader+readSourceLine)
        * [.readTypeDef(str, startIndex)](#module_SourceReader..SourceReader+readTypeDef)
        * [.getFunctionName(inClass, text)](#module_SourceReader..SourceReader+getFunctionName) ⇒ <code>string</code>
        * [.extractFunctionInfo(inClass, si)](#module_SourceReader..SourceReader+extractFunctionInfo) ⇒ <code>FunctionInfo</code>
        * [.getClassName(text)](#module_SourceReader..SourceReader+getClassName) ⇒ <code>string</code>
        * [.getExtends(text)](#module_SourceReader..SourceReader+getExtends) ⇒ <code>string</code>
        * [.getImplements(text)](#module_SourceReader..SourceReader+getImplements) ⇒ <code>Array.&lt;string&gt;</code>
        * [.findMixins(extDec)](#module_SourceReader..SourceReader+findMixins)
        * [.extractEnumInfo(si)](#module_SourceReader..SourceReader+extractEnumInfo) ⇒ <code>EnumInfo</code>
        * [.extractTypedefInfo(si)](#module_SourceReader..SourceReader+extractTypedefInfo) ⇒ <code>TypedefInfo</code>
        * [.gatherCommentMeta(fi)](#module_SourceReader..SourceReader+gatherCommentMeta)


<hr/>

<a name="module_SourceReader..SourceReader" id="module_SourceReader..SourceReader"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    SourceReader~SourceReader</h5>



<p>The primary source parsing object.
Maintains its parsing position in the source internally.</p>
<p>Call <code>getApiInfo</code> to receive a full analysis of the given source.</p>

**Kind**: inner class of [<code>SourceReader</code>](#module_SourceReader)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| startIndex | <code>number</code> | <p>returns the position past skipped white space in a given string</p> |
| longsrc | <code>string</code> | <p>Try to build a valid FunctionInfo entity from the given SourceInfo</p> |
| bracket | <code>string</code> | <p>Find the start and end positions of potentially nested source code brackets</p> |
| isType | <code>string</code> | <p>recurses into <code>getApiInfo</code> for all entities within the class scope.</p> |


* [~SourceReader](#module_SourceReader..SourceReader)
    * [new SourceReader(srcText, ext)](#new_module_SourceReader..SourceReader_new)
    * [.skipTop()](#module_SourceReader..SourceReader+skipTop)
    * [.skipWhite()](#module_SourceReader..SourceReader+skipWhite)
    * [.findWhite(str, startIndex)](#module_SourceReader..SourceReader+findWhite)
    * [.readNextWord(str, startIndex)](#module_SourceReader..SourceReader+readNextWord)
    * [.skipImport()](#module_SourceReader..SourceReader+skipImport)
    * [.skipExport()](#module_SourceReader..SourceReader+skipExport)
    * [.skipRequire()](#module_SourceReader..SourceReader+skipRequire)
    * [.nextEnd()](#module_SourceReader..SourceReader+nextEnd)
    * [.readSourceLine()](#module_SourceReader..SourceReader+readSourceLine)
    * [.readTypeDef(str, startIndex)](#module_SourceReader..SourceReader+readTypeDef)
    * [.getFunctionName(inClass, text)](#module_SourceReader..SourceReader+getFunctionName) ⇒ <code>string</code>
    * [.extractFunctionInfo(inClass, si)](#module_SourceReader..SourceReader+extractFunctionInfo) ⇒ <code>FunctionInfo</code>
    * [.getClassName(text)](#module_SourceReader..SourceReader+getClassName) ⇒ <code>string</code>
    * [.getExtends(text)](#module_SourceReader..SourceReader+getExtends) ⇒ <code>string</code>
    * [.getImplements(text)](#module_SourceReader..SourceReader+getImplements) ⇒ <code>Array.&lt;string&gt;</code>
    * [.findMixins(extDec)](#module_SourceReader..SourceReader+findMixins)
    * [.extractEnumInfo(si)](#module_SourceReader..SourceReader+extractEnumInfo) ⇒ <code>EnumInfo</code>
    * [.extractTypedefInfo(si)](#module_SourceReader..SourceReader+extractTypedefInfo) ⇒ <code>TypedefInfo</code>
    * [.gatherCommentMeta(fi)](#module_SourceReader..SourceReader+gatherCommentMeta)


<hr/>

<a name="new_module_SourceReader..SourceReader_new" id="new_module_SourceReader..SourceReader_new"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    new SourceReader(srcText, ext)</h5>




| Param | Type |
| --- | --- |
| srcText | <code>\*</code> | 
| ext | <code>\*</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+skipTop" id="module_SourceReader..SourceReader+skipTop"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.skipTop()</h5>



<p>Skip things line &quot;use strict&quot; at the top.</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+skipWhite" id="module_SourceReader..SourceReader+skipWhite"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.skipWhite()</h5>



<p>advance past white space in parsing</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+findWhite" id="module_SourceReader..SourceReader+findWhite"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.findWhite(str, startIndex)</h5>



<p>advances to the next start of white space in parsing</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| str | <code>\*</code> | 
| startIndex | <code>\*</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+readNextWord" id="module_SourceReader..SourceReader+readNextWord"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.readNextWord(str, startIndex)</h5>



<p>reads the next word, stopping at comma or whitespace</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| str | <code>\*</code> | 
| startIndex | <code>\*</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+skipImport" id="module_SourceReader..SourceReader+skipImport"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.skipImport()</h5>



<p>skips past an import statement</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+skipExport" id="module_SourceReader..SourceReader+skipExport"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.skipExport()</h5>



<p>skips past an export statement</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+skipRequire" id="module_SourceReader..SourceReader+skipRequire"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.skipRequire()</h5>



<p>skips past a require statement</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+nextEnd" id="module_SourceReader..SourceReader+nextEnd"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.nextEnd()</h5>



<p>finds the next end of line or start of comment</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+readSourceLine" id="module_SourceReader..SourceReader+readSourceLine"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.readSourceLine()</h5>



<p>Reads the next line of source, discrening the start and end of the comment block and code declaration.</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+readTypeDef" id="module_SourceReader..SourceReader+readTypeDef"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.readTypeDef(str, startIndex)</h5>



<p>Read a type description. Includes support for template types.</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| str | <code>\*</code> | 
| startIndex | <code>\*</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+getFunctionName" id="module_SourceReader..SourceReader+getFunctionName"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.getFunctionName(inClass, text) ⇒ <code>string</code></h5>



<p>Determines if the source appears to be a function, and if so returns the function name.
Otherwise an empty string ('') is returned.</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| inClass | <code>boolean</code> | <p>if we are parsing a class</p> |
| text | <code>string</code> |  |


<hr/>

<a name="module_SourceReader..SourceReader+extractFunctionInfo" id="module_SourceReader..SourceReader+extractFunctionInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.extractFunctionInfo(inClass, si) ⇒ <code>FunctionInfo</code></h5>



<p>First step in identifying a function from the given SourceInfo
before possibly handing off to <code>extractMethodInfo</code></p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| inClass | <code>boolean</code> | 
| si | <code>SourceInfo</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+getClassName" id="module_SourceReader..SourceReader+getClassName"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.getClassName(text) ⇒ <code>string</code></h5>



<p>Used to determine the name of a class or interface</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+getExtends" id="module_SourceReader..SourceReader+getExtends"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.getExtends(text) ⇒ <code>string</code></h5>



<p>if the class extends another, the base class name is returned here</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+getImplements" id="module_SourceReader..SourceReader+getImplements"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.getImplements(text) ⇒ <code>Array.&lt;string&gt;</code></h5>



<p>If the class implements one or more interfaces, the array of names is returned here</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+findMixins" id="module_SourceReader..SourceReader+findMixins"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.findMixins(extDec)</h5>



<p>legacy method to recognize mix-in patterns (alternative to implements)</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| extDec | <code>string</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+extractEnumInfo" id="module_SourceReader..SourceReader+extractEnumInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.extractEnumInfo(si) ⇒ <code>EnumInfo</code></h5>



<p>Tries to extract EnumInfo from the given SourceInfo position</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| si | <code>SourceInfo</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+extractTypedefInfo" id="module_SourceReader..SourceReader+extractTypedefInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.extractTypedefInfo(si) ⇒ <code>TypedefInfo</code></h5>



<p>Tries to extract TypedefInfo from the given SourceInfo position</p>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| si | <code>SourceInfo</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+gatherCommentMeta" id="module_SourceReader..SourceReader+gatherCommentMeta"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.gatherCommentMeta(fi)</h5>



<p>Reads comment block</p>
<ul>
<li>reads primary description</li>
<li>reads JSDoc values from</li>
</ul>

**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| fi | <code>FunctionInfo</code> | 


<hr/>

<a name="module_TypeCheck" id="module_TypeCheck"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck</h5>



<h4>TypeCheck (Module)</h4>
<p>Module for Constraint definitions and TypeCheck support</p>


* [TypeCheck](#module_TypeCheck)
    * [~TypeConstraint](#module_TypeCheck..TypeConstraint)
        * [.test(value)](#module_TypeCheck..TypeConstraint+test)
        * [.toString()](#module_TypeCheck..TypeConstraint+toString)
        * [.describe()](#module_TypeCheck..TypeConstraint+describe)
    * [~ValueType](#module_TypeCheck..ValueType)
    * [~ElementCheckType](#module_TypeCheck..ElementCheckType)
    * [~valueTypeFromString(str)](#module_TypeCheck..valueTypeFromString) ⇒ <code>ValueType</code>
    * [~stringFromValueType(vt)](#module_TypeCheck..stringFromValueType) ⇒ <code>string</code>
    * [~parseConstraintsToMap(typeString, [blockSet])](#module_TypeCheck..parseConstraintsToMap) ⇒ <code>Map.&lt;string, TypeConstraint&gt;</code>
    * [~parseConstraints(type, block)](#module_TypeCheck..parseConstraints) ⇒ <code>TypeConstraint</code>


<hr/>

<a name="module_TypeCheck..TypeConstraint" id="module_TypeCheck..TypeConstraint"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~TypeConstraint</h5>



<p>Base form of TypeConstraint.
Defines the base type and the test method.</p>

**Kind**: inner class of [<code>TypeCheck</code>](#module_TypeCheck)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | <p>The type this constraint applies to</p> |
| [note] | <code>string</code> | <p>a freeform note that appears in comments. No runtime verification.</p> |
| constructor(typeString | <code>string</code> | <ul> <li></li> </ul> |


* [~TypeConstraint](#module_TypeCheck..TypeConstraint)
    * [.test(value)](#module_TypeCheck..TypeConstraint+test)
    * [.toString()](#module_TypeCheck..TypeConstraint+toString)
    * [.describe()](#module_TypeCheck..TypeConstraint+describe)


<hr/>

<a name="module_TypeCheck..TypeConstraint+test" id="module_TypeCheck..TypeConstraint+test"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    typeConstraint.test(value)</h5>



**Kind**: instance method of [<code>TypeConstraint</code>](#module_TypeCheck..TypeConstraint)  
**Access**: public  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 


<hr/>

<a name="module_TypeCheck..TypeConstraint+toString" id="module_TypeCheck..TypeConstraint+toString"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    typeConstraint.toString()</h5>



**Kind**: instance method of [<code>TypeConstraint</code>](#module_TypeCheck..TypeConstraint)  
**Access**: public  

<hr/>

<a name="module_TypeCheck..TypeConstraint+describe" id="module_TypeCheck..TypeConstraint+describe"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    typeConstraint.describe()</h5>



**Kind**: instance method of [<code>TypeConstraint</code>](#module_TypeCheck..TypeConstraint)  
**Access**: public  

<hr/>

<a name="module_TypeCheck..ValueType" id="module_TypeCheck..ValueType"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~ValueType</h5>



<p>Enumeration of basic types</p>

**Kind**: inner enum of [<code>TypeCheck</code>](#module_TypeCheck)  
**Read only**: true  
**See**

- stringFromValueType
- valueTypeFromString

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| none | <code>number</code> | <code>none</code> | <p><b><i>(value = 0)</i></b></p> |
| number | <code>number</code> | <code>number</code> | <p><b><i>(value = 1)</i></b></p> |
| string | <code>number</code> | <code>string</code> | <p><b><i>(value = 2)</i></b></p> |
| boolean | <code>number</code> | <code>boolean</code> | <p><b><i>(value = 3)</i></b></p> |
| object | <code>number</code> | <code>object</code> | <p><b><i>(value = 4)</i></b></p> |
| array | <code>number</code> | <code>array</code> | <p><b><i>(value = 5)</i></b></p> |
| regex | <code>number</code> | <code>regex</code> | <p><b><i>(value = 6)</i></b></p> |


<hr/>

<a name="module_TypeCheck..ElementCheckType" id="module_TypeCheck..ElementCheckType"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~ElementCheckType</h5>



<p>Enumeration of checkType parsed results
parameters (p1, p2) are parsed at same time, and meaning does vary per checkType.</p>

**Kind**: inner enum of [<code>TypeCheck</code>](#module_TypeCheck)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| none | <code>number</code> | <code>none</code> | <p>don't test the elements <b><i>(value = 0)</i></b></p> |
| all | <code>number</code> | <code>all</code> | <p>test all the elements <b><i>(value = 1)</i></b></p> |
| random | <code>number</code> | <code>random</code> | <p>test up to a given number (p1) of elements, randomly chosen <b><i>(value = 2)</i></b></p> |
| step | <code>number</code> | <code>step</code> | <p>test every (p1) elements <b><i>(value = 3)</i></b></p> |
| firstThenStep | <code>number</code> | <code>firstThenStep</code> | <p>test all up to (p1) elements, then every (p2) thereafter <b><i>(value = 4)</i></b></p> |
| firstThenRandom | <code>number</code> | <code>firstThenRandom</code> | <p>test all up to (p1) elements, then up to (p2) of the remaining, chosen at random <b><i>(value = 5)</i></b></p> |


<hr/>

<a name="module_TypeCheck..valueTypeFromString" id="module_TypeCheck..valueTypeFromString"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~valueTypeFromString(str) ⇒ <code>ValueType</code></h5>



<p>Translates a type string (number, string, boolean, object, array, regex) into the corresponding ValueType enum
Note that strings beside none, array, and regex are synonymous with the <code>typeof</code> operator value</p>

**Kind**: inner method of [<code>TypeCheck</code>](#module_TypeCheck)  
**Access**: public  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<hr/>

<a name="module_TypeCheck..stringFromValueType" id="module_TypeCheck..stringFromValueType"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~stringFromValueType(vt) ⇒ <code>string</code></h5>



<p>Translates a ValueType enum value into the corresponding string.
Note that strings beside none, array, and regex are synonymous with the <code>typeof</code> operator value</p>

**Kind**: inner method of [<code>TypeCheck</code>](#module_TypeCheck)  
**Access**: public  

| Param | Type |
| --- | --- |
| vt | <code>ValueType</code> | 


<hr/>

<a name="module_TypeCheck..parseConstraintsToMap" id="module_TypeCheck..parseConstraintsToMap"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~parseConstraintsToMap(typeString, [blockSet]) ⇒ <code>Map.&lt;string, TypeConstraint&gt;</code></h5>



<p>parse constraints from what may be more than one type (e.g. string|number)</p>

**Kind**: inner method of [<code>TypeCheck</code>](#module_TypeCheck)  
**Access**: public  

| Param | Type | Default |
| --- | --- | --- |
| typeString | <code>string</code> |  | 
| [blockSet] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 


<hr/>

<a name="module_TypeCheck..parseConstraints" id="module_TypeCheck..parseConstraints"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~parseConstraints(type, block) ⇒ <code>TypeConstraint</code></h5>



<p>Given a block of text, parse as constraints and return the set if this is a constraint declaration
otherwise, return ConstraintStatus.NotConstraint  to signify this is a description block and not a constraint declaration</p>

**Kind**: inner method of [<code>TypeCheck</code>](#module_TypeCheck)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>\*</code> | <ul> <li>the block of text to evaluate</li> </ul> |
| block | <code>\*</code> | <ul> <li>the type parsed from the param or return declaration</li> </ul> |


<hr/>

<a name="module_execCmd" id="module_execCmd"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    execCmd</h5>



<h4>execCmd (Module)</h4>
<p>Module for the <code>executeCommand</code> function</p>


<hr/>

<a name="module_execCmd..executeCommand" id="module_execCmd..executeCommand"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    execCmd~executeCommand(cmd, args, [cwd], provide, set) ⇒ <code>Promise.&lt;any&gt;</code></h5>



<p>Execute an external command and return the results
in stdout string, stderr string, return code.
Optionally allow command to echo to console in real time, or run silent.</p>

**Kind**: inner method of [<code>execCmd</code>](#module_execCmd)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| cmd | <code>object</code> |  | <p>command to execute</p> |
| args | <code>object</code> |  | <p>to pass to command, as an array</p> |
| [cwd] | <code>any</code> | <code>&#x27;&#x27;,consolePass&#x3D;false,env &#x3D; {}</code> | <p>working directory to run command, if not the currently set one</p> |
| provide | <code>\*</code> |  |  |
| set | <code>\*</code> |  |  |


<hr/>

<a name="module_index" id="module_index"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index</h5>



<h4>index (Module)</h4>
<p>The cli executor and the main API import for Doc-holiday</p>


* [index](#module_index)
    * [~DocOptions](#module_index..DocOptions)
    * [~processFileList(files, [outPath])](#module_index..processFileList) ⇒ <code>Generator.&lt;string&gt;</code>
    * [~docstub(content, [options])](#module_index..docstub)
    * [~execute()](#module_index..execute)


<hr/>

<a name="module_index..DocOptions" id="module_index..DocOptions"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index~DocOptions</h5>



<p>Options for stub generation</p>

**Kind**: inner class of [<code>index</code>](#module_index)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| sourceType | <code>string</code> | <code>&quot;&#x27;ts&#x27;&quot;</code> | <p>either 'ts' (typescript) or 'js' (javascript)</p> |
| stubExtension | <code>string</code> | <code>&quot;&#x27;.docstub.js&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_index..processFileList" id="module_index..processFileList"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index~processFileList(files, [outPath]) ⇒ <code>Generator.&lt;string&gt;</code></h5>



<p>Process a list of source files into comment-normalized stubs
output to an output path or generating a string yield callback for each file processed.</p>

**Kind**: inner method of [<code>index</code>](#module_index)  
**Access**: public  

| Param | Type | Default |
| --- | --- | --- |
| files | <code>Array.&lt;string&gt;</code> |  | 
| [outPath] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 


<hr/>

<a name="module_index..docstub" id="module_index..docstub"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index~docstub(content, [options])</h5>



<p>Convert source text into documentation stub output</p>

**Kind**: inner method of [<code>index</code>](#module_index)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | <p>The original source to convert</p> |
| [options] | <code>DocOptions</code> | <p>Options affecting stub creation</p> |


<hr/>

<a name="module_index..execute" id="module_index..execute"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index~execute()</h5>



<p>Executes the jsdoc or similar documentation generation according to the doc-holiday.conf file settings.
In normal flow, this is called after docstub generation for all source files is complete, and the configuration
is set to generate from the docstub .js files in the intermediate directory (gen).</p>

**Kind**: inner method of [<code>index</code>](#module_index)  
**Access**: public  

<hr/>

<a name="module_types" id="module_types"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types</h5>



<h4>types (Module)</h4>
<p>Details about the scope of an entity</p>
<p>export class ScopeModifiers {
public static?:boolean;
public public?:boolean;
public private?:boolean;
public optional?:boolean;
public const?:boolean;
public async?:boolean;
public generator?:boolean;
}</p>


* [types](#module_types)
    * [~ScopeModifiers](#module_types..ScopeModifiers)
    * [~SourceInfo](#module_types..SourceInfo)
    * [~FunctionInfo](#module_types..FunctionInfo) ⇐ <code>SourceInfo</code>
    * [~ClassInfo](#module_types..ClassInfo) ⇐ <code>SourceInfo</code>
    * [~PropertyInfo](#module_types..PropertyInfo) ⇐ <code>SourceInfo</code>
    * [~EnumInfo](#module_types..EnumInfo) ⇐ <code>SourceInfo</code>
    * [~EnumValueInfo](#module_types..EnumValueInfo)
    * [~TypedefInfo](#module_types..TypedefInfo) ⇐ <code>SourceInfo</code>
    * [~APIInfo](#module_types..APIInfo)
    * [~ParameterInfo](#module_types..ParameterInfo)
    * [~ReturnInfo](#module_types..ReturnInfo)
    * [~FICallback](#module_types..FICallback)
    * [~PICallback](#module_types..PICallback)
    * [~EICallback](#module_types..EICallback)
    * [~TICallback](#module_types..TICallback)
    * [~CICallback](#module_types..CICallback)
    * [~TypedefForm](#module_types..TypedefForm)
    * [~SpecificationStatus](#module_types..SpecificationStatus)


<hr/>

<a name="module_types..ScopeModifiers" id="module_types..ScopeModifiers"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~ScopeModifiers</h5>



<p>Details about the scope of an entity</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [static] | <code>boolean</code> | <ul> <li></li> </ul> |
| [public] | <code>boolean</code> | <ul> <li></li> </ul> |
| [private] | <code>boolean</code> | <ul> <li></li> </ul> |
| [optional] | <code>boolean</code> | <ul> <li></li> </ul> |
| [const] | <code>boolean</code> | <ul> <li></li> </ul> |
| [async] | <code>boolean</code> | <ul> <li></li> </ul> |
| [generator] | <code>boolean</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..SourceInfo" id="module_types..SourceInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~SourceInfo</h5>



<p>Information of where in the source file this entity exists</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| decStart | <code>number</code> | <code>-1</code> | <ul> <li></li> </ul> |
| decEnd | <code>number</code> | <code>-1</code> | <ul> <li></li> </ul> |
| comStart | <code>number</code> | <code>-1</code> | <ul> <li></li> </ul> |
| comEnd | <code>number</code> | <code>-1</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..FunctionInfo" id="module_types..FunctionInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~FunctionInfo ⇐ <code>SourceInfo</code></h5>



<p>Information about a function within the source</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Extends**: <code>SourceInfo</code>  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| scope | <code>ScopeModifiers</code> | <code>new</code> | <p>ScopeModifiers() -</p> |
| description | <code>string</code> |  | <ul> <li></li> </ul> |
| params | <code>Array.&lt;ParameterInfo&gt;</code> | <code>[</code> | <ul> <li></li> </ul> |
| [return] | <code>ReturnInfo</code> |  | <ul> <li></li> </ul> |
| bodyStart | <code>number</code> | <code>-1</code> | <ul> <li></li> </ul> |
| bodyEnd | <code>number</code> | <code>-1</code> | <ul> <li></li> </ul> |
| status | <code>SpecificationStatus</code> | <code>SpecificationStatus.None</code> | <ul> <li></li> </ul> |
| [error] | <code>string</code> |  | <p>if defined, holds error detail. status is probably MISMATCH.</p> |


<hr/>

<a name="module_types..ClassInfo" id="module_types..ClassInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~ClassInfo ⇐ <code>SourceInfo</code></h5>



<p>Information about a class within the source</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Extends**: <code>SourceInfo</code>  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| isInterface | <code>boolean</code> |  | <ul> <li></li> </ul> |
| extends | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| scope | <code>ScopeModifiers</code> | <code>new</code> | <p>ScopeModifiers() -</p> |
| implements | <code>Array.&lt;string&gt;</code> | <code>[</code> | <ul> <li></li> </ul> |
| mixins | <code>Array.&lt;string&gt;</code> | <code>[</code> | <ul> <li></li> </ul> |
| description | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| internals | <code>APIInfo</code> | <code>new</code> | <p>APIInfo() -</p> |
| bodyStart | <code>number</code> | <code>-1</code> | <ul> <li></li> </ul> |
| bodyEnd | <code>number</code> | <code>-1</code> | <ul> <li></li> </ul> |
| status | <code>SpecificationStatus</code> | <code>SpecificationStatus.None</code> | <ul> <li></li> </ul> |
| [error] | <code>string</code> |  | <p>if defined, holds error detail</p> |


<hr/>

<a name="module_types..PropertyInfo" id="module_types..PropertyInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~PropertyInfo ⇐ <code>SourceInfo</code></h5>



<p>Information about a non-function property within a source file or within a class</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Extends**: <code>SourceInfo</code>  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | <ul> <li></li> </ul> |
| type | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | <ul> <li></li> </ul> |
| scope | <code>ScopeModifiers</code> | <code>new</code> | <p>ScopeModifiers() -</p> |
| description | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| assignStart | <code>number</code> | <code>-1</code> | <ul> <li></li> </ul> |
| default | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| TypeConstraint> | <code>string</code> | <code>&quot;new&quot;</code> | <p>Map&lt;string, TypeConstraint&gt;() -</p> |


<hr/>

<a name="module_types..EnumInfo" id="module_types..EnumInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~EnumInfo ⇐ <code>SourceInfo</code></h5>



<p>Information about an enum</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Extends**: <code>SourceInfo</code>  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | <ul> <li></li> </ul> |
| scope | <code>ScopeModifiers</code> | <code>new</code> | <p>ScopeModifiers() -</p> |
| description | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| values | <code>Array.&lt;EnumValueInfo&gt;</code> | <code>[</code> | <ul> <li></li> </ul> |
| bodyStart | <code>number</code> | <code>-1</code> | <ul> <li></li> </ul> |
| bodyEnd | <code>number</code> | <code>-1</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..EnumValueInfo" id="module_types..EnumValueInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~EnumValueInfo</h5>



<p>Information about a single enum value</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <ul> <li></li> </ul> |
| type | <code>string</code> | <ul> <li></li> </ul> |
| value | <code>string</code> \| <code>number</code> | <ul> <li></li> </ul> |
| description | <code>string</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..TypedefInfo" id="module_types..TypedefInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~TypedefInfo ⇐ <code>SourceInfo</code></h5>



**Kind**: inner class of [<code>types</code>](#module_types)  
**Extends**: <code>SourceInfo</code>  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | <ul> <li></li> </ul> |
| form | <code>TypedefForm</code> |  | <ul> <li></li> </ul> |
| type | <code>string</code> |  | <ul> <li></li> </ul> |
| description | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| declaration | <code>FunctionInfo</code> \| <code>ClassInfo</code> |  | <ul> <li></li> </ul> |
| TypeConstraint> | <code>string</code> | <code>&quot;new&quot;</code> | <p>Map&lt;string, TypeConstraint&gt;() -</p> |
| bodyStart | <code>number</code> | <code>-1</code> | <ul> <li></li> </ul> |
| bodyEnd | <code>number</code> | <code>-1</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..APIInfo" id="module_types..APIInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~APIInfo</h5>



<p>Top-level collection of all functions, classes, and properties</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| functions | <code>Array.&lt;FunctionInfo&gt;</code> | <code>[</code> | <ul> <li></li> </ul> |
| classes | <code>Array.&lt;ClassInfo&gt;</code> | <code>[</code> | <ul> <li></li> </ul> |
| properties | <code>Array.&lt;PropertyInfo&gt;</code> | <code>[</code> | <ul> <li></li> </ul> |
| enums | <code>Array.&lt;EnumInfo&gt;</code> | <code>[</code> | <ul> <li></li> </ul> |
| typedefs | <code>Array.&lt;TypedefInfo&gt;</code> | <code>[</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..ParameterInfo" id="module_types..ParameterInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~ParameterInfo</h5>



<p>Information about a parameter</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| TypeConstraint> | <code>string</code> | <code>&quot;new&quot;</code> | <p>Map&lt;string, TypeConstraint&gt;() -</p> |
| ordinal | <code>number</code> |  | <ul> <li></li> </ul> |
| name | <code>string</code> |  | <ul> <li></li> </ul> |
| description | <code>string</code> |  | <ul> <li></li> </ul> |
| optional | <code>boolean</code> |  | <ul> <li></li> </ul> |
| default | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| status | <code>SpecificationStatus</code> | <code>SpecificationStatus.None</code> | <ul> <li></li> </ul> |
| error | <code>string</code> |  | <p>if defined, holds error detail. status is probably MISMATCH.</p> |


<hr/>

<a name="module_types..ReturnInfo" id="module_types..ReturnInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~ReturnInfo</h5>



<p>Information about a return value</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| description | <code>string</code> |  | <ul> <li></li> </ul> |
| TypeConstraint> | <code>string</code> | <code>&quot;new&quot;</code> | <p>Map&lt;string, TypeConstraint&gt;() -</p> |
| status | <code>SpecificationStatus</code> | <code>SpecificationStatus.None</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..FICallback" id="module_types..FICallback"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~FICallback</h5>



<p>Callback for source reader.
Calls back with FunctionInfo and associated text for each function in source</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Access**: public  

<hr/>

<a name="module_types..PICallback" id="module_types..PICallback"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~PICallback</h5>



<p>Callback for source reader.
Calls back with PropertyInfo and associated text for each property in source</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Access**: public  

<hr/>

<a name="module_types..EICallback" id="module_types..EICallback"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~EICallback</h5>



<p>Callback for source reader.
Calls back with EnumInfo and associated text for each enum in source</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Access**: public  

<hr/>

<a name="module_types..TICallback" id="module_types..TICallback"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~TICallback</h5>



<p>Callback for source reader.
Calls back with TypedefInfo and associated text for each type definition in source</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Access**: public  

<hr/>

<a name="module_types..CICallback" id="module_types..CICallback"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~CICallback</h5>



<p>Callback for source reader.
Calls back with ClassInfo and associated text for each class in source</p>

**Kind**: inner class of [<code>types</code>](#module_types)  
**Access**: public  

<hr/>

<a name="module_types..TypedefForm" id="module_types..TypedefForm"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~TypedefForm</h5>



**Kind**: inner enum of [<code>types</code>](#module_types)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Primitive | <code>number</code> | <code>Primitive</code> | <p><b><i>(value = 0)</i></b></p> |
| Object | <code>number</code> | <code>Object</code> | <p><b><i>(value = 1)</i></b></p> |
| Function | <code>number</code> | <code>Function</code> | <p><b><i>(value = 2)</i></b></p> |


<hr/>

<a name="module_types..SpecificationStatus" id="module_types..SpecificationStatus"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~SpecificationStatus</h5>



<p>Parse error status for parameter constraints</p>

**Kind**: inner enum of [<code>types</code>](#module_types)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| None | <code>number</code> | <code>None</code> | <p>not analyzed <b><i>(value = 0)</i></b></p> |
| Okay | <code>string</code> | <code>&quot;Okay&quot;</code> | <p>documented and reconciled</p> |
| BadConstraint | <code>string</code> | <code>&quot;BadConstraint&quot;</code> | <p>syntax error processing constraint declaration</p> |
| NoDoc | <code>string</code> | <code>&quot;NoDoc&quot;</code> | <p>function not documented in JSDoc format</p> |
| Mismatch | <code>string</code> | <code>&quot;Mismatch&quot;</code> | <p>JSDoc does not match typescript declaration</p> |

