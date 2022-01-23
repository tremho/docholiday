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
  * name:{foo:string, bar:number} (ad-hoc type)
  * 
  * @param {{foo:string,bar:number}} a
  * @param {number} b
  * @param {FooBar} c
  * 
  * @public
  */
 function five(a, b, c) { 
 }

 /**
  * name:{foo:string, bar:number} (ad-hoc type) with comment
  * 
  * @param {{foo:string,bar:number}} a
  *         an ad-hoc type
  * @param {number} b
  *         yes, this is a number
  * @param {FooBar} c
  *         what would we do without FooBar?
  * 
  * @public
  */
 function six(a, b, c) { 
 }

