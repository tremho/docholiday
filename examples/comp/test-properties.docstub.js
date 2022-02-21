/** @module test-properties 
 * @description
 * #### test-properties (Module)
 * Checking property declarations
 * both at module scope and in classes
 *
*/

 /**
  * @member {string} aVar
  * top commented var
  * 
  * @public
  */
     var aVar
 /**
  * @member {string} aLet
  * top commented let
  * 
  * @public
  */
     var aLet
 /**
  * @constant {number} aConst
  * top commented const w/assignment
  * @default 0
  * 
  * @public
  */
     var aConst = 0
 /**
  * @member {string} commented
  * side commented var
  * 
  * @public
  */
     var commented
 /**
  * @member {string} commented
  * side commented let
  * 
  * @public
  */
     var commented
 /**
  * @constant {number} aSideConst
  * side commented const w/assignemnt
  * @default 0
  * 
  * @public
  */
     var aSideConst = 0
 /**
  * @member {string} baz
  * top commented multi-dec
  * will only document the first in the series
  * 
  * @public
  */
     var baz
 /**
  * @member {string} thing
  * side-commented multi, same thing
  * 
  * @public
  */
     var thing
 /**
  * @member {number} a
  * undeclared, assignment to a number
  * @default 42
  * 
  * @public
  */
     var a = 42
 /**
  * @member {string} typescript
  * declared as string in typescript
  * 
  * @public
  */
     var typescript
 /**
  * @member {string} assigned
  * declared and assigned
  * @default 'a string'
  * 
  * @public
  */
     var assigned = 'a string'
 /**
  * @member {string} one
  * top-commented multi assignment
  * will only document the first in the series
  * @default 1, two = 2, three = 3
  * 
  * @public
  */
     var one = 1, two = 2, three = 3
 /**
  * @constant {string} myArray
  * an array
  * @default [1,2,3,4,5]
  * 
  * @public
  */
     var myArray = [1,2,3,4,5]
 /**
  * @constant {string} myObject
  * an abject
  * @default { foo: 1, bar: 2 }
  * 
  * @public
  */
     var myObject = { foo: 1, bar: 2 }
 /**
  * @constant {string} another
  * another object, more complex
  * 
  * @public
  */
     var another = ''
 /**
  * @constant {boolean} published
  * declared public
  * @public
  * @default true
  * 
  * @private
  */
     var published = true
 /**
  * @member {string} m
  * workaround for documenting
  * a multiple declaration line
  * 
  * `m = 1, n = 2, o = 3, p = 4`
  * 
  * 
  * @name  MultipleDeclarations
  * @default 1, n = 2, o = 3, p = 4
  * 
  * @public
  */
     var m = 1, n = 2, o = 3, p = 4
 /**
  * Explore class properties
  *     @property {string} name='no type provided' - 
  *     @property {number} value=10 - no type provided here either
  *     @property {string} commented='no type provided' - but I have a comment about it
  *     @property {string} unassigned - 
  *     @property {string} unassigned - also unassigned
  *     @property {string} any - unassigned any
  *     @property {string} unassigned - undeclared and unassigned
  *     @property {string} noComment - 
  *     @property {string} Label='Foobar' - (`static`) 
  * @property {class} PropExplorer.InnerClass - 
  * @property {method} InnerClass.PropExplorer.constructor - a chance to comment the inner constructor
  * @property {method} InnerClass.PropExplorer.hello - say hi
  * @property {method} InnerClass.PropExplorer.getNumber - (`static`) (`async`) (`returns {Promise<number>} resolves to the magic value`)  <br/>  fetch a number
  * 
  * 
  * @public
  * @class
  * 
  */
 class PropExplorer {
 }

