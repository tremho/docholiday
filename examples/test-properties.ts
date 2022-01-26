

// top commented var
export var aVar

// top commented let
export let aLet

// top commented const w/assignment
export const aConst = 0

export var aSideVar // side commented var
export let aSideLet // side commented let
export const aSideConst = 0 // side commented const w/assignemnt

// top commented multi-dec
// will only document the last in the series
export let foo, bor, baz

export let foobar, foobaz, huzzah // side-commented multi, same thing

export let a = 42 // undeclared, assignment to a number

export let typed:string // declared as string in typescript

export let assigned:string = 'a string' // declared and assigned

// top-commented multi assignment
// will only document the first in the series
export let one = 1, two = 2, three = 3

export const myArray = [1,2,3,4,5] // an array

export const myObject = { foo: 1, bar: 2 } // an abjet

// another object
export const another = {
    apples: "apples",
    oranges: "oranges",
    nested : {
        carrots: "carrots",
        celery : "celery"
    },
    blah: "blah"
}

// declared public
// @public
const published = true

// workaround for documenting
// a multiple declaration line
//
// `m = 1, n = 2, o = 3, p = 4`
//
// {{{jsdoc tag="name"}}} MultipleDeclarations
//
export let m = 1, n = 2, o = 3, p = 4







