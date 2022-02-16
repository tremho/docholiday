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
    <td><h4>test-classes (Module)</h4>
<p>This module checks the rendering of comments found in classes</p></td>
    </tr>
<tr>
    <td><a href="#module_test-commentBlock">test-commentBlock</a></td>
    <td><h4>test-commentBlock (Module)</h4>
<p>This module checks for parmeters and returns in jsdoc format
insures they are secondary to typescript declarations
and explores the {{{}}} Custom Render space, such as plantUML</p></td>
    </tr>
<tr>
    <td><a href="#module_test-enum">test-enum</a></td>
    <td><h4>test-enum (Module)</h4>
<p>Working with enum</p></td>
    </tr>
<tr>
    <td><a href="#module_test-functions">test-functions</a></td>
    <td><h4>test-functions (Module)</h4>
<p>Tests all forms of function declaration
to see if we are properly documenting these</p></td>
    </tr>
<tr>
    <td><a href="#module_test-parameters">test-parameters</a></td>
    <td><h4>test-parameters (Module)</h4>
<p>Various modes of parameter declaration</p></td>
    </tr>
<tr>
    <td><a href="#module_test-propcomments">test-propcomments</a></td>
    <td><h4>test-propcomments (Module)</h4>
<p>Test forms of property comments</p></td>
    </tr>
<tr>
    <td><a href="#module_test-properties">test-properties</a></td>
    <td><h4>test-properties (Module)</h4>
<p>Checking property declarations
both at module scope and in classes</p></td>
    </tr>
<tr>
    <td><a href="#module_test-publicExport1">test-publicExport1</a></td>
    <td><h4>test-publicExport1 (Module)</h4>
<p>Meant to explore when/how to use @public and @private</p></td>
    </tr>
<tr>
    <td><a href="#module_test-publicExport2">test-publicExport2</a></td>
    <td><h4>test-publicExport2 (Module)</h4>
<p>Meant to explore when/how to use @public and @private</p></td>
    </tr>
<tr>
    <td><a href="#module_test-publicExport3">test-publicExport3</a></td>
    <td><h4>test-publicExport3 (Module)</h4>
<p>Meant to explore when/how to use @public and @private</p></td>
    </tr>
<tr>
    <td><a href="#module_test-returns">test-returns</a></td>
    <td><h4>test-returns (Module)</h4>
<p>Checks the rendering of return statements</p></td>
    </tr>
<tr>
    <td><a href="#module_test-semicolons">test-semicolons</a></td>
    <td><h4>test-semicolons (Module)</h4>
<p>Checks syntax that includes semicolons</p></td>
    </tr>
<tr>
    <td><a href="#module_test-typedef">test-typedef</a></td>
    <td><h4>test-typedef (Module)</h4>
<p>Test forms of type definitions</p></td>
    </tr>
</tbody>
</table>


<hr/>

<a name="module_test-classes" id="module_test-classes"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes</h5>



<h4>test-classes (Module)</h4>
<p>This module checks the rendering of comments found in classes</p>


