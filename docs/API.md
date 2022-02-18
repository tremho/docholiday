## Modules

<table>
  <thead>
    <tr>
      <th>Module</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
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
<p>The cli executor and the main API import for Doc-holiday</p>
<h5>Prime Export</h5>
<p>This is the prime module for import, and although other code modules are listed in the documentation
as the source modules, do not try to import these modules directly.  All symbols can be found at the
prime <code>index</code> root.</p>
<p><em>for example</em>:</p>
<pre class="prettyprint source"><code>import {SourceInfo, analysisJSON} from &quot;@tremho/doc-holiday&quot;
</code></pre>
<p>will work to bring in <code>SourceInfo</code> (from <code>types</code>) and <code>analysisJSON</code> (from <code>Output</code>)</p></td>
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

<a name="module_execCmd" id="module_execCmd"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    execCmd</h5>



<h4>execCmd (Module)</h4>
<p>Module for the <code>executeCommand</code> function</p>


<hr/>

<a name="module_execCmd..executeCommand" id="module_execCmd..executeCommand"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    execCmd~executeCommand(cmd, args, [cwd], [consolePass], [env]) ⇒ `Promise.&lt;any&gt;`</h5>



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
    Globber~getGlobbedFiles(globexp) ⇒ `Array.&lt;string&gt;`</h5>



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
<h5>Prime Export</h5>
<p>This is the prime module for import, and although other code modules are listed in the documentation
as the source modules, do not try to import these modules directly.  All symbols can be found at the
prime <code>index</code> root.</p>
<p><em>for example</em>:</p>
<pre class="prettyprint source"><code>import {SourceInfo, analysisJSON} from &quot;@tremho/doc-holiday&quot;
</code></pre>
<p>will work to bring in <code>SourceInfo</code> (from <code>types</code>) and <code>analysisJSON</code> (from <code>Output</code>)</p>


