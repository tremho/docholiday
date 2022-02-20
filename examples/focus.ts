/* Figuring out weird signatures */


import {ParameterInfo, ReturnInfo, ScopeModifiers, SourceInfo, SpecificationStatus} from "../src/types";

export function ontostart() {}
// ##DH-OFF

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

// ##DH-ON
export function backon() {}


