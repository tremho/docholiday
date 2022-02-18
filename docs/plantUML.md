
### Diagramming with PlantUML

[PlantUML](https://plantuml.com) is a powerful diagramming tool that
creates beautifully rendered UML diagrams of various types from
easily entered, human readable text directives.

_Doc-Holiday_ supports the use of PlantUML directives within a function 
comment block description, through use of the _extension_ syntax for PlantUML.

Some examples:

````typescript
/**
 * We can insert plantUML diagrams.
 * This one is a sequence diagram
 *
 * {{{plantUml}}}
 *
 * Alice -> Bob: Authentication Request
 * Bob --> Alice: Authentication Response
 *
 * Alice -> Bob: Another authentication Request
 * Alice <-- Bob: Another authentication Response
 */
export function plantSeq() {}

/**
 * Same, but this comment should be at top
 * and we should have more plain text at bottom
 * {{{plantUml}}}
 *
 * Alice -> Bob: Authentication Request
 * Bob --> Alice: Authentication Response
 *
 * Alice -> Bob: Another authentication Request
 * Alice <-- Bob: Another authentication Response
 *
 * {{{text}}}
 * More plain text at the bottom...
 */
export function plantSeq2() {}


/**
 * We can use PlantUML for UseCase diagrams
 * {{{plantUML}}}
 *
 * (First usecase)
 * (Another usecase) as (UC2)
 * usecase UC3
 * usecase (Last\nusecase) as UC4
 *
 */
export function plantUse() {}

/**
 * We can use PlantUML for Class and Object diagrams
 *
 * {{{plantUML}}}
 * abstract        abstract
 * abstract class  "abstract class"
 * annotation      annotation
 * circle          circle
 * ()              circle_short_form
 * class           class
 * diamond         diamond
 * <>              diamond_short_form
 * entity          entity
 * enum            enum
 * interface       interface*
 *
 object London
 object Washington
 object Berlin
 object NewYork

 map CapitalCity {
 UK *-> London
 USA *--> Washington
 Germany *---> Berlin
}

 NewYork --> CapitalCity::USA
 */
export function plantClassObject() {}

/**
 * PlantUML Activity
 * {{{plantUML}}}
 :Hello world;
 :This is defined on
 several **lines**;
 start

 if (Graphviz installed?) then (yes)
 :process all\ndiagrams;
 else (no)
 :process only
 __sequence__ and __activity__ diagrams;
 endif

 stop
 */
export function plantActivity() {}

/**
 * PlantUML Component
 * this is the large example, including groups, etc
 * {{{plantUML}}}
 package "Some Group" {
  HTTP - [First Component]
  [Another Component]
}

 node "Other Groups" {
  FTP - [Second Component]
  [First Component] --> FTP
}

 cloud {
  [Example 1]
}


 database "MySql" {
  folder "This is my folder" {
    [Folder 3]
  }
  frame "Foo" {
    [Frame 4]
  }
}


 [Another Component] --> [Example 1]
 [Example 1] --> [Folder 3]
 [Folder 3] --> [Frame 4]

 */
export function plantComponent() {}

/**
 * PlantUML Deployment
 * this is a use-case variant, and
 * here we show the complex example from the plantUML site
 * {{{plantUML}}}

 actor foo1
 actor foo2
 foo1 <-0-> foo2
 foo1 <-(0)-> foo2

 (ac1) -le(0)-> left1
 ac1 -ri(0)-> right1
 ac1 .up(0).> up1
 ac1 ~up(0)~> up2
 ac1 -do(0)-> down1
 ac1 -do(0)-> down2

 actor1 -0)- actor2

 component comp1
 component comp2
 comp1 *-0)-+ comp2
 [comp3] <-->> [comp4]

 boundary b1
 control c1
 b1 -(0)- c1

 component comp1
 interface interf1
 comp1 #~~( interf1

 :mode1actor: -0)- fooa1
 :mode1actorl: -ri0)- foo1l

 [component1] 0)-(0-(0 [componentC]
 () component3 )-0-(0 "foo" [componentC]

 [aze1] #-->> [aze2]

 */
export function plantDeployment() {}

/**
 * PlantUML State
 * A complex state diagram from plantUML examples
 * {{{plantUML}}}

 [*] -> State1
 State1 --> State2 : Succeeded
 State1 --> [*] : Aborted
 State2 --> State3 : Succeeded
 State2 --> [*] : Aborted
 state State3 {
  state "Accumulate Enough Data" as long1
  long1 : Just a test
  [*] --> long1
  long1 --> long1 : New Data
  long1 --> ProcessData : Enough Data
  State2 --> [H]: Resume
}
 State3 --> State2 : Pause
 State2 --> State3[H*]: DeepResume
 State3 --> State3 : Failed
 State3 --> [*] : Succeeded / Save Result
 State3 --> [*] : Aborted

 */
export function plantState() {}

/**
 * PlantUML Timing
 * {{{plantUML}}}

 clock   "Clock_0"   as C0 with period 50
 clock   "Clock_1"   as C1 with period 50 pulse 15 offset 10
 binary  "Binary"  as B
 concise "Concise" as C
 robust  "Robust"  as R


 @0
 C is Idle
 R is Idle

 @100
 B is high
 C is Waiting
 R is Processing

 @300
 R is Waiting

 */
export function plantTiming() {}


/**
 * A Pert example
 *
 * {{{plantUML}}}
 * left to right direction
 * ' Horizontal lines: -->, <--, <-->
 * ' Vertical lines: ->, <-, <->
 * title PERT: Project Name
 *
 * map Kick.Off {
 * }
 * map task.1 {
 *     Start => End
 * }
 * map task.2 {
 *     Start => End
 * }
 * map task.3 {
 *     Start => End
 * }
 * map task.4 {
 *     Start => End
 * }
 * map task.5 {
 *     Start => End
 * }
 * Kick.Off --> task.1 : Label 1
 * Kick.Off --> task.2 : Label 2
 * Kick.Off --> task.3 : Label 3
 * task.1 --> task.4
 * task.2 --> task.4
 * task.3 --> task.4
 * task.4 --> task.5 : Label 4
 *
 */
export function plantPERT() {}
````

Resulting in the following renderings:


<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~plantSeq()</h5>



<p>We can insert plantUML diagrams.
This one is a sequence diagram</p>
<p><img src="http://www.plantuml.com/plantuml/svg/u-9opCbCJbNGjLDmoa-oKd0iBSb8pIl9J4uioSpFKmXABInDBIxX0iefw0BLW1LZKLLSa9zNdCg5RbXUFb1TaK8YTaCXYcrqTGceXXeE0000" alt="plantUML"></p>

**Kind**: inner method of [`example`](#module_focus)  
**Access**: public

<hr/>

<a name="module_focus..plantSeq2" id="module_focus..plantSeq2"></a>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~plantSeq2()</h5>



<p>Same, but this comment should be at top
and we should have more plain text at bottom</p>
<p><img src="http://www.plantuml.com/plantuml/svg/u-9opCbCJbNGjLDmoa-oKd0iBSb8pIl9J4uioSpFKmXABInDBIxX0iefw0BLW1LZKLLSa9zNdCg5RbXUFb1TaK8YTaCXYcrqTGceXXaE0000" alt="plantUML"></p>
<p>More plain text at the bottom...</p>

**Kind**: inner method of [`example`](#module_focus)  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~plantUse()</h5>



<p>We can use PlantUML for UseCase diagrams</p>
<p><img src="http://www.plantuml.com/plantuml/svg/u-BISCiiAYvHA2rEJKuiJjNaqd3Coo_9I2s2YoWa5YjeX3eRQN91HHH2dOtXR0sVnEAIc3nanQ7E9bm0" alt="plantUML"></p>

**Kind**: inner method of [`example`](#module_focus)  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~plantClassObject()</h5>



<p>We can use PlantUML for Class and Object diagrams</p>
<p><img src="http://www.plantuml.com/plantuml/svg/LOz1YW8n44Nt_nJ1bGfp0H51NSnYn8s8k98onZ7QIIGf4H7lRaAdqzsrUxygBrMWOs1FaaMkXb4Qig8GX1ZqWm78MiV4sjdyiZ2azh9IebJD68v4h-hu42xEy-7il47-gvr8Z9Ccu-off9andVLzEUyAbMNDhtQavXW_JFTbOcZBofz9DeiN7WFkU5Nnz5NKn_ioxIXSjFtdDbaeN-b2Q_NSEty33Dt5akwQgLgcTTxO_ednpwpnRJVpY94xnb_b3TbNocCZYpz0begKTfoJIPJW2m00" alt="plantUML"></p>

**Kind**: inner method of [`example`](#module_focus)  
**Access**: public

<hr/>


<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~plantActivity()</h5>



<p>PlantUML Activity</p>
<p><img src="http://www.plantuml.com/plantuml/svg/JOuz3i8m38Ltdy9ZcoEq0oCSW14fYXgNMZ9EYKDGEJqUAxtfUpzwCDr8fE2tLCapJFUD3LsPLbRAM1ICEjKa688uiX1ci9Pg0-0LXsjD-zRvXwnEHIXVHcmRAGu7sGZJNij2PkZUGpEdPqqlcu7420SjfqHHEI16e_U7TA4OCMd66DFIk7Cx79pwlhM2Foax_040" alt="plantUML"></p>

**Kind**: inner method of [`example`](#module_focus)  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~plantComponent()</h5>



<p>PlantUML Component
this is the large example, including groups, etc</p>
<p><img src="http://www.plantuml.com/plantuml/svg/ROyz2y8m48Rt_8eZUmVHMH0nkeX2knM7sAIscEPgau95_E_cGsaL8SFbdjppvaZBYok_IA0fDXAs7VOjXGVPPTaH4iXPtHaBQsnQr5BR4ybN6cqbksdlIOX6uHo7G8B4U0kBabGMgCMNvTSBIR84zzox2eMzSDFvviwRLacOXGWYkELdRbpEVaXloWUKg8HBf5bL6t2d6I2sFCnPf7C_NdRSxKSPOaJXkl34g_zi5Nuq_SAaZcpKZ-MRVEml" alt="plantUML"></p>

**Kind**: inner method of [`example`](#module_focus)  
**Access**: public

<hr/>


<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~plantDeployment()</h5>



<p>PlantUML Deployment
this is a use-case variant, and
here we show the complex example from the plantUML site</p>
<p><img src="http://www.plantuml.com/plantuml/svg/PP11RiCW44NtSufHii6jY3nELrRbJOyHUO4nJYmvO26igbtux1t0JPf6GcB-Wvd_0K3fu3mEpj6zh21gV9UbR1wqA8jV0a9fAb1E9iF9326E89H-pCYFvyl63ilCxD3WCcUm9h16KEMktkMktdrQUaRicF8nPeQfPgRTTNRMs82ned-wIfhm9VQyRkWKjsFBpv5DWqczjG2TMsol_1TsSOeDtase2JesZ2bY_UGssc3yeBJ1ND7cjrzNSKDGNrrlA2MkSth-GKL_-LJ7RzkEQ88SCbbHYyn5oGllzAC5KU1D7h6GwSQE-tUFz-2alWrFsUVtigXQ-040" alt="plantUML"></p>

**Kind**: inner method of [`example`](#module_focus)  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~plantState()</h5>



<p>PlantUML State
A complex state diagram from plantUML examples</p>
<p><img src="http://www.plantuml.com/plantuml/svg/RP0z3u8m48Rt_eeB8manmiPWGeA6E1WY8s6evO8cV1ZQwc3yxxP0iOXBsxltdhlhIqZk5k3j81DKu9QC5tWcuqC8cMGCiSJILZKMGdJfUc44_ui5Qyp_Wt4j6E8rXKx4c6nahT_xjfFL5M8gg0EKGzsrrPOCfsfpb5m01O5SZDzG0-oAELQr9tmERImfxJk6dEkiAh16BHPEYX3Eo6M3v4scLHVsf5HoN3kG9wuYOyJxHF-osgC3lTN6eC0oQFOEDf3H1muRr69TQ9py0000" alt="plantUML"></p>

**Kind**: inner method of [`example`](#module_focus)  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~plantTiming()</h5>



<p>PlantUML Timing</p>
<p><img src="http://www.plantuml.com/plantuml/svg/NSp13O0W44JH-rOnsGhWO0FIWGqOHOX4unh06BiNCLwy_SER8RAhs0K0coTwnQM71ADmXZnZTp78X4RzeVwW_a7inveST0FnFhaChMWCsn2licrhS5ssP6MpeLWsRt0zf2ZZaNBHNOrNTtG3" alt="plantUML"></p>

**Kind**: inner method of [`example`](#module_focus)  
**Access**: public

<hr/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
    example~plantPERT()</h5>



<p>A Pert example</p>
<p><img src="http://www.plantuml.com/plantuml/svg/VSyz3u8m40RW_Nx5RIv2mjT2b8t4HAD4ZNk5efL2JRb9utyN2LOYXA5D-ZwNDrUGF2SaXLfSheIPq3mbeIgOuKffyL0LCObILBmEqRAYEIuigxsYPkJ4DOcqDz3wvqH0WYJ79DuVGqoqkZMzk6Kb1oZP7TSYBUnTdkCJNcr0h2viftaUY6d2POHnbVNDdJ1lmlm92uPc5cj--5qgn0qxSudEYBf6tH7rZ7hGbHdpeIluJxn1ul-Im3Jwy0O0" alt="plantUML"></p>

**Kind**: inner method of [`example`](#module_focus)  
**Access**: public


-------

##### Back <==  [Using Markdown](markdown) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next  ==>  [return to Table of Contents](index)
