
import {Fit} from "./foobar"

//  void - implicit
export function one()
{}
//  void - explicit
export function two():void
{}
//  type
export function three():string
{ return ''}
//  Promise
export function four():Promise<string>
{return Promise.resolve('')}
//  ad-hoc type
export function five(): { foo:string, bar:number }
{ return {foo:'fu', bar: 9}}
//  void - implicit w/comment
export function six() // implicity returns void
{}
//  void - explicit  w/comment
export function seven():void // explicitly returns void
{}
//  type  w/comment
export function eight():string // returns a string
{ return ''}
//  Promise
export function nine():Promise<string> // returns a string promise
{ return Promise.resolve('')}
//  ad-hoc type
export function ten(): { foo:string, bar:number } // returns ad-hoc
{ return {foo:'fu', bar: 9}}
//
//  Throws
// @throws {Fit} if she gets scared
export function eleven() {
    throw Fit
}
