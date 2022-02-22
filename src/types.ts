/*
Type and Class structures of Doc-Holiday
 */

import {TypeConstraint} from "./TypeCheck";

/**
 * Details about the scope of an entity
 */
export class ScopeModifiers {
    public static?:boolean;
    public public?:boolean;
    public private?:boolean;
    public optional?:boolean;
    public const?:boolean;
    public async?:boolean;
    public generator?:boolean;
}

/**
 * Information of where in the source file this entity exists
 */
export class SourceInfo {
    public decStart:number = -1;    // source position where declaration begins
    public decEnd: number = -1;     // source position where declaration ends
    public comStart: number = -1;   // source position where associated comment begins
    public comEnd: number = -1;     // source position where associated comment ends
}

/**
 * Information about a function within the source
 */
export class FunctionInfo extends SourceInfo {
    public name:string = '';                                // Name of the function
    public scope:ScopeModifiers = new ScopeModifiers()      // The scope modifiers of the function
    public description:string;                              // the comment description of this function
    public params: ParameterInfo[] = []                     // array of the function parameters
    public return?: ReturnInfo;                             // return information of this function
    public bodyStart: number = -1;                          // source position where body of function starts
    public bodyEnd:number = -1;                             // source position where body of function ends
    public status:SpecificationStatus = SpecificationStatus.None; // status of the parse
    public error?:string; // if defined, holds error detail. status will hold the coded value.
}

/**
 * Information about a class within the source
 */
export class ClassInfo extends SourceInfo {
    public name:string = '';                                // name of this class
    public isInterface:boolean                              // true if this is an interface rather than a class
    public isMixin:boolean                                  // true if this is a mixin rather than an interface or class
    public extends:string = '';                             // name of class this class extends, if any
    public scope:ScopeModifiers = new ScopeModifiers()      // the scope modifiers for this class
    public implements: string[] = []                        // names of interfaces this class implements
    public mixins: string[] = []                            // names of mixins this class mixes
    public description:string = ''                          // comment description of this class
    public internals:APIInfo = new APIInfo()                // contains all the inner entities belonging to this class
    public bodyStart: number = -1;                          // source position of class body start
    public bodyEnd:number = -1;                             // source position of class body end
    public status:SpecificationStatus = SpecificationStatus.None; // status of the parse
    public error?:string; // if defined, holds error detail
}

/**
 * Information about a non-function property within a source file or within a class
 */
export class PropertyInfo extends SourceInfo {
    public name:string = "";                                // name of this property
    public type:string = "";                                // type of property
    public scope:ScopeModifiers = new ScopeModifiers()      // scope modifiers of the property
    public description:string = ''                          // comment dsescription of property
    public assignStart:number = -1                          // source position where assignment to value begins
    public default:string = ''                              // the default value assigned to this property
    public constraintMap: Map<string, TypeConstraint> = new Map<string, TypeConstraint>() // any constraints assigned to this property
}

/**
 * Information about an enum
 */
export class EnumInfo extends SourceInfo {
    public name:string                                     // name of this Enum
    public scope:ScopeModifiers = new ScopeModifiers()     // scope modifiers of this Enum
    public description:string = ''                         // comment description
    public values:EnumValueInfo[] = []                     // details on each enumerated value
    public bodyStart: number = -1;                         // source position body start
    public bodyEnd:number = -1;                            // source position body end
}

/**
 * Information about a single enum value
 */
export class EnumValueInfo {
    public name:string                                      // name of enum value
    public type:string                                      // type of enum value
    public value:string|number                              // the value of this enum
    public description:string                               // comment description of this enum value
}

export enum TypedefForm {
    Primitive,                                          // describes an alias to one or more primitive types
    Object,                                             // describes a typedef to an object
    Array,                                              // describes a typedef to an array
    Function,                                           // a typedef function (aka Callback)
}

export class TypedefInfo extends SourceInfo {
    public name:string                                      // Name of this typedef
    public form:TypedefForm                                 // Form of this typedef
    public type:string                                      // Type assigned to this typedef
    public description:string = ''                          // comment description
    public declaration:FunctionInfo|ClassInfo               // for object or function types, the declared structure
    public constraintMap: Map<string, TypeConstraint> = new Map<string, TypeConstraint>() // any constraints applied
    public bodyStart: number = -1;                          // source position of body start
    public bodyEnd:number = -1;                             // source position of body end
}

/**
 * Top-level collection of all functions, classes, and properties
 */
export class APIInfo {
    public functions: FunctionInfo[] = []
    public classes: ClassInfo[] = []
    public properties: PropertyInfo[] = []
    public enums: EnumInfo[] = []
    public typedefs:TypedefInfo[] = []
}

/**
 * Parse error status for parameter constraints
 */
export enum SpecificationStatus {
    None ="",   // not analyzed
    Okay ="Okay",   // documented and reconciled
    BadConstraint = "BadConstraint", // syntax error processing constraint declaration

    // NoDoc = "NoDoc", // function not documented in JSDoc format (no longer used)

    Mismatch = "Mismatch", // JSDoc does not match typescript declaration

    // these two are not needed and can be assumed by the absence of the associated properties
    // and other status may also be in effect.
    // NoConstraint = "NoConstraint", // Constraints have not been declared for this (but a description has)
    // NoDescription = "NoDescription" // no description or constraints have been provided
}

/**
 * Information about a parameter
 */
export class ParameterInfo {
    public type:string = ''                                 // type of parameter
    public constraintMap: Map<string, TypeConstraint> = new Map<string, TypeConstraint>() // any constraints applied to parameter value
    public ordinal: number;                                 // which parameter in series is this one?
    public name:string;                                     // name of the parameter
    public description:string;                              // comment description of parameter
    public optional: boolean;                               // true if this is an optional parameter
    public default:string = ''                              // defined if there is a default value assigned
    public status: SpecificationStatus = SpecificationStatus.None; // parse status
    public error:string; // if defined, holds error detail. status is probably MISMATCH.
}

/**
 * Information about a return value
 */
export class ReturnInfo {
    public type:string = ''                 // Type being returned
    public description:string;              // comment description of return value
    public constraintMap: Map<string, TypeConstraint> = new Map<string, TypeConstraint>()  // any constraints applied to return value
    public status: SpecificationStatus = SpecificationStatus.None; // parse status
}

/**
 * Callback for source reader.
 * Calls back with FunctionInfo and associated text for each function in source
 */
export type FICallback = (fi:FunctionInfo, text?:string) => void


/**
 * Callback for source reader.
 * Calls back with PropertyInfo and associated text for each property in source
 */
export type PICallback = (pi:PropertyInfo, text?:string) => void


/**
 * Callback for source reader.
 * Calls back with EnumInfo and associated text for each enum in source
 */
export type EICallback = (ei:EnumInfo, text?:string) => void

/**
 * Callback for source reader.
 * Calls back with TypedefInfo and associated text for each type definition in source
 */
export type TICallback = (ti:TypedefInfo, text?:string) => void

/**
 * Callback for source reader.
 * Calls back with ClassInfo and associated text for each class in source
 */
export type CICallback = (ci:ClassInfo, text?:string) => void


