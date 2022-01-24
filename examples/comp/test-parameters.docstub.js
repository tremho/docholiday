/** @module test-parameters */

 /**
  * name only, any type
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * 
  * @public
  */
 function one(a, b, c) { 
 }

 /**
  * name only with comments
  * 
  * @param {*} a
  *         inline
  * @param {*} b
  *         sidebar, multiple
  *                                   lines and verbose
  * @param {*} c
  *         sidebar single-line
  * 
  * @public
  */
 function two(a, b, c) { 
 }

 /**
  * name:type (typescript)
  * 
  * @param {string} a
  * @param {number} b
  * @param {FooBar} c
  * 
  * @public
  */
 function three(a, b, c) { 
 }

 /**
  * name:type with comment
  * 
  * @param {string} a
  *         Comment one
  * @param {*} b
  *         Comment two
  * @param {*} c
  *         Comment three
  * 
  * @public
  */
 function four(a, b, c) { 
 }

 /**
  * ad-hoc object parameters
  * 
  * @param {object} a
  * @param {string} a.foo
  * @param {number} a.bar
  * @param {number} b
  * @param {FooBar} c
  * 
  * @public
  */
 function five(a, b, c, ) { 
 }

 /**
  * ad-hoc object parameters, with comments
  * 
  * @param {object} a
  *         The a object holds properties that
  *                                 are used for some reasan,
  *                                 and we can document them.
  * @param {string} a.foo
  *         something to say about foo
  * @param {number} a.bar
  *         belly up to the bar
  * @param {number} b
  *         and we document the other parameters, too
  * @param {FooBar} c
  *         including good old FooBar
  * 
  * @public
  */
 function six(a, b, c, ) { 
 }

