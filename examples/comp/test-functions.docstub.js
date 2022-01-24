/** @module test-functions */

 /**
  * this is as plain as it gets
  * a simple JS function
  * marked as public so it will appear in output
  * @public
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * 
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
  * 
  * @return {string} 
  * 
  * @public
  */
 function publicJane(a, b, c) { 
     return ''
 }

 /**
  * All keywords are separated
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * 
  * @return {string} 
  * 
  * @public
  */
 function separatedJane(a, b, c) { 
     return ''
 }

 /**
  * assigned classic function
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * 
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
  * 
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
  * 
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
  * 
  * @public
  */
 function anonymous(a, b, c) { 
 }

 /**
  * a generator function
  * 
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
  * 
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
  * 
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
  * 
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
  * 
  * @async
  * @public
  */
 function fetch(url) { 
 }

