/** @module test-returns */

/**
 * void - implicit
 * 
 * 
 */
function one() { 
}

 /**
  * void - explicit
  * 
  * 
  */
 function two() { 
 }

 /**
  * type
  * 
  * 
  * @return {string} 
  * 
  */
 function three() { 
     return ''
 }

 /**
  * Promise
  * 
  * 
  * @return {Promise<string>} 
  * 
  */
 function four() { 
 }

 /**
  * ad-hoc type
  * 
  * 
  * @return {{foo:string, bar:number}}
  * 
  */
 function five() { 
 }

 /**
  * void - implicit w/comment
  * 
  * @return {void} implicity returns void
  */
 function six() { 
 }

 /**
  * void - explicit  w/comment
  *
  * @return {void} explicity returns void
  */
 function seven() { 
 }

 /**
  * type  w/comment
  * 
  * 
  * @return {string} returns a string
  * 
  */
 function eight() { 
     return ''
 }

 /**
  * Promise
  * 
  * 
  * @return {Promise<string>} returns a string promise
  * 
  */
 function nine() { 
 }

 /**
  * ad-hoc type
  * 
  * 
  * @return {{foo:string, bar:number}}
  * 
  */
 function ten() { 
 }

 /**
  * Throws
  *
  * @throws {Fit} if she gets scared
  */
 function eleven() { 
 }

