/** @module test-functions 
 * @description
 * #### test-functions (Module)
 * Tests all forms of function declaration
 * to see if we are properly documenting these
 *
*/

 /**
  * this is as plain as it gets
  * a simple JS function
  * marked as public so it will appear in output
  * @public
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * @public
  */
 function plainJane(a, b, c) { 
 }

 /**
  * This is the same as plainJane, but
  * in this case we are exporting it from the module
  * and using a JSDoc form comment block
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * @public
  */
 function publicJane(a, b, c) { 
 }

 /**
  * All keywords are separated
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * @public
  */
 function separatedJane(a, b, c) { 
 }

 /**
  * assigned classic function
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * @public
  */
 function assJane(a, b, c) { 
 }

 /**
  * classic assigned function, split
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * @public
  */
 function sassJane(a, b, c) { 
 }

 /**
  * an arrow function
  * 
  * @param {string} foo
  * @param {number} bar
  * 
  * @return {string} returns a value
  * @public
  */
 function janeArrow(foo, bar) { 
     return ''
 }

 /**
  * an anonymous function
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * @public
  */
 function anonymous(a, b, c) { 
 }

 /**
  * a generator function
  * @yields {number} each call to next() returns the successive number
  * 
  * @public
  */
 function* indexGenerator() { 
 }

 /**
  * a typescript generator function
  * 
  * 
  * @return {Generator<number>} generates numbers
  * @yields {number}
  * @public
  */
 function* indexGeneratorTS() { 
 }

 /**
  * a typescript example
  * 
  * @param {string} a
  * @param {number} b
  * @param {boolean} c
  * @public
  */
 function typescript(a, b, c) { 
 }

 /**
  * separated typescript
  * 
  * @param {string} a
  *         the a parameter
  * @param {number} b
  *         the b parameter
  * @param {boolean} c
  *         the c parameter
  * 
  * @return {string} A value is returned
  * @public
  */
 function splitscript(a, b, c) { 
     return ''
 }

 /**
  * example of an async function
  * 
  * @param {string} url
  *         The url to fetch
  * 
  * @return {Promise<string>} the body of the return
  * @async
  * @public
  */
 function fetch(url) { 
 }

 /**
  * void functions do not document a return type
  * 
  * @public
  */
 function simpleVoid() { 
 }

 /**
  * typescript void functions do not document a return type
  * 
  * @public
  */
 function simpleVoidTS() { 
 }

 /**
  * typescript with documented void return
  * 
  * 
  * @return {void} a void return
  * @public
  */
 function docVoid() { 
 }

 /**
  * javascript post-dec comments also documented as return type
  * 
  * 
  * @return {void} nothing to see here
  * @public
  */
 function jsVoid() { 
 }

