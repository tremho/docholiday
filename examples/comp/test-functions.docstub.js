/** @module test-functions */ /**
  * this is as plain as it gets
  * a simple JS function
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * 
  * @private
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
  */
 function separatedJane(a, b, c) { 
     return ''
 }

 /**
  * assigned function
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * 
  * @private
  */
 function assJane(a, b, c) { 
 }

 /**
  * separated assigned function, split
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * 
  * @private
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
  * @private
  */
 function janeArrow(foo, bar) { 
     return ''
 }

 /**
  * a generator function
  * 
  * 
  * @private
  */
 function indexGenerator() { 
 }

 /**
  * a typescript generator function
  * 
  * 
  * @return {Generator<number>} generates numbers
  * 
  * @private
  */
 function indexGeneratorTS() { 
 }

 /**
  * a typescript example
  * 
  * @param {string} a
  * @param {number} b
  * @param {boolean} c
  * 
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
  */
 function fetch(url) { 
 }

