/** @module test-classes */

 /**
  * This is a base class test
  *     @property {string} name - 
  *     @property {string} type - 
  * 
  * @public
  * @class
  * 
  */
 class BaseExample {
   /**
    * display
    * Displays the values of the object
    * 
    * 
    * @public
    */
   display() { 
   }

 }

 /**
  * Another base class, but it inherits from BaseExample
  *     @property {number} price - 
  *     @property {string} unit - 
  * 
  * @public
  * @class
  * @extends BaseExample
  * 
  */
 class PricedExample extends BaseExample{
   /**
    * display
    * Displays the values and price of the object
    * 
    * 
    * @public
    */
   display() { 
   }

 }

 /**
  * We declare a thing without a price
  *     @property {string} name - 
  * @property {ti.type} Thing1. - 
  * 
  * @public
  * @class
  * @extends BaseExample
  * 
  */
 class Thing1 extends BaseExample{
 }

 /**
  * We declare a thing with a price
  *     @property {string} name - 
  * @property {ti.type} Thing2. - 
  * 
  * @public
  * @class
  * @extends PricedExample
  * 
  */
 class Thing2 extends PricedExample{
 }

 /**
  * We declare a working class
  *     @property {string} [name] - name of the work
  *     @property {string} [place] - place of the work
  *     @property {any} [other] - other stuff, optional
  * 
  * @public
  * @class
  * 
  */
 class Construction {
   /**
    * Constructor for Construction
    * creates a Construction instance
    * 
    * @param {string} [name]
    * @param {string} [place]
    * 
    * @public
    */
   constructor(name, place) { 
   }

   /**
    * plan
    * Plans the construction
    * 
    * 
    * @public
    */
   plan() { 
   }

   /**
    * * milestone
    * generates the next milestone
    * 
    * 
    * @public
    */
   * milestone() { 
   }

   /**
    * finish
    * complete building
    * 
    * @param {number} timeSpent
    *         hours of actual work
    * @param {number} timeEstimated
    *         hours estimated at start
    * @param {string} notes
    *         notes about the work
    * 
    * @return {string} returns a report
    * 
    * @public
    */
   finish(timeSpent, timeEstimated, notes) { 
       return ''
   }

   /**
    * jsdocStyleFunction
    * A method documented in classic JSDoc style.  *
    * But we'll let the param types and return be generated
    * 
    * @param {number} a
    *         a number we pass in
    * 
    * @return {Promise<unknown>} 
    * 
    * @public
    */
   jsdocStyleFunction(a) { 
   }

 }

 /**
  * 
  * @enum
  * @readonly
  */
     var PrinterOrientation = {
         /** 
         *  <b><i>(value = 0)</i></b>
         *  @type {number}
         */
         Portrait,
         /** 
         *  <b><i>(value = 1)</i></b>
         *  @type {number}
         */
         Landscape
 }

 /**
  * 
  * @private
  * @interface
  * 
  */
 class PrintAction {
   /**
    * print
    * @param {string} device
    * @param {PrinterOrientation} orientation
    * @param {number} pages
    * 
    * @return {boolean} 
    * 
    * @public
    */
   print(device, orientation, pages) { 
       return true
   }

 }

 /**
  * 
  * @private
  * @interface
  * 
  */
 class SaveAction {
   /**
    * save
    * @param {string} device
    * 
    * @return {boolean} An example of implemented interfaces
export class PrintExample implements PrintAction, SaveAction
    * 
    * @public
    */
   save(device) { 
       return true
   }

 }

 /**
  * An example of implemented interfaces
  * 
  * @public
  * @class
  * @implements PrintAction
  * @implements SaveAction
  * 
  */
 class PrintExample {
   /**
    * exmpleLocal
    * Local function to print Example.
    * 
    * @param {string} foo
    *         device if not default
    * 
    * @return {boolean} 
    * 
    * @public
    */
   exmpleLocal(foo) { 
       return true
   }

   /**
    * print
    * implementation of primt
    * 
    * @param {string} device
    * @param {PrinterOrientation} orientation
    * @param {number} pages
    * 
    * @return {boolean} 
    * 
    * @public
    */
   print(device, orientation, pages) { 
       return true
   }

   /**
    * save
    * implementation of save
    * 
    * @param {string} device
    * 
    * @return {boolean} 
    * 
    * @public
    */
   save(device) { 
       return true
   }

 }

 /**
  * Test of an assignment class
  * 
  * @public
  * @class
  * 
  */
 class AssigmentClass {
   /**
    * dubious
    * we have a method
    * 
    * 
    * @return {string} 
    * 
    * @public
    */
   dubious() { 
       return ''
   }

 }

 /**
  * Test of having an inner class
  * @property {class} Container.Insider - this class is a public property of Container
  * @property {string} Insider.Container.name - a name property
  * @property {method} Insider.Container.foobar - Everyone needs a foobar function
  * @property {method} Insider.Container.constructor - construct an Insider with `new Container.Insider()`
  * 
  * 
  * @public
  * @class
  * 
  */
 class Container {
 }

