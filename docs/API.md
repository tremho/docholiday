
<hr/>

<a name="module_focus" id="module_focus"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    focus</h5>



<h4>focus (Module)</h4>
<p>Test forms of type definitions</p>


* [focus](#module_focus)
    * [~str](#module_focus..str) : `string`
    * [~NumberLike](#module_focus..NumberLike) : `string` \| `number`
    * [~Office](#module_focus..Office) : `&quot;Seattle&quot;` \| `&quot;Los Angeles&quot;` \| `&quot;New York&quot;` \| `&quot;London&quot;` \| `&quot;Paris&quot;`
    * [~ValueSet](#module_focus..ValueSet) : `0` \| `1` \| `2` \| `4` \| `8` \| `12` \| `16`
    * [~Complex](#module_focus..Complex) : `object`
    * [~LocObj](#module_focus..LocObj) : `object`
    * [~LLTuple](#module_focus..LLTuple) : `array`
    * [~MyFunction](#module_focus..MyFunction) ⇒ `boolean`
    * [~CommentedCB](#module_focus..CommentedCB) ⇒ `boolean`


<hr/>

<a name="module_focus..str" id="module_focus..str"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    focus~str : `string`</h5>



<p>use to create pointless aliases</p>

**Kind**: inner typedef of [`focus`](#module_focus)  

<hr/>

<a name="module_focus..NumberLike" id="module_focus..NumberLike"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    focus~NumberLike : `string` \| `number`</h5>



<p>used to define multi-type aliases</p>

**Kind**: inner typedef of [`focus`](#module_focus)  

<hr/>

<a name="module_focus..Office" id="module_focus..Office"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    focus~Office : `&quot;Seattle&quot;` \| `&quot;Los Angeles&quot;` \| `&quot;New York&quot;` \| `&quot;London&quot;` \| `&quot;Paris&quot;`</h5>



<p>used to define acceptable string values</p>

**Kind**: inner typedef of [`focus`](#module_focus)  

<hr/>

<a name="module_focus..ValueSet" id="module_focus..ValueSet"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    focus~ValueSet : `0` \| `1` \| `2` \| `4` \| `8` \| `12` \| `16`</h5>



<p>used to define acceptable number values</p>

**Kind**: inner typedef of [`focus`](#module_focus)  

<hr/>

<a name="module_focus..Complex" id="module_focus..Complex"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    focus~Complex : `object`</h5>



<p>used to define a complex type</p>

**Kind**: inner typedef of [`focus`](#module_focus)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| person | `string` | <p>name of person</p> |
| person | `string` | <p>age of person</p> |
| office | `string` | <p>which office</p> |
| value | `string` | <p>which value</p> |


<hr/>

<a name="module_focus..LocObj" id="module_focus..LocObj"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    focus~LocObj : `object`</h5>



<p>lat, lon as object props</p>

**Kind**: inner typedef of [`focus`](#module_focus)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| lon | `number` | <ul> <li></li> </ul> |


<hr/>

<a name="module_focus..LLTuple" id="module_focus..LLTuple"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    focus~LLTuple : `array`</h5>



<p>lon, lat as a  2-element array, in that order</p>

**Kind**: inner typedef of [`focus`](#module_focus)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| lat | `number` | <ul> <li></li> </ul> |


<hr/>

<a name="module_focus..MyFunction" id="module_focus..MyFunction"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    focus~MyFunction ⇒ `boolean`</h5>



<p>function typedef (callback)</p>

**Kind**: inner typedef of [`focus`](#module_focus)  

| Param | Type |
| --- | --- |
| str | `string` | 
| num | `number` | 


<hr/>

<a name="module_focus..CommentedCB" id="module_focus..CommentedCB"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    focus~CommentedCB ⇒ `boolean`</h5>



**Kind**: inner typedef of [`focus`](#module_focus)  
**Returns**: `boolean` - <p>comment that we return true or false</p>  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | <p>a comment about str</p> |
| num | `number` | <p>a comment about num</p> |

