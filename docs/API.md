## Modules

<table>
  <thead>
    <tr>
      <th>Module</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><a href="#module_CommentBlock">CommentBlock</a></td>
    <td><h4>CommentBlock (Module)</h4>
<p>Expresses stub output.
Converts SourceInfo-derived data objects into appropriate
JSDOC comment blocks and associated code stubs.</p></td>
    </tr>
<tr>
    <td><a href="#module_CustomRender">CustomRender</a></td>
    <td><h4>CustomRender (Module)</h4>
<p>Handles {{{ }}} extensions
currently supporting <code>text</code>, <code>jsdoc</code>, and <code>plantUML</code></p></td>
    </tr>
<tr>
    <td><a href="#module_execCmd">execCmd</a></td>
    <td><h4>execCmd (Module)</h4>
<p>Module for the <code>executeCommand</code> function</p></td>
    </tr>
<tr>
    <td><a href="#module_Globber">Globber</a></td>
    <td><h4>Globber (Module)</h4>
<p>Module for evaluating glob patterns</p></td>
    </tr>
<tr>
    <td><a href="#module_index">index</a></td>
    <td><h4>index (Module)</h4>
<p>The cli executor and the main API import for Doc-holiday</p></td>
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

<a name="module_CommentBlock" id="module_CommentBlock"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CommentBlock</h5>



<h4>CommentBlock (Module)</h4>
<p>Expresses stub output.
Converts SourceInfo-derived data objects into appropriate
JSDOC comment blocks and associated code stubs.</p>


