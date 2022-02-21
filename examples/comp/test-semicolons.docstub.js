/** @module test-semicolons 
 * @description
 * #### test-semicolons (Module)
 * Checks syntax that includes semicolons
 * 
 *
*/

 /**
  * this is as plain as it gets
  * a simple JS function
  * marked as public so it will appear in output
  * @public
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * @public
  */
 function plainJaneSC(a, b, c) { 
 }

 /**
  * This is the same as plainJane, but
  * in this case we are exporting it from the module
  * and using a JSDoc form comment block
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * @public
  */
 function publicJaneSC(a, b, c) { 
 }

 /**
  * All keywords are separated
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * @public
  */
 function separatedJaneSC(a, b, c) { 
 }

 /**
  * assigned classic function
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
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
  * @public
  */
 function sassJaneSC(a, b, c) { 
 }

 /**
  * an arrow function
  * 
  * @param {string} foo
  * @param {number} bar
  * 
  * @return {string} returns a value
  * @public
  */
 function janeArrowSC(foo, bar) { 
     return ''
 }

 /**
  * an anonymous function
  * 
  * @param {*} a
  * @param {*} b
  * @param {*} c
  * @public
  */
 function anonymousSC(a, b, c) { 
 }

 /**
  * a generator function
  * @yields {number} each call to next() returns the successive number
  * 
  * @public
  */
 function* indexGeneratorSC() { 
 }

 /**
  * a typescript generator function
  * 
  * 
  * @return {Generator<number>} generates numbers
  * @yields {number}
  * @public
  */
 function* indexGeneratorTSSC() { 
 }

 /**
  * a typescript example
  * 
  * @param {string} a
  * @param {number} b
  * @param {boolean} c
  * @public
  */
 function typescriptSC(a, b, c) { 
 }

 /**
  * separated typescript, including separated semicolon
  * 
  * @param {string} a
  *         the a parameter
  * @param {number} b
  *         the b parameter
  * @param {boolean} c
  *         the c parameter
  * 
  * @return {string} A value is returned
  * @public
  */
 function splitscriptSC(a, b, c) { 
     return ''
 }

 /**
  * example of an async function
  * 
  * @param {string} url
  *         The url to fetch
  * 
  * @return {Promise<string>} the body of the return
  * @async
  * @public
  */
 function fetchSC(url) { 
 }

 /**
  * void functions do not document a return type
  * 
  * @public
  */
 function simpleVoidSC() { 
 }

 /**
  * typescript void functions do not document a return type
  * 
  * @public
  */
 function simpleVoidTSSC() { 
 }

 /**
  * typescript with documented void return
  * 
  * 
  * @return {void} a void return
  * @public
  */
 function docVoidSC() { 
 }

 /**
  * javascript post-dec comments also documented as return type
  * 
  * 
  * @return {void} nothing to see here
  * @public
  */
 function jsVoidSC() { 
 }

 /**
  * @member {string} oneLineFoo
  * Two variables are declared on the same line, separated by semicolons
  * @default 'one line foo'
  * 
  * @private
  */
     var oneLineFoo = 'one line foo'
                                                    /**
                                                     * @member {string} oneLineBar
                                                     * @default 'one line bar'
                                                     * 
                                                     * @private
                                                     */
                                                        var oneLineBar = 'one line bar'
 /**
  * This is a base class test
  *     @property {string} name='' - 
  *     @property {string} type='' - 
  * 
  * @public
  * @class
  * 
  */
 class BaseExampleSC {
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
  * @extends BaseExampleSC
  * 
  */
 class PricedExampleSC extends BaseExampleSC{
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
  * @extends BaseExampleSC
  * 
  */
 class Thing1SC extends BaseExampleSC{
 }

 /**
  * We declare a thing with a price
  *     @property {string} name='Jove' - 
  *     @property {string} type='Framework' - 
  *     @property {number} price=49.95 - 
  * 
  * @public
  * @class
  * @extends PricedExampleSC
  * 
  */
 class Thing2SC extends PricedExampleSC{
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
 class ConstructionSC {
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
    * A method documented in classic JSDoc style.  *
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
     var PrinterOrientationSC = {
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
 class PrintActionSC {
   /**
    * @param {string} device
    * @param {PrinterOrientationSC} orientation
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
 class SaveActionSC {
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
  * @implements PrintActionSC
  * @implements SaveActionSC
  * 
  */
 class PrintExampleSC {
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
    * @param {PrinterOrientationSC} orientation
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
 class AssigmentClassSC {
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
  * @property {class} ContainerSC.InsiderSC - this class is a public property of Container
  * @property {string} InsiderSC.ContainerSC.name - a name property
  * @property {method} InsiderSC.ContainerSC.foobar - Everyone needs a foobar function
  * @property {method} InsiderSC.ContainerSC.constructor - construct an Insider with `new Container.Insider()`
  * 
  * 
  * @public
  * @class
  * 
  */
 class ContainerSC {
 }

 /**
  * Explore class properties
  *     @property {string} name='no type provided' - 
  *     @property {number} value=10 - no type provided here either
  *     @property {string} commented='no type provided' - but I have a comment about it
  *     @property {string} unassigned - 
  *     @property {number} novalue - also unassigned
  *     @property {any} anything - unassigned any
  *     @property {string} justMe - undeclared and unassigned
  *     @property {string} noComment - undeclared and unassigned
  *     @property {string} Label='Foobar' - (`static`) 
  * @property {class} PropExplorerSC.InnerClass - 
  * @property {method} InnerClass.PropExplorerSC.constructor - a chance to comment the inner constructor
  * @property {method} InnerClass.PropExplorerSC.hello - say hi
  * @property {method} InnerClass.PropExplorerSC.getNumber - (`static`) (`async`) (`returns {Promise<number>} resolves to the magic value`)  <br/>  fetch a number
  * 
  * 
  * @public
  * @class
  * 
  */
 class PropExplorerSC {
 }

