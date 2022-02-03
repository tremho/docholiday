
<hr/>

<a name="module_focus" id="module_focus"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    focus</h5>



<h4>focus (Module)</h4>
<p>Module for the <code>executeCommand</code> function</p>


<hr/>

<a name="module_focus..executeCommand" id="module_focus..executeCommand"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    focus~executeCommand(cmd, args, [cwd], [consolePass], [env])</h5>



<p>Execute an external command and return the results
in stdout string, stderr string, return code.
Optionally allow command to echo to console in real time, or run silent.</p>

**Kind**: inner method of [`focus`](#module_focus)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| cmd | `string` |  | <p>command to execute</p> |
| args | `Array.&lt;any&gt;` |  | <p>to pass to command, as an array</p> |
| [cwd] | `string` | <code>&quot;&#x27;&#x27;&quot;</code> | <p>working directory to run command, if not the currently set one</p> |
| [consolePass] | `boolean` | <code>false</code> | <p><code>true</code> to allow command to echo its output in real time</p> |
| [env] | `any` | <code>{}</code> | <p>any environment values, in key=value form.</p> |

