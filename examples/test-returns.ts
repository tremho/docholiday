
import {Fit} from "./foobar"

//  implicit void return should not document return type with no comment
export function one()
{}
//  explicit void return should not document return type with no comment
export function two():void
{}

//  implicit void return should document return type with a comment
export function oneComment() // commented version
{}
//  explicit void return should document return type with a comment
export function twoComment():void // commented version
{}

// typed return should show return type
export function three():string
{ return ''}


//  Promise return should be represented properly
export function four():Promise<string>
{return Promise.resolve('')}

//  An Ad-Hoc return type should document the object detail
export function five(): { foo:string, bar:number }
{ return {foo:'fu', bar: 9}}

//  type  w/comment
export function eight():string // returns a string
{ return ''}

//  Promise w/comment
export function nine():Promise<string> // returns a string promise
{ return Promise.resolve('')}

//  ad-hoc type w/comment
export function ten(): { foo:string, bar:number } // returns ad-hoc
{ return {foo:'fu', bar: 9}}

// a crazy ad-hoc return function
export function tenHoc(): {
    foo:string,
    crazy:{
        fool:number,
        train:string
    },
    bar:number
}
{
    return {foo:'fu', crazy: {fool:1, train:'a'}, bar: 9}
}

//
//  Test of the throws tag
// @throws {Fit} if she gets scared
export function eleven() {
    throw Fit
}
