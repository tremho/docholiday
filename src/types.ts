
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
}

/**
 * Information of where in the source file this entity exists
 */
export class SourceInfo {
    public decStart:number = -1;
    public decEnd: number = -1;
    public comStart: number = -1;
    public comEnd: number = -1;
}

/**
 * Information about a function within the source
 */
export class FunctionInfo extends SourceInfo {
    public name:string = '';
    public scope:ScopeModifiers = new ScopeModifiers()
    public description:string;
    public params: ParameterInfo[] = []
    public return?: ReturnInfo;
    public bodyStart: number = -1;
    public bodyEnd:number = -1;
    public status:SpecificationStatus = SpecificationStatus.None;
    public error?:string; // if defined, holds error detail. status is probably MISMATCH.
}

/**
 * Information about a class within the source
 */
export class ClassInfo extends SourceInfo {
    public name:string = '';
    public isInterface:boolean
    public extends:string = '';
    public scope:ScopeModifiers = new ScopeModifiers()
    public implements: string[] = []
    public mixins: string[] = []
    public description:string = ''
    public internals:APIInfo = new APIInfo()
    public bodyStart: number = -1;
    public bodyEnd:number = -1;
    public status:SpecificationStatus = SpecificationStatus.None;
    public error?:string; // if defined, holds error detail
}

/**
 * Information about a non-function property within a source file or within a class
 */
export class PropertyInfo extends SourceInfo {
    public name:string = "";
    public type:string = "";
    public scope:ScopeModifiers = new ScopeModifiers()
    public description:string = ''
    public assignStart:number = -1
    public default:string = ''
    public constraintMap: Map<string, TypeConstraint> = new Map<string, TypeConstraint>()
}

/**
 * Information about an enum
 */
export class EnumInfo extends SourceInfo {
    public name:string
    public scope:ScopeModifiers = new ScopeModifiers()
    public description:string = ''
    public values:EnumValueInfo[] = []
    public bodyStart: number = -1;
    public bodyEnd:number = -1;
}

/**
 * Information about a single enum value
 */
export class EnumValueInfo {
    public name:string
    public type:string
    public value:string|number
    public description:string
}

export enum TypedefForm {
    Primitive,
    Object,
    Function,
}

export class TypedefInfo extends SourceInfo {
    public name:string
    public form:TypedefForm
    public type:string
    public description:string = ''
    public declaration:FunctionInfo|ClassInfo
    public constraintMap: Map<string, TypeConstraint> = new Map<string, TypeConstraint>()
    public bodyStart: number = -1;
    public bodyEnd:number = -1;
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
    NoDoc = "NoDoc", // function not documented in JSDoc format
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
    public type:string = ''
    public constraintMap: Map<string, TypeConstraint> = new Map<string, TypeConstraint>()
    public ordinal: number;
    public name:string;
    public description:string;
    public optional: boolean;
    public default:string = ''
    public status: SpecificationStatus = SpecificationStatus.None;
    public error:string; // if defined, holds error detail. status is probably MISMATCH.
}

/**
 * Information about a return value
 */
export class ReturnInfo {
    public type:string = ''
    public description:string;
    public constraintMap: Map<string, TypeConstraint> = new Map<string, TypeConstraint>()
    public status: SpecificationStatus = SpecificationStatus.None;
}

/**
 * Callback for source reader.
 * Calls back with FunctionInfo and associated text for each function in source
 */
export interface FICallback {
    (fi:FunctionInfo, text?:string):void
}

/**
 * Callback for source reader.
 * Calls back with PropertyInfo and associated text for each property in source
 */
export interface PICallback {
    (pi:PropertyInfo, text?:string):void
}

/**
 * Callback for source reader.
 * Calls back with EnumInfo and associated text for each enum in source
 */
export interface EICallback {
    (ei:EnumInfo, text?:string):void
}

/**
 * Callback for source reader.
 * Calls back with TypedefInfo and associated text for each type definition in source
 */
export interface TICallback {
    (ti:TypedefInfo, text?:string): void
}

/**
 * Callback for source reader.
 * Calls back with ClassInfo and associated text for each class in source
 */
export interface CICallback {
    (ci:ClassInfo, text?:string):void
}