* [test-classes](#module_test-classes)
    * [~BaseExample](#module_test-classes..BaseExample)
        * [.display()](#module_test-classes..BaseExample+display)
    * [~PricedExample](#module_test-classes..PricedExample) ⇐ `BaseExample`
        * [.display()](#module_test-classes..PricedExample+display)
    * [~Thing1](#module_test-classes..Thing1) ⇐ `BaseExample`
    * [~Thing2](#module_test-classes..Thing2) ⇐ `PricedExample`
    * [~Construction](#module_test-classes..Construction)
        * [new Construction([name], [place])](#new_module_test-classes..Construction_new)
        * [.plan()](#module_test-classes..Construction+plan)
        * [.milestone()](#module_test-classes..Construction+milestone)
        * [.finish(timeSpent, timeEstimated, notes)](#module_test-classes..Construction+finish) ⇒ `string`
        * [.jsdocStyleFunction(a)](#module_test-classes..Construction+jsdocStyleFunction) ⇒ `Promise.&lt;unknown&gt;`
    * [~PrintExample](#module_test-classes..PrintExample)
        * [.exmpleLocal(foo)](#module_test-classes..PrintExample+exmpleLocal) ⇒ `boolean`
        * [.print(device, orientation, pages)](#module_test-classes..PrintExample+print) ⇒ `boolean`
        * [.save(device)](#module_test-classes..PrintExample+save) ⇒ `boolean`
    * [~AssigmentClass](#module_test-classes..AssigmentClass)
        * [.dubious()](#module_test-classes..AssigmentClass+dubious) ⇒ `string`
    * [~Container](#module_test-classes..Container)
    * [~OneLine](#module_test-classes..OneLine)
    * [~Foo](#module_test-classes..Foo)
    * [~MixInExample](#module_test-classes..MixInExample) ⇐ `Foo`
    * [~calculatorMixin](#module_test-classes..calculatorMixin) ⇐ `Base`
        * [.calc()](#module_test-classes..calculatorMixin+calc)
    * [~randomizerMixin](#module_test-classes..randomizerMixin) ⇐ `Base`
        * [.randomize()](#module_test-classes..randomizerMixin+randomize)
    * [~PrinterOrientation](#module_test-classes..PrinterOrientation)


<hr/>

<a name="module_test-classes..BaseExample" id="module_test-classes..BaseExample"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~BaseExample</h5>



<p>This is a base class test</p>

**Kind**: inner class of [`test-classes`](#module_test-classes)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| type | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-classes..BaseExample+display" id="module_test-classes..BaseExample+display"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    baseExample.display()</h5>



<p>Displays the values of the object</p>

**Kind**: instance method of [`BaseExample`](#module_test-classes..BaseExample)  
**Access**: public  

<hr/>

<a name="module_test-classes..PricedExample" id="module_test-classes..PricedExample"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~PricedExample ⇐ `BaseExample`</h5>



<p>Another base class, but it inherits from BaseExample</p>

**Kind**: inner class of [`test-classes`](#module_test-classes)  
**Extends**: `BaseExample`  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| price | `number` | <code>0</code> | <ul> <li></li> </ul> |
| unit | `string` | <code>&quot;&#x27;dollars&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-classes..PricedExample+display" id="module_test-classes..PricedExample+display"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    pricedExample.display()</h5>



<p>Displays the values and price of the object</p>

**Kind**: instance method of [`PricedExample`](#module_test-classes..PricedExample)  
**Access**: public  

<hr/>

<a name="module_test-classes..Thing1" id="module_test-classes..Thing1"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~Thing1 ⇐ `BaseExample`</h5>



<p>We declare a thing without a price</p>

**Kind**: inner class of [`test-classes`](#module_test-classes)  
**Extends**: `BaseExample`  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | <code>&quot;&#x27;Kepler&#x27;&quot;</code> | <ul> <li></li> </ul> |
| type | `string` | <code>&quot;&#x27;Dog&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-classes..Thing2" id="module_test-classes..Thing2"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~Thing2 ⇐ `PricedExample`</h5>



<p>We declare a thing with a price</p>

**Kind**: inner class of [`test-classes`](#module_test-classes)  
**Extends**: `PricedExample`  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | <code>&quot;&#x27;Jove&#x27;&quot;</code> | <ul> <li></li> </ul> |
| type | `string` | <code>&quot;&#x27;Framework&#x27;&quot;</code> | <ul> <li></li> </ul> |
| price | `number` | <code>49.95</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-classes..Construction" id="module_test-classes..Construction"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~Construction</h5>



<p>We declare a working class</p>

**Kind**: inner class of [`test-classes`](#module_test-classes)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| work | `string` | <p>name of the work</p> |
| work | `string` | <p>place of the work</p> |
| optional | `string` | <p>other stuff, optional</p> |


* [~Construction](#module_test-classes..Construction)
    * [new Construction([name], [place])](#new_module_test-classes..Construction_new)
    * [.plan()](#module_test-classes..Construction+plan)
    * [.milestone()](#module_test-classes..Construction+milestone)
    * [.finish(timeSpent, timeEstimated, notes)](#module_test-classes..Construction+finish) ⇒ `string`
    * [.jsdocStyleFunction(a)](#module_test-classes..Construction+jsdocStyleFunction) ⇒ `Promise.&lt;unknown&gt;`


<hr/>

<a name="new_module_test-classes..Construction_new" id="new_module_test-classes..Construction_new"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    new Construction([name], [place])</h5>



<p>creates a Construction instance</p>


| Param | Type |
| --- | --- |
| [name] | `string` | 
| [place] | `string` | 


<hr/>

<a name="module_test-classes..Construction+plan" id="module_test-classes..Construction+plan"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    construction.plan()</h5>



<p>Plans the construction</p>

**Kind**: instance method of [`Construction`](#module_test-classes..Construction)  
**Access**: public  

<hr/>

<a name="module_test-classes..Construction+milestone" id="module_test-classes..Construction+milestone"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    construction.milestone()</h5>



<p>generates the next milestone</p>

**Kind**: instance method of [`Construction`](#module_test-classes..Construction)  
**Access**: public  

<hr/>

<a name="module_test-classes..Construction+finish" id="module_test-classes..Construction+finish"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    construction.finish(timeSpent, timeEstimated, notes) ⇒ `string`</h5>



<p>complete building</p>

**Kind**: instance method of [`Construction`](#module_test-classes..Construction)  
**Returns**: `string` - <p>returns a report</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| timeSpent | `number` | <p>hours of actual work</p> |
| timeEstimated | `number` | <p>hours estimated at start</p> |
| notes | `string` | <p>notes about the work</p> |


<hr/>

<a name="module_test-classes..Construction+jsdocStyleFunction" id="module_test-classes..Construction+jsdocStyleFunction"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    construction.jsdocStyleFunction(a) ⇒ `Promise.&lt;unknown&gt;`</h5>



<p>A method documented in classic JSDoc style.
But we'll let the param types and return be generated</p>

**Kind**: instance method of [`Construction`](#module_test-classes..Construction)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | `number` | <p>a number we pass in</p> |


<hr/>

<a name="module_test-classes..PrintExample" id="module_test-classes..PrintExample"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~PrintExample</h5>



<p>An example of implemented interfaces</p>

**Kind**: inner class of [`test-classes`](#module_test-classes)  
**Implements**: `PrintAction`, `SaveAction`  
**Access**: public  

* [~PrintExample](#module_test-classes..PrintExample)
    * [.exmpleLocal(foo)](#module_test-classes..PrintExample+exmpleLocal) ⇒ `boolean`
    * [.print(device, orientation, pages)](#module_test-classes..PrintExample+print) ⇒ `boolean`
    * [.save(device)](#module_test-classes..PrintExample+save) ⇒ `boolean`


<hr/>

<a name="module_test-classes..PrintExample+exmpleLocal" id="module_test-classes..PrintExample+exmpleLocal"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExample.exmpleLocal(foo) ⇒ `boolean`</h5>



<p>Local function to print Example.</p>

**Kind**: instance method of [`PrintExample`](#module_test-classes..PrintExample)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| foo | `string` | <p>device if not default</p> |


<hr/>

<a name="module_test-classes..PrintExample+print" id="module_test-classes..PrintExample+print"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExample.print(device, orientation, pages) ⇒ `boolean`</h5>



<p>implementation of primt</p>

**Kind**: instance method of [`PrintExample`](#module_test-classes..PrintExample)  
**Returns**: `boolean` - <p>implementation of save</p>  
**Access**: public  

| Param | Type |
| --- | --- |
| device | `string` | 
| orientation | `PrinterOrientation` | 
| pages | `number` | 


<hr/>

<a name="module_test-classes..PrintExample+save" id="module_test-classes..PrintExample+save"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExample.save(device) ⇒ `boolean`</h5>



<p>implementation of save</p>

**Kind**: instance method of [`PrintExample`](#module_test-classes..PrintExample)  
**Access**: public  

| Param | Type |
| --- | --- |
| device | `string` | 


<hr/>

<a name="module_test-classes..AssigmentClass" id="module_test-classes..AssigmentClass"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~AssigmentClass</h5>



<p>Test of an assignment class</p>

**Kind**: inner class of [`test-classes`](#module_test-classes)  
**Access**: public  

<hr/>

<a name="module_test-classes..AssigmentClass+dubious" id="module_test-classes..AssigmentClass+dubious"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    assigmentClass.dubious() ⇒ `string`</h5>



<p>we have a method</p>

**Kind**: instance method of [`AssigmentClass`](#module_test-classes..AssigmentClass)  
**Access**: public  

<hr/>

<a name="module_test-classes..Container" id="module_test-classes..Container"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~Container</h5>



<p>Test of having an inner class</p>

**Kind**: inner class of [`test-classes`](#module_test-classes)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Container.Insider | `class` | <p>this class is a public property of Container</p> |
| Insider.Container.property | `string` | <p>a name property</p> |
| Insider.Container.foobar | `method` | <p>Everyone needs a foobar function</p> |
| Insider.Container.constructor | `method` | <p>construct an Insider with <code>new Container.Insider()</code></p> |


<hr/>

<a name="module_test-classes..OneLine" id="module_test-classes..OneLine"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~OneLine</h5>



<p>define a class on one line</p>

**Kind**: inner class of [`test-classes`](#module_test-classes)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| one | `number` | <ul> <li></li> </ul> |
| two | `number` | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-classes..Foo" id="module_test-classes..Foo"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~Foo</h5>



<p>used in mix-in example from MDN</p>

**Kind**: inner class of [`test-classes`](#module_test-classes)  
**Access**: public  

<hr/>

<a name="module_test-classes..MixInExample" id="module_test-classes..MixInExample"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~MixInExample ⇐ `Foo`</h5>



**Kind**: inner class of [`test-classes`](#module_test-classes)  
**Extends**: `Foo`  
**Mixes**: `calculatorMixin`, `randomizerMixin`  
**Access**: public  

<hr/>

<a name="module_test-classes..calculatorMixin" id="module_test-classes..calculatorMixin"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~calculatorMixin ⇐ `Base`</h5>



**Kind**: inner mixin of [`test-classes`](#module_test-classes)  
**Extends**: `Base`  
**Access**: public  

<hr/>

<a name="module_test-classes..calculatorMixin+calc" id="module_test-classes..calculatorMixin+calc"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    calculatorMixin.calc()</h5>



**Kind**: instance method of [`calculatorMixin`](#module_test-classes..calculatorMixin)  
**Access**: public  

<hr/>

<a name="module_test-classes..randomizerMixin" id="module_test-classes..randomizerMixin"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~randomizerMixin ⇐ `Base`</h5>



**Kind**: inner mixin of [`test-classes`](#module_test-classes)  
**Extends**: `Base`  
**Access**: public  

<hr/>

<a name="module_test-classes..randomizerMixin+randomize" id="module_test-classes..randomizerMixin+randomize"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    randomizerMixin.randomize()</h5>



**Kind**: instance method of [`randomizerMixin`](#module_test-classes..randomizerMixin)  
**Access**: public  

<hr/>

<a name="module_test-classes..PrinterOrientation" id="module_test-classes..PrinterOrientation"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-classes~PrinterOrientation</h5>



**Kind**: inner enum of [`test-classes`](#module_test-classes)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Portrait | `number` | <code>Portrait</code> | <p><b><i>(value = 0)</i></b></p> |
| Landscape | `number` | <code>Landscape</code> | <p><b><i>(value = 1)</i></b></p> |


<hr/>

<a name="module_test-commentBlock" id="module_test-commentBlock"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock</h5>



<h4>test-commentBlock (Module)</h4>
<p>This module checks for parmeters and returns in jsdoc format
insures they are secondary to typescript declarations
and explores the {{{}}} Custom Render space, such as plantUML</p>


* [test-commentBlock](#module_test-commentBlock)
    * [~beast()](#module_test-commentBlock..beast)
    * [~withParams(a, b, c)](#module_test-commentBlock..withParams)
    * [~typeParamsWin(a, b, c)](#module_test-commentBlock..typeParamsWin) ⇒ `any`
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

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..withParams" id="module_test-commentBlock..withParams"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~withParams(a, b, c)</h5>



<p>We should be able to type and comment our parameters in the jsdoc block</p>

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | `string` | <ul> <li>A string that is 'a'</li> </ul> |
| b | `string` | <ul> <li>A string that is b-like</li> </ul> |
| c | `number` | <ul> <li>A number to see</li> </ul> |


<hr/>

<a name="module_test-commentBlock..typeParamsWin" id="module_test-commentBlock..typeParamsWin"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~typeParamsWin(a, b, c) ⇒ `any`</h5>



<p>If we have typescript-typed values, instead, they win</p>

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
**Returns**: `any` - <p>typescript defined return</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | `number` | <p>typescript says this is a number</p> |
| b | `any` | <p>typescript says this is any</p> |
| c | `number` | <p>typescript assigned no further type</p> |


<hr/>

<a name="module_test-commentBlock..jsdocTag" id="module_test-commentBlock..jsdocTag"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~jsdocTag()</h5>



<p>We should be able to insert a jsdoc tag using our extended syntax.
In this case: see www.tremho.com</p>

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
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

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantSeq2" id="module_test-commentBlock..plantSeq2"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantSeq2()</h5>



<p>Same, but this comment should be at top
and we should have more plain text at bottom</p>
<p><img src="http://www.plantuml.com/plantuml/svg/u-9opCbCJbNGjLDmoa-oKd0iBSb8pIl9J4uioSpFKmXABInDBIxX0iefw0BLW1LZKLLSa9zNdCg5RbXUFb1TaK8YTaCXYcrqTGceXXaE0000" alt="plantUML"></p>
<p>More plain text at the bottom...</p>

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantUse" id="module_test-commentBlock..plantUse"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantUse()</h5>



<p>We can use PlantUML for UseCase diagrams</p>
<p><img src="http://www.plantuml.com/plantuml/svg/u-BISCiiAYvHA2rEJKuiJjNaqd3Coo_9I2s2YoWa5YjeX3eRQN91HHH2dOtXR0sVnEAIc3nanQ7E9bm0" alt="plantUML"></p>

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantClassObject" id="module_test-commentBlock..plantClassObject"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantClassObject()</h5>



<p>We can use PlantUML for Class and Object diagrams</p>
<p><img src="http://www.plantuml.com/plantuml/svg/LOz1YW8n44Nt_nJ1bGfp0H51NSnYn8s8k98onZ7QIIGf4H7lRaAdqzsrUxygBrMWOs1FaaMkXb4Qig8GX1ZqWm78MiV4sjdyiZ2azh9IebJD68v4h-hu42xEy-7il47-gvr8Z9Ccu-off9andVLzEUyAbMNDhtQavXW_JFTbOcZBofz9DeiN7WFkU5Nnz5NKn_ioxIXSjFtdDbaeN-b2Q_NSEty33Dt5akwQgLgcTTxO_ednpwpnRJVpY94xnb_b3TbNocCZYpz0begKTfoJIPJW2m00" alt="plantUML"></p>

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantActivity" id="module_test-commentBlock..plantActivity"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantActivity()</h5>



<p>PlantUML Activity</p>
<p><img src="http://www.plantuml.com/plantuml/svg/JOuz3i8m38Ltdy9ZcoEq0oCSW14fYXgNMZ9EYKDGEJqUAxtfUpzwCDr8fE2tLCapJFUD3LsPLbRAM1ICEjKa688uiX1ci9Pg0-0LXsjD-zRvXwnEHIXVHcmRAGu7sGZJNij2PkZUGpEdPqqlcu7420SjfqHHEI16e_U7TA4OCMd66DFIk7Cx79pwlhM2Foax_040" alt="plantUML"></p>

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantComponent" id="module_test-commentBlock..plantComponent"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantComponent()</h5>



<p>PlantUML Component
this is the large example, including groups, etc</p>
<p><img src="http://www.plantuml.com/plantuml/svg/ROyz2y8m48Rt_8eZUmVHMH0nkeX2knM7sAIscEPgau95_E_cGsaL8SFbdjppvaZBYok_IA0fDXAs7VOjXGVPPTaH4iXPtHaBQsnQr5BR4ybN6cqbksdlIOX6uHo7G8B4U0kBabGMgCMNvTSBIR84zzox2eMzSDFvviwRLacOXGWYkELdRbpEVaXloWUKg8HBf5bL6t2d6I2sFCnPf7C_NdRSxKSPOaJXkl34g_zi5Nuq_SAaZcpKZ-MRVEml" alt="plantUML"></p>

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantDeployment" id="module_test-commentBlock..plantDeployment"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantDeployment()</h5>



<p>PlantUML Deployment
this is a use-case variant, and
here we show the complex example from the plantUML site</p>
<p><img src="http://www.plantuml.com/plantuml/svg/PP11RiCW44NtSufHii6jY3nELrRbJOyHUO4nJYmvO26igbtux1t0JPf6GcB-Wvd_0K3fu3mEpj6zh21gV9UbR1wqA8jV0a9fAb1E9iF9326E89H-pCYFvyl63ilCxD3WCcUm9h16KEMktkMktdrQUaRicF8nPeQfPgRTTNRMs82ned-wIfhm9VQyRkWKjsFBpv5DWqczjG2TMsol_1TsSOeDtase2JesZ2bY_UGssc3yeBJ1ND7cjrzNSKDGNrrlA2MkSth-GKL_-LJ7RzkEQ88SCbbHYyn5oGllzAC5KU1D7h6GwSQE-tUFz-2alWrFsUVtigXQ-040" alt="plantUML"></p>

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantState" id="module_test-commentBlock..plantState"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantState()</h5>



<p>PlantUML State
A complex state diagram from plantUML examples</p>
<p><img src="http://www.plantuml.com/plantuml/svg/RP0z3u8m48Rt_eeB8manmiPWGeA6E1WY8s6evO8cV1ZQwc3yxxP0iOXBsxltdhlhIqZk5k3j81DKu9QC5tWcuqC8cMGCiSJILZKMGdJfUc44_ui5Qyp_Wt4j6E8rXKx4c6nahT_xjfFL5M8gg0EKGzsrrPOCfsfpb5m01O5SZDzG0-oAELQr9tmERImfxJk6dEkiAh16BHPEYX3Eo6M3v4scLHVsf5HoN3kG9wuYOyJxHF-osgC3lTN6eC0oQFOEDf3H1muRr69TQ9py0000" alt="plantUML"></p>

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantTiming" id="module_test-commentBlock..plantTiming"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantTiming()</h5>



<p>PlantUML Timing</p>
<p><img src="http://www.plantuml.com/plantuml/svg/NSp13O0W44JH-rOnsGhWO0FIWGqOHOX4unh06BiNCLwy_SER8RAhs0K0coTwnQM71ADmXZnZTp78X4RzeVwW_a7inveST0FnFhaChMWCsn2licrhS5ssP6MpeLWsRt0zf2ZZaNBHNOrNTtG3" alt="plantUML"></p>

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-commentBlock..plantPERT" id="module_test-commentBlock..plantPERT"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-commentBlock~plantPERT()</h5>



<p>A Pert example</p>
<p><img src="http://www.plantuml.com/plantuml/svg/VSyz3u8m40RW_Nx5RIv2mjT2b8t4HAD4ZNk5efL2JRb9utyN2LOYXA5D-ZwNDrUGF2SaXLfSheIPq3mbeIgOuKffyL0LCObILBmEqRAYEIuigxsYPkJ4DOcqDz3wvqH0WYJ79DuVGqoqkZMzk6Kb1oZP7TSYBUnTdkCJNcr0h2viftaUY6d2POHnbVNDdJ1lmlm92uPc5cj--5qgn0qxSudEYBf6tH7rZ7hGbHdpeIluJxn1ul-Im3Jwy0O0" alt="plantUML"></p>

**Kind**: inner method of [`test-commentBlock`](#module_test-commentBlock)  
**Access**: public  

<hr/>

<a name="module_test-enum" id="module_test-enum"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum</h5>



<h4>test-enum (Module)</h4>
<p>Working with enum</p>


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

**Kind**: inner enum of [`test-enum`](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Up | `number` | <code>Up</code> | <p>vertical ascend <b><i>(value = 1)</i></b></p> |
| Down | `number` | <code>Down</code> | <p>vertical descend <b><i>(value = 2)</i></b></p> |
| Left | `number` | <code>Left</code> | <p>westward if facing north <b><i>(value = 3)</i></b></p> |
| Right | `number` | <code>Right</code> | <p>eastward if facing north <b><i>(value = 4)</i></b></p> |


<hr/>

<a name="module_test-enum..Direction2" id="module_test-enum..Direction2"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~Direction2</h5>



<p>Implicit values</p>

**Kind**: inner enum of [`test-enum`](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Up | `number` | <code>Up</code> | <p><b><i>(value = 0)</i></b></p> |
| Down | `number` | <code>Down</code> | <p><b><i>(value = 1)</i></b></p> |
| Left | `number` | <code>Left</code> | <p><b><i>(value = 2)</i></b></p> |
| Right | `number` | <code>Right</code> | <p><b><i>(value = 3)</i></b></p> |


<hr/>

<a name="module_test-enum..Direction3" id="module_test-enum..Direction3"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~Direction3</h5>



<p>String values</p>

**Kind**: inner enum of [`test-enum`](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Up | `string` | <code>&quot;Up&quot;</code> | <p><b><i>(value = &quot;UP&quot;)</i></b></p> |
| Down | `string` | <code>&quot;Down&quot;</code> | <p><b><i>(value = &quot;DOWN&quot;)</i></b></p> |
| Left | `string` | <code>&quot;Left&quot;</code> | <p><b><i>(value = &quot;LEFT&quot;)</i></b></p> |
| Right | `string` | <code>&quot;Right&quot;</code> | <p><b><i>(value = &quot;RIGHT&quot;)</i></b></p> |


<hr/>

<a name="module_test-enum..Direction4" id="module_test-enum..Direction4"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~Direction4</h5>



<p>String values = key
should not repeat value in description</p>

**Kind**: inner enum of [`test-enum`](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| UP | `string` | <code>&quot;UP&quot;</code> | 
| DOWN | `string` | <code>&quot;DOWN&quot;</code> | 
| LEFT | `string` | <code>&quot;LEFT&quot;</code> | 
| RIGHT | `string` | <code>&quot;RIGHT&quot;</code> | 


<hr/>

<a name="module_test-enum..BooleanLikeHeterogeneousEnum" id="module_test-enum..BooleanLikeHeterogeneousEnum"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~BooleanLikeHeterogeneousEnum</h5>



**Kind**: inner enum of [`test-enum`](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| No | `number` | <code>No</code> | <p><b><i>(value = 0)</i></b></p> |
| Yes | `string` | <code>&quot;Yes&quot;</code> | <p><b><i>(value = &quot;YES&quot;)</i></b></p> |


<hr/>

<a name="module_test-enum..LogLevel" id="module_test-enum..LogLevel"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~LogLevel</h5>



<p>including an optional const modifier</p>

**Kind**: inner enum of [`test-enum`](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ERROR | `number` | <code>ERROR</code> | <p><b><i>(value = 0)</i></b></p> |
| WARN | `number` | <code>WARN</code> | <p><b><i>(value = 1)</i></b></p> |
| INFO | `number` | <code>INFO</code> | <p><b><i>(value = 2)</i></b></p> |
| DEBUG | `number` | <code>DEBUG</code> | <p><b><i>(value = 3)</i></b></p> |


<hr/>

<a name="module_test-enum..Jumper" id="module_test-enum..Jumper"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~Jumper</h5>



<p>Explicit after implicit</p>

**Kind**: inner enum of [`test-enum`](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Zero | `number` | <code>Zero</code> | <p><b><i>(value = 0)</i></b></p> |
| One | `number` | <code>One</code> | <p><b><i>(value = 1)</i></b></p> |
| Two | `number` | <code>Two</code> | <p><b><i>(value = 2)</i></b></p> |
| OneHundred | `number` | <code>OneHundred</code> | <p><b><i>(value = 100)</i></b></p> |
| OneOhOne | `number` | <code>OneOhOne</code> | <p><b><i>(value = 101)</i></b></p> |
| OneOhTwo | `number` | <code>OneOhTwo</code> | <p><b><i>(value = 102)</i></b></p> |


<hr/>

<a name="module_test-enum..Scattered" id="module_test-enum..Scattered"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~Scattered</h5>



<p>Explicit non sequential</p>

**Kind**: inner enum of [`test-enum`](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Foo | `number` | <code>Foo</code> | <p><b><i>(value = 456)</i></b></p> |
| Bar | `number` | <code>Bar</code> | <p><b><i>(value = 123)</i></b></p> |
| Fubar | `number` | <code>Fubar</code> | <p><b><i>(value = 42)</i></b></p> |


<hr/>

<a name="module_test-enum..BugCase1" id="module_test-enum..BugCase1"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~BugCase1</h5>



<p>Bug case: No comma on last element</p>

**Kind**: inner enum of [`test-enum`](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Foo | `number` | <code>Foo</code> | <p><b><i>(value = 456)</i></b></p> |
| Bar | `number` | <code>Bar</code> | <p><b><i>(value = 123)</i></b></p> |
| Fubar | `number` | <code>Fubar</code> | <p><b><i>(value = 42)</i></b></p> |


<hr/>

<a name="module_test-enum..BugCase1b" id="module_test-enum..BugCase1b"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~BugCase1b</h5>



<p>Bug case explore: No comma on last element, comments</p>

**Kind**: inner enum of [`test-enum`](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Foo | `number` | <code>Foo</code> | <p>this is foo <b><i>(value = 456)</i></b></p> |
| Bar | `number` | <code>Bar</code> | <p>this is bar <b><i>(value = 123)</i></b></p> |
| Fubar | `number` | <code>Fubar</code> | <p>this is fubar <b><i>(value = 42)</i></b></p> |


<hr/>

<a name="module_test-enum..BugCase1c" id="module_test-enum..BugCase1c"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-enum~BugCase1c</h5>



<p>Bug case explore: No comma on last element, string</p>

**Kind**: inner enum of [`test-enum`](#module_test-enum)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Foo | `string` | <code>&quot;Foo&quot;</code> | 
| Bar | `string` | <code>&quot;Bar&quot;</code> | 
| Fubar | `string` | <code>&quot;Fubar&quot;</code> | 


<hr/>

<a name="module_test-functions" id="module_test-functions"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions</h5>



<h4>test-functions (Module)</h4>
<p>Tests all forms of function declaration
to see if we are properly documenting these</p>


* [test-functions](#module_test-functions)
    * [~plainJane(a, b, c)](#module_test-functions..plainJane)
    * [~publicJane(a, b, c)](#module_test-functions..publicJane)
    * [~separatedJane(a, b, c)](#module_test-functions..separatedJane)
    * [~assJane(a, b, c)](#module_test-functions..assJane)
    * [~sassJane(a, b, c)](#module_test-functions..sassJane)
    * [~janeArrow(foo, bar)](#module_test-functions..janeArrow) ⇒ `string`
    * [~anonymous(a, b, c)](#module_test-functions..anonymous)
    * [~indexGenerator()](#module_test-functions..indexGenerator)
    * [~indexGeneratorTS()](#module_test-functions..indexGeneratorTS) ⇒ `Generator.&lt;number&gt;`
    * [~typescript(a, b, c)](#module_test-functions..typescript)
    * [~splitscript(a, b, c)](#module_test-functions..splitscript) ⇒ `string`
    * [~fetch(url)](#module_test-functions..fetch) ⇒ `Promise.&lt;string&gt;`
    * [~simpleVoid()](#module_test-functions..simpleVoid)
    * [~simpleVoidTS()](#module_test-functions..simpleVoidTS)
    * [~docVoid()](#module_test-functions..docVoid) ⇒ `void`
    * [~jsVoid()](#module_test-functions..jsVoid) ⇒ `void`


<hr/>

<a name="module_test-functions..plainJane" id="module_test-functions..plainJane"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~plainJane(a, b, c)</h5>



<p>this is as plain as it gets
a simple JS function
marked as public so it will appear in output</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `*` | 
| b | `*` | 
| c | `*` | 


<hr/>

<a name="module_test-functions..publicJane" id="module_test-functions..publicJane"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~publicJane(a, b, c)</h5>



<p>This is the same as plainJane, but
in this case we are exporting it from the module
and using a JSDoc form comment block</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `*` | 
| b | `*` | 
| c | `*` | 


<hr/>

<a name="module_test-functions..separatedJane" id="module_test-functions..separatedJane"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~separatedJane(a, b, c)</h5>



<p>All keywords are separated</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `*` | 
| b | `*` | 
| c | `*` | 


<hr/>

<a name="module_test-functions..assJane" id="module_test-functions..assJane"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~assJane(a, b, c)</h5>



<p>assigned classic function</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `*` | 
| b | `*` | 
| c | `*` | 


<hr/>

<a name="module_test-functions..sassJane" id="module_test-functions..sassJane"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~sassJane(a, b, c)</h5>



<p>classic assigned function, split</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `*` | 
| b | `*` | 
| c | `*` | 


<hr/>

<a name="module_test-functions..janeArrow" id="module_test-functions..janeArrow"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~janeArrow(foo, bar) ⇒ `string`</h5>



<p>an arrow function</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Returns**: `string` - <p>returns a value</p>  
**Access**: public  

| Param | Type |
| --- | --- |
| foo | `string` | 
| bar | `number` | 


<hr/>

<a name="module_test-functions..anonymous" id="module_test-functions..anonymous"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~anonymous(a, b, c)</h5>



<p>an anonymous function</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `*` | 
| b | `*` | 
| c | `*` | 


<hr/>

<a name="module_test-functions..indexGenerator" id="module_test-functions..indexGenerator"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~indexGenerator()</h5>



<p>a generator function</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Access**: public  

<hr/>

<a name="module_test-functions..indexGeneratorTS" id="module_test-functions..indexGeneratorTS"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~indexGeneratorTS() ⇒ `Generator.&lt;number&gt;`</h5>



<p>a typescript generator function</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Returns**: `Generator.&lt;number&gt;` - <p>generates numbers</p>  
**Access**: public  

<hr/>

<a name="module_test-functions..typescript" id="module_test-functions..typescript"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~typescript(a, b, c)</h5>



<p>a typescript example</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `string` | 
| b | `number` | 
| c | `boolean` | 


<hr/>

<a name="module_test-functions..splitscript" id="module_test-functions..splitscript"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~splitscript(a, b, c) ⇒ `string`</h5>



<p>separated typescript</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Returns**: `string` - <p>A value is returned</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | `string` | <p>the a parameter</p> |
| b | `number` | <p>the b parameter</p> |
| c | `boolean` | <p>the c parameter</p> |


<hr/>

<a name="module_test-functions..fetch" id="module_test-functions..fetch"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~fetch(url) ⇒ `Promise.&lt;string&gt;`</h5>



<p>example of an async function</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Returns**: `Promise.&lt;string&gt;` - <p>the body of the return</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | <p>The url to fetch</p> |


<hr/>

<a name="module_test-functions..simpleVoid" id="module_test-functions..simpleVoid"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~simpleVoid()</h5>



<p>void functions do not document a return type</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Access**: public  

<hr/>

<a name="module_test-functions..simpleVoidTS" id="module_test-functions..simpleVoidTS"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~simpleVoidTS()</h5>



<p>typescript void functions do not document a return type</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Access**: public  

<hr/>

<a name="module_test-functions..docVoid" id="module_test-functions..docVoid"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~docVoid() ⇒ `void`</h5>



<p>typescript with documented void return</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Returns**: `void` - <p>a void return</p>  
**Access**: public  

<hr/>

<a name="module_test-functions..jsVoid" id="module_test-functions..jsVoid"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-functions~jsVoid() ⇒ `void`</h5>



<p>javascript post-dec comments also documented as return type</p>

**Kind**: inner method of [`test-functions`](#module_test-functions)  
**Returns**: `void` - <p>nothing to see here</p>  
**Access**: public  

<hr/>

<a name="module_test-parameters" id="module_test-parameters"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-parameters</h5>



<h4>test-parameters (Module)</h4>
<p>Various modes of parameter declaration</p>


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

**Kind**: inner method of [`test-parameters`](#module_test-parameters)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `*` | 
| b | `*` | 
| c | `*` | 


<hr/>

<a name="module_test-parameters..two" id="module_test-parameters..two"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-parameters~two(a, b, c)</h5>



<p>name only with comments</p>

**Kind**: inner method of [`test-parameters`](#module_test-parameters)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | `*` | <p>inline</p> |
| b | `*` | <p>sidebar, multiple lines and verbose</p> |
| c | `*` | <p>sidebar single-line</p> |


<hr/>

<a name="module_test-parameters..three" id="module_test-parameters..three"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-parameters~three(a, b, c)</h5>



<p>name:type (typescript)</p>

**Kind**: inner method of [`test-parameters`](#module_test-parameters)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `string` | 
| b | `number` | 
| c | `FooBar` | 


<hr/>

<a name="module_test-parameters..four" id="module_test-parameters..four"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-parameters~four(a, b, c)</h5>



<p>name:type with comment</p>

**Kind**: inner method of [`test-parameters`](#module_test-parameters)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | `string` | <p>Comment one</p> |
| b | `*` | <p>Comment two</p> |
| c | `*` | <p>Comment three</p> |


<hr/>

<a name="module_test-parameters..five" id="module_test-parameters..five"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-parameters~five(a, b, c)</h5>



<p>ad-hoc object parameters</p>

**Kind**: inner method of [`test-parameters`](#module_test-parameters)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `object` | 
| a.foo | `string` | 
| a.bar | `number` | 
| b | `number` | 
| c | `FooBar` | 


<hr/>

<a name="module_test-parameters..six" id="module_test-parameters..six"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-parameters~six(a, b, c)</h5>



<p>ad-hoc object parameters, with comments</p>

**Kind**: inner method of [`test-parameters`](#module_test-parameters)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | `object` | <p>The a object holds properties that are used for some reasan, and we can document them.</p> |
| a.foo | `string` | <p>something to say about foo</p> |
| a.bar | `number` | <p>belly up to the bar</p> |
| b | `number` | <p>and we document the other parameters, too</p> |
| c | `FooBar` | <p>including good old FooBar</p> |


<hr/>

<a name="module_test-propcomments" id="module_test-propcomments"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-propcomments</h5>



<h4>test-propcomments (Module)</h4>
<p>Test forms of property comments</p>


* [test-propcomments](#module_test-propcomments)
    * [~TopComments](#module_test-propcomments..TopComments)
    * [~SideComments](#module_test-propcomments..SideComments)
    * [~TopAndSide](#module_test-propcomments..TopAndSide)
    * [~Complex](#module_test-propcomments..Complex) : `object`
    * [~Complex2](#module_test-propcomments..Complex2) : `object`


<hr/>

<a name="module_test-propcomments..TopComments" id="module_test-propcomments..TopComments"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-propcomments~TopComments</h5>



<p>used to define a complex type</p>

**Kind**: inner class of [`test-propcomments`](#module_test-propcomments)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | `string` | <p>name of person</p> |
| age | `number` | <p>age of person</p> |
| office | `string` | <p>which office</p> |
| value | `number` | <p>which value</p> |


<hr/>

<a name="module_test-propcomments..SideComments" id="module_test-propcomments..SideComments"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-propcomments~SideComments</h5>



<p>used to define a complex type, side-commented version</p>

**Kind**: inner class of [`test-propcomments`](#module_test-propcomments)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | `string` | <p>name of person</p> |
| age | `number` | <p>age of person</p> |
| office | `string` | <p>which office</p> |
| value | `number` | <p>which value</p> |


<hr/>

<a name="module_test-propcomments..TopAndSide" id="module_test-propcomments..TopAndSide"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-propcomments~TopAndSide</h5>



<p>If we have both top and side comments, the side comments win out.</p>

**Kind**: inner class of [`test-propcomments`](#module_test-propcomments)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | `string` | <p>name of person to be named</p> |
| age | `number` | <p>age of person</p> |
| office | `string` | <p>which office by name</p> |
| value | `number` | <p>which value</p> |


<hr/>

<a name="module_test-propcomments..Complex" id="module_test-propcomments..Complex"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-propcomments~Complex : `object`</h5>



<p>used to define a complex type</p>

**Kind**: inner typedef of [`test-propcomments`](#module_test-propcomments)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | `string` | <p>name of person</p> |
| age | `number` | <p>age of person</p> |
| office | `string` | <p>which office</p> |
| value | `number` | <p>which value</p> |


<hr/>

<a name="module_test-propcomments..Complex2" id="module_test-propcomments..Complex2"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-propcomments~Complex2 : `object`</h5>



<p>used to define a complex type, side-commented version</p>

**Kind**: inner typedef of [`test-propcomments`](#module_test-propcomments)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | `string` | <p>name of person</p> |
| age | `number` | <p>age of person</p> |
| office | `string` | <p>which office</p> |
| value | `string` | <p>which value</p> |


<hr/>

<a name="module_test-properties" id="module_test-properties"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties</h5>



<h4>test-properties (Module)</h4>
<p>Checking property declarations
both at module scope and in classes</p>


* [test-properties](#module_test-properties)
    * [~PropExplorer](#module_test-properties..PropExplorer)
    * [~aVar](#module_test-properties..aVar) : `string`
    * [~aLet](#module_test-properties..aLet) : `string`
    * [~commented](#module_test-properties..commented) : `string`
    * [~commented](#module_test-properties..commented) : `string`
    * [~baz](#module_test-properties..baz) : `string`
    * [~thing](#module_test-properties..thing) : `string`
    * [~a](#module_test-properties..a) : `number`
    * [~typescript](#module_test-properties..typescript) : `string`
    * [~assigned](#module_test-properties..assigned) : `string`
    * [~one](#module_test-properties..one) : `string`
    * [~MultipleDeclarations](#module_test-properties..MultipleDeclarations) : `string`
    * [~aConst](#module_test-properties..aConst) : `number`
    * [~aSideConst](#module_test-properties..aSideConst) : `number`
    * [~myArray](#module_test-properties..myArray) : `string`
    * [~myObject](#module_test-properties..myObject) : `string`
    * [~another](#module_test-properties..another) : `string`


<hr/>

<a name="module_test-properties..PropExplorer" id="module_test-properties..PropExplorer"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~PropExplorer</h5>



<p>Explore class properties</p>

**Kind**: inner class of [`test-properties`](#module_test-properties)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | <code>&quot;&#x27;no&quot;</code> | <p>type provided' -</p> |
| value | `number` | <code>10</code> | <p>no type provided here either</p> |
| commented | `string` | <code>&quot;&#x27;no&quot;</code> | <p>type provided' - but I have a comment about it</p> |
| unassigned | `string` |  | <ul> <li></li> </ul> |
| unassigned | `string` |  | <p>also unassigned</p> |
| any | `string` |  | <p>unassigned any</p> |
| unassigned | `string` |  | <p>undeclared and unassigned</p> |
| noComment | `string` |  | <ul> <li></li> </ul> |
| Label | `string` | <code>&quot;&#x27;Foobar&#x27;&quot;</code> | <p>(<code>static</code>)</p> |
| PropExplorer.InnerClass | `class` |  | <ul> <li></li> </ul> |
| InnerClass.PropExplorer.constructor | `method` |  | <p>a chance to comment the inner constructor</p> |
| InnerClass.PropExplorer.hello | `method` |  | <p>say hi</p> |
| InnerClass.PropExplorer.getNumber | `method` |  | <p>(<code>static</code>) (<code>async</code>) (<code>returns {Promise&lt;number&gt;} resolves to the magic value</code>)  <br/>  fetch a number</p> |


<hr/>

<a name="module_test-properties..aVar" id="module_test-properties..aVar"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~aVar : `string`</h5>



<p>top commented var</p>

**Kind**: inner property of [`test-properties`](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..aLet" id="module_test-properties..aLet"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~aLet : `string`</h5>



<p>top commented let</p>

**Kind**: inner property of [`test-properties`](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..commented" id="module_test-properties..commented"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~commented : `string`</h5>



<p>side commented var</p>

**Kind**: inner property of [`test-properties`](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..commented" id="module_test-properties..commented"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~commented : `string`</h5>



<p>side commented let</p>

**Kind**: inner property of [`test-properties`](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..baz" id="module_test-properties..baz"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~baz : `string`</h5>



<p>top commented multi-dec
will only document the first in the series</p>

**Kind**: inner property of [`test-properties`](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..thing" id="module_test-properties..thing"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~thing : `string`</h5>



<p>side-commented multi, same thing</p>

**Kind**: inner property of [`test-properties`](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..a" id="module_test-properties..a"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~a : `number`</h5>



<p>undeclared, assignment to a number</p>

**Kind**: inner property of [`test-properties`](#module_test-properties)  
**Default**: <code>42</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..typescript" id="module_test-properties..typescript"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~typescript : `string`</h5>



<p>declared as string in typescript</p>

**Kind**: inner property of [`test-properties`](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-properties..assigned" id="module_test-properties..assigned"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~assigned : `string`</h5>



<p>declared and assigned</p>

**Kind**: inner property of [`test-properties`](#module_test-properties)  
**Default**: <code>&quot;&#x27;a string&#x27;&quot;</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..one" id="module_test-properties..one"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~one : `string`</h5>



<p>top-commented multi assignment
will only document the first in the series</p>

**Kind**: inner property of [`test-properties`](#module_test-properties)  
**Default**: <code>&quot;1, two &#x3D; 2, three &#x3D; 3&quot;</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..MultipleDeclarations" id="module_test-properties..MultipleDeclarations"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~MultipleDeclarations : `string`</h5>



<p>workaround for documenting
a multiple declaration line</p>
<p><code>m = 1, n = 2, o = 3, p = 4</code></p>

**Kind**: inner property of [`test-properties`](#module_test-properties)  
**Default**: <code>&quot;1, n &#x3D; 2, o &#x3D; 3, p &#x3D; 4&quot;</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..aConst" id="module_test-properties..aConst"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~aConst : `number`</h5>



<p>top commented const w/assignment</p>

**Kind**: inner constant of [`test-properties`](#module_test-properties)  
**Default**: <code>0</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..aSideConst" id="module_test-properties..aSideConst"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~aSideConst : `number`</h5>



<p>side commented const w/assignemnt</p>

**Kind**: inner constant of [`test-properties`](#module_test-properties)  
**Default**: <code>0</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..myArray" id="module_test-properties..myArray"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~myArray : `string`</h5>



<p>an array</p>

**Kind**: inner constant of [`test-properties`](#module_test-properties)  
**Default**: <code>&quot;[1,2,3,4,5]&quot;</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..myObject" id="module_test-properties..myObject"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~myObject : `string`</h5>



<p>an abject</p>

**Kind**: inner constant of [`test-properties`](#module_test-properties)  
**Default**: <code>&quot;{ foo: 1, bar: 2 }&quot;</code>  
**Access**: public  

<hr/>

<a name="module_test-properties..another" id="module_test-properties..another"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-properties~another : `string`</h5>



<p>another object, more complex</p>

**Kind**: inner constant of [`test-properties`](#module_test-properties)  
**Access**: public  

<hr/>

<a name="module_test-publicExport1" id="module_test-publicExport1"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-publicExport1</h5>



<h4>test-publicExport1 (Module)</h4>
<p>Meant to explore when/how to use @public and @private</p>


<hr/>

<a name="module_test-publicExport1..exportMe" id="module_test-publicExport1..exportMe"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-publicExport1~exportMe()</h5>



<p>We will make this public with explicit export</p>

**Kind**: inner method of [`test-publicExport1`](#module_test-publicExport1)  
**Access**: public  

<hr/>

<a name="module_test-publicExport2" id="module_test-publicExport2"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-publicExport2</h5>



<h4>test-publicExport2 (Module)</h4>
<p>Meant to explore when/how to use @public and @private</p>


<hr/>

<a name="module_test-publicExport2..exportMe" id="module_test-publicExport2..exportMe"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-publicExport2~exportMe()</h5>



<p>We will make this public with explicit export</p>

**Kind**: inner method of [`test-publicExport2`](#module_test-publicExport2)  
**Access**: public  

<hr/>

<a name="module_test-publicExport3" id="module_test-publicExport3"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-publicExport3</h5>



<h4>test-publicExport3 (Module)</h4>
<p>Meant to explore when/how to use @public and @private</p>


<hr/>

<a name="module_test-publicExport3..exportMe" id="module_test-publicExport3..exportMe"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-publicExport3~exportMe()</h5>



<p>We will make this public with explicit export</p>

**Kind**: inner method of [`test-publicExport3`](#module_test-publicExport3)  
**Access**: public  

<hr/>

<a name="module_test-returns" id="module_test-returns"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns</h5>



<h4>test-returns (Module)</h4>
<p>Checks the rendering of return statements</p>


* [test-returns](#module_test-returns)
    * [~one()](#module_test-returns..one)
    * [~two()](#module_test-returns..two)
    * [~oneComment()](#module_test-returns..oneComment) ⇒ `void`
    * [~twoComment()](#module_test-returns..twoComment) ⇒ `void`
    * [~three()](#module_test-returns..three) ⇒ `string`
    * [~four()](#module_test-returns..four) ⇒ `Promise.&lt;string&gt;`
    * [~five()](#module_test-returns..five) ⇒ `object`
    * [~eight()](#module_test-returns..eight) ⇒ `string`
    * [~nine()](#module_test-returns..nine) ⇒ `Promise.&lt;string&gt;`
    * [~ten()](#module_test-returns..ten) ⇒ `object`
    * [~tenHoc()](#module_test-returns..tenHoc) ⇒ `object`
    * [~eleven()](#module_test-returns..eleven)


<hr/>

<a name="module_test-returns..one" id="module_test-returns..one"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~one()</h5>



<p>implicit void return should not document return type with no comment</p>

**Kind**: inner method of [`test-returns`](#module_test-returns)  
**Access**: public  

<hr/>

<a name="module_test-returns..two" id="module_test-returns..two"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~two()</h5>



<p>explicit void return should not document return type with no comment</p>

**Kind**: inner method of [`test-returns`](#module_test-returns)  
**Access**: public  

<hr/>

<a name="module_test-returns..oneComment" id="module_test-returns..oneComment"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~oneComment() ⇒ `void`</h5>



<p>implicit void return should document return type with a comment</p>

**Kind**: inner method of [`test-returns`](#module_test-returns)  
**Returns**: `void` - <p>commented version</p>  
**Access**: public  

<hr/>

<a name="module_test-returns..twoComment" id="module_test-returns..twoComment"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~twoComment() ⇒ `void`</h5>



<p>explicit void return should document return type with a comment</p>

**Kind**: inner method of [`test-returns`](#module_test-returns)  
**Returns**: `void` - <p>commented version</p>  
**Access**: public  

<hr/>

<a name="module_test-returns..three" id="module_test-returns..three"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~three() ⇒ `string`</h5>



<p>typed return should show return type</p>

**Kind**: inner method of [`test-returns`](#module_test-returns)  
**Access**: public  

<hr/>

<a name="module_test-returns..four" id="module_test-returns..four"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~four() ⇒ `Promise.&lt;string&gt;`</h5>



<p>Promise return should be represented properly</p>

**Kind**: inner method of [`test-returns`](#module_test-returns)  
**Access**: public  

<hr/>

<a name="module_test-returns..five" id="module_test-returns..five"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~five() ⇒ `object`</h5>



<p>An Ad-Hoc return type should document the object detail</p>

**Kind**: inner method of [`test-returns`](#module_test-returns)  
**Returns**: `object` - <p>Object detail:
{ foo:string, bar:number }</p>  
**Access**: public  

<hr/>

<a name="module_test-returns..eight" id="module_test-returns..eight"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~eight() ⇒ `string`</h5>



<p>type  w/comment</p>

**Kind**: inner method of [`test-returns`](#module_test-returns)  
**Returns**: `string` - <p>returns a string</p>  
**Access**: public  

<hr/>

<a name="module_test-returns..nine" id="module_test-returns..nine"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~nine() ⇒ `Promise.&lt;string&gt;`</h5>



<p>Promise w/comment</p>

**Kind**: inner method of [`test-returns`](#module_test-returns)  
**Returns**: `Promise.&lt;string&gt;` - <p>returns a string promise</p>  
**Access**: public  

<hr/>

<a name="module_test-returns..ten" id="module_test-returns..ten"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~ten() ⇒ `object`</h5>



<p>ad-hoc type w/comment</p>

**Kind**: inner method of [`test-returns`](#module_test-returns)  
**Returns**: `object` - <p>returns ad-hoc</p>
<p>Object detail:
{ foo:string, bar:number }</p>  
**Access**: public  

<hr/>

<a name="module_test-returns..tenHoc" id="module_test-returns..tenHoc"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-returns~tenHoc() ⇒ `object`</h5>



<p>a crazy ad-hoc return function</p>

**Kind**: inner method of [`test-returns`](#module_test-returns)  
**Returns**: `object` - <p>Object detail:
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

**Kind**: inner method of [`test-returns`](#module_test-returns)  
**Throws**:

- `Fit` <p>if she gets scared</p>

**Access**: public  

<hr/>

<a name="module_test-semicolons" id="module_test-semicolons"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons</h5>



<h4>test-semicolons (Module)</h4>
<p>Checks syntax that includes semicolons</p>


* [test-semicolons](#module_test-semicolons)
    * [~BaseExampleSC](#module_test-semicolons..BaseExampleSC)
        * [.display()](#module_test-semicolons..BaseExampleSC+display)
    * [~PricedExampleSC](#module_test-semicolons..PricedExampleSC) ⇐ `BaseExampleSC`
        * [.display()](#module_test-semicolons..PricedExampleSC+display)
    * [~Thing1SC](#module_test-semicolons..Thing1SC) ⇐ `BaseExampleSC`
    * [~Thing2SC](#module_test-semicolons..Thing2SC) ⇐ `PricedExampleSC`
    * [~ConstructionSC](#module_test-semicolons..ConstructionSC)
        * [new ConstructionSC([name], [place])](#new_module_test-semicolons..ConstructionSC_new)
        * [.plan()](#module_test-semicolons..ConstructionSC+plan)
        * [.milestone()](#module_test-semicolons..ConstructionSC+milestone)
        * [.finish(timeSpent, timeEstimated, notes)](#module_test-semicolons..ConstructionSC+finish) ⇒ `string`
        * [.jsdocStyleFunction(a)](#module_test-semicolons..ConstructionSC+jsdocStyleFunction) ⇒ `Promise.&lt;unknown&gt;`
    * [~PrintExampleSC](#module_test-semicolons..PrintExampleSC)
        * [.exmpleLocal(foo)](#module_test-semicolons..PrintExampleSC+exmpleLocal) ⇒ `boolean`
        * [.print(device, orientation, pages)](#module_test-semicolons..PrintExampleSC+print) ⇒ `boolean`
        * [.save(device)](#module_test-semicolons..PrintExampleSC+save) ⇒ `boolean`
    * [~AssigmentClassSC](#module_test-semicolons..AssigmentClassSC)
        * [.dubious()](#module_test-semicolons..AssigmentClassSC+dubious) ⇒ `string`
    * [~ContainerSC](#module_test-semicolons..ContainerSC)
    * [~PropExplorerSC](#module_test-semicolons..PropExplorerSC)
    * [~PrinterOrientationSC](#module_test-semicolons..PrinterOrientationSC)
    * [~plainJaneSC(a, b, c)](#module_test-semicolons..plainJaneSC)
    * [~publicJaneSC(a, b, c)](#module_test-semicolons..publicJaneSC)
    * [~separatedJaneSC(a, b, c)](#module_test-semicolons..separatedJaneSC)
    * [~assJane(a, b, c)](#module_test-semicolons..assJane)
    * [~sassJaneSC(a, b, c)](#module_test-semicolons..sassJaneSC)
    * [~janeArrowSC(foo, bar)](#module_test-semicolons..janeArrowSC) ⇒ `string`
    * [~anonymousSC(a, b, c)](#module_test-semicolons..anonymousSC)
    * [~indexGeneratorSC()](#module_test-semicolons..indexGeneratorSC)
    * [~indexGeneratorTSSC()](#module_test-semicolons..indexGeneratorTSSC) ⇒ `Generator.&lt;number&gt;`
    * [~typescriptSC(a, b, c)](#module_test-semicolons..typescriptSC)
    * [~splitscriptSC(a, b, c)](#module_test-semicolons..splitscriptSC) ⇒ `string`
    * [~fetchSC(url)](#module_test-semicolons..fetchSC) ⇒ `Promise.&lt;string&gt;`
    * [~simpleVoidSC()](#module_test-semicolons..simpleVoidSC)
    * [~simpleVoidTSSC()](#module_test-semicolons..simpleVoidTSSC)
    * [~docVoidSC()](#module_test-semicolons..docVoidSC) ⇒ `void`
    * [~jsVoidSC()](#module_test-semicolons..jsVoidSC) ⇒ `void`


<hr/>

<a name="module_test-semicolons..BaseExampleSC" id="module_test-semicolons..BaseExampleSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~BaseExampleSC</h5>



<p>This is a base class test</p>

**Kind**: inner class of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |
| type | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-semicolons..BaseExampleSC+display" id="module_test-semicolons..BaseExampleSC+display"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    baseExampleSC.display()</h5>



<p>Displays the values of the object</p>

**Kind**: instance method of [`BaseExampleSC`](#module_test-semicolons..BaseExampleSC)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..PricedExampleSC" id="module_test-semicolons..PricedExampleSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~PricedExampleSC ⇐ `BaseExampleSC`</h5>



<p>Another base class, but it inherits from BaseExample</p>

**Kind**: inner class of [`test-semicolons`](#module_test-semicolons)  
**Extends**: `BaseExampleSC`  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| price | `number` | <code>0</code> | <ul> <li></li> </ul> |
| unit | `string` | <code>&quot;&#x27;dollars&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-semicolons..PricedExampleSC+display" id="module_test-semicolons..PricedExampleSC+display"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    pricedExampleSC.display()</h5>



<p>Displays the values and price of the object</p>

**Kind**: instance method of [`PricedExampleSC`](#module_test-semicolons..PricedExampleSC)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..Thing1SC" id="module_test-semicolons..Thing1SC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~Thing1SC ⇐ `BaseExampleSC`</h5>



<p>We declare a thing without a price</p>

**Kind**: inner class of [`test-semicolons`](#module_test-semicolons)  
**Extends**: `BaseExampleSC`  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | <code>&quot;&#x27;Kepler&#x27;&quot;</code> | <ul> <li></li> </ul> |
| type | `string` | <code>&quot;&#x27;Dog&#x27;&quot;</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-semicolons..Thing2SC" id="module_test-semicolons..Thing2SC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~Thing2SC ⇐ `PricedExampleSC`</h5>



<p>We declare a thing with a price</p>

**Kind**: inner class of [`test-semicolons`](#module_test-semicolons)  
**Extends**: `PricedExampleSC`  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | <code>&quot;&#x27;Jove&#x27;&quot;</code> | <ul> <li></li> </ul> |
| type | `string` | <code>&quot;&#x27;Framework&#x27;&quot;</code> | <ul> <li></li> </ul> |
| price | `number` | <code>49.95</code> | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-semicolons..ConstructionSC" id="module_test-semicolons..ConstructionSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~ConstructionSC</h5>



<p>We declare a working class</p>

**Kind**: inner class of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [name] | `string` | <p>name of the work</p> |
| [place] | `string` | <p>place of the work</p> |
| [other] | `any` | <p>other stuff, optional</p> |


* [~ConstructionSC](#module_test-semicolons..ConstructionSC)
    * [new ConstructionSC([name], [place])](#new_module_test-semicolons..ConstructionSC_new)
    * [.plan()](#module_test-semicolons..ConstructionSC+plan)
    * [.milestone()](#module_test-semicolons..ConstructionSC+milestone)
    * [.finish(timeSpent, timeEstimated, notes)](#module_test-semicolons..ConstructionSC+finish) ⇒ `string`
    * [.jsdocStyleFunction(a)](#module_test-semicolons..ConstructionSC+jsdocStyleFunction) ⇒ `Promise.&lt;unknown&gt;`


<hr/>

<a name="new_module_test-semicolons..ConstructionSC_new" id="new_module_test-semicolons..ConstructionSC_new"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    new ConstructionSC([name], [place])</h5>



<p>creates a Construction instance</p>


| Param | Type |
| --- | --- |
| [name] | `string` | 
| [place] | `string` | 


<hr/>

<a name="module_test-semicolons..ConstructionSC+plan" id="module_test-semicolons..ConstructionSC+plan"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    constructionSC.plan()</h5>



<p>Plans the construction</p>

**Kind**: instance method of [`ConstructionSC`](#module_test-semicolons..ConstructionSC)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..ConstructionSC+milestone" id="module_test-semicolons..ConstructionSC+milestone"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    constructionSC.milestone()</h5>



<p>generates the next milestone</p>

**Kind**: instance method of [`ConstructionSC`](#module_test-semicolons..ConstructionSC)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..ConstructionSC+finish" id="module_test-semicolons..ConstructionSC+finish"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    constructionSC.finish(timeSpent, timeEstimated, notes) ⇒ `string`</h5>



<p>complete building</p>

**Kind**: instance method of [`ConstructionSC`](#module_test-semicolons..ConstructionSC)  
**Returns**: `string` - <p>returns a report</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| timeSpent | `number` | <p>hours of actual work</p> |
| timeEstimated | `number` | <p>hours estimated at start</p> |
| notes | `string` | <p>notes about the work</p> |


<hr/>

<a name="module_test-semicolons..ConstructionSC+jsdocStyleFunction" id="module_test-semicolons..ConstructionSC+jsdocStyleFunction"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    constructionSC.jsdocStyleFunction(a) ⇒ `Promise.&lt;unknown&gt;`</h5>



<p>A method documented in classic JSDoc style.  *
But we'll let the param types and return be generated</p>

**Kind**: instance method of [`ConstructionSC`](#module_test-semicolons..ConstructionSC)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | `number` | <p>a number we pass in</p> |


<hr/>

<a name="module_test-semicolons..PrintExampleSC" id="module_test-semicolons..PrintExampleSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~PrintExampleSC</h5>



<p>An example of implemented interfaces</p>

**Kind**: inner class of [`test-semicolons`](#module_test-semicolons)  
**Implements**: `PrintActionSC`, `SaveActionSC`  
**Access**: public  

* [~PrintExampleSC](#module_test-semicolons..PrintExampleSC)
    * [.exmpleLocal(foo)](#module_test-semicolons..PrintExampleSC+exmpleLocal) ⇒ `boolean`
    * [.print(device, orientation, pages)](#module_test-semicolons..PrintExampleSC+print) ⇒ `boolean`
    * [.save(device)](#module_test-semicolons..PrintExampleSC+save) ⇒ `boolean`


<hr/>

<a name="module_test-semicolons..PrintExampleSC+exmpleLocal" id="module_test-semicolons..PrintExampleSC+exmpleLocal"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExampleSC.exmpleLocal(foo) ⇒ `boolean`</h5>



<p>Local function to print Example.</p>

**Kind**: instance method of [`PrintExampleSC`](#module_test-semicolons..PrintExampleSC)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| foo | `string` | <p>device if not default</p> |


<hr/>

<a name="module_test-semicolons..PrintExampleSC+print" id="module_test-semicolons..PrintExampleSC+print"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExampleSC.print(device, orientation, pages) ⇒ `boolean`</h5>



<p>implementation of primt</p>

**Kind**: instance method of [`PrintExampleSC`](#module_test-semicolons..PrintExampleSC)  
**Returns**: `boolean` - <p>implementation of save</p>  
**Access**: public  

| Param | Type |
| --- | --- |
| device | `string` | 
| orientation | `PrinterOrientationSC` | 
| pages | `number` | 


<hr/>

<a name="module_test-semicolons..PrintExampleSC+save" id="module_test-semicolons..PrintExampleSC+save"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    printExampleSC.save(device) ⇒ `boolean`</h5>



<p>implementation of save</p>

**Kind**: instance method of [`PrintExampleSC`](#module_test-semicolons..PrintExampleSC)  
**Access**: public  

| Param | Type |
| --- | --- |
| device | `string` | 


<hr/>

<a name="module_test-semicolons..AssigmentClassSC" id="module_test-semicolons..AssigmentClassSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~AssigmentClassSC</h5>



<p>Test of an assignment class</p>

**Kind**: inner class of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..AssigmentClassSC+dubious" id="module_test-semicolons..AssigmentClassSC+dubious"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    assigmentClassSC.dubious() ⇒ `string`</h5>



<p>we have a method</p>

**Kind**: instance method of [`AssigmentClassSC`](#module_test-semicolons..AssigmentClassSC)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..ContainerSC" id="module_test-semicolons..ContainerSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~ContainerSC</h5>



<p>Test of having an inner class</p>

**Kind**: inner class of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| ContainerSC.InsiderSC | `class` | <p>this class is a public property of Container</p> |
| InsiderSC.ContainerSC.name | `string` | <p>a name property</p> |
| InsiderSC.ContainerSC.foobar | `method` | <p>Everyone needs a foobar function</p> |
| InsiderSC.ContainerSC.constructor | `method` | <p>construct an Insider with <code>new Container.Insider()</code></p> |


<hr/>

<a name="module_test-semicolons..PropExplorerSC" id="module_test-semicolons..PropExplorerSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~PropExplorerSC</h5>



<p>Explore class properties</p>

**Kind**: inner class of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | <code>&quot;&#x27;no&quot;</code> | <p>type provided' -</p> |
| value | `number` | <code>10</code> | <p>no type provided here either</p> |
| commented | `string` | <code>&quot;&#x27;no&quot;</code> | <p>type provided' - but I have a comment about it</p> |
| unassigned | `string` |  | <ul> <li></li> </ul> |
| novalue | `number` |  | <p>also unassigned</p> |
| anything | `any` |  | <p>unassigned any</p> |
| justMe | `string` |  | <p>undeclared and unassigned</p> |
| noComment | `string` |  | <p>undeclared and unassigned</p> |
| Label | `string` | <code>&quot;&#x27;Foobar&#x27;&quot;</code> | <p>(<code>static</code>)</p> |
| PropExplorerSC.InnerClass | `class` |  | <ul> <li></li> </ul> |
| InnerClass.PropExplorerSC.constructor | `method` |  | <p>a chance to comment the inner constructor</p> |
| InnerClass.PropExplorerSC.hello | `method` |  | <p>say hi</p> |
| InnerClass.PropExplorerSC.getNumber | `method` |  | <p>(<code>static</code>) (<code>async</code>) (<code>returns {Promise&lt;number&gt;} resolves to the magic value</code>)  <br/>  fetch a number</p> |


<hr/>

<a name="module_test-semicolons..PrinterOrientationSC" id="module_test-semicolons..PrinterOrientationSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~PrinterOrientationSC</h5>



**Kind**: inner enum of [`test-semicolons`](#module_test-semicolons)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Portrait | `number` | <code>Portrait</code> | <p><b><i>(value = 0)</i></b></p> |
| Landscape | `number` | <code>Landscape</code> | <p><b><i>(value = 1)</i></b></p> |


<hr/>

<a name="module_test-semicolons..plainJaneSC" id="module_test-semicolons..plainJaneSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~plainJaneSC(a, b, c)</h5>



<p>this is as plain as it gets
a simple JS function
marked as public so it will appear in output</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `*` | 
| b | `*` | 
| c | `*` | 


<hr/>

<a name="module_test-semicolons..publicJaneSC" id="module_test-semicolons..publicJaneSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~publicJaneSC(a, b, c)</h5>



<p>This is the same as plainJane, but
in this case we are exporting it from the module
and using a JSDoc form comment block</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `*` | 
| b | `*` | 
| c | `*` | 


<hr/>

<a name="module_test-semicolons..separatedJaneSC" id="module_test-semicolons..separatedJaneSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~separatedJaneSC(a, b, c)</h5>



<p>All keywords are separated</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `*` | 
| b | `*` | 
| c | `*` | 


<hr/>

<a name="module_test-semicolons..assJane" id="module_test-semicolons..assJane"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~assJane(a, b, c)</h5>



<p>assigned classic function</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `*` | 
| b | `*` | 
| c | `*` | 


<hr/>

<a name="module_test-semicolons..sassJaneSC" id="module_test-semicolons..sassJaneSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~sassJaneSC(a, b, c)</h5>



<p>classic assigned function, split</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `*` | 
| b | `*` | 
| c | `*` | 


<hr/>

<a name="module_test-semicolons..janeArrowSC" id="module_test-semicolons..janeArrowSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~janeArrowSC(foo, bar) ⇒ `string`</h5>



<p>an arrow function</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Returns**: `string` - <p>returns a value</p>  
**Access**: public  

| Param | Type |
| --- | --- |
| foo | `string` | 
| bar | `number` | 


<hr/>

<a name="module_test-semicolons..anonymousSC" id="module_test-semicolons..anonymousSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~anonymousSC(a, b, c)</h5>



<p>an anonymous function</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `*` | 
| b | `*` | 
| c | `*` | 


<hr/>

<a name="module_test-semicolons..indexGeneratorSC" id="module_test-semicolons..indexGeneratorSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~indexGeneratorSC()</h5>



<p>a generator function</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..indexGeneratorTSSC" id="module_test-semicolons..indexGeneratorTSSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~indexGeneratorTSSC() ⇒ `Generator.&lt;number&gt;`</h5>



<p>a typescript generator function</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Returns**: `Generator.&lt;number&gt;` - <p>generates numbers</p>  
**Access**: public  

<hr/>

<a name="module_test-semicolons..typescriptSC" id="module_test-semicolons..typescriptSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~typescriptSC(a, b, c)</h5>



<p>a typescript example</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  

| Param | Type |
| --- | --- |
| a | `string` | 
| b | `number` | 
| c | `boolean` | 


<hr/>

<a name="module_test-semicolons..splitscriptSC" id="module_test-semicolons..splitscriptSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~splitscriptSC(a, b, c) ⇒ `string`</h5>



<p>separated typescript, including separated semicolon</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Returns**: `string` - <p>A value is returned</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| a | `string` | <p>the a parameter</p> |
| b | `number` | <p>the b parameter</p> |
| c | `boolean` | <p>the c parameter</p> |


<hr/>

<a name="module_test-semicolons..fetchSC" id="module_test-semicolons..fetchSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~fetchSC(url) ⇒ `Promise.&lt;string&gt;`</h5>



<p>example of an async function</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Returns**: `Promise.&lt;string&gt;` - <p>the body of the return</p>  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | <p>The url to fetch</p> |


<hr/>

<a name="module_test-semicolons..simpleVoidSC" id="module_test-semicolons..simpleVoidSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~simpleVoidSC()</h5>



<p>void functions do not document a return type</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..simpleVoidTSSC" id="module_test-semicolons..simpleVoidTSSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~simpleVoidTSSC()</h5>



<p>typescript void functions do not document a return type</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Access**: public  

<hr/>

<a name="module_test-semicolons..docVoidSC" id="module_test-semicolons..docVoidSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~docVoidSC() ⇒ `void`</h5>



<p>typescript with documented void return</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Returns**: `void` - <p>a void return</p>  
**Access**: public  

<hr/>

<a name="module_test-semicolons..jsVoidSC" id="module_test-semicolons..jsVoidSC"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-semicolons~jsVoidSC() ⇒ `void`</h5>



<p>javascript post-dec comments also documented as return type</p>

**Kind**: inner method of [`test-semicolons`](#module_test-semicolons)  
**Returns**: `void` - <p>nothing to see here</p>  
**Access**: public  

<hr/>

<a name="module_test-typedef" id="module_test-typedef"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-typedef</h5>



<h4>test-typedef (Module)</h4>
<p>Test forms of type definitions</p>


* [test-typedef](#module_test-typedef)
    * [~str](#module_test-typedef..str) : `string`
    * [~NumberLike](#module_test-typedef..NumberLike) : `string` \| `number`
    * [~Office](#module_test-typedef..Office) : `&quot;Seattle&quot;` \| `&quot;Los Angeles&quot;` \| `&quot;New York&quot;` \| `&quot;London&quot;` \| `&quot;Paris&quot;`
    * [~ValueSet](#module_test-typedef..ValueSet) : `0` \| `1` \| `2` \| `4` \| `8` \| `12` \| `16`
    * [~Complex](#module_test-typedef..Complex) : `object`
    * [~LocObj](#module_test-typedef..LocObj) : `object`
    * [~LLTuple](#module_test-typedef..LLTuple) : `array`
    * [~HunterGatherer](#module_test-typedef..HunterGatherer) : `class`
    * [~MyFunction](#module_test-typedef..MyFunction) ⇒ `boolean`
    * [~CommentedCB](#module_test-typedef..CommentedCB) ⇒ `boolean`


<hr/>

<a name="module_test-typedef..str" id="module_test-typedef..str"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-typedef~str : `string`</h5>



<p>use to create pointless aliases</p>

**Kind**: inner typedef of [`test-typedef`](#module_test-typedef)  

<hr/>

<a name="module_test-typedef..NumberLike" id="module_test-typedef..NumberLike"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-typedef~NumberLike : `string` \| `number`</h5>



<p>used to define multi-type aliases</p>

**Kind**: inner typedef of [`test-typedef`](#module_test-typedef)  

<hr/>

<a name="module_test-typedef..Office" id="module_test-typedef..Office"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-typedef~Office : `&quot;Seattle&quot;` \| `&quot;Los Angeles&quot;` \| `&quot;New York&quot;` \| `&quot;London&quot;` \| `&quot;Paris&quot;`</h5>



<p>used to define acceptable string values</p>

**Kind**: inner typedef of [`test-typedef`](#module_test-typedef)  

<hr/>

<a name="module_test-typedef..ValueSet" id="module_test-typedef..ValueSet"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-typedef~ValueSet : `0` \| `1` \| `2` \| `4` \| `8` \| `12` \| `16`</h5>



<p>used to define acceptable number values</p>

**Kind**: inner typedef of [`test-typedef`](#module_test-typedef)  

<hr/>

<a name="module_test-typedef..Complex" id="module_test-typedef..Complex"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-typedef~Complex : `object`</h5>



<p>used to define a complex type</p>

**Kind**: inner typedef of [`test-typedef`](#module_test-typedef)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | `string` | <p>name of person</p> |
| age | `NumberLike` | <p>age of person</p> |
| office | `Office` | <p>which office</p> |
| value | `string` | <p>which value</p> |


<hr/>

<a name="module_test-typedef..LocObj" id="module_test-typedef..LocObj"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-typedef~LocObj : `object`</h5>



<p>lat, lon as object props</p>

**Kind**: inner typedef of [`test-typedef`](#module_test-typedef)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| lat | `number` | <ul> <li></li> </ul> |
| lon | `number` | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-typedef..LLTuple" id="module_test-typedef..LLTuple"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-typedef~LLTuple : `array`</h5>



<p>lon, lat as a  2-element array, in that order</p>

**Kind**: inner typedef of [`test-typedef`](#module_test-typedef)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| lon | `number` | <ul> <li></li> </ul> |
| lat | `number` | <ul> <li></li> </ul> |


<hr/>

<a name="module_test-typedef..HunterGatherer" id="module_test-typedef..HunterGatherer"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-typedef~HunterGatherer : `class`</h5>



<p>assign intersection type definition to alias interface combo</p>

**Kind**: inner typedef of [`test-typedef`](#module_test-typedef)  
**Implements**: `Hunter`, `Gatherer`  

<hr/>

<a name="module_test-typedef..MyFunction" id="module_test-typedef..MyFunction"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-typedef~MyFunction ⇒ `boolean`</h5>



<p>function typedef (callback)</p>

**Kind**: inner typedef of [`test-typedef`](#module_test-typedef)  

| Param | Type |
| --- | --- |
| str | `string` | 
| num | `number` | 


<hr/>

<a name="module_test-typedef..CommentedCB" id="module_test-typedef..CommentedCB"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    test-typedef~CommentedCB ⇒ `boolean`</h5>



<p>A commented version of a callback definition.
The return type must be a single line comment in this case</p>

**Kind**: inner typedef of [`test-typedef`](#module_test-typedef)  
**Returns**: `boolean` - <p>comment that we return true or false</p>  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | <p>a comment about str</p> |
| num | `number` | <p>a comment about num</p> |

