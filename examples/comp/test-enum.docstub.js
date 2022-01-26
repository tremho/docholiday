/** @module test-enum */

 /**
  * Constants for direction
  * Explicit start
  * @enum
  * @readonly
  */
     var Direction = {
         /** 
         *   vertical ascend
         *  <b><i>(value = 1)</i></b>
         *  @type {number}
         */
         Up,
         /** 
         *   vertical descend
         *  <b><i>(value = 2)</i></b>
         *  @type {number}
         */
         Down,
         /** 
         *   westward if facing north
         *  <b><i>(value = 3)</i></b>
         *  @type {number}
         */
         Left,
         /** 
         *   eastward if facing north
         *  <b><i>(value = 4)</i></b>
         *  @type {number}
         */
         Right
 }

 /**
  * Implicit values
  * @enum
  * @readonly
  */
     var Direction2 = {
         /** 
         *  <b><i>(value = 0)</i></b>
         *  @type {number}
         */
         Up,
         /** 
         *  <b><i>(value = 1)</i></b>
         *  @type {number}
         */
         Down,
         /** 
         *  <b><i>(value = 2)</i></b>
         *  @type {number}
         */
         Left,
         /** 
         *  <b><i>(value = 3)</i></b>
         *  @type {number}
         */
         Right
 }

 /**
  * String values
  * @enum
  * @readonly
  */
     var Direction3 = {
         /** 
         *  <b><i>(value = "UP")</i></b>
         *  @type {string}
         */
         Up,
         /** 
         *  <b><i>(value = "DOWN")</i></b>
         *  @type {string}
         */
         Down,
         /** 
         *  <b><i>(value = "LEFT")</i></b>
         *  @type {string}
         */
         Left,
         /** 
         *  <b><i>(value = "RIGHT")</i></b>
         *  @type {string}
         */
         Right
 }

 /**
  * String values = key
  * should not repeat value in description
  * @enum
  * @readonly
  */
     var Direction3 = {
         /** 
         *  @type {string}
         */
         UP,
         /** 
         *  @type {string}
         */
         DOWN,
         /** 
         *  @type {string}
         */
         LEFT,
         /** 
         *  @type {string}
         */
         RIGHT
 }

 /**
  * 
  * @enum
  * @readonly
  */
     var BooleanLikeHeterogeneousEnum = {
         /** 
         *  <b><i>(value = 0)</i></b>
         *  @type {number}
         */
         No,
         /** 
         *  <b><i>(value = "YES")</i></b>
         *  @type {string}
         */
         Yes
 }

 /**
  * 
  * @enum
  * @readonly
  */
     var LogLevel = {
         /** 
         *  <b><i>(value = 0)</i></b>
         *  @type {number}
         */
         ERROR,
         /** 
         *  <b><i>(value = 1)</i></b>
         *  @type {number}
         */
         WARN,
         /** 
         *  <b><i>(value = 2)</i></b>
         *  @type {number}
         */
         INFO,
         /** 
         *  <b><i>(value = 3)</i></b>
         *  @type {number}
         */
         DEBUG
 }

 /**
  * Explicit after implicit
  * @enum
  * @readonly
  */
     var Jumper = {
         /** 
         *  <b><i>(value = 0)</i></b>
         *  @type {number}
         */
         Zero,
         /** 
         *  <b><i>(value = 1)</i></b>
         *  @type {number}
         */
         One,
         /** 
         *  <b><i>(value = 2)</i></b>
         *  @type {number}
         */
         Two,
         /** 
         *  <b><i>(value = 100)</i></b>
         *  @type {number}
         */
         OneHundred,
         /** 
         *  <b><i>(value = 101)</i></b>
         *  @type {number}
         */
         OneOhOne,
         /** 
         *  <b><i>(value = 102)</i></b>
         *  @type {number}
         */
         OneOhTwo
 }

 /**
  * Explicit non sequential
  * @enum
  * @readonly
  */
     var Scattered = {
         /** 
         *  <b><i>(value = 456)</i></b>
         *  @type {number}
         */
         Foo,
         /** 
         *  <b><i>(value = 123)</i></b>
         *  @type {number}
         */
         Bar,
         /** 
         *  <b><i>(value = 42)</i></b>
         *  @type {number}
         */
         Fubar
 }

 /**
  * Bug case: No comma on last element
  * @enum
  * @readonly
  */
     var BugCase1 = {
         /** 
         *  <b><i>(value = 456)</i></b>
         *  @type {number}
         */
         Foo,
         /** 
         *  <b><i>(value = 123)</i></b>
         *  @type {number}
         */
         Bar,
         /** 
         *  <b><i>(value = 42)</i></b>
         *  @type {number}
         */
         Fubar
 }

 /**
  * Bug case explore: No comma on last element, comments
  * @enum
  * @readonly
  */
     var BugCase1b = {
         /** 
         *   this is foo
         *  <b><i>(value = 456)</i></b>
         *  @type {number}
         */
         Foo,
         /** 
         *   this is bar
         *  <b><i>(value = 123)</i></b>
         *  @type {number}
         */
         Bar,
         /** 
         *   this is fubar
         *  <b><i>(value = 42)</i></b>
         *  @type {number}
         */
         Fubar
 }

 /**
  * Bug case explore: No comma on last element, string
  * @enum
  * @readonly
  */
     var BugCase1c = {
         /** 
         *  @type {string}
         */
         Foo,
         /** 
         *  @type {string}
         */
         Bar,
         /** 
         *  @type {string}
         */
         Fubar
 }

