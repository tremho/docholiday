/** @module test-returns */

 /**
  * implicit void return should not document return type with no comment
  * 
  * 
  * @public
  */
 function one() { 
 }

 /**
  * explicit void return should not document return type with no comment
  * 
  * 
  * @public
  */
 function two() { 
 }

 /**
  * implicit void return should document return type with a comment
  * 
  * 
  * @return {void} // commented version
  * 
  * @public
  */
 function oneComment() { 
 }

 /**
  * explicit void return should document return type with a comment
  * 
  * 
  * @return {void} commented version
  * 
  * @public
  */
 function twoComment() { 
 }

 /**
  * typed return should show return type
  * 
  * 
  * @return {string} 
  * 
  * @public
  */
 function three() { 
     return ''
 }

 /**
  * Promise return should be represented properly
  * 
  * 
  * @return {Promise<string>} 
  * 
  * @public
  */
 function four() { 
 }

 /**
  * An Ad-Hoc return type should document the object detail
  * 
  * 
  * @return {object} 
  * 
  *   Object detail:
  *     { foo:string, bar:number }
  * 
  * @public
  */
 function five() { 
 }

 /**
  * type  w/comment
  * 
  * 
  * @return {string} returns a string
  * 
  * @public
  */
 function eight() { 
     return ''
 }

 /**
  * Promise w/comment
  * 
  * 
  * @return {Promise<string>} returns a string promise
  * 
  * @public
  */
 function nine() { 
 }

 /**
  * ad-hoc type w/comment
  * 
  * 
  * @return {object} returns ad-hoc
  * 
  *   Object detail:
  *     { foo:string, bar:number }
  * 
  * @public
  */
 function ten() { 
 }

 /**
  * a crazy ad-hoc return function
  * 
  * 
  * @return {object} 
  * 
  *   Object detail:
  *     {
  *         foo:string,
  *         crazy:{
  *             fool:number,
  *             train:string
  *         },
  *         bar:number
  *     }
  * 
  * @public
  */
 function tenHoc() { 
 }

 /**
  * Test of the throws tag
  * @throws {Fit} if she gets scared
  * 
  * 
  * @public
  */
 function eleven() { 
 }

