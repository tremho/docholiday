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
<p>let objectBlock:ParameterInfo[] = getObjectProps(pi)
if(objectBlock.length) type = 'object'
if (pi.optional) {
if (pi.default) {
out += commentLine(indent, <code>@param {${type}} [${pi.name} = ${pi.default}]</code>)</p></td>
    </tr>
<tr>
    <td><a href="#module_CustomRender">CustomRender</a></td>
    <td><h4>CustomRender (Module)</h4>
<p>must be done to avoid processing subsequent custom declarations as part of custom body
let nc = text.indexOf('{{{')
if(nc !== -1) text = text.substring(0, nc)</p></td>
    </tr>
<tr>
    <td><a href="#module_execCmd">execCmd</a></td>
    <td><h4>execCmd (Module)</h4>
<p>console.log('executing ', cmdstr, 'at', cwd)
const opts = {
cwd:cwd,
env: Object.assign(env, process.env)
}
const proc = exec(cmdstr, opts)
if(proc.stdout) proc.stdout.on('data', data =&gt; {
out.stdStr += data.toString()
if(consolePass) console.log(data.toString().trim())
})
if(proc.stderr) proc.stderr.on('data', data =&gt; {
out.errStr += data.toString()
if(consolePass) console.error(data.toString().trim())
})
proc.on('error', error =&gt; {
console.error(error)
if(!out.errStr) out.errStr = error.message
out.retcode = -1
resolve(out)
})
proc.on('close', code =&gt; {
out.retcode = code === null ? -1 : code
resolve(out)
})
})
}</p></td>
    </tr>
<tr>
    <td><a href="#module_Globber">Globber</a> ⇒ <code>Array.&lt;string&gt;</code></td>
    <td><h4>Globber (Module)</h4>
<p>Returns a list of files matching glob expression</p></td>
    </tr>
<tr>
    <td><a href="#module_Output">Output</a></td>
    <td><h4>Output (Module)</h4>
<p>write ordered stubs out to a text file
process this with jsdoc or documentation.js</p></td>
    </tr>
<tr>
    <td><a href="#module_ProcessFiles">ProcessFiles</a> ⇒ <code>string</code></td>
    <td><h4>ProcessFiles (Module)</h4>
<p>read and parse the given source file and
emit each instance of FunctionInfo via the given callback</p></td>
    </tr>
<tr>
    <td><a href="#module_SourceReader">SourceReader</a></td>
    <td><h4>SourceReader (Module)</h4>
<p>Status:
9/8 - identifies function declaration starts in example source file
Next:</p>
<ul>
<li>parse out function name and parameters from declaration</li>
<li>parse out parameter and return metadata from jsdoc</li>
<li>do a variant for typescript that reads parameter and return types from there</li>
</ul></td>
    </tr>
<tr>
    <td><a href="#module_TypeCheck">TypeCheck</a></td>
    <td><h4>TypeCheck (Module)</h4>
