/** @module test-propcomments 
 * @description
 * #### test-propcomments (Module)
 * Test forms of property comments
 * 
 *
*/

 /**
  * used to define a complex type
  *     @property {string} name - name of person
  *     @property {number} age - age of person
  *     @property {string} office - which office
  *     @property {number} value - which value
  * 
  * @public
  * @class
  * 
  */
 class TopComments {
 }

 /**
  * used to define a complex type, side-commented version
  *     @property {string} name - name of person
  *     @property {number} age - age of person
  *     @property {string} office - which office
  *     @property {number} value - which value
  * 
  * @public
  * @class
  * 
  */
 class SideComments {
 }

 /**
  * If we have both top and side comments, the side comments win out.
  *     @property {string} name - name of person
  *     to be named
  *     @property {number} age - age of person
  *     @property {string} office - which office
  *     by name
  *     @property {number} value - which value
  * 
  * @public
  * @class
  * 
  */
 class TopAndSide {
 }

 /**
  * @typedef {object} Complex
  * @description used to define a complex type
  *     @property {string} name - name of person
  *     @property {number} age - age of person
  *     @property {string} office - which office
  *     @property {number} value - which value
  */

 /**
  * @typedef {object} Complex2
  * @description used to define a complex type, side-commented version
  *     @property {string} name - name of person
  *     @property {number} age - age of person
  *     @property {string} office - which office
  *     @property {string} value - which value
  */

