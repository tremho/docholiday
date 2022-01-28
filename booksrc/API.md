## Modules

<table>
  <thead>
    <tr>
      <th>Module</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><a href="#module_test-classes">test-classes</a></td>
    <td></td>
    </tr>
<tr>
    <td><a href="#module_test-commentBlock">test-commentBlock</a></td>
    <td></td>
    </tr>
<tr>
    <td><a href="#module_test-enum">test-enum</a></td>
    <td></td>
    </tr>
<tr>
    <td><a href="#module_test-functions">test-functions</a></td>
    <td></td>
    </tr>
<tr>
    <td><a href="#module_test-parameters">test-parameters</a></td>
    <td></td>
    </tr>
<tr>
    <td><a href="#module_test-properties">test-properties</a></td>
    <td></td>
    </tr>
<tr>
    <td><a href="#module_test-publicExport">test-publicExport</a></td>
    <td></td>
    </tr>
<tr>
    <td><a href="#module_test-returns">test-returns</a></td>
    <td></td>
    </tr>
<tr>
    <td><a href="#module_test-semicolons">test-semicolons</a></td>
    <td></td>
    </tr>
</tbody>
</table>


<hr/>

<a name="module_test-classes" id="module_test-classes"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes</h5>




* [test-classes](#module_test-classes)
    * [~BaseExample](#module_test-classes..BaseExample)
        * [.display()](#module_test-classes..BaseExample+display)
    * [~PricedExample](#module_test-classes..PricedExample) ⇐ <code>BaseExample</code>
        * [.display()](#module_test-classes..PricedExample+display)
    * [~Thing1](#module_test-classes..Thing1) ⇐ <code>BaseExample</code>
    * [~Thing2](#module_test-classes..Thing2) ⇐ <code>PricedExample</code>
    * [~Construction](#module_test-classes..Construction)
        * [new Construction([name], [place])](#new_module_test-classes..Construction_new)
        * [.plan()](#module_test-classes..Construction+plan)
        * [.milestone()](#module_test-classes..Construction+milestone)
        * [.finish(timeSpent, timeEstimated, notes)](#module_test-classes..Construction+finish) ⇒ <code>string</code>
        * [.jsdocStyleFunction(a)](#module_test-classes..Construction+jsdocStyleFunction) ⇒ <code>Promise.&lt;unknown&gt;</code>
    * [~PrintExample](#module_test-classes..PrintExample)
        * [.exmpleLocal(foo)](#module_test-classes..PrintExample+exmpleLocal) ⇒ <code>boolean</code>
        * [.print(device, orientation, pages)](#module_test-classes..PrintExample+print) ⇒ <code>boolean</code>
        * [.save(device)](#module_test-classes..PrintExample+save) ⇒ <code>boolean</code>
    * [~AssigmentClass](#module_test-classes..AssigmentClass)
        * [.dubious()](#module_test-classes..AssigmentClass+dubious) ⇒ <code>string</code>
    * [~Container](#module_test-classes..Container)
    * [~PrinterOrientation](#module_test-classes..PrinterOrientation)


<hr/>

<a name="module_test-classes..BaseExample" id="module_test-classes..BaseExample"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~BaseExample</h5>



<p>This is a base class test</p>

**Kind**: inner class of [<code>test-classes</code>](#module_test-classes)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| type | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-classes..BaseExample+display" id="module_test-classes..BaseExample+display"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    baseExample.display()</h5>



<p>Displays the values of the object</p>

**Kind**: instance method of [<code>BaseExample</code>](#module_test-classes..BaseExample)  
**Access**: public  

<hr/>

<a name="module_test-classes..PricedExample" id="module_test-classes..PricedExample"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~PricedExample ⇐ <code>BaseExample</code></h5>



<p>Another base class, but it inherits from BaseExample</p>

**Kind**: inner class of [<code>test-classes</code>](#module_test-classes)  
**Extends**: <code>BaseExample</code>  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| price | <code>number</code> | <code>0</code> | <ul> <li></li> </ul> |
| unit | <code>string</code> | <code>&quot;&#x27;dollars&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-classes..PricedExample+display" id="module_test-classes..PricedExample+display"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    pricedExample.display()</h5>



<p>Displays the values and price of the object</p>

**Kind**: instance method of [<code>PricedExample</code>](#module_test-classes..PricedExample)  
**Access**: public  

<hr/>

<a name="module_test-classes..Thing1" id="module_test-classes..Thing1"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~Thing1 ⇐ <code>BaseExample</code></h5>



<p>We declare a thing without a price</p>

**Kind**: inner class of [<code>test-classes</code>](#module_test-classes)  
**Extends**: <code>BaseExample</code>  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;&#x27;Kepler&#x27;&quot;</code> | <ul> <li></li> </ul> |
| type | <code>string</code> | <code>&quot;&#x27;Dog&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-classes..Thing2" id="module_test-classes..Thing2"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~Thing2 ⇐ <code>PricedExample</code></h5>



<p>We declare a thing with a price</p>

**Kind**: inner class of [<code>test-classes</code>](#module_test-classes)  
**Extends**: <code>PricedExample</code>  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;&#x27;Jove&#x27;&quot;</code> | <ul> <li></li> </ul> |
| type | <code>string</code> | <code>&quot;&#x27;Framework&#x27;&quot;</code> | <ul> <li></li> </ul> |
| price | <code>number</code> | <code>49.95</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-classes..Construction" id="module_test-classes..Construction"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~Construction</h5>



<p>We declare a working class</p>

**Kind**: inner class of [<code>test-classes</code>](#module_test-classes)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>name of the work</p> |
| [place] | <code>string</code> | <p>place of the work</p> |
| [other] | <code>any</code> | <p>other stuff, optional</p> |


* [~Construction](#module_test-classes..Construction)
    * [new Construction([name], [place])](#new_module_test-classes..Construction_new)
    * [.plan()](#module_test-classes..Construction+plan)
    * [.milestone()](#module_test-classes..Construction+milestone)
    * [.finish(timeSpent, timeEstimated, notes)](#module_test-classes..Construction+finish) ⇒ <code>string</code>
    * [.jsdocStyleFunction(a)](#module_test-classes..Construction+jsdocStyleFunction) ⇒ <code>Promise.&lt;unknown&gt;</code>


<hr/>

<a name="new_module_test-classes..Construction_new" id="new_module_test-classes..Construction_new"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    new Construction([name], [place])</h5>



<p>creates a Construction instance</p>


| Param | Type |
| --- | --- |
| [name] | <code>string</code> | 
| [place] | <code>string</code> | 


<hr/>

<a name="module_test-classes..Construction+plan" id="module_test-classes..Construction+plan"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    construction.plan()</h5>



<p>Plans the construction</p>

**Kind**: instance method of [<code>Construction</code>](#module_test-classes..Construction)  
**Access**: public  

<hr/>

<a name="module_test-classes..Construction+milestone" id="module_test-classes..Construction+milestone"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    construction.milestone()</h5>



<p>generates the next milestone</p>

**Kind**: instance method of [<code>Construction</code>](#module_test-classes..Construction)  
**Access**: public  

<hr/>

<a name="module_test-classes..Construction+finish" id="module_test-classes..Construction+finish"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    construction.finish(timeSpent, timeEstimated, notes) ⇒ <code>string</code></h5>



<p>complete building</p>

**Kind**: instance method of [<code>Construction</code>](#module_test-classes..Construction)  
**Returns**: <code>string</code> - <p>returns a report</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| timeSpent | <code>number</code> | <p>hours of actual work</p> |
| timeEstimated | <code>number</code> | <p>hours estimated at start</p> |
| notes | <code>string</code> | <p>notes about the work</p> |


<hr/>

<a name="module_test-classes..Construction+jsdocStyleFunction" id="module_test-classes..Construction+jsdocStyleFunction"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    construction.jsdocStyleFunction(a) ⇒ <code>Promise.&lt;unknown&gt;</code></h5>



<p>A method documented in classic JSDoc style.  *
But we'll let the param types and return be generated</p>

**Kind**: instance method of [<code>Construction</code>](#module_test-classes..Construction)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | <p>a number we pass in</p> |


<hr/>

<a name="module_test-classes..PrintExample" id="module_test-classes..PrintExample"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~PrintExample</h5>



<p>An example of implemented interfaces</p>

**Kind**: inner class of [<code>test-classes</code>](#module_test-classes)  
**Implements**: <code>PrintAction</code>, <code>SaveAction</code>  
**Access**: public  

* [~PrintExample](#module_test-classes..PrintExample)
    * [.exmpleLocal(foo)](#module_test-classes..PrintExample+exmpleLocal) ⇒ <code>boolean</code>
    * [.print(device, orientation, pages)](#module_test-classes..PrintExample+print) ⇒ <code>boolean</code>
    * [.save(device)](#module_test-classes..PrintExample+save) ⇒ <code>boolean</code>


<hr/>

<a name="module_test-classes..PrintExample+exmpleLocal" id="module_test-classes..PrintExample+exmpleLocal"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExample.exmpleLocal(foo) ⇒ <code>boolean</code></h5>



<p>Local function to print Example.</p>

**Kind**: instance method of [<code>PrintExample</code>](#module_test-classes..PrintExample)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| foo | <code>string</code> | <p>device if not default</p> |


<hr/>

<a name="module_test-classes..PrintExample+print" id="module_test-classes..PrintExample+print"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExample.print(device, orientation, pages) ⇒ <code>boolean</code></h5>



<p>implementation of primt</p>

**Kind**: instance method of [<code>PrintExample</code>](#module_test-classes..PrintExample)  
**Access**: public  

| Param | Type |
| --- | --- |
| device | <code>string</code> | 
| orientation | <code>PrinterOrientation</code> | 
| pages | <code>number</code> | 


<hr/>

<a name="module_test-classes..PrintExample+save" id="module_test-classes..PrintExample+save"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExample.save(device) ⇒ <code>boolean</code></h5>



<p>implementation of save</p>

**Kind**: instance method of [<code>PrintExample</code>](#module_test-classes..PrintExample)  
**Access**: public  

| Param | Type |
| --- | --- |
| device | <code>string</code> | 


<hr/>

<a name="module_test-classes..AssigmentClass" id="module_test-classes..AssigmentClass"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~AssigmentClass</h5>



<p>Test of an assignment class</p>

**Kind**: inner class of [<code>test-classes</code>](#module_test-classes)  
**Access**: public  

<hr/>

<a name="module_test-classes..AssigmentClass+dubious" id="module_test-classes..AssigmentClass+dubious"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    assigmentClass.dubious() ⇒ <code>string</code></h5>



<p>we have a method</p>

**Kind**: instance method of [<code>AssigmentClass</code>](#module_test-classes..AssigmentClass)  
**Access**: public  

<hr/>

<a name="module_test-classes..Container" id="module_test-classes..Container"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~Container</h5>



<p>Test of having an inner class</p>

**Kind**: inner class of [<code>test-classes</code>](#module_test-classes)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Container.Insider | <code>class</code> | <p>this class is a public property of Container</p> |
| Insider.Container.name | <code>string</code> | <p>a name property</p> |
| Insider.Container.foobar | <code>method</code> | <p>Everyone needs a foobar function</p> |
| Insider.Container.constructor | <code>method</code> | <p>construct an Insider with <code>new Container.Insider()</code></p> |


<hr/>

<a name="module_test-classes..PrinterOrientation" id="module_test-classes..PrinterOrientation"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~PrinterOrientation</h5>



**Kind**: inner enum of [<code>test-classes</code>](#module_test-classes)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Portrait | <code>number</code> | <code>Portrait</code> | <p><b><i>(value = 0)</i></b></p> |
| Landscape | <code>number</code> | <code>Landscape</code> | <p><b><i>(value = 1)</i></b></p> |


<hr/>

<a name="module_test-commentBlock" id="module_test-commentBlock"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock</h5>




* [test-commentBlock](#module_test-commentBlock)
    * [~beast()](#module_test-commentBlock..beast)
    * [~withParams(a, b, c)](#module_test-commentBlock..withParams)
    * [~typeParamsWin(a, b, c)](#module_test-commentBlock..typeParamsWin) ⇒ <code>any</code>
    * [~jsdocTag()](#module_test-commentBlock..jsdocTag)
    * [~plantSeq()](#module_test-commentBlock..plantSeq)
    * [~plantSeq2()](#module_test-commentBlock..plantSeq2)
    * [~plantUse()](#module_test-commentBlock..plantUse)
    * [~plantClassObject()](#module_test-commentBlock..plantClassObject)
    * [~plantActivity()](#module_test-commentBlock..plantActivity)
    * [~plantComponent()](#module_test-commentBlock..plantComponent)
    * [~plantDeployment()](#module_test-commentBlock..plantDeployment)
    * [~plantState()](#module_test-commentBlock..plantState)
    * [~plantTiming()](#module_test-commentBlock..plantTiming)
    * [~plantPERT()](#module_test-commentBlock..plantPERT)


<hr/>

<a name="module_test-commentBlock..beast" id="module_test-commentBlock..beast"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~beast()</h5>



<p>We should be able to document returns in jsdoc style</p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..withParams" id="module_test-commentBlock..withParams"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~withParams(a, b, c)</h5>



<p>We should be able to type and comment our parameters in the jsdoc block</p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>string</code> | <ul> <li>A string that is 'a'</li> </ul> |
| b | <code>string</code> | <ul> <li>A string that is b-like</li> </ul> |
| c | <code>number</code> | <ul> <li>A number to see</li> </ul> |


<hr/>

<a name="module_test-commentBlock..typeParamsWin" id="module_test-commentBlock..typeParamsWin"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~typeParamsWin(a, b, c) ⇒ <code>any</code></h5>



<p>If we have typescript-typed values, instead, they win</p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Returns**: <code>any</code> - <p>// typescript defined return</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | <p>typescript says this is a number</p> |
| b | <code>any</code> | <p>typescript says this is any</p> |
| c | <code>number</code> | <p>typescript assigned no further type</p> |


<hr/>

<a name="module_test-commentBlock..jsdocTag" id="module_test-commentBlock..jsdocTag"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~jsdocTag()</h5>



<p>We should be able to insert a jsdoc tag using our extended syntax.
In this case: see www.tremho.com</p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Access**: public  
**See**: <p>https://www.tremho.com</p>
<p>But note we can use markdown to do the same:  <a href="!https://wwww.tremho.com">www.tremho.com</a></p>
<p>And even for doc links <a href="module-test-classes-PrintExample.html">PrintExample</a></p>  

<hr/>

<a name="module_test-commentBlock..plantSeq" id="module_test-commentBlock..plantSeq"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantSeq()</h5>



<p>We can insert plantUML diagrams.
This one is a sequence diagram</p>
<p><img src="http://www.plantuml.com/plantuml/svg/u-9opCbCJbNGjLDmoa-oKd0iBSb8pIl9J4uioSpFKmXABInDBIxX0iefw0BLW1LZKLLSa9zNdCg5RbXUFb1TaK8YTaCXYcrqTGceXXeE0000" alt="plantUML"></p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantSeq2" id="module_test-commentBlock..plantSeq2"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantSeq2()</h5>



<p>Same, but this comment should be at top
and we should have more plain text at bottom</p>
<p><img src="http://www.plantuml.com/plantuml/svg/u-9opCbCJbNGjLDmoa-oKd0iBSb8pIl9J4uioSpFKmXABInDBIxX0iefw0BLW1LZKLLSa9zNdCg5RbXUFb1TaK8YTaCXYcrqTGceXXaE0000" alt="plantUML"></p>
<p>More plain text at the bottom...</p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantUse" id="module_test-commentBlock..plantUse"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantUse()</h5>



<p>We can use PlantUML for UseCase diagrams</p>
<p><img src="http://www.plantuml.com/plantuml/svg/u-BISCiiAYvHA2rEJKuiJjNaqd3Coo_9I2s2YoWa5YjeX3eRQN91HHH2dOtXR0sVnEAIc3nanQ7E9bm0" alt="plantUML"></p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantClassObject" id="module_test-commentBlock..plantClassObject"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantClassObject()</h5>



<p>We can use PlantUML for Class and Object diagrams</p>
<p><img src="http://www.plantuml.com/plantuml/svg/LOz1YW8n44Nt_nJ1bGfp0H51NSnYn8s8k98onZ7QIIGf4H7lRaAdqzsrUxygBrMWOs1FaaMkXb4Qig8GX1ZqWm78MiV4sjdyiZ2azh9IebJD68v4h-hu42xEy-7il47-gvr8Z9Ccu-off9andVLzEUyAbMNDhtQavXW_JFTbOcZBofz9DeiN7WFkU5Nnz5NKn_ioxIXSjFtdDbaeN-b2Q_NSEty33Dt5akwQgLgcTTxO_ednpwpnRJVpY94xnb_b3TbNocCZYpz0begKTfoJIPJW2m00" alt="plantUML"></p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantActivity" id="module_test-commentBlock..plantActivity"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantActivity()</h5>



<p>PlantUML Activity</p>
<p><img src="http://www.plantuml.com/plantuml/svg/JOuz3i8m38Ltdy9ZcoEq0oCSW14fYXgNMZ9EYKDGEJqUAxtfUpzwCDr8fE2tLCapJFUD3LsPLbRAM1ICEjKa688uiX1ci9Pg0-0LXsjD-zRvXwnEHIXVHcmRAGu7sGZJNij2PkZUGpEdPqqlcu7420SjfqHHEI16e_U7TA4OCMd66DFIk7Cx79pwlhM2Foax_040" alt="plantUML"></p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantComponent" id="module_test-commentBlock..plantComponent"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantComponent()</h5>



<p>PlantUML Component
this is the large example, including groups, etc</p>
<p><img src="http://www.plantuml.com/plantuml/svg/ROyz2y8m48Rt_8eZUmVHMH0nkeX2knM7sAIscEPgau95_E_cGsaL8SFbdjppvaZBYok_IA0fDXAs7VOjXGVPPTaH4iXPtHaBQsnQr5BR4ybN6cqbksdlIOX6uHo7G8B4U0kBabGMgCMNvTSBIR84zzox2eMzSDFvviwRLacOXGWYkELdRbpEVaXloWUKg8HBf5bL6t2d6I2sFCnPf7C_NdRSxKSPOaJXkl34g_zi5Nuq_SAaZcpKZ-MRVEml" alt="plantUML"></p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantDeployment" id="module_test-commentBlock..plantDeployment"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantDeployment()</h5>



<p>PlantUML Deployment
this is a use-case variant, and
here we show the complex example from the plantUML site</p>
<p><img src="http://www.plantuml.com/plantuml/svg/PP11RiCW44NtSufHii6jY3nELrRbJOyHUO4nJYmvO26igbtux1t0JPf6GcB-Wvd_0K3fu3mEpj6zh21gV9UbR1wqA8jV0a9fAb1E9iF9326E89H-pCYFvyl63ilCxD3WCcUm9h16KEMktkMktdrQUaRicF8nPeQfPgRTTNRMs82ned-wIfhm9VQyRkWKjsFBpv5DWqczjG2TMsol_1TsSOeDtase2JesZ2bY_UGssc3yeBJ1ND7cjrzNSKDGNrrlA2MkSth-GKL_-LJ7RzkEQ88SCbbHYyn5oGllzAC5KU1D7h6GwSQE-tUFz-2alWrFsUVtigXQ-040" alt="plantUML"></p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantState" id="module_test-commentBlock..plantState"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantState()</h5>



<p>PlantUML State
A complex state diagram from plantUML examples</p>
<p><img src="http://www.plantuml.com/plantuml/svg/RP0z3u8m48Rt_eeB8manmiPWGeA6E1WY8s6evO8cV1ZQwc3yxxP0iOXBsxltdhlhIqZk5k3j81DKu9QC5tWcuqC8cMGCiSJILZKMGdJfUc44_ui5Qyp_Wt4j6E8rXKx4c6nahT_xjfFL5M8gg0EKGzsrrPOCfsfpb5m01O5SZDzG0-oAELQr9tmERImfxJk6dEkiAh16BHPEYX3Eo6M3v4scLHVsf5HoN3kG9wuYOyJxHF-osgC3lTN6eC0oQFOEDf3H1muRr69TQ9py0000" alt="plantUML"></p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantTiming" id="module_test-commentBlock..plantTiming"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantTiming()</h5>



<p>PlantUML Timing</p>
<p><img src="http://www.plantuml.com/plantuml/svg/NSp13O0W44JH-rOnsGhWO0FIWGqOHOX4unh06BiNCLwy_SER8RAhs0K0coTwnQM71ADmXZnZTp78X4RzeVwW_a7inveST0FnFhaChMWCsn2licrhS5ssP6MpeLWsRt0zf2ZZaNBHNOrNTtG3" alt="plantUML"></p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantPERT" id="module_test-commentBlock..plantPERT"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantPERT()</h5>



<p>A Pert example</p>
<p><img src="http://www.plantuml.com/plantuml/svg/VSyz3u8m40RW_Nx5RIv2mjT2b8t4HAD4ZNk5efL2JRb9utyN2LOYXA5D-ZwNDrUGF2SaXLfSheIPq3mbeIgOuKffyL0LCObILBmEqRAYEIuigxsYPkJ4DOcqDz3wvqH0WYJ79DuVGqoqkZMzk6Kb1oZP7TSYBUnTdkCJNcr0h2viftaUY6d2POHnbVNDdJ1lmlm92uPc5cj--5qgn0qxSudEYBf6tH7rZ7hGbHdpeIluJxn1ul-Im3Jwy0O0" alt="plantUML"></p>

**Kind**: inner method of [<code>test-commentBlock</code>](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-enum" id="module_test-enum"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum</h5>




* [test-enum](#module_test-enum)
    * [~Direction](#module_test-enum..Direction)
    * [~Direction2](#module_test-enum..Direction2)
    * [~Direction3](#module_test-enum..Direction3)
    * [~Direction4](#module_test-enum..Direction4)
    * [~BooleanLikeHeterogeneousEnum](#module_test-enum..BooleanLikeHeterogeneousEnum)
    * [~LogLevel](#module_test-enum..LogLevel)
    * [~Jumper](#module_test-enum..Jumper)
    * [~Scattered](#module_test-enum..Scattered)
    * [~BugCase1](#module_test-enum..BugCase1)
    * [~BugCase1b](#module_test-enum..BugCase1b)
    * [~BugCase1c](#module_test-enum..BugCase1c)


<hr/>

<a name="module_test-enum..Direction" id="module_test-enum..Direction"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~Direction</h5>



<p>Constants for direction
Explicit start</p>

**Kind**: inner enum of [<code>test-enum</code>](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Up | <code>number</code> | <code>Up</code> | <p>vertical ascend <b><i>(value = 1)</i></b></p> |
| Down | <code>number</code> | <code>Down</code> | <p>vertical descend <b><i>(value = 2)</i></b></p> |
| Left | <code>number</code> | <code>Left</code> | <p>westward if facing north <b><i>(value = 3)</i></b></p> |
| Right | <code>number</code> | <code>Right</code> | <p>eastward if facing north <b><i>(value = 4)</i></b></p> |


<hr/>

<a name="module_test-enum..Direction2" id="module_test-enum..Direction2"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~Direction2</h5>



<p>Implicit values</p>

**Kind**: inner enum of [<code>test-enum</code>](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Up | <code>number</code> | <code>Up</code> | <p><b><i>(value = 0)</i></b></p> |
| Down | <code>number</code> | <code>Down</code> | <p><b><i>(value = 1)</i></b></p> |
| Left | <code>number</code> | <code>Left</code> | <p><b><i>(value = 2)</i></b></p> |
| Right | <code>number</code> | <code>Right</code> | <p><b><i>(value = 3)</i></b></p> |


<hr/>

<a name="module_test-enum..Direction3" id="module_test-enum..Direction3"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~Direction3</h5>



<p>String values</p>

**Kind**: inner enum of [<code>test-enum</code>](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Up | <code>string</code> | <code>&quot;Up&quot;</code> | <p><b><i>(value = &quot;UP&quot;)</i></b></p> |
| Down | <code>string</code> | <code>&quot;Down&quot;</code> | <p><b><i>(value = &quot;DOWN&quot;)</i></b></p> |
| Left | <code>string</code> | <code>&quot;Left&quot;</code> | <p><b><i>(value = &quot;LEFT&quot;)</i></b></p> |
| Right | <code>string</code> | <code>&quot;Right&quot;</code> | <p><b><i>(value = &quot;RIGHT&quot;)</i></b></p> |


<hr/>

<a name="module_test-enum..Direction4" id="module_test-enum..Direction4"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~Direction4</h5>



<p>String values = key
should not repeat value in description</p>

**Kind**: inner enum of [<code>test-enum</code>](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| UP | <code>string</code> | <code>&quot;UP&quot;</code> | 
| DOWN | <code>string</code> | <code>&quot;DOWN&quot;</code> | 
| LEFT | <code>string</code> | <code>&quot;LEFT&quot;</code> | 
| RIGHT | <code>string</code> | <code>&quot;RIGHT&quot;</code> | 


<hr/>

<a name="module_test-enum..BooleanLikeHeterogeneousEnum" id="module_test-enum..BooleanLikeHeterogeneousEnum"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~BooleanLikeHeterogeneousEnum</h5>



**Kind**: inner enum of [<code>test-enum</code>](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| No | <code>number</code> | <code>No</code> | <p><b><i>(value = 0)</i></b></p> |
| Yes | <code>string</code> | <code>&quot;Yes&quot;</code> | <p><b><i>(value = &quot;YES&quot;)</i></b></p> |


<hr/>

<a name="module_test-enum..LogLevel" id="module_test-enum..LogLevel"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~LogLevel</h5>



<p>including an optional const modifier</p>

**Kind**: inner enum of [<code>test-enum</code>](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ERROR | <code>number</code> | <code>ERROR</code> | <p><b><i>(value = 0)</i></b></p> |
| WARN | <code>number</code> | <code>WARN</code> | <p><b><i>(value = 1)</i></b></p> |
| INFO | <code>number</code> | <code>INFO</code> | <p><b><i>(value = 2)</i></b></p> |
| DEBUG | <code>number</code> | <code>DEBUG</code> | <p><b><i>(value = 3)</i></b></p> |


<hr/>

<a name="module_test-enum..Jumper" id="module_test-enum..Jumper"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~Jumper</h5>



<p>Explicit after implicit</p>

**Kind**: inner enum of [<code>test-enum</code>](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Zero | <code>number</code> | <code>Zero</code> | <p><b><i>(value = 0)</i></b></p> |
| One | <code>number</code> | <code>One</code> | <p><b><i>(value = 1)</i></b></p> |
| Two | <code>number</code> | <code>Two</code> | <p><b><i>(value = 2)</i></b></p> |
| OneHundred | <code>number</code> | <code>OneHundred</code> | <p><b><i>(value = 100)</i></b></p> |
| OneOhOne | <code>number</code> | <code>OneOhOne</code> | <p><b><i>(value = 101)</i></b></p> |
| OneOhTwo | <code>number</code> | <code>OneOhTwo</code> | <p><b><i>(value = 102)</i></b></p> |


<hr/>

<a name="module_test-enum..Scattered" id="module_test-enum..Scattered"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~Scattered</h5>



<p>Explicit non sequential</p>

**Kind**: inner enum of [<code>test-enum</code>](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Foo | <code>number</code> | <code>Foo</code> | <p><b><i>(value = 456)</i></b></p> |
| Bar | <code>number</code> | <code>Bar</code> | <p><b><i>(value = 123)</i></b></p> |
| Fubar | <code>number</code> | <code>Fubar</code> | <p><b><i>(value = 42)</i></b></p> |


<hr/>

<a name="module_test-enum..BugCase1" id="module_test-enum..BugCase1"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~BugCase1</h5>



<p>Bug case: No comma on last element</p>

**Kind**: inner enum of [<code>test-enum</code>](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Foo | <code>number</code> | <code>Foo</code> | <p><b><i>(value = 456)</i></b></p> |
| Bar | <code>number</code> | <code>Bar</code> | <p><b><i>(value = 123)</i></b></p> |
| Fubar | <code>number</code> | <code>Fubar</code> | <p><b><i>(value = 42)</i></b></p> |


<hr/>

<a name="module_test-enum..BugCase1b" id="module_test-enum..BugCase1b"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~BugCase1b</h5>



<p>Bug case explore: No comma on last element, comments</p>

**Kind**: inner enum of [<code>test-enum</code>](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Foo | <code>number</code> | <code>Foo</code> | <p>this is foo <b><i>(value = 456)</i></b></p> |
| Bar | <code>number</code> | <code>Bar</code> | <p>this is bar <b><i>(value = 123)</i></b></p> |
| Fubar | <code>number</code> | <code>Fubar</code> | <p>this is fubar <b><i>(value = 42)</i></b></p> |


<hr/>

<a name="module_test-enum..BugCase1c" id="module_test-enum..BugCase1c"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~BugCase1c</h5>



<p>Bug case explore: No comma on last element, string</p>

**Kind**: inner enum of [<code>test-enum</code>](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Foo | <code>string</code> | <code>&quot;Foo&quot;</code> | 
| Bar | <code>string</code> | <code>&quot;Bar&quot;</code> | 
| Fubar | <code>string</code> | <code>&quot;Fubar&quot;</code> | 


<hr/>

<a name="module_test-functions" id="module_test-functions"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions</h5>




* [test-functions](#module_test-functions)
    * [~plainJane(a, b, c)](#module_test-functions..plainJane)
    * [~publicJane(a, b, c)](#module_test-functions..publicJane)
    * [~separatedJane(a, b, c)](#module_test-functions..separatedJane)
    * [~indexGenerator()](#module_test-functions..indexGenerator)
    * [~indexGeneratorTS()](#module_test-functions..indexGeneratorTS) ⇒ <code>Generator.&lt;number&gt;</code>
    * [~typescript(a, b, c)](#module_test-functions..typescript)
    * [~splitscript(a, b, c)](#module_test-functions..splitscript) ⇒ <code>string</code>
    * [~fetch(url)](#module_test-functions..fetch) ⇒ <code>Promise.&lt;string&gt;</code>
    * [~simpleVoid()](#module_test-functions..simpleVoid)
    * [~simpleVoidTS()](#module_test-functions..simpleVoidTS)
    * [~docVoid()](#module_test-functions..docVoid) ⇒ <code>void</code>
    * [~jsVoid()](#module_test-functions..jsVoid) ⇒ <code>void</code>


<hr/>

<a name="module_test-functions..plainJane" id="module_test-functions..plainJane"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~plainJane(a, b, c)</h5>



<p>this is as plain as it gets
a simple JS function
marked as public so it will appear in output</p>

**Kind**: inner method of [<code>test-functions</code>](#module_test-functions)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 
| c | <code>\*</code> | 


<hr/>

<a name="module_test-functions..publicJane" id="module_test-functions..publicJane"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~publicJane(a, b, c)</h5>



<p>This is the same as plainJane, but
in this case we are exporting it from the module
and using a JSDoc form comment block</p>

**Kind**: inner method of [<code>test-functions</code>](#module_test-functions)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 
| c | <code>\*</code> | 


<hr/>

<a name="module_test-functions..separatedJane" id="module_test-functions..separatedJane"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~separatedJane(a, b, c)</h5>



<p>All keywords are separated</p>

**Kind**: inner method of [<code>test-functions</code>](#module_test-functions)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 
| c | <code>\*</code> | 


<hr/>

<a name="module_test-functions..indexGenerator" id="module_test-functions..indexGenerator"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~indexGenerator()</h5>



<p>a generator function</p>

**Kind**: inner method of [<code>test-functions</code>](#module_test-functions)  
**Access**: public  

<hr/>

<a name="module_test-functions..indexGeneratorTS" id="module_test-functions..indexGeneratorTS"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~indexGeneratorTS() ⇒ <code>Generator.&lt;number&gt;</code></h5>



<p>a typescript generator function</p>

**Kind**: inner method of [<code>test-functions</code>](#module_test-functions)  
**Returns**: <code>Generator.&lt;number&gt;</code> - <p>generates numbers</p>  
**Access**: public  

<hr/>

<a name="module_test-functions..typescript" id="module_test-functions..typescript"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~typescript(a, b, c)</h5>



<p>a typescript example</p>

**Kind**: inner method of [<code>test-functions</code>](#module_test-functions)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | <code>string</code> | 
| b | <code>number</code> | 
| c | <code>boolean</code> | 


<hr/>

<a name="module_test-functions..splitscript" id="module_test-functions..splitscript"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~splitscript(a, b, c) ⇒ <code>string</code></h5>



<p>separated typescript</p>

**Kind**: inner method of [<code>test-functions</code>](#module_test-functions)  
**Returns**: <code>string</code> - <p>A value is returned</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>string</code> | <p>the a parameter</p> |
| b | <code>number</code> | <p>the b parameter</p> |
| c | <code>boolean</code> | <p>the c parameter</p> |


<hr/>

<a name="module_test-functions..fetch" id="module_test-functions..fetch"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~fetch(url) ⇒ <code>Promise.&lt;string&gt;</code></h5>



<p>example of an async function</p>

**Kind**: inner method of [<code>test-functions</code>](#module_test-functions)  
**Returns**: <code>Promise.&lt;string&gt;</code> - <p>the body of the return</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>The url to fetch</p> |


<hr/>

<a name="module_test-functions..simpleVoid" id="module_test-functions..simpleVoid"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~simpleVoid()</h5>



<p>void functions do not document a return type</p>

**Kind**: inner method of [<code>test-functions</code>](#module_test-functions)  
**Access**: public  

<hr/>

<a name="module_test-functions..simpleVoidTS" id="module_test-functions..simpleVoidTS"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~simpleVoidTS()</h5>



<p>typescript void functions do not document a return type</p>

**Kind**: inner method of [<code>test-functions</code>](#module_test-functions)  
**Access**: public  

<hr/>

<a name="module_test-functions..docVoid" id="module_test-functions..docVoid"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~docVoid() ⇒ <code>void</code></h5>



<p>typescript with documented void return</p>

**Kind**: inner method of [<code>test-functions</code>](#module_test-functions)  
**Returns**: <code>void</code> - <p>// a void return</p>  
**Access**: public  

<hr/>

<a name="module_test-functions..jsVoid" id="module_test-functions..jsVoid"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~jsVoid() ⇒ <code>void</code></h5>



<p>javascript post-dec comments also documented as return type</p>

**Kind**: inner method of [<code>test-functions</code>](#module_test-functions)  
**Returns**: <code>void</code> - <p>// nothing to see here</p>  
**Access**: public  

<hr/>

<a name="module_test-parameters" id="module_test-parameters"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-parameters</h5>




* [test-parameters](#module_test-parameters)
    * [~one(a, b, c)](#module_test-parameters..one)
    * [~two(a, b, c)](#module_test-parameters..two)
    * [~three(a, b, c)](#module_test-parameters..three)
    * [~four(a, b, c)](#module_test-parameters..four)
    * [~five(a, b, c)](#module_test-parameters..five)
    * [~six(a, b, c)](#module_test-parameters..six)


<hr/>

<a name="module_test-parameters..one" id="module_test-parameters..one"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-parameters~one(a, b, c)</h5>



<p>name only, any type</p>

**Kind**: inner method of [<code>test-parameters</code>](#module_test-parameters)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 
| c | <code>\*</code> | 


<hr/>

<a name="module_test-parameters..two" id="module_test-parameters..two"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-parameters~two(a, b, c)</h5>



<p>name only with comments</p>

**Kind**: inner method of [<code>test-parameters</code>](#module_test-parameters)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | <p>inline</p> |
| b | <code>\*</code> | <p>sidebar, multiple lines and verbose</p> |
| c | <code>\*</code> | <p>sidebar single-line</p> |


<hr/>

<a name="module_test-parameters..three" id="module_test-parameters..three"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-parameters~three(a, b, c)</h5>



<p>name:type (typescript)</p>

**Kind**: inner method of [<code>test-parameters</code>](#module_test-parameters)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | <code>string</code> | 
| b | <code>number</code> | 
| c | <code>FooBar</code> | 


<hr/>

<a name="module_test-parameters..four" id="module_test-parameters..four"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-parameters~four(a, b, c)</h5>



<p>name:type with comment</p>

**Kind**: inner method of [<code>test-parameters</code>](#module_test-parameters)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>string</code> | <p>Comment one</p> |
| b | <code>\*</code> | <p>Comment two</p> |
| c | <code>\*</code> | <p>Comment three</p> |


<hr/>

<a name="module_test-parameters..five" id="module_test-parameters..five"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-parameters~five(a, b, c)</h5>



<p>ad-hoc object parameters</p>

**Kind**: inner method of [<code>test-parameters</code>](#module_test-parameters)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | <code>object</code> | 
| a.foo | <code>string</code> | 
| a.bar | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>FooBar</code> | 


<hr/>

<a name="module_test-parameters..six" id="module_test-parameters..six"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-parameters~six(a, b, c)</h5>



<p>ad-hoc object parameters, with comments</p>

**Kind**: inner method of [<code>test-parameters</code>](#module_test-parameters)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>object</code> | <p>The a object holds properties that are used for some reasan, and we can document them.</p> |
| a.foo | <code>string</code> | <p>something to say about foo</p> |
| a.bar | <code>number</code> | <p>belly up to the bar</p> |
| b | <code>number</code> | <p>and we document the other parameters, too</p> |
| c | <code>FooBar</code> | <p>including good old FooBar</p> |


<hr/>

<a name="module_test-properties" id="module_test-properties"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties</h5>




* [test-properties](#module_test-properties)
    * [~PropExplorer](#module_test-properties..PropExplorer)
    * [~aVar](#module_test-properties..aVar) : <code>string</code>
    * [~aLet](#module_test-properties..aLet) : <code>string</code>
    * [~aSideVar](#module_test-properties..aSideVar) : <code>string</code>
    * [~aSideLet](#module_test-properties..aSideLet) : <code>string</code>
    * [~baz](#module_test-properties..baz) : <code>string</code>
    * [~huzzah](#module_test-properties..huzzah) : <code>string</code>
    * [~a](#module_test-properties..a) : <code>number</code>
    * [~typed](#module_test-properties..typed) : <code>string</code>
    * [~assigned](#module_test-properties..assigned) : <code>string</code>
    * [~one](#module_test-properties..one) : <code>string</code>
    * [~MultipleDeclarations](#module_test-properties..MultipleDeclarations) : <code>string</code>
    * [~aConst](#module_test-properties..aConst) : <code>number</code>
    * [~aSideConst](#module_test-properties..aSideConst) : <code>number</code>
    * [~myArray](#module_test-properties..myArray) : <code>string</code>
    * [~myObject](#module_test-properties..myObject) : <code>string</code>
    * [~another](#module_test-properties..another) : <code>string</code>


<hr/>

<a name="module_test-properties..PropExplorer" id="module_test-properties..PropExplorer"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~PropExplorer</h5>



<p>Explore class properties</p>

**Kind**: inner class of [<code>test-properties</code>](#module_test-properties)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;&#x27;no&quot;</code> | <p>type provided' -</p> |
| value | <code>number</code> | <code>10</code> | <p>no type provided here either</p> |
| commented | <code>string</code> | <code>&quot;&#x27;no&quot;</code> | <p>type provided' - but I have a comment about it</p> |
| unassigned | <code>string</code> |  | <ul> <li></li> </ul> |
| novalue | <code>number</code> |  | <p>also unassigned</p> |
| anything | <code>any</code> |  | <p>unassigned any</p> |
| justMe | <code>string</code> |  | <p>undeclared and unassigned</p> |
| noComment | <code>string</code> |  | <ul> <li></li> </ul> |
| Label | <code>string</code> | <code>&quot;&#x27;Foobar&#x27;&quot;</code> | <p>(<code>static</code>)</p> |
| PropExplorer.InnerClass | <code>class</code> |  | <ul> <li></li> </ul> |
| InnerClass.PropExplorer.constructor | <code>method</code> |  | <p>a chance to comment the inner constructor</p> |
| InnerClass.PropExplorer.hello | <code>method</code> |  | <p>say hi</p> |
| InnerClass.PropExplorer.getNumber | <code>method</code> |  | <p>(<code>static</code>) (<code>async</code>) (<code>returns {Promise&lt;number&gt;} resolves to the magic value</code>)  <br/>  fetch a number</p> |


<hr/>

<a name="module_test-properties..aVar" id="module_test-properties..aVar"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~aVar : <code>string</code></h5>



<p>top commented var</p>

**Kind**: inner property of [<code>test-properties</code>](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..aLet" id="module_test-properties..aLet"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~aLet : <code>string</code></h5>



<p>top commented let</p>

**Kind**: inner property of [<code>test-properties</code>](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..aSideVar" id="module_test-properties..aSideVar"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~aSideVar : <code>string</code></h5>



<p>side commented var</p>

**Kind**: inner property of [<code>test-properties</code>](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..aSideLet" id="module_test-properties..aSideLet"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~aSideLet : <code>string</code></h5>



<p>side commented let</p>

**Kind**: inner property of [<code>test-properties</code>](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..baz" id="module_test-properties..baz"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~baz : <code>string</code></h5>



<p>top commented multi-dec
will only document the last in the series</p>

**Kind**: inner property of [<code>test-properties</code>](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..huzzah" id="module_test-properties..huzzah"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~huzzah : <code>string</code></h5>



<p>side-commented multi, same thing</p>

**Kind**: inner property of [<code>test-properties</code>](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..a" id="module_test-properties..a"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~a : <code>number</code></h5>



<p>undeclared, assignment to a number</p>

**Kind**: inner property of [<code>test-properties</code>](#module_test-properties)  
**Default**: <code>42</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..typed" id="module_test-properties..typed"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~typed : <code>string</code></h5>



<p>declared as string in typescript</p>

**Kind**: inner property of [<code>test-properties</code>](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..assigned" id="module_test-properties..assigned"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~assigned : <code>string</code></h5>



<p>declared and assigned</p>

**Kind**: inner property of [<code>test-properties</code>](#module_test-properties)  
**Default**: <code>&quot;&#x27;a string&#x27;&quot;</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..one" id="module_test-properties..one"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~one : <code>string</code></h5>



<p>top-commented multi assignment
will only document the first in the series</p>

**Kind**: inner property of [<code>test-properties</code>](#module_test-properties)  
**Default**: <code>&quot;1, two &#x3D; 2, three &#x3D; 3&quot;</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..MultipleDeclarations" id="module_test-properties..MultipleDeclarations"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~MultipleDeclarations : <code>string</code></h5>



<p>workaround for documenting
a multiple declaration line</p>
<p><code>m = 1, n = 2, o = 3, p = 4</code></p>

**Kind**: inner property of [<code>test-properties</code>](#module_test-properties)  
**Default**: <code>&quot;1, n &#x3D; 2, o &#x3D; 3, p &#x3D; 4&quot;</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..aConst" id="module_test-properties..aConst"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~aConst : <code>number</code></h5>



<p>top commented const w/assignment</p>

**Kind**: inner constant of [<code>test-properties</code>](#module_test-properties)  
**Default**: <code>0</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..aSideConst" id="module_test-properties..aSideConst"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~aSideConst : <code>number</code></h5>



<p>side commented const w/assignemnt</p>

**Kind**: inner constant of [<code>test-properties</code>](#module_test-properties)  
**Default**: <code>0</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..myArray" id="module_test-properties..myArray"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~myArray : <code>string</code></h5>



<p>an array</p>

**Kind**: inner constant of [<code>test-properties</code>](#module_test-properties)  
**Default**: <code>&quot;[1,2,3,4,5]&quot;</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..myObject" id="module_test-properties..myObject"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~myObject : <code>string</code></h5>



<p>an abject</p>

**Kind**: inner constant of [<code>test-properties</code>](#module_test-properties)  
**Default**: <code>&quot;{ foo: 1, bar: 2 }&quot;</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..another" id="module_test-properties..another"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~another : <code>string</code></h5>



<p>another object, more complex</p>

**Kind**: inner constant of [<code>test-properties</code>](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-publicExport" id="module_test-publicExport"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-publicExport</h5>




<hr/>

<a name="module_test-returns" id="module_test-returns"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns</h5>




* [test-returns](#module_test-returns)
    * [~one()](#module_test-returns..one)
    * [~two()](#module_test-returns..two)
    * [~oneComment()](#module_test-returns..oneComment) ⇒ <code>void</code>
    * [~twoComment()](#module_test-returns..twoComment) ⇒ <code>void</code>
    * [~three()](#module_test-returns..three) ⇒ <code>string</code>
    * [~four()](#module_test-returns..four) ⇒ <code>Promise.&lt;string&gt;</code>
    * [~five()](#module_test-returns..five) ⇒ <code>object</code>
    * [~eight()](#module_test-returns..eight) ⇒ <code>string</code>
    * [~nine()](#module_test-returns..nine) ⇒ <code>Promise.&lt;string&gt;</code>
    * [~ten()](#module_test-returns..ten) ⇒ <code>object</code>
    * [~tenHoc()](#module_test-returns..tenHoc) ⇒ <code>object</code>
    * [~eleven()](#module_test-returns..eleven)


<hr/>

<a name="module_test-returns..one" id="module_test-returns..one"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~one()</h5>



<p>implicit void return should not document return type with no comment</p>

**Kind**: inner method of [<code>test-returns</code>](#module_test-returns)  
**Access**: public  

<hr/>

<a name="module_test-returns..two" id="module_test-returns..two"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~two()</h5>



<p>explicit void return should not document return type with no comment</p>

**Kind**: inner method of [<code>test-returns</code>](#module_test-returns)  
**Access**: public  

<hr/>

<a name="module_test-returns..oneComment" id="module_test-returns..oneComment"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~oneComment() ⇒ <code>void</code></h5>



<p>implicit void return should document return type with a comment</p>

**Kind**: inner method of [<code>test-returns</code>](#module_test-returns)  
**Returns**: <code>void</code> - <p>// commented version</p>  
**Access**: public  

<hr/>

<a name="module_test-returns..twoComment" id="module_test-returns..twoComment"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~twoComment() ⇒ <code>void</code></h5>



<p>explicit void return should document return type with a comment</p>

**Kind**: inner method of [<code>test-returns</code>](#module_test-returns)  
**Returns**: <code>void</code> - <p>commented version</p>  
**Access**: public  

<hr/>

<a name="module_test-returns..three" id="module_test-returns..three"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~three() ⇒ <code>string</code></h5>



<p>typed return should show return type</p>

**Kind**: inner method of [<code>test-returns</code>](#module_test-returns)  
**Access**: public  

<hr/>

<a name="module_test-returns..four" id="module_test-returns..four"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~four() ⇒ <code>Promise.&lt;string&gt;</code></h5>



<p>Promise return should be represented properly</p>

**Kind**: inner method of [<code>test-returns</code>](#module_test-returns)  
**Access**: public  

<hr/>

<a name="module_test-returns..five" id="module_test-returns..five"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~five() ⇒ <code>object</code></h5>



<p>An Ad-Hoc return type should document the object detail</p>

**Kind**: inner method of [<code>test-returns</code>](#module_test-returns)  
**Returns**: <code>object</code> - <p>Object detail:
{ foo:string, bar:number }</p>  
**Access**: public  

<hr/>

<a name="module_test-returns..eight" id="module_test-returns..eight"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~eight() ⇒ <code>string</code></h5>



<p>type  w/comment</p>

**Kind**: inner method of [<code>test-returns</code>](#module_test-returns)  
**Returns**: <code>string</code> - <p>returns a string</p>  
**Access**: public  

<hr/>

<a name="module_test-returns..nine" id="module_test-returns..nine"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~nine() ⇒ <code>Promise.&lt;string&gt;</code></h5>



<p>Promise w/comment</p>

**Kind**: inner method of [<code>test-returns</code>](#module_test-returns)  
**Returns**: <code>Promise.&lt;string&gt;</code> - <p>returns a string promise</p>  
**Access**: public  

<hr/>

<a name="module_test-returns..ten" id="module_test-returns..ten"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~ten() ⇒ <code>object</code></h5>



<p>ad-hoc type w/comment</p>

**Kind**: inner method of [<code>test-returns</code>](#module_test-returns)  
**Returns**: <code>object</code> - <p>returns ad-hoc</p>
<p>Object detail:
{ foo:string, bar:number }</p>  
**Access**: public  

<hr/>

<a name="module_test-returns..tenHoc" id="module_test-returns..tenHoc"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~tenHoc() ⇒ <code>object</code></h5>



<p>a crazy ad-hoc return function</p>

**Kind**: inner method of [<code>test-returns</code>](#module_test-returns)  
**Returns**: <code>object</code> - <p>Object detail:
{
foo:string,
crazy:{
fool:number,
train:string
},
bar:number
}</p>  
**Access**: public  

<hr/>

<a name="module_test-returns..eleven" id="module_test-returns..eleven"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~eleven()</h5>



<p>Test of the throws tag</p>

**Kind**: inner method of [<code>test-returns</code>](#module_test-returns)  
**Throws**:

- <code>Fit</code> <p>if she gets scared</p>

**Access**: public  

<hr/>

<a name="module_test-semicolons" id="module_test-semicolons"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons</h5>




* [test-semicolons](#module_test-semicolons)
    * [~BaseExampleSC](#module_test-semicolons..BaseExampleSC)
        * [.display()](#module_test-semicolons..BaseExampleSC+display)
    * [~PricedExampleSC](#module_test-semicolons..PricedExampleSC) ⇐ <code>BaseExampleSC</code>
        * [.display()](#module_test-semicolons..PricedExampleSC+display)
    * [~Thing1SC](#module_test-semicolons..Thing1SC) ⇐ <code>BaseExampleSC</code>
    * [~Thing2SC](#module_test-semicolons..Thing2SC) ⇐ <code>PricedExampleSC</code>
    * [~ConstructionSC](#module_test-semicolons..ConstructionSC)
        * [new ConstructionSC([name], [place])](#new_module_test-semicolons..ConstructionSC_new)
        * [.plan()](#module_test-semicolons..ConstructionSC+plan)
        * [.milestone()](#module_test-semicolons..ConstructionSC+milestone)
        * [.finish(timeSpent, timeEstimated, notes)](#module_test-semicolons..ConstructionSC+finish) ⇒ <code>string</code>
        * [.jsdocStyleFunction(a)](#module_test-semicolons..ConstructionSC+jsdocStyleFunction) ⇒ <code>Promise.&lt;unknown&gt;</code>
    * [~PrintExampleSC](#module_test-semicolons..PrintExampleSC)
        * [.exmpleLocal(foo)](#module_test-semicolons..PrintExampleSC+exmpleLocal) ⇒ <code>boolean</code>
        * [.print(device, orientation, pages)](#module_test-semicolons..PrintExampleSC+print) ⇒ <code>boolean</code>
        * [.save(device)](#module_test-semicolons..PrintExampleSC+save) ⇒ <code>boolean</code>
    * [~AssigmentClassSC](#module_test-semicolons..AssigmentClassSC)
        * [.dubious()](#module_test-semicolons..AssigmentClassSC+dubious) ⇒ <code>string</code>
    * [~ContainerSC](#module_test-semicolons..ContainerSC)
    * [~PropExplorerSC](#module_test-semicolons..PropExplorerSC)
    * [~PrinterOrientationSC](#module_test-semicolons..PrinterOrientationSC)
    * [~plainJaneSC(a, b, c)](#module_test-semicolons..plainJaneSC)
    * [~publicJaneSC(a, b, c)](#module_test-semicolons..publicJaneSC)
    * [~separatedJaneSC(a, b, c)](#module_test-semicolons..separatedJaneSC)
    * [~indexGeneratorSC()](#module_test-semicolons..indexGeneratorSC)
    * [~indexGeneratorTSSC()](#module_test-semicolons..indexGeneratorTSSC) ⇒ <code>Generator.&lt;number&gt;</code>
    * [~typescriptSC(a, b, c)](#module_test-semicolons..typescriptSC)
    * [~splitscriptSC(a, b, c)](#module_test-semicolons..splitscriptSC) ⇒ <code>string</code>
    * [~fetchSC(url)](#module_test-semicolons..fetchSC) ⇒ <code>Promise.&lt;string&gt;</code>
    * [~simpleVoidSC()](#module_test-semicolons..simpleVoidSC)
    * [~simpleVoidTSSC()](#module_test-semicolons..simpleVoidTSSC)
    * [~docVoidSC()](#module_test-semicolons..docVoidSC) ⇒ <code>void</code>
    * [~jsVoidSC()](#module_test-semicolons..jsVoidSC) ⇒ <code>void</code>


<hr/>

<a name="module_test-semicolons..BaseExampleSC" id="module_test-semicolons..BaseExampleSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~BaseExampleSC</h5>



<p>This is a base class test</p>

**Kind**: inner class of [<code>test-semicolons</code>](#module_test-semicolons)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| type | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-semicolons..BaseExampleSC+display" id="module_test-semicolons..BaseExampleSC+display"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    baseExampleSC.display()</h5>



<p>Displays the values of the object</p>

**Kind**: instance method of [<code>BaseExampleSC</code>](#module_test-semicolons..BaseExampleSC)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..PricedExampleSC" id="module_test-semicolons..PricedExampleSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~PricedExampleSC ⇐ <code>BaseExampleSC</code></h5>



<p>Another base class, but it inherits from BaseExample</p>

**Kind**: inner class of [<code>test-semicolons</code>](#module_test-semicolons)  
**Extends**: <code>BaseExampleSC</code>  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| price | <code>number</code> | <code>0</code> | <ul> <li></li> </ul> |
| unit | <code>string</code> | <code>&quot;&#x27;dollars&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-semicolons..PricedExampleSC+display" id="module_test-semicolons..PricedExampleSC+display"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    pricedExampleSC.display()</h5>



<p>Displays the values and price of the object</p>

**Kind**: instance method of [<code>PricedExampleSC</code>](#module_test-semicolons..PricedExampleSC)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..Thing1SC" id="module_test-semicolons..Thing1SC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~Thing1SC ⇐ <code>BaseExampleSC</code></h5>



<p>We declare a thing without a price</p>

**Kind**: inner class of [<code>test-semicolons</code>](#module_test-semicolons)  
**Extends**: <code>BaseExampleSC</code>  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;&#x27;Kepler&#x27;&quot;</code> | <ul> <li></li> </ul> |
| type | <code>string</code> | <code>&quot;&#x27;Dog&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-semicolons..Thing2SC" id="module_test-semicolons..Thing2SC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~Thing2SC ⇐ <code>PricedExampleSC</code></h5>



<p>We declare a thing with a price</p>

**Kind**: inner class of [<code>test-semicolons</code>](#module_test-semicolons)  
**Extends**: <code>PricedExampleSC</code>  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;&#x27;Jove&#x27;&quot;</code> | <ul> <li></li> </ul> |
| type | <code>string</code> | <code>&quot;&#x27;Framework&#x27;&quot;</code> | <ul> <li></li> </ul> |
| price | <code>string</code> | <code>49.95</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-semicolons..ConstructionSC" id="module_test-semicolons..ConstructionSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~ConstructionSC</h5>



<p>We declare a working class</p>

**Kind**: inner class of [<code>test-semicolons</code>](#module_test-semicolons)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>name of the work</p> |
| [place] | <code>string</code> | <p>place of the work</p> |
| [other] | <code>any</code> | <p>other stuff, optional</p> |


* [~ConstructionSC](#module_test-semicolons..ConstructionSC)
    * [new ConstructionSC([name], [place])](#new_module_test-semicolons..ConstructionSC_new)
    * [.plan()](#module_test-semicolons..ConstructionSC+plan)
    * [.milestone()](#module_test-semicolons..ConstructionSC+milestone)
    * [.finish(timeSpent, timeEstimated, notes)](#module_test-semicolons..ConstructionSC+finish) ⇒ <code>string</code>
    * [.jsdocStyleFunction(a)](#module_test-semicolons..ConstructionSC+jsdocStyleFunction) ⇒ <code>Promise.&lt;unknown&gt;</code>


<hr/>

<a name="new_module_test-semicolons..ConstructionSC_new" id="new_module_test-semicolons..ConstructionSC_new"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    new ConstructionSC([name], [place])</h5>



<p>creates a Construction instance</p>


| Param | Type |
| --- | --- |
| [name] | <code>string</code> | 
| [place] | <code>string</code> | 


<hr/>

<a name="module_test-semicolons..ConstructionSC+plan" id="module_test-semicolons..ConstructionSC+plan"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    constructionSC.plan()</h5>



<p>Plans the construction</p>

**Kind**: instance method of [<code>ConstructionSC</code>](#module_test-semicolons..ConstructionSC)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..ConstructionSC+milestone" id="module_test-semicolons..ConstructionSC+milestone"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    constructionSC.milestone()</h5>



<p>generates the next milestone</p>

**Kind**: instance method of [<code>ConstructionSC</code>](#module_test-semicolons..ConstructionSC)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..ConstructionSC+finish" id="module_test-semicolons..ConstructionSC+finish"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    constructionSC.finish(timeSpent, timeEstimated, notes) ⇒ <code>string</code></h5>



<p>complete building</p>

**Kind**: instance method of [<code>ConstructionSC</code>](#module_test-semicolons..ConstructionSC)  
**Returns**: <code>string</code> - <p>returns a report</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| timeSpent | <code>number</code> | <p>hours of actual work</p> |
| timeEstimated | <code>number</code> | <p>hours estimated at start</p> |
| notes | <code>string</code> | <p>notes about the work</p> |


<hr/>

<a name="module_test-semicolons..ConstructionSC+jsdocStyleFunction" id="module_test-semicolons..ConstructionSC+jsdocStyleFunction"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    constructionSC.jsdocStyleFunction(a) ⇒ <code>Promise.&lt;unknown&gt;</code></h5>



<p>A method documented in classic JSDoc style.  *
But we'll let the param types and return be generated</p>

**Kind**: instance method of [<code>ConstructionSC</code>](#module_test-semicolons..ConstructionSC)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | <p>a number we pass in</p> |


<hr/>

<a name="module_test-semicolons..PrintExampleSC" id="module_test-semicolons..PrintExampleSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~PrintExampleSC</h5>



<p>An example of implemented interfaces</p>

**Kind**: inner class of [<code>test-semicolons</code>](#module_test-semicolons)  
**Implements**: <code>PrintActionSC</code>, <code>SaveActionSC</code>  
**Access**: public  

* [~PrintExampleSC](#module_test-semicolons..PrintExampleSC)
    * [.exmpleLocal(foo)](#module_test-semicolons..PrintExampleSC+exmpleLocal) ⇒ <code>boolean</code>
    * [.print(device, orientation, pages)](#module_test-semicolons..PrintExampleSC+print) ⇒ <code>boolean</code>
    * [.save(device)](#module_test-semicolons..PrintExampleSC+save) ⇒ <code>boolean</code>


<hr/>

<a name="module_test-semicolons..PrintExampleSC+exmpleLocal" id="module_test-semicolons..PrintExampleSC+exmpleLocal"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExampleSC.exmpleLocal(foo) ⇒ <code>boolean</code></h5>



<p>Local function to print Example.</p>

**Kind**: instance method of [<code>PrintExampleSC</code>](#module_test-semicolons..PrintExampleSC)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| foo | <code>string</code> | <p>device if not default</p> |


<hr/>

<a name="module_test-semicolons..PrintExampleSC+print" id="module_test-semicolons..PrintExampleSC+print"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExampleSC.print(device, orientation, pages) ⇒ <code>boolean</code></h5>



<p>implementation of primt</p>

**Kind**: instance method of [<code>PrintExampleSC</code>](#module_test-semicolons..PrintExampleSC)  
**Access**: public  

| Param | Type |
| --- | --- |
| device | <code>string</code> | 
| orientation | <code>PrinterOrientationSC</code> | 
| pages | <code>number</code> | 


<hr/>

<a name="module_test-semicolons..PrintExampleSC+save" id="module_test-semicolons..PrintExampleSC+save"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExampleSC.save(device) ⇒ <code>boolean</code></h5>



<p>implementation of save</p>

**Kind**: instance method of [<code>PrintExampleSC</code>](#module_test-semicolons..PrintExampleSC)  
**Access**: public  

| Param | Type |
| --- | --- |
| device | <code>string</code> | 


<hr/>

<a name="module_test-semicolons..AssigmentClassSC" id="module_test-semicolons..AssigmentClassSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~AssigmentClassSC</h5>



<p>Test of an assignment class</p>

**Kind**: inner class of [<code>test-semicolons</code>](#module_test-semicolons)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..AssigmentClassSC+dubious" id="module_test-semicolons..AssigmentClassSC+dubious"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    assigmentClassSC.dubious() ⇒ <code>string</code></h5>



<p>we have a method</p>

**Kind**: instance method of [<code>AssigmentClassSC</code>](#module_test-semicolons..AssigmentClassSC)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..ContainerSC" id="module_test-semicolons..ContainerSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~ContainerSC</h5>



<p>Test of having an inner class</p>

**Kind**: inner class of [<code>test-semicolons</code>](#module_test-semicolons)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| ContainerSC.InsiderSC | <code>class</code> | <p>this class is a public property of Container</p> |
| InsiderSC.ContainerSC.name | <code>string</code> | <p>a name property</p> |
| InsiderSC.ContainerSC.foobar | <code>method</code> | <p>Everyone needs a foobar function</p> |
| InsiderSC.ContainerSC.constructor | <code>method</code> | <p>construct an Insider with <code>new Container.Insider()</code></p> |


<hr/>

<a name="module_test-semicolons..PropExplorerSC" id="module_test-semicolons..PropExplorerSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~PropExplorerSC</h5>



<p>Explore class properties</p>

**Kind**: inner class of [<code>test-semicolons</code>](#module_test-semicolons)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;&#x27;no&quot;</code> | <p>type provided' -</p> |
| value | <code>string</code> | <code>10</code> | <p>no type provided here either</p> |
| commented | <code>string</code> | <code>&quot;&#x27;no&quot;</code> | <p>type provided' - but I have a comment about it</p> |
| unassigned | <code>string</code> |  | <ul> <li></li> </ul> |
| justMe | <code>string</code> |  | <p>undeclared and unassigned</p> |
| noComment | <code>string</code> |  | <ul> <li></li> </ul> |
| Label | <code>string</code> | <code>&quot;&#x27;Foobar&#x27;&quot;</code> | <p>(<code>static</code>)</p> |
| PropExplorerSC.InnerClass | <code>class</code> |  | <ul> <li></li> </ul> |
| InnerClass.PropExplorerSC.constructor | <code>method</code> |  | <p>a chance to comment the inner constructor</p> |
| InnerClass.PropExplorerSC.hello | <code>method</code> |  | <p>say hi</p> |
| InnerClass.PropExplorerSC.getNumber | <code>method</code> |  | <p>(<code>static</code>) (<code>async</code>) (<code>returns {Promise&lt;number&gt;} resolves to the magic value</code>)  <br/>  fetch a number</p> |


<hr/>

<a name="module_test-semicolons..PrinterOrientationSC" id="module_test-semicolons..PrinterOrientationSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~PrinterOrientationSC</h5>



**Kind**: inner enum of [<code>test-semicolons</code>](#module_test-semicolons)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Portrait | <code>number</code> | <code>Portrait</code> | <p><b><i>(value = 0)</i></b></p> |
| Landscape | <code>number</code> | <code>Landscape</code> | <p><b><i>(value = 1)</i></b></p> |


<hr/>

<a name="module_test-semicolons..plainJaneSC" id="module_test-semicolons..plainJaneSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~plainJaneSC(a, b, c)</h5>



<p>this is as plain as it gets
a simple JS function
marked as public so it will appear in output</p>

**Kind**: inner method of [<code>test-semicolons</code>](#module_test-semicolons)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 
| c | <code>\*</code> | 


<hr/>

<a name="module_test-semicolons..publicJaneSC" id="module_test-semicolons..publicJaneSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~publicJaneSC(a, b, c)</h5>



<p>This is the same as plainJane, but
in this case we are exporting it from the module
and using a JSDoc form comment block</p>

**Kind**: inner method of [<code>test-semicolons</code>](#module_test-semicolons)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 
| c | <code>\*</code> | 


<hr/>

<a name="module_test-semicolons..separatedJaneSC" id="module_test-semicolons..separatedJaneSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~separatedJaneSC(a, b, c)</h5>



<p>All keywords are separated</p>

**Kind**: inner method of [<code>test-semicolons</code>](#module_test-semicolons)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 
| c | <code>\*</code> | 


<hr/>

<a name="module_test-semicolons..indexGeneratorSC" id="module_test-semicolons..indexGeneratorSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~indexGeneratorSC()</h5>



<p>a generator function</p>

**Kind**: inner method of [<code>test-semicolons</code>](#module_test-semicolons)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..indexGeneratorTSSC" id="module_test-semicolons..indexGeneratorTSSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~indexGeneratorTSSC() ⇒ <code>Generator.&lt;number&gt;</code></h5>



<p>a typescript generator function</p>

**Kind**: inner method of [<code>test-semicolons</code>](#module_test-semicolons)  
**Returns**: <code>Generator.&lt;number&gt;</code> - <p>generates numbers</p>  
**Access**: public  

<hr/>

<a name="module_test-semicolons..typescriptSC" id="module_test-semicolons..typescriptSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~typescriptSC(a, b, c)</h5>



<p>a typescript example</p>

**Kind**: inner method of [<code>test-semicolons</code>](#module_test-semicolons)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | <code>string</code> | 
| b | <code>number</code> | 
| c | <code>boolean</code> | 


<hr/>

<a name="module_test-semicolons..splitscriptSC" id="module_test-semicolons..splitscriptSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~splitscriptSC(a, b, c) ⇒ <code>string</code></h5>



<p>separated typescript, including separated semicolon</p>

**Kind**: inner method of [<code>test-semicolons</code>](#module_test-semicolons)  
**Returns**: <code>string</code> - <p>A value is returned</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>string</code> | <p>the a parameter</p> |
| b | <code>number</code> | <p>the b parameter</p> |
| c | <code>boolean</code> | <p>the c parameter</p> |


<hr/>

<a name="module_test-semicolons..fetchSC" id="module_test-semicolons..fetchSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~fetchSC(url) ⇒ <code>Promise.&lt;string&gt;</code></h5>



<p>example of an async function</p>

**Kind**: inner method of [<code>test-semicolons</code>](#module_test-semicolons)  
**Returns**: <code>Promise.&lt;string&gt;</code> - <p>the body of the return</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>The url to fetch</p> |


<hr/>

<a name="module_test-semicolons..simpleVoidSC" id="module_test-semicolons..simpleVoidSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~simpleVoidSC()</h5>



<p>void functions do not document a return type</p>

**Kind**: inner method of [<code>test-semicolons</code>](#module_test-semicolons)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..simpleVoidTSSC" id="module_test-semicolons..simpleVoidTSSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~simpleVoidTSSC()</h5>



<p>typescript void functions do not document a return type</p>

**Kind**: inner method of [<code>test-semicolons</code>](#module_test-semicolons)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..docVoidSC" id="module_test-semicolons..docVoidSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~docVoidSC() ⇒ <code>void</code></h5>



<p>typescript with documented void return</p>

**Kind**: inner method of [<code>test-semicolons</code>](#module_test-semicolons)  
**Returns**: <code>void</code> - <p>// a void return</p>  
**Access**: public  

<hr/>

<a name="module_test-semicolons..jsVoidSC" id="module_test-semicolons..jsVoidSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~jsVoidSC() ⇒ <code>void</code></h5>



<p>javascript post-dec comments also documented as return type</p>

**Kind**: inner method of [<code>test-semicolons</code>](#module_test-semicolons)  
**Returns**: <code>void</code> - <p>// nothing to see here</p>  
**Access**: public  