* [CommentBlock](#module_CommentBlock)
    * [~renderCommentBlock(entityInfo, indent)](#module_CommentBlock..renderCommentBlock)
    * [~renderClassStub(ci, indent, [forClass])](#module_CommentBlock..renderClassStub)
    * [~renderFunctionStub(fi, indent, [forClass])](#module_CommentBlock..renderFunctionStub)
    * [~renderPropertyStub(pi, indent)](#module_CommentBlock..renderPropertyStub)
    * [~renderEnumStub(ei, indent)](#module_CommentBlock..renderEnumStub)


<hr/>

<a name="module_CommentBlock..renderCommentBlock" id="module_CommentBlock..renderCommentBlock"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CommentBlock~renderCommentBlock(entityInfo, indent)</h5>



<p>Renders the comment block for the entity, and its associated stub code</p>

**Kind**: inner method of [`CommentBlock`](#module_CommentBlock)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| entityInfo | `FunctionInfo` \| `ClassInfo` \| `PropertyInfo` \| `EnumInfo` \| `TypedefInfo` | <p>SourceInfo-derived data object of the parsed code entity</p> |
| indent | `number` | <p>indent margin where the comment block begins</p> |


<hr/>

<a name="module_CommentBlock..renderClassStub" id="module_CommentBlock..renderClassStub"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CommentBlock~renderClassStub(ci, indent, [forClass])</h5>



<p>Renders the code stub for a class.
Unless an inner class, the stub will encapsulate other comment blocks and stubs representing the
inner members of this class.</p>

**Kind**: inner method of [`CommentBlock`](#module_CommentBlock)  
**Access**: public  

| Param | Type | Default |
| --- | --- | --- |
| ci | `ClassInfo` |  | 
| indent | `number` |  | 
| [forClass] | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | 


<hr/>

<a name="module_CommentBlock..renderFunctionStub" id="module_CommentBlock..renderFunctionStub"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CommentBlock~renderFunctionStub(fi, indent, [forClass])</h5>



<p>Renders the function stub.
The only purpose for the stub is to give JSDOC rendering engines the entity anchor for the comment
block above.  So the actual 'function' does not need to represent the contract.
Nevertheless, this rendering outputs the parameters and returns a value representing the primitive return type.</p>

**Kind**: inner method of [`CommentBlock`](#module_CommentBlock)  
**Access**: public  

| Param | Type | Default |
| --- | --- | --- |
| fi | `FunctionInfo` |  | 
| indent | `number` |  | 
| [forClass] | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | 


<hr/>

<a name="module_CommentBlock..renderPropertyStub" id="module_CommentBlock..renderPropertyStub"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CommentBlock~renderPropertyStub(pi, indent)</h5>



<p>Renders a code stub for a declared property.</p>

**Kind**: inner method of [`CommentBlock`](#module_CommentBlock)  
**Access**: public  

| Param | Type |
| --- | --- |
| pi | `PropertyInfo` | 
| indent | `number` | 


<hr/>

<a name="module_CommentBlock..renderEnumStub" id="module_CommentBlock..renderEnumStub"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CommentBlock~renderEnumStub(ei, indent)</h5>



<p>Renders a code stub for an Enumeration</p>

**Kind**: inner method of [`CommentBlock`](#module_CommentBlock)  
**Access**: public  

| Param | Type |
| --- | --- |
| ei | `EnumInfo` | 
| indent | `number` | 


<hr/>

<a name="module_CustomRender" id="module_CustomRender"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CustomRender</h5>



<h4>CustomRender (Module)</h4>
<p>Handles {{{ }}} extensions
currently supporting <code>text</code>, <code>jsdoc</code>, and <code>plantUML</code></p>


* [CustomRender](#module_CustomRender)
    * [~handleInternalCustom(name, argMap, text)](#module_CustomRender..handleInternalCustom)
    * [~handleExternalCustom(name, args, text)](#module_CustomRender..handleExternalCustom)


<hr/>

<a name="module_CustomRender..handleInternalCustom" id="module_CustomRender..handleInternalCustom"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CustomRender~handleInternalCustom(name, argMap, text)</h5>



<p>Checks to see if one of the locally handled extensions is being referenced, and if so
performs the requested rendering.</p>
<p>This is called by the CommentBlock processing when it detects a</p>

**Kind**: inner method of [`CustomRender`](#module_CustomRender)  
**Access**: public  

| Param | Type |
| --- | --- |
| name | `string` | 
| argMap | `any` | 
| text | `string` | 


<hr/>

<a name="module_CustomRender..handleExternalCustom" id="module_CustomRender..handleExternalCustom"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CustomRender~handleExternalCustom(name, args, text)</h5>



<p>Checks to see if one of the locally handled extensions is being referenced, and if so
performs the requested rendering.</p>
<p>This is called by the CommentBlock processing when it detects a</p>

**Kind**: inner method of [`CustomRender`](#module_CustomRender)  
**Access**: public  

| Param | Type |
| --- | --- |
| name | `string` | 
| args | `Array.&lt;string&gt;` | 
| text | `string` | 


<hr/>

<a name="module_execCmd" id="module_execCmd"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    execCmd</h5>



<h4>execCmd (Module)</h4>
<p>Module for the <code>executeCommand</code> function</p>


<hr/>

<a name="module_execCmd..executeCommand" id="module_execCmd..executeCommand"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    execCmd~executeCommand(cmd, args, [cwd], [consolePass], [env])</h5>



<p>Execute an external command and return the results
in stdout string, stderr string, return code.
Optionally allow command to echo to console in real time, or run silent.</p>

**Kind**: inner method of [`execCmd`](#module_execCmd)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| cmd | `string` |  | <p>command to execute</p> |
| args | `Array.&lt;any&gt;` |  | <p>to pass to command, as an array</p> |
| [cwd] | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <p>working directory to run command, if not the currently set one</p> |
| [consolePass] | `boolean` | <code>false</code> | <p><code>true</code> to allow command to echo its output in real time</p> |
| [env] | `any` | <code>{}</code> | <p>any environment values, in key=value form.</p> |


<hr/>

<a name="module_Globber" id="module_Globber"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Globber</h5>



<h4>Globber (Module)</h4>
<p>Module for evaluating glob patterns</p>


<hr/>

<a name="module_Globber..getGlobbedFiles" id="module_Globber..getGlobbedFiles"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Globber~getGlobbedFiles(globexp)</h5>



<p>Returns a list of files matching glob expression</p>

**Kind**: inner method of [`Globber`](#module_Globber)  
**Access**: public  

| Param | Type |
| --- | --- |
| globexp | `string` | 


<hr/>

<a name="module_index" id="module_index"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index</h5>



<h4>index (Module)</h4>
<p>The cli executor and the main API import for Doc-holiday</p>


* [index](#module_index)
    * [~DocOptions](#module_index..DocOptions)
    * [~processFileList(files, [outPath])](#module_index..processFileList)
    * [~docstub(content, [options])](#module_index..docstub)
    * [~execute()](#module_index..execute)


<hr/>

<a name="module_index..DocOptions" id="module_index..DocOptions"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index~DocOptions</h5>



<p>Options for stub generation</p>

**Kind**: inner class of [`index`](#module_index)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| sourceType | `string` | <code>&quot;&#x27;ts&#x27;&quot;</code> | <p>either 'ts' (typescript) or 'js' (javascript)</p> |
| stubExtension | `string` | <code>&quot;&#x27;.docstub.js&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_index..processFileList" id="module_index..processFileList"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index~processFileList(files, [outPath])</h5>



<p>Process a list of source files into comment-normalized stubs
output to an output path or generating a string yield callback for each file processed.</p>

**Kind**: inner method of [`index`](#module_index)  
**Access**: public  

| Param | Type | Default |
| --- | --- | --- |
| files | `Array.&lt;string&gt;` |  | 
| [outPath] | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | 


<hr/>

<a name="module_index..docstub" id="module_index..docstub"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index~docstub(content, [options])</h5>



<p>Convert source text into documentation stub output</p>

**Kind**: inner method of [`index`](#module_index)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| content | `string` | <p>The original source to convert</p> |
| [options] | `DocOptions` | <p>Options affecting stub creation</p> |


<hr/>

<a name="module_index..execute" id="module_index..execute"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index~execute()</h5>



<p>Executes the jsdoc or similar documentation generation according to the doc-holiday.conf file settings.
In normal flow, this is called after docstub generation for all source files is complete, and the configuration
is set to generate from the docstub .js files in the intermediate directory (gen).</p>

**Kind**: inner method of [`index`](#module_index)  
**Access**: public  

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
    * [~stubOut()](#module_Output..stubOut)
    * [~writeStubFile(filePath, moduleName, moduleDescription)](#module_Output..writeStubFile)


<hr/>

<a name="module_Output..clearRecorded" id="module_Output..clearRecorded"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~clearRecorded()</h5>



<p>Clears the list of recorded entities</p>

**Kind**: inner method of [`Output`](#module_Output)  
**Access**: public  

<hr/>

<a name="module_Output..recordInfo" id="module_Output..recordInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~recordInfo(info, source)</h5>



<p>Records the information of a parsed entity into the collection</p>

**Kind**: inner method of [`Output`](#module_Output)  
**Access**: public  

| Param | Type |
| --- | --- |
| info | `ClassInfo` \| `FunctionInfo` \| `PropertyInfo` \| `EnumInfo` \| `TypedefInfo` | 
| source | `string` | 


<hr/>

<a name="module_Output..findSourceIndent" id="module_Output..findSourceIndent"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~findSourceIndent(si, source)</h5>



<p>Determines the indent of this source by counting whitespace characters from the preceding line start.
<em>Note: Does not consider tab expansion</em></p>

**Kind**: inner method of [`Output`](#module_Output)  
**Access**: public  

| Param | Type |
| --- | --- |
| si | `SourceInfo` | 
| source | `string` | 


<hr/>

<a name="module_Output..readModuleDescription" id="module_Output..readModuleDescription"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~readModuleDescription(source)</h5>



<p>Examines the top lines of the source for a module description.</p>
<p>A module description is any comment block of one or more lines
starting at the very first line and ending with a blank line below it.</p>
<p><em>Note: for source code that must include a &quot;#!&quot; &quot;shebang&quot; comment as the
first line, the module description comment block can begin on the second line</em></p>

**Kind**: inner method of [`Output`](#module_Output)  
**Access**: public  

| Param | Type |
| --- | --- |
| source | `string` | 


<hr/>

<a name="module_Output..sortRecorded" id="module_Output..sortRecorded"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~sortRecorded()</h5>



<p>Sorts the recorded collection of entity info so that the array is represented in the original
source code order</p>

**Kind**: inner method of [`Output`](#module_Output)  
**Access**: public  

<hr/>

<a name="module_Output..stubOut" id="module_Output..stubOut"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~stubOut()</h5>



<p>Outputs all the recorded entities for a parsed module as a series of comment blocks and code stubs</p>

**Kind**: inner method of [`Output`](#module_Output)  
**Access**: public  

<hr/>

<a name="module_Output..writeStubFile" id="module_Output..writeStubFile"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~writeStubFile(filePath, moduleName, moduleDescription)</h5>



<p>Writes the stubbed version of af module source to the stub file</p>

**Kind**: inner method of [`Output`](#module_Output)  
**Access**: public  

| Param | Type |
| --- | --- |
| filePath | `string` | 
| moduleName | `string` | 
| moduleDescription | `string` | 


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

**Kind**: inner method of [`ProcessFiles`](#module_ProcessFiles)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| srcPath | `string` | <p>The path to the source file to read</p> |
| fncallback | `FICallback` | <p>the function that will receive the FunctionInfo instances emitted by the parse.</p> |
| prcallback | `PICallback` | <p>the function that will receive the PropertyInfo instances emitted by the parse.</p> |
| clscallback | `CICallback` | <p>the function that will receive the ClassInfo instances emitted by the parse.</p> |
| encallback | `EICallback` | <p>the function that will receive the EnumInfo instances emitted by the parse.</p> |
| tdcallback | `TICallback` |  |


<hr/>

<a name="module_ProcessFiles..processSource" id="module_ProcessFiles..processSource"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    ProcessFiles~processSource(contents, ext, fncallback, prcallback, clscallback, encallback, tdcallback)</h5>



<p>Process source as text</p>

**Kind**: inner method of [`ProcessFiles`](#module_ProcessFiles)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| contents | `string` | <p>to process</p> |
| ext | `string` | <p>or 'ts' for javascript or typescript source</p> |
| fncallback | `FICallback` | <p>to call on each FunctionInfo parse</p> |
| prcallback | `PICallback` | <p>to call on each PropertyInfo parse</p> |
| clscallback | `CICallback` | <p>to call on each ClassInfo parse</p> |
| encallback | `EICallback` | <p>to call on each EnumInfo parse</p> |
| tdcallback | `TICallback` |  |


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
        * [.getFunctionName(inClass, text)](#module_SourceReader..SourceReader+getFunctionName)
        * [.extractFunctionInfo(inClass, si)](#module_SourceReader..SourceReader+extractFunctionInfo)
        * [.getClassName(text)](#module_SourceReader..SourceReader+getClassName)
        * [.getExtends(text)](#module_SourceReader..SourceReader+getExtends)
        * [.getImplements(text)](#module_SourceReader..SourceReader+getImplements)
        * [.findMixins(extDec)](#module_SourceReader..SourceReader+findMixins)
        * [.extractEnumInfo(si)](#module_SourceReader..SourceReader+extractEnumInfo)
        * [.extractTypedefInfo(si)](#module_SourceReader..SourceReader+extractTypedefInfo)
        * [.gatherCommentMeta(fi)](#module_SourceReader..SourceReader+gatherCommentMeta)


<hr/>

<a name="module_SourceReader..SourceReader" id="module_SourceReader..SourceReader"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    SourceReader~SourceReader</h5>



<p>The primary source parsing object.
Maintains its parsing position in the source internally.</p>
<p>Call <code>getApiInfo</code> to receive a full analysis of the given source.</p>

**Kind**: inner class of [`SourceReader`](#module_SourceReader)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| startIndex | `string` | <p>returns the position past skipped white space in a given string</p> |
| longsrc | `string` | <p>Try to build a valid FunctionInfo entity from the given SourceInfo</p> |
| bracket | `string` | <p>Find the start and end positions of potentially nested source code brackets</p> |
| isType | `string` | <p>recurses into <code>getApiInfo</code> for all entities within the class scope.</p> |


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
    * [.getFunctionName(inClass, text)](#module_SourceReader..SourceReader+getFunctionName)
    * [.extractFunctionInfo(inClass, si)](#module_SourceReader..SourceReader+extractFunctionInfo)
    * [.getClassName(text)](#module_SourceReader..SourceReader+getClassName)
    * [.getExtends(text)](#module_SourceReader..SourceReader+getExtends)
    * [.getImplements(text)](#module_SourceReader..SourceReader+getImplements)
    * [.findMixins(extDec)](#module_SourceReader..SourceReader+findMixins)
    * [.extractEnumInfo(si)](#module_SourceReader..SourceReader+extractEnumInfo)
    * [.extractTypedefInfo(si)](#module_SourceReader..SourceReader+extractTypedefInfo)
    * [.gatherCommentMeta(fi)](#module_SourceReader..SourceReader+gatherCommentMeta)


<hr/>

<a name="new_module_SourceReader..SourceReader_new" id="new_module_SourceReader..SourceReader_new"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    new SourceReader(srcText, ext)</h5>




| Param | Type |
| --- | --- |
| srcText | `*` | 
| ext | `*` | 


<hr/>

<a name="module_SourceReader..SourceReader+skipTop" id="module_SourceReader..SourceReader+skipTop"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.skipTop()</h5>



<p>Skip things line &quot;use strict&quot; at the top.</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+skipWhite" id="module_SourceReader..SourceReader+skipWhite"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.skipWhite()</h5>



<p>advance past white space in parsing</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+findWhite" id="module_SourceReader..SourceReader+findWhite"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.findWhite(str, startIndex)</h5>



<p>advances to the next start of white space in parsing</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| str | `*` | 
| startIndex | `*` | 


<hr/>

<a name="module_SourceReader..SourceReader+readNextWord" id="module_SourceReader..SourceReader+readNextWord"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.readNextWord(str, startIndex)</h5>



<p>reads the next word, stopping at comma or whitespace</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| str | `*` | 
| startIndex | `*` | 


<hr/>

<a name="module_SourceReader..SourceReader+skipImport" id="module_SourceReader..SourceReader+skipImport"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.skipImport()</h5>



<p>skips past an import statement</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+skipExport" id="module_SourceReader..SourceReader+skipExport"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.skipExport()</h5>



<p>skips past an export statement</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+skipRequire" id="module_SourceReader..SourceReader+skipRequire"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.skipRequire()</h5>



<p>skips past a require statement</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+nextEnd" id="module_SourceReader..SourceReader+nextEnd"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.nextEnd()</h5>



<p>finds the next end of line or start of comment</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+readSourceLine" id="module_SourceReader..SourceReader+readSourceLine"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.readSourceLine()</h5>



<p>Reads the next line of source, discrening the start and end of the comment block and code declaration.</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+readTypeDef" id="module_SourceReader..SourceReader+readTypeDef"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.readTypeDef(str, startIndex)</h5>



<p>Read a type description. Includes support for template types.</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| str | `*` | 
| startIndex | `*` | 


<hr/>

<a name="module_SourceReader..SourceReader+getFunctionName" id="module_SourceReader..SourceReader+getFunctionName"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.getFunctionName(inClass, text)</h5>



<p>Determines if the source appears to be a function, and if so returns the function name.
Otherwise an empty string ('') is returned.</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| inClass | `boolean` | <p>if we are parsing a class</p> |
| text | `string` |  |


<hr/>

<a name="module_SourceReader..SourceReader+extractFunctionInfo" id="module_SourceReader..SourceReader+extractFunctionInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.extractFunctionInfo(inClass, si)</h5>



<p>First step in identifying a function from the given SourceInfo
before possibly handing off to <code>extractMethodInfo</code></p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| inClass | `boolean` | 
| si | `SourceInfo` | 


<hr/>

<a name="module_SourceReader..SourceReader+getClassName" id="module_SourceReader..SourceReader+getClassName"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.getClassName(text)</h5>



<p>Used to determine the name of a class or interface</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| text | `string` | 


<hr/>

<a name="module_SourceReader..SourceReader+getExtends" id="module_SourceReader..SourceReader+getExtends"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.getExtends(text)</h5>



<p>if the class extends another, the base class name is returned here</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| text | `string` | 


<hr/>

<a name="module_SourceReader..SourceReader+getImplements" id="module_SourceReader..SourceReader+getImplements"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.getImplements(text)</h5>



<p>If the class implements one or more interfaces, the array of names is returned here</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| text | `string` | 


<hr/>

<a name="module_SourceReader..SourceReader+findMixins" id="module_SourceReader..SourceReader+findMixins"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.findMixins(extDec)</h5>



<p>legacy method to recognize mix-in patterns (alternative to implements)</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| extDec | `string` | 


<hr/>

<a name="module_SourceReader..SourceReader+extractEnumInfo" id="module_SourceReader..SourceReader+extractEnumInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.extractEnumInfo(si)</h5>



<p>Tries to extract EnumInfo from the given SourceInfo position</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| si | `SourceInfo` | 


<hr/>

<a name="module_SourceReader..SourceReader+extractTypedefInfo" id="module_SourceReader..SourceReader+extractTypedefInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.extractTypedefInfo(si)</h5>



<p>Tries to extract TypedefInfo from the given SourceInfo position</p>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| si | `SourceInfo` | 


<hr/>

<a name="module_SourceReader..SourceReader+gatherCommentMeta" id="module_SourceReader..SourceReader+gatherCommentMeta"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.gatherCommentMeta(fi)</h5>



<p>Reads comment block</p>
<ul>
<li>reads primary description</li>
<li>reads JSDoc values from param or return blocks, and use if we don't have these from code parse</li>
</ul>

**Kind**: instance method of [`SourceReader`](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| fi | `FunctionInfo` | 


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
    * [~valueTypeFromString(str)](#module_TypeCheck..valueTypeFromString)
    * [~stringFromValueType(vt)](#module_TypeCheck..stringFromValueType)
    * [~parseConstraintsToMap(typeString, [blockSet])](#module_TypeCheck..parseConstraintsToMap)
    * [~parseConstraints(type, block)](#module_TypeCheck..parseConstraints)


<hr/>

<a name="module_TypeCheck..TypeConstraint" id="module_TypeCheck..TypeConstraint"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~TypeConstraint</h5>



<p>Base form of TypeConstraint.
Defines the base type and the test method.</p>

**Kind**: inner class of [`TypeCheck`](#module_TypeCheck)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | `string` | <p>The type this constraint applies to</p> |
| [note] | `string` | <p>a freeform note that appears in comments. No runtime verification.</p> |
| constructor(typeString | `string` | <ul> <li></li> </ul> |


* [~TypeConstraint](#module_TypeCheck..TypeConstraint)
    * [.test(value)](#module_TypeCheck..TypeConstraint+test)
    * [.toString()](#module_TypeCheck..TypeConstraint+toString)
    * [.describe()](#module_TypeCheck..TypeConstraint+describe)


<hr/>

<a name="module_TypeCheck..TypeConstraint+test" id="module_TypeCheck..TypeConstraint+test"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    typeConstraint.test(value)</h5>



**Kind**: instance method of [`TypeConstraint`](#module_TypeCheck..TypeConstraint)  
**Access**: public  

| Param | Type |
| --- | --- |
| value | `any` | 


<hr/>

<a name="module_TypeCheck..TypeConstraint+toString" id="module_TypeCheck..TypeConstraint+toString"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    typeConstraint.toString()</h5>



**Kind**: instance method of [`TypeConstraint`](#module_TypeCheck..TypeConstraint)  
**Access**: public  

<hr/>

<a name="module_TypeCheck..TypeConstraint+describe" id="module_TypeCheck..TypeConstraint+describe"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    typeConstraint.describe()</h5>



**Kind**: instance method of [`TypeConstraint`](#module_TypeCheck..TypeConstraint)  
**Access**: public  

<hr/>

<a name="module_TypeCheck..ValueType" id="module_TypeCheck..ValueType"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~ValueType</h5>



<p>Enumeration of basic types</p>

**Kind**: inner enum of [`TypeCheck`](#module_TypeCheck)  
**Read only**: true  
**See**

- stringFromValueType
- valueTypeFromString

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| none | `number` | <code>none</code> | <p><b><i>(value = 0)</i></b></p> |
| number | `number` | <code>number</code> | <p><b><i>(value = 1)</i></b></p> |
| string | `number` | <code>string</code> | <p><b><i>(value = 2)</i></b></p> |
| boolean | `number` | <code>boolean</code> | <p><b><i>(value = 3)</i></b></p> |
| object | `number` | <code>object</code> | <p><b><i>(value = 4)</i></b></p> |
| array | `number` | <code>array</code> | <p><b><i>(value = 5)</i></b></p> |
| regex | `number` | <code>regex</code> | <p><b><i>(value = 6)</i></b></p> |


<hr/>

<a name="module_TypeCheck..ElementCheckType" id="module_TypeCheck..ElementCheckType"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~ElementCheckType</h5>



<p>Enumeration of checkType parsed results
parameters (p1, p2) are parsed at same time, and meaning does vary per checkType.</p>

**Kind**: inner enum of [`TypeCheck`](#module_TypeCheck)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| none | `number` | <code>none</code> | <p>don't test the elements <b><i>(value = 0)</i></b></p> |
| all | `number` | <code>all</code> | <p>test all the elements <b><i>(value = 1)</i></b></p> |
| random | `number` | <code>random</code> | <p>test up to a given number (p1) of elements, randomly chosen <b><i>(value = 2)</i></b></p> |
| step | `number` | <code>step</code> | <p>test every (p1) elements <b><i>(value = 3)</i></b></p> |
| firstThenStep | `number` | <code>firstThenStep</code> | <p>test all up to (p1) elements, then every (p2) thereafter <b><i>(value = 4)</i></b></p> |
| firstThenRandom | `number` | <code>firstThenRandom</code> | <p>test all up to (p1) elements, then up to (p2) of the remaining, chosen at random <b><i>(value = 5)</i></b></p> |


<hr/>

<a name="module_TypeCheck..valueTypeFromString" id="module_TypeCheck..valueTypeFromString"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~valueTypeFromString(str)</h5>



<p>Translates a type string (number, string, boolean, object, array, regex) into the corresponding ValueType enum
Note that strings beside none, array, and regex are synonymous with the <code>typeof</code> operator value</p>

**Kind**: inner method of [`TypeCheck`](#module_TypeCheck)  
**Access**: public  

| Param | Type |
| --- | --- |
| str | `string` | 


<hr/>

<a name="module_TypeCheck..stringFromValueType" id="module_TypeCheck..stringFromValueType"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~stringFromValueType(vt)</h5>



<p>Translates a ValueType enum value into the corresponding string.
Note that strings beside none, array, and regex are synonymous with the <code>typeof</code> operator value</p>

**Kind**: inner method of [`TypeCheck`](#module_TypeCheck)  
**Access**: public  

| Param | Type |
| --- | --- |
| vt | `ValueType` | 


<hr/>

<a name="module_TypeCheck..parseConstraintsToMap" id="module_TypeCheck..parseConstraintsToMap"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~parseConstraintsToMap(typeString, [blockSet])</h5>



<p>parse constraints from what may be more than one type (e.g. string|number)</p>

**Kind**: inner method of [`TypeCheck`](#module_TypeCheck)  
**Access**: public  

| Param | Type | Default |
| --- | --- | --- |
| typeString | `string` |  | 
| [blockSet] | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | 


<hr/>

<a name="module_TypeCheck..parseConstraints" id="module_TypeCheck..parseConstraints"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    TypeCheck~parseConstraints(type, block)</h5>



<p>Given a block of text, parse as constraints and return the set if this is a constraint declaration
otherwise, return ConstraintStatus.NotConstraint  to signify this is a description block and not a constraint declaration</p>

**Kind**: inner method of [`TypeCheck`](#module_TypeCheck)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| type | `*` | <ul> <li>the block of text to evaluate</li> </ul> |
| block | `*` | <ul> <li>the type parsed from the param or return declaration</li> </ul> |


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
    * [~FunctionInfo](#module_types..FunctionInfo) ⇐ `SourceInfo`
    * [~ClassInfo](#module_types..ClassInfo) ⇐ `SourceInfo`
    * [~PropertyInfo](#module_types..PropertyInfo) ⇐ `SourceInfo`
    * [~EnumInfo](#module_types..EnumInfo) ⇐ `SourceInfo`
    * [~EnumValueInfo](#module_types..EnumValueInfo)
    * [~TypedefInfo](#module_types..TypedefInfo) ⇐ `SourceInfo`
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

**Kind**: inner class of [`types`](#module_types)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [static] | `string` | <ul> <li></li> </ul> |
| [public] | `string` | <ul> <li></li> </ul> |
| [private] | `string` | <ul> <li></li> </ul> |
| [optional] | `string` | <ul> <li></li> </ul> |
| [const] | `string` | <ul> <li></li> </ul> |
| [async] | `string` | <ul> <li></li> </ul> |
| [generator] | `string` | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..SourceInfo" id="module_types..SourceInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~SourceInfo</h5>



<p>Information of where in the source file this entity exists</p>

**Kind**: inner class of [`types`](#module_types)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| decStart | `string` | <code>-1</code> | <ul> <li></li> </ul> |
| decEnd | `string` | <code>-1</code> | <ul> <li></li> </ul> |
| comStart | `string` | <code>-1</code> | <ul> <li></li> </ul> |
| comEnd | `string` | <code>-1</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..FunctionInfo" id="module_types..FunctionInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~FunctionInfo ⇐ `SourceInfo`</h5>



<p>Information about a function within the source</p>

**Kind**: inner class of [`types`](#module_types)  
**Extends**: `SourceInfo`  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| scope | `string` | <code>&quot;new&quot;</code> | <p>ScopeModifiers() -</p> |
| description | `string` |  | <ul> <li></li> </ul> |
| params | `string` | <code>&quot;[&quot;</code> | <ul> <li></li> </ul> |
| [return] | `string` |  | <ul> <li></li> </ul> |
| bodyStart | `string` | <code>-1</code> | <ul> <li></li> </ul> |
| bodyEnd | `string` | <code>-1</code> | <ul> <li></li> </ul> |
| status | `string` | <code>&quot;SpecificationStatus.None&quot;</code> | <ul> <li></li> </ul> |
| [error] | `string` |  | <p>if defined, holds error detail. status is probably MISMATCH.</p> |


<hr/>

<a name="module_types..ClassInfo" id="module_types..ClassInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~ClassInfo ⇐ `SourceInfo`</h5>



<p>Information about a class within the source</p>

**Kind**: inner class of [`types`](#module_types)  
**Extends**: `SourceInfo`  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| isInterface | `string` |  | <ul> <li></li> </ul> |
| extends | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| scope | `string` | <code>&quot;new&quot;</code> | <p>ScopeModifiers() -</p> |
| implements | `string` | <code>&quot;[&quot;</code> | <ul> <li></li> </ul> |
| mixins | `string` | <code>&quot;[&quot;</code> | <ul> <li></li> </ul> |
| description | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| internals | `string` | <code>&quot;new&quot;</code> | <p>APIInfo() -</p> |
| bodyStart | `string` | <code>-1</code> | <ul> <li></li> </ul> |
| bodyEnd | `string` | <code>-1</code> | <ul> <li></li> </ul> |
| status | `string` | <code>&quot;SpecificationStatus.None&quot;</code> | <ul> <li></li> </ul> |
| [error] | `string` |  | <p>if defined, holds error detail</p> |


<hr/>

<a name="module_types..PropertyInfo" id="module_types..PropertyInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~PropertyInfo ⇐ `SourceInfo`</h5>



<p>Information about a non-function property within a source file or within a class</p>

**Kind**: inner class of [`types`](#module_types)  
**Extends**: `SourceInfo`  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | <code>&quot;\&quot;\&quot;&quot;</code> | <ul> <li></li> </ul> |
| type | `string` | <code>&quot;\&quot;\&quot;&quot;</code> | <ul> <li></li> </ul> |
| scope | `string` | <code>&quot;new&quot;</code> | <p>ScopeModifiers() -</p> |
| description | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| assignStart | `number` | <code>-1</code> | <ul> <li></li> </ul> |
| default | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| TypeConstraint> | `string` | <code>&quot;new&quot;</code> | <p>Map&lt;string, TypeConstraint&gt;() -</p> |


<hr/>

<a name="module_types..EnumInfo" id="module_types..EnumInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~EnumInfo ⇐ `SourceInfo`</h5>



<p>Information about an enum</p>

**Kind**: inner class of [`types`](#module_types)  
**Extends**: `SourceInfo`  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` |  | <ul> <li></li> </ul> |
| scope | `string` | <code>&quot;new&quot;</code> | <p>ScopeModifiers() -</p> |
| description | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| values | `string` | <code>&quot;[&quot;</code> | <ul> <li></li> </ul> |
| bodyStart | `string` | <code>-1</code> | <ul> <li></li> </ul> |
| bodyEnd | `string` | <code>-1</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..EnumValueInfo" id="module_types..EnumValueInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~EnumValueInfo</h5>



<p>Information about a single enum value</p>

**Kind**: inner class of [`types`](#module_types)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | `string` | <ul> <li></li> </ul> |
| type | `string` | <ul> <li></li> </ul> |
| value | `string` | <ul> <li></li> </ul> |
| description | `string` | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..TypedefInfo" id="module_types..TypedefInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~TypedefInfo ⇐ `SourceInfo`</h5>



**Kind**: inner class of [`types`](#module_types)  
**Extends**: `SourceInfo`  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` |  | <ul> <li></li> </ul> |
| form | `string` |  | <ul> <li></li> </ul> |
| type | `string` |  | <ul> <li></li> </ul> |
| description | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| declaration | `string` |  | <ul> <li></li> </ul> |
| TypeConstraint> | `string` | <code>&quot;new&quot;</code> | <p>Map&lt;string, TypeConstraint&gt;() -</p> |
| bodyStart | `string` | <code>-1</code> | <ul> <li></li> </ul> |
| bodyEnd | `string` | <code>-1</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..APIInfo" id="module_types..APIInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~APIInfo</h5>



<p>Top-level collection of all functions, classes, and properties</p>

**Kind**: inner class of [`types`](#module_types)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| functions | `string` | <code>&quot;[&quot;</code> | <ul> <li></li> </ul> |
| classes | `string` | <code>&quot;[&quot;</code> | <ul> <li></li> </ul> |
| properties | `string` | <code>&quot;[&quot;</code> | <ul> <li></li> </ul> |
| enums | `string` | <code>&quot;[&quot;</code> | <ul> <li></li> </ul> |
| typedefs | `string` | <code>&quot;[&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..ParameterInfo" id="module_types..ParameterInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~ParameterInfo</h5>



<p>Information about a parameter</p>

**Kind**: inner class of [`types`](#module_types)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| TypeConstraint> | `string` | <code>&quot;new&quot;</code> | <p>Map&lt;string, TypeConstraint&gt;() -</p> |
| ordinal | `string` |  | <ul> <li></li> </ul> |
| name | `string` |  | <ul> <li></li> </ul> |
| description | `string` |  | <ul> <li></li> </ul> |
| optional | `string` |  | <ul> <li></li> </ul> |
| default | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| status | `string` | <code>&quot;SpecificationStatus.None&quot;</code> | <ul> <li></li> </ul> |
| error | `string` |  | <p>if defined, holds error detail. status is probably MISMATCH.</p> |


<hr/>

<a name="module_types..ReturnInfo" id="module_types..ReturnInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~ReturnInfo</h5>



<p>Information about a return value</p>

**Kind**: inner class of [`types`](#module_types)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| description | `string` |  | <ul> <li></li> </ul> |
| TypeConstraint> | `string` | <code>&quot;new&quot;</code> | <p>Map&lt;string, TypeConstraint&gt;() -</p> |
| status | `string` | <code>&quot;SpecificationStatus.None&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_types..FICallback" id="module_types..FICallback"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~FICallback</h5>



<p>Callback for source reader.
Calls back with FunctionInfo and associated text for each function in source</p>

**Kind**: inner class of [`types`](#module_types)  
**Access**: public  

<hr/>

<a name="module_types..PICallback" id="module_types..PICallback"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~PICallback</h5>



<p>Callback for source reader.
Calls back with PropertyInfo and associated text for each property in source</p>

**Kind**: inner class of [`types`](#module_types)  
**Access**: public  

<hr/>

<a name="module_types..EICallback" id="module_types..EICallback"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~EICallback</h5>



<p>Callback for source reader.
Calls back with EnumInfo and associated text for each enum in source</p>

**Kind**: inner class of [`types`](#module_types)  
**Access**: public  

<hr/>

<a name="module_types..TICallback" id="module_types..TICallback"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~TICallback</h5>



<p>Callback for source reader.
Calls back with TypedefInfo and associated text for each type definition in source</p>

**Kind**: inner class of [`types`](#module_types)  
**Access**: public  

<hr/>

<a name="module_types..CICallback" id="module_types..CICallback"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~CICallback</h5>



<p>Callback for source reader.
Calls back with ClassInfo and associated text for each class in source</p>

**Kind**: inner class of [`types`](#module_types)  
**Access**: public  

<hr/>

<a name="module_types..TypedefForm" id="module_types..TypedefForm"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~TypedefForm</h5>



**Kind**: inner enum of [`types`](#module_types)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Primitive | `number` | <code>Primitive</code> | <p><b><i>(value = 0)</i></b></p> |
| Object | `number` | <code>Object</code> | <p><b><i>(value = 1)</i></b></p> |
| Function | `number` | <code>Function</code> | <p><b><i>(value = 2)</i></b></p> |


<hr/>

<a name="module_types..SpecificationStatus" id="module_types..SpecificationStatus"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    types~SpecificationStatus</h5>



<p>Parse error status for parameter constraints</p>

**Kind**: inner enum of [`types`](#module_types)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| None | `number` | <code>None</code> | <p>not analyzed <b><i>(value = 0)</i></b></p> |
| Okay | `string` | <code>&quot;Okay&quot;</code> | <p>documented and reconciled</p> |
| BadConstraint | `string` | <code>&quot;BadConstraint&quot;</code> | <p>syntax error processing constraint declaration</p> |
| NoDoc | `string` | <code>&quot;NoDoc&quot;</code> | <p>function not documented in JSDoc format</p> |
| Mismatch | `string` | <code>&quot;Mismatch&quot;</code> | <p>JSDoc does not match typescript declaration</p> |