* [index](#module_index)
    * [~DocOptions](#module_index..DocOptions)
    * [~processSource](#module_index..processSource) : `string`
    * [~sortRecorded](#module_index..sortRecorded) : `string`
    * [~analysisJSON](#module_index..analysisJSON) : `string`
    * [~processFileList(files, [outPath])](#module_index..processFileList) ⇒ `Generator.&lt;string&gt;`
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

<a name="module_index..processSource" id="module_index..processSource"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index~processSource : `string`</h5>



<p><a href="#module_ProcessFiles..processSource">documented in ProcessFiles</a></p>

**Kind**: inner property of [`index`](#module_index)  
**Access**: public  

<hr/>

<a name="module_index..sortRecorded" id="module_index..sortRecorded"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index~sortRecorded : `string`</h5>



**Kind**: inner property of [`index`](#module_index)  
**Access**: public  

<hr/>

<a name="module_index..analysisJSON" id="module_index..analysisJSON"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index~analysisJSON : `string`</h5>



**Kind**: inner property of [`index`](#module_index)  
**Access**: public  

<hr/>

<a name="module_index..processFileList" id="module_index..processFileList"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    index~processFileList(files, [outPath]) ⇒ `Generator.&lt;string&gt;`</h5>



<p>Process a list of source files into comment-normalized stubs
output to an output path or generating an analysis JSON yield for each file processed.</p>

**Kind**: inner method of [`index`](#module_index)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| files | `Array.&lt;string&gt;` |  |  |
| [outPath] | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <p>if '', analysis JSON will be emitted instead on each yield</p> |


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
    * [~analysisJSON()](#module_Output..analysisJSON)
    * [~recordInfo(info, source)](#module_Output..recordInfo)
    * [~findSourceIndent(si, source)](#module_Output..findSourceIndent)
    * [~readModuleDescription(source)](#module_Output..readModuleDescription)
    * [~sortRecorded()](#module_Output..sortRecorded)
    * [~stubOut()](#module_Output..stubOut) ⇒ `string`
    * [~writeStubFile(filePath, moduleName, moduleDescription)](#module_Output..writeStubFile)


<hr/>

<a name="module_Output..clearRecorded" id="module_Output..clearRecorded"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~clearRecorded()</h5>



<p>Clears the list of recorded entities</p>

**Kind**: inner method of [`Output`](#module_Output)  
**Access**: public  

<hr/>

<a name="module_Output..analysisJSON" id="module_Output..analysisJSON"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~analysisJSON()</h5>



<p>Return the recorded analysis as JSON</p>

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
    Output~stubOut() ⇒ `string`</h5>



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
| [static] | `boolean` | <ul> <li></li> </ul> |
| [public] | `boolean` | <ul> <li></li> </ul> |
| [private] | `boolean` | <ul> <li></li> </ul> |
| [optional] | `boolean` | <ul> <li></li> </ul> |
| [const] | `boolean` | <ul> <li></li> </ul> |
| [async] | `boolean` | <ul> <li></li> </ul> |
| [generator] | `boolean` | <ul> <li></li> </ul> |


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
| decStart | `number` | <code>-1</code> | <ul> <li></li> </ul> |
| decEnd | `number` | <code>-1</code> | <ul> <li></li> </ul> |
| comStart | `number` | <code>-1</code> | <ul> <li></li> </ul> |
| comEnd | `number` | <code>-1</code> | <ul> <li></li> </ul> |


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
| scope | `ScopeModifiers` | <code>new</code> | <p>ScopeModifiers() -</p> |
| description | `string` |  | <ul> <li></li> </ul> |
| params | `Array.&lt;ParameterInfo&gt;` | <code>[</code> | <ul> <li></li> </ul> |
| [return] | `ReturnInfo` |  | <ul> <li></li> </ul> |
| bodyStart | `number` | <code>-1</code> | <ul> <li></li> </ul> |
| bodyEnd | `number` | <code>-1</code> | <ul> <li></li> </ul> |
| status | `SpecificationStatus` | <code>SpecificationStatus.None</code> | <ul> <li></li> </ul> |
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
| isInterface | `boolean` |  | <ul> <li></li> </ul> |
| isMixin | `boolean` |  | <ul> <li></li> </ul> |
| extends | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| scope | `ScopeModifiers` | <code>new</code> | <p>ScopeModifiers() -</p> |
| implements | `Array.&lt;string&gt;` | <code>[</code> | <ul> <li></li> </ul> |
| mixins | `Array.&lt;string&gt;` | <code>[</code> | <ul> <li></li> </ul> |
| description | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| internals | `APIInfo` | <code>new</code> | <p>APIInfo() -</p> |
| bodyStart | `number` | <code>-1</code> | <ul> <li></li> </ul> |
| bodyEnd | `number` | <code>-1</code> | <ul> <li></li> </ul> |
| status | `SpecificationStatus` | <code>SpecificationStatus.None</code> | <ul> <li></li> </ul> |
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
| scope | `ScopeModifiers` | <code>new</code> | <p>ScopeModifiers() -</p> |
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
| scope | `ScopeModifiers` | <code>new</code> | <p>ScopeModifiers() -</p> |
| description | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| values | `Array.&lt;EnumValueInfo&gt;` | <code>[</code> | <ul> <li></li> </ul> |
| bodyStart | `number` | <code>-1</code> | <ul> <li></li> </ul> |
| bodyEnd | `number` | <code>-1</code> | <ul> <li></li> </ul> |


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
| value | `string` \| `number` | <ul> <li></li> </ul> |
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
| form | `TypedefForm` |  | <ul> <li></li> </ul> |
| type | `string` |  | <ul> <li></li> </ul> |
| description | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| declaration | `FunctionInfo` \| `ClassInfo` |  | <ul> <li></li> </ul> |
| TypeConstraint> | `string` | <code>&quot;new&quot;</code> | <p>Map&lt;string, TypeConstraint&gt;() -</p> |
| bodyStart | `number` | <code>-1</code> | <ul> <li></li> </ul> |
| bodyEnd | `number` | <code>-1</code> | <ul> <li></li> </ul> |


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
| functions | `Array.&lt;FunctionInfo&gt;` | <code>[</code> | <ul> <li></li> </ul> |
| classes | `Array.&lt;ClassInfo&gt;` | <code>[</code> | <ul> <li></li> </ul> |
| properties | `Array.&lt;PropertyInfo&gt;` | <code>[</code> | <ul> <li></li> </ul> |
| enums | `Array.&lt;EnumInfo&gt;` | <code>[</code> | <ul> <li></li> </ul> |
| typedefs | `Array.&lt;TypedefInfo&gt;` | <code>[</code> | <ul> <li></li> </ul> |


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
| ordinal | `number` |  | <ul> <li></li> </ul> |
| name | `string` |  | <ul> <li></li> </ul> |
| description | `string` |  | <ul> <li></li> </ul> |
| optional | `boolean` |  | <ul> <li></li> </ul> |
| default | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| status | `SpecificationStatus` | <code>SpecificationStatus.None</code> | <ul> <li></li> </ul> |
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
| status | `SpecificationStatus` | <code>SpecificationStatus.None</code> | <ul> <li></li> </ul> |


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
| Array | `number` | <code>Array</code> | <p><b><i>(value = 2)</i></b></p> |
| Function | `number` | <code>Function</code> | <p><b><i>(value = 3)</i></b></p> |


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

