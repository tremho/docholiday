// /**
//  * A function with jsdoc style comments
//  *
//  * @param {string} a the parameter named 'a'
//  * @param b - the answer to everything
//  *            <nonzero, positive, integer>
//  *
//  *
//  */
// export function plainJane(a,b = 42):void {
//     // return 3.1415927
// }
//
// /**
//  * Structure of a Menu Item
//  */
// export class MenuItem {
//     public label:string = '' // The displayed label for the item
//     public id:string = '' // The identifier of the item
//     public role?:string  // parsed and used for adopting common desktop behaviors (per Electron)
//     public type?:string  // undefined for normal, or one of "submenu", "separator", "checkbox", or "radio"
//     public targetCode?:string  //  used to apply to different platforms
//     /** true if menu listing should be shown as disabled; no action */
//     public disabled?:boolean
//     /** true if box or radio type is in checked state */
//     public checked?:boolean
//     /** sublabel (set by modifier, no effect on mac) */
//     public sublabel?:string
//     /** tooltip (set by modifier, mac only) */
//     public tooltip?:string
//     /** icon path (set by modifier) */
//     public icon?:string
//     /** width and height of icon as an array (1 or 2 elements) */
//     public iconSize?:number[]
//     /** accelerator to apply */
//     public accelerator?:string
//     /** found only in incoming submenus in parsing and setup */
//     public children?: MenuItem[]
// }

/**
 * Structure of an Indicator Item
 * Also common to ToolItem
 */
export class IndicatorItem {
    /** Identifier */
    public id:string = ''
    /** optional label, appears over icon
     * <minLength=8, maxLength=20>
     * <startsWith="Foo">
     */
    public label?:string
    /** current state.  will be echoed to data-state markup property also. */
    public state:string = ''
    /** optional css classname to apply to container */
    public className?:string
    /** optional name of implementation object to be made by factory */
    public type?:string
    /** optional tooltip string appears on hover (desktop only) */
    public tooltip?:string
    /** a map with states as keys to icon strings */
    public icons?: {}
}

// -------------





