// TODO


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