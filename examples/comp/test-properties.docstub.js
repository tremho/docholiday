/** @module test-properties */

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
  * @member {string} aSideVar
  * side commented var
  * 
  * @public
  */
     var aSideVar
 /**
  * @member {string} aSideLet
  * side commented let
  * 
  * @public
  */
     var aSideLet
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
  * will only document the last in the series
  * 
  * @public
  */
     var baz
 /**
  * @member {string} huzzah
  * side-commented multi, same thing
  * 
  * @public
  */
     var huzzah
 /**
  * @member {number} a
  * undeclared, assignment to a number
  * 
  * @public
  */
     var a
 /**
  * @member {string} typed
  * declared as string in typescript
  * 
  * @public
  */
     var typed
 /**
  * @member {string} assigned
  * declared and assigned
  * 
  * @public
  */
     var assigned
 /**
  * @member {string} one
  * top-commented multi assignment
  * will only document the first in the series
  * 
  * @public
  */
     var one
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
  * an abjet
  * @default { foo: 1, bar: 2 }
  * 
  * @public
  */
     var myObject = { foo: 1, bar: 2 }
 /**
  * @constant {string} another
  * another object
  * 
  * @public
  */
     var another
 /**
  * @constant {string} published
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
  * @name  MultipleDeclarations
  * 
  * @public
  */
     var m
