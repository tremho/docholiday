/** @module test-classes 
 * @description
 * #### test-classes (Module)
 * This module checks the rendering of comments found in classes
 * 
 *
*/

 /**
  * This is a base class test
  *     @property {string} name='' - 
  *     @property {string} type='' - 
  * 
  * @public
  * @class
  * 
  */
 class BaseExample {
   /**
    * Displays the values of the object
    * 
    * @public
    */
   display() { 
   }

 }

 /**
  * Another base class, but it inherits from BaseExample
  *     @property {number} price=0 - 
  *     @property {string} unit='dollars' - 
  * 
  * @public
  * @class
  * @extends BaseExample
  * 
  */
 class PricedExample extends BaseExample{
   /**
    * Displays the values and price of the object
    * 
    * @public
    */
   display() { 
   }

 }

 /**
  * We declare a thing without a price
  *     @property {string} name='Kepler' - 
  *     @property {string} type='Dog' - 
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
  *     @property {string} name='Jove' - 
  *     @property {string} type='Framework' - 
  *     @property {number} price=49.95 - 
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
  *     @property {string} work - name of the work
  *     @property {string} work - place of the work
  *     @property {string} optional - other stuff, optional
  * 
  * @public
  * @class
  * 
  */
 class Construction {
   /**
    * creates a Construction instance
    * 
    * @param {string} [name]
    * @param {string} [place]
    * @public
    */
   constructor(name, place) { 
   }

   /**
    * Plans the construction
    * 
    * @public
    */
   plan() { 
   }

   /**
    * generates the next milestone
    * 
    * @public
    */
   * milestone() { 
   }

   /**
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
    * @public
    */
   finish(timeSpent, timeEstimated, notes) { 
       return ''
   }

   /**
    * A method documented in classic JSDoc style.
    * But we'll let the param types and return be generated
    * 
    * @param {number} a
    *         a number we pass in
    * 
    * @return {Promise<unknown>} 
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
    * @param {string} device
    * @param {PrinterOrientation} orientation
    * @param {number} pages
    * 
    * @return {boolean} 
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
    * @param {string} device
    * 
    * @return {boolean} 
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
    * Local function to print Example.
    * 
    * @param {string} foo
    *         device if not default
    * 
    * @return {boolean} 
    * @public
    */
   exmpleLocal(foo) { 
       return true
   }

   /**
    * implementation of primt
    * 
    * @param {string} device
    * @param {PrinterOrientation} orientation
    * @param {number} pages
    * 
    * @return {boolean} implementation of save
    * @public
    */
   print(device, orientation, pages) { 
       return true
   }

   /**
    * implementation of save
    * 
    * @param {string} device
    * 
    * @return {boolean} 
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
    * we have a method
    * 
    * 
    * @return {string} 
    * @public
    */
   dubious() { 
       return ''
   }

 }

 /**
  * Test of having an inner class
  * @property {class} Container.Insider - this class is a public property of Container
  * @property {string} Insider.Container.property - a name property
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

 /**
  * define a class on one line
  *     @property {number} one - 
  *     @property {number} two - 
  * 
  * @public
  * @class
  * 
  */
 class OneLine {
 }

 /**
  * used in mix-in example from MDN
  * 
  * @public
  * @class
  * @extends Base
  * @mixin
  * 
  */
 class calculatorMixin extends Base{
   /**
    * @public
    */
   calc() { 
   }

 }

 /**
  * used in mix-in example from MDN
  * 
  * @public
  * @class
  * @extends Base
  * @mixin
  * 
  */
 class randomizerMixin extends Base{
   /**
    * @public
    */
   randomize() { 
   }

 }

 /**
  * used in mix-in example from MDN
  * 
  * @public
  * @class
  * 
  */
 class Foo {
 }

 /**
  *    @mixes calculatorMixin
  *    @mixes randomizerMixin
  * This is the [mix-in example from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#mix-ins)
  * 
  * @public
  * @class
  * @extends Foo
  * 
  */
 class MixInExample extends Foo{
 }

