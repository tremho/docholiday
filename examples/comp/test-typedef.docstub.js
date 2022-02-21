/** @module test-typedef 
 * @description
 * #### test-typedef (Module)
 * Test forms of type definitions
 * 
 *
*/

 /**
  * @typedef {string} str
  * @description use to create pointless aliases
  * 
  */

 /**
  * @typedef {string|number} NumberLike
  * @description used to define multi-type aliases
  * 
  */

 /**
  * @typedef {"Seattle" | "Los Angeles" | "New York" | "London" | "Paris"} Office
  * @description used to define acceptable string values
  * 
  */

 /**
  * @typedef {0 | 1 | 2 | 4 | 8 | 12 | 16} ValueSet
  * @description used to define acceptable number values
  * 
  */

 /**
  * @typedef {object} Complex
  * @description used to define a complex type
  *     @property {string} name - name of person
  *     @property {NumberLike} age - age of person
  *     @property {Office} office - which office
  *     @property {string} value - which value
  */

 /**
  * @typedef {object} LocObj
  * @description lat, lon as object props
  *     @property {number} lat - 
  *     @property {number} lon - 
  */

 /**
  * @typedef {array} LLTuple
  * @description lon, lat as a  2-element array, in that order
  *     @property {number} lon - 
  *     @property {number} lat - 
  */

 /**
  * used for intersection example
  * 
  * @private
  * @interface
  * 
  */
 class Hunter {
   /**
    * @param {number} speed
    * 
    * @return {number} 
    * @public
    */
   hunt(speed) { 
       return 0
   }

 }

 /**
  * used for intersection example
  * 
  * @private
  * @interface
  * 
  */
 class Gatherer {
   /**
    * @param {number} speed
    * 
    * @return {number} 
    * @public
    */
   gather(speed) { 
       return 0
   }

 }

 /**
  * @typedef {class} HunterGatherer
  * @description assign intersection type definition to alias interface combo
  * 
  * @implements {Hunter}
  * @implements {Gatherer}
  */

 /**
  * @callback MyFunction
  * @description function typedef (callback)
  * @param {string} str
  * @param {number} num
  * 
  * @return {boolean} 
  */

 /**
  * @callback CommentedCB
  * @description A commented version of a callback definition.
  * The return type must be a single line comment in this case
  * @param {string} str
  *         a comment about str
  * @param {number} num
  *         a comment about num
  * 
  * @return {boolean} comment that we return true or false
  */

