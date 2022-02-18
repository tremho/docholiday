

### Using Markdown
##### or HTML

For some time, JSDoc has allowed the direct insertion of HTML, or
more recently, Markdown, into comment blocks.  This option is
supported by _Doc-Holiday_, so you are able to do basic styling
of items in your comment markup.

For example:
````typescript
/**
 * ## This will stand out
 * Markdown can be used for __bold__ and _italics_,
 * or for lists
 * - apples
 * - bananas
 * - cherries
 * - dates
 *
 * or tables:
 *
 * | City | Population |
 * | ---  | ---------  |
 * | Tokyo | 37,435,191 |
 * | Delhi | 29,399,141 |
 * | Shanghai | 26,317,104 |
 * | Sao Paulo | 21,846,507 |
 * | Mexico City | 21,671,908 |
 * -------------
 * Markdown is also good for [embedding links](https://github.com/tremho/docholiday)
 * or images ![Tremho avatar](https://avatars.githubusercontent.com/u/1068385?s=400&u=0bed12755b90e2d62ed6a2dff86b28e3e2a55ff9&v=4)
 *
 * <div style="background-color: goldenrod; font-family:cursive;">
 *    HTML is good for color and font stylings,<br/>
 *    or most other things that you can do with HTML markup.
 * </div>
 *
 *
 */
export function imSoPretty() {

}

````

Will come out as:

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~imSoPretty()</h5>



<h2>This will stand out</h2>
<p>Markdown can be used for <strong>bold</strong> and <em>italics</em>,
or for lists</p>
<ul>
<li>apples</li>
<li>bananas</li>
<li>cherries</li>
<li>dates</li>
</ul>
<p>or tables:</p>
<table>
<thead>
<tr>
<th>City</th>
<th>Population</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tokyo</td>
<td>37,435,191</td>
</tr>
<tr>
<td>Delhi</td>
<td>29,399,141</td>
</tr>
<tr>
<td>Shanghai</td>
<td>26,317,104</td>
</tr>
<tr>
<td>Sao Paulo</td>
<td>21,846,507</td>
</tr>
<tr>
<td>Mexico City</td>
<td>21,671,908</td>
</tr>
</tbody>
</table>
<hr>
<p>Markdown is also good for <a href="https://github.com/tremho/docholiday">embedding links</a>
or images <img src="https://avatars.githubusercontent.com/u/1068385?s=400&amp;u=0bed12755b90e2d62ed6a2dff86b28e3e2a55ff9&amp;v=4" alt="Tremho avatar"></p>
<div style="background-color: goldenrod; font-family:cursive;">
HTML is good for color and font stylings,<br/>
or most other things that you can do with HTML markup.
</div>

**Kind**: inner method of [`example`](#module_focus)  
**Access**: public


------

##### Back <==  [JSDoc](JSDoc) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next  ==>  [Diagramming with PlantUML](plantUML)
