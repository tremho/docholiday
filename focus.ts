
// This is a constant value
const foobar = 'foobar'

// This value can be set by importing code
export let setting = ''

export let sidebar; // this is a side-commented property

export let nocomment;

// An all-typescript parsed function
export function spitball(
    thing:string,   // The thing we want to throw
    distance:number = 1 // How far we want to throw it
): number // How far it went
{
    return 0
}

// Similar, but not split
export function notsplit(foo:string, bar:string, baz= true):string {
    return ''

}