<p>Topic Documentation for Constraint declarations</p>
<p>A protocol for utilizing and extending JSDoc comment syntax to declare parameters and return values
with their runtime constraints as well as their types.</p>
<p>Declare parameters in traditional JSDoc style:</p>
<pre class="prettyprint source"><code></code></pre></td>
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
<p>let objectBlock:ParameterInfo[] = getObjectProps(pi)
if(objectBlock.length) type = 'object'
if (pi.optional) {
if (pi.default) {
out += commentLine(indent, <code>@param {${type}} [${pi.name} = ${pi.default}]</code>)</p>


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



**Kind**: inner method of [<code>CommentBlock</code>](#module_CommentBlock)  
**Access**: public  

| Param | Type |
| --- | --- |
| entityInfo | <code>FunctionInfo</code> \| <code>ClassInfo</code> \| <code>PropertyInfo</code> \| <code>EnumInfo</code> \| <code>TypedefInfo</code> | 
| indent | <code>number</code> | 


<hr/>

<a name="module_CommentBlock..renderClassStub" id="module_CommentBlock..renderClassStub"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CommentBlock~renderClassStub(ci, indent, [forClass])</h5>



**Kind**: inner method of [<code>CommentBlock</code>](#module_CommentBlock)  
**Access**: public  

| Param | Type | Default |
| --- | --- | --- |
| ci | <code>ClassInfo</code> |  | 
| indent | <code>number</code> |  | 
| [forClass] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 


<hr/>

<a name="module_CommentBlock..renderFunctionStub" id="module_CommentBlock..renderFunctionStub"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CommentBlock~renderFunctionStub(fi, indent, [forClass])</h5>



**Kind**: inner method of [<code>CommentBlock</code>](#module_CommentBlock)  
**Access**: public  

| Param | Type | Default |
| --- | --- | --- |
| fi | <code>FunctionInfo</code> |  | 
| indent | <code>number</code> |  | 
| [forClass] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 


<hr/>

<a name="module_CommentBlock..renderPropertyStub" id="module_CommentBlock..renderPropertyStub"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CommentBlock~renderPropertyStub(pi, indent)</h5>



**Kind**: inner method of [<code>CommentBlock</code>](#module_CommentBlock)  
**Access**: public  

| Param | Type |
| --- | --- |
| pi | <code>PropertyInfo</code> | 
| indent | <code>number</code> | 


<hr/>

<a name="module_CommentBlock..renderEnumStub" id="module_CommentBlock..renderEnumStub"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CommentBlock~renderEnumStub(ei, indent)</h5>



**Kind**: inner method of [<code>CommentBlock</code>](#module_CommentBlock)  
**Access**: public  

| Param | Type |
| --- | --- |
| ei | <code>EnumInfo</code> | 
| indent | <code>number</code> | 


<hr/>

<a name="module_CustomRender" id="module_CustomRender"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CustomRender</h5>



<h4>CustomRender (Module)</h4>
<p>must be done to avoid processing subsequent custom declarations as part of custom body
let nc = text.indexOf('{{{')
if(nc !== -1) text = text.substring(0, nc)</p>


* [CustomRender](#module_CustomRender)
    * [~handleInternalCustom(name, argMap, text)](#module_CustomRender..handleInternalCustom) ⇒ <code>string</code>
    * [~handleExternalCustom(name, args, text)](#module_CustomRender..handleExternalCustom) ⇒ <code>Promise.&lt;string&gt;</code>


<hr/>

<a name="module_CustomRender..handleInternalCustom" id="module_CustomRender..handleInternalCustom"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CustomRender~handleInternalCustom(name, argMap, text) ⇒ <code>string</code></h5>



**Kind**: inner method of [<code>CustomRender</code>](#module_CustomRender)  
**Access**: public  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| argMap | <code>any</code> | 
| text | <code>string</code> | 


<hr/>

<a name="module_CustomRender..handleExternalCustom" id="module_CustomRender..handleExternalCustom"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    CustomRender~handleExternalCustom(name, args, text) ⇒ <code>Promise.&lt;string&gt;</code></h5>



**Kind**: inner method of [<code>CustomRender</code>](#module_CustomRender)  
**Access**: public  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| args | <code>Array.&lt;string&gt;</code> | 
| text | <code>string</code> | 


<hr/>

<a name="module_execCmd" id="module_execCmd"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    execCmd</h5>



<h4>execCmd (Module)</h4>
<p>console.log('executing ', cmdstr, 'at', cwd)
const opts = {
cwd:cwd,
env: Object.assign(env, process.env)
}
const proc = exec(cmdstr, opts)
if(proc.stdout) proc.stdout.on('data', data =&gt; {
out.stdStr += data.toString()
if(consolePass) console.log(data.toString().trim())
})
if(proc.stderr) proc.stderr.on('data', data =&gt; {
out.errStr += data.toString()
if(consolePass) console.error(data.toString().trim())
})
proc.on('error', error =&gt; {
console.error(error)
if(!out.errStr) out.errStr = error.message
out.retcode = -1
resolve(out)
})
proc.on('close', code =&gt; {
out.retcode = code === null ? -1 : code
resolve(out)
})
})
}</p>


<hr/>

<a name="module_execCmd..executeCommand" id="module_execCmd..executeCommand"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    execCmd~executeCommand(cmd, args, [cwd]) ⇒ <code>Promise.&lt;any&gt;</code></h5>



**Kind**: inner method of [<code>execCmd</code>](#module_execCmd)  
**Access**: public  

| Param | Type | Default |
| --- | --- | --- |
| cmd | <code>object</code> |  | 
| args | <code>object</code> |  | 
| [cwd] | <code>any</code> | <code>&#x27;&#x27;,consolePass&#x3D;false,env &#x3D; {}</code> | 


<hr/>

<a name="module_Globber" id="module_Globber"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Globber ⇒ <code>Array.&lt;string&gt;</code></h5>



<h4>Globber (Module)</h4>
<p>Returns a list of files matching glob expression</p>

**Returns**: <code>Array.&lt;string&gt;</code> - <p>array of paths that match</p>
<p>export function getGlobbedFiles(globexp:string):string[] {</p>  

| Param | Type |
| --- | --- |
| lobexp | <code>string</code> | 


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
<p>write ordered stubs out to a text file
process this with jsdoc or documentation.js</p>


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



**Kind**: inner method of [<code>Output</code>](#module_Output)  
**Access**: public  

<hr/>

<a name="module_Output..recordInfo" id="module_Output..recordInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~recordInfo(info, source)</h5>



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



**Kind**: inner method of [<code>Output</code>](#module_Output)  
**Access**: public  

| Param | Type |
| --- | --- |
| source | <code>string</code> | 


<hr/>

<a name="module_Output..sortRecorded" id="module_Output..sortRecorded"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~sortRecorded()</h5>



**Kind**: inner method of [<code>Output</code>](#module_Output)  
**Access**: public  

<hr/>

<a name="module_Output..stubOut" id="module_Output..stubOut"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~stubOut() ⇒ <code>string</code></h5>



**Kind**: inner method of [<code>Output</code>](#module_Output)  
**Access**: public  

<hr/>

<a name="module_Output..writeStubFile" id="module_Output..writeStubFile"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    Output~writeStubFile(filePath, moduleName, moduleDescription)</h5>



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
    ProcessFiles ⇒ <code>string</code></h5>



<h4>ProcessFiles (Module)</h4>
<p>read and parse the given source file and
emit each instance of FunctionInfo via the given callback</p>

**Returns**: <code>string</code> - <p>export function processSourceFile(srcPath:string, fncallback:FICallback, prcallback:PICallback, clscallback:CICallback, encallback:EICallback, tdcallback:TICallback) {
const contents = fs.readFileSync(srcPath).toString()</p>  

| Param | Type | Description |
| --- | --- | --- |
| srcPath | <code>string</code> | <p>The path to the source file to read</p> |
| fncallback | <code>FICallback</code> | <p>the function that will receive the FunctionInfo instances emitted by the parse.</p> |
| prcallback | <code>PICallback</code> | <p>the function that will receive the PropertyInfo instances emitted by the parse.</p> |
| clscallback | <code>CICallback</code> | <p>the function that will receive the ClassInfo instances emitted by the parse.</p> |
| encallback | <code>EICallback</code> | <p>the function that will receive the EnumInfo instances emitted by the parse.</p> |


* [ProcessFiles](#module_ProcessFiles) ⇒ <code>string</code>
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
<p>Status:
9/8 - identifies function declaration starts in example source file
Next:</p>
<ul>
<li>parse out function name and parameters from declaration</li>
<li>parse out parameter and return metadata from jsdoc</li>
<li>do a variant for typescript that reads parameter and return types from there</li>
</ul>


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
        * [.findFunctions()](#module_SourceReader..SourceReader+findFunctions) ⇒ <code>Array.&lt;FunctionInfo&gt;</code>
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



**Kind**: inner class of [<code>SourceReader</code>](#module_SourceReader)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| startIndex | <code>number</code> | <ul> <li></li> </ul> |
| longsrc | <code>string</code> | <ul> <li></li> </ul> |
| bracket | <code>string</code> | <ul> <li></li> </ul> |
| isType | <code>string</code> | <ul> <li></li> </ul> |


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
    * [.findFunctions()](#module_SourceReader..SourceReader+findFunctions) ⇒ <code>Array.&lt;FunctionInfo&gt;</code>
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



**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+findWhite" id="module_SourceReader..SourceReader+findWhite"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.findWhite(str, startIndex)</h5>



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



**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+skipExport" id="module_SourceReader..SourceReader+skipExport"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.skipExport()</h5>



**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+skipRequire" id="module_SourceReader..SourceReader+skipRequire"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.skipRequire()</h5>



**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+nextEnd" id="module_SourceReader..SourceReader+nextEnd"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.nextEnd()</h5>



**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+readSourceLine" id="module_SourceReader..SourceReader+readSourceLine"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.readSourceLine()</h5>



**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+readTypeDef" id="module_SourceReader..SourceReader+readTypeDef"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.readTypeDef(str, startIndex)</h5>



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

<a name="module_SourceReader..SourceReader+findFunctions" id="module_SourceReader..SourceReader+findFunctions"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.findFunctions() ⇒ <code>Array.&lt;FunctionInfo&gt;</code></h5>



**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

<hr/>

<a name="module_SourceReader..SourceReader+extractFunctionInfo" id="module_SourceReader..SourceReader+extractFunctionInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.extractFunctionInfo(inClass, si) ⇒ <code>FunctionInfo</code></h5>



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



**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+getExtends" id="module_SourceReader..SourceReader+getExtends"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.getExtends(text) ⇒ <code>string</code></h5>



**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+getImplements" id="module_SourceReader..SourceReader+getImplements"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.getImplements(text) ⇒ <code>Array.&lt;string&gt;</code></h5>



**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+findMixins" id="module_SourceReader..SourceReader+findMixins"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.findMixins(extDec)</h5>



**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| extDec | <code>string</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+extractEnumInfo" id="module_SourceReader..SourceReader+extractEnumInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.extractEnumInfo(si) ⇒ <code>EnumInfo</code></h5>



**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| si | <code>SourceInfo</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+extractTypedefInfo" id="module_SourceReader..SourceReader+extractTypedefInfo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.extractTypedefInfo(si) ⇒ <code>TypedefInfo</code></h5>



**Kind**: instance method of [<code>SourceReader</code>](#module_SourceReader..SourceReader)  
**Access**: public  

| Param | Type |
| --- | --- |
| si | <code>SourceInfo</code> | 


<hr/>

<a name="module_SourceReader..SourceReader+gatherCommentMeta" id="module_SourceReader..SourceReader+gatherCommentMeta"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    sourceReader.gatherCommentMeta(fi)</h5>



<p>Read comment block</p>

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
<p>Topic Documentation for Constraint declarations</p>
<p>A protocol for utilizing and extending JSDoc comment syntax to declare parameters and return values
with their runtime constraints as well as their types.</p>
<p>Declare parameters in traditional JSDoc style:</p>
<pre class="prettyprint source"><code></code></pre>


| Param | Type | Description |
| --- | --- | --- |
| name | <code>type</code> | <p>Description</p> <pre class="prettyprint source"><code>N.B. that reversing the order of {type} and name are allowed here, but that is not canonical JSDoc style. Also supported (and also canonical) is the use of [ ] brackets around the name to declare an optional parameter. e.g. ` @param {string} [foobar]  The foobar parameter is not required ` Descriptions may be on the same, line, or may start or continue on the lines below up until the next @param or other statement or end of comment block: </code></pre> |
| [name] | <code>type</code> | <p>The description can go here as well as on the line above, or it can continue the line above if there is one. The description can run multiple lines, and if JSDoc is configured for it, can support <em>markdown</em> syntax, as well as inline html.</p> <pre class="prettyprint source"><code>#### Introducing Constraints Constraints are a formatted set of expressions that may either precede or follow the description, either starting on the first line or the line below. Constraint expressions start with a dash '-' character to distinguish them from the description comments and end with the next newline. The full constraint expression must be contained on the line it starts on. e.g.```</code></pre> |
| ordinal | <code>number</code> | <p>The ordinal value of this thing &lt;Integer,Positive,NotZero&gt;</p> <pre class="prettyprint source"><code>The example declares a parameter with conventional JSDoc style, but also provides constraint keywords that will apply to this numeric type of value that specify the acceptable characteristics of that value. Syntactically, the order of description and constraint do not matter, so this is equivalent to the above: </code></pre> |
| ordinal | <code>number</code> | <p>&lt;Integer,Positive,NotZero&gt; The ordinal value of this thing</p> <pre class="prettyprint source"><code>The output JSDoc block will include embedded HTML to render the constraint block, as the JSDoc renderer is unaware of the role of Constraint declarations themselves. The block is assigned the CSS class &quot;doc-constraints&quot; should you wish to provide additional styling to this block. Note that all the above syntax, including constraints, also applies to the JSDoc `@return` (or `@returns`) statement, with the only difference being that the return value does not specify a name. #### Multiple type constraints if there are multiple types (e.g. {string|number}) then the corresponding multiple constraint declarations may be given. example: `@param {string|number} foo &lt;minLength=3> &lt;Integer, min=100, max=999> #### Constraint keywords and syntax - a constraint declaration is specified between &lt; and > brackets. - There may be multiple constraint declarations in a single comment block - there may be multiple constraint expressions within a declaration. - each constraint expression (keyword[=value]) within a declaration is separated by a comma - Some keywords accept a value parameter, such as `min=5` or `endsWith = &quot;.png&quot;` - Values may be quoted or not, but must not contain a comma within the value itself, regardless of quoting. Other keywords are implicitly boolean, such as `integer` or `nonzero` and take no assignment. - Some keywords have a 'not' complement that is noted by a preceding ! character.  For example, `contains` and `!contains` both accept a value that is either required to exist or to not exist, depending upon the presence or absence of the ! prefix. - A few keywords accept a list of values.  Such values are given using the a comma a delimiter, as in `&quot;one,two,three,four&quot;`. - Keywords are case insensitive - Specifying conflicting or redundant constraints (e.g. `startsWith = &quot;ab&quot;` and `!startsWith=&quot;cd&quot;) will result in an error. - Unrecognized keywords or improper expression syntax will result in an error ##### constraints for `number` - `Integer` - If specified, number must be an integer.  If not specified, floating point values are allowed. - `Float ` -  Optional, ignored. Same as default. - `Positive` - If specified, number must be positive (not less than zero). - `Negative` - If specified, number must be negative (less than zero). - `NotZero`  - If specified, number must not be zero. - `min=&lt;val>` - Specifies the minimum allowed value (inclusive) - `max=&lt;val>` - Specifies the maximum allowed value (inclusive) (e.g. integer, min=0, max=9) - 'maxx=&lt;val>` - Specifies the first exclusive value outside the maximum. (e.g. float, min=0, maxx=10) ##### constraints for `string`</code></pre> |


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

