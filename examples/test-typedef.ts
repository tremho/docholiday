/*
Test forms of type definitions
 */

// use to create pointless aliases
export type str = string

// used to define multi-type aliases
export type NumberLike = string|number

// used to define acceptable string values
export type Office = "Seattle" | "Los Angeles" | "New York" | "London" | "Paris"

// used to define acceptable number values
export type ValueSet = 0 | 1 | 2 | 4 | 8 | 12 | 16

// used to define a complex type
export type Complex = {
    name:string, // name of person
    age: NumberLike, // age of person
    office:Office, // which office
    value: ValueSet // which value
}

// lat, lon as object props
export type LocObj = {lat:number, lon:number}

// lon, lat as a  2-element array, in that order
export type LLTuple = [lon:number, lat:number]


// used for intersection example
interface Hunter {
    hunt(speed: number): number;
}
// used for intersection example
interface Gatherer {
    gather(speed: number): number;
}

// assign intersection type definition to alias interface combo
export type HunterGatherer = Hunter & Gatherer;

// function typedef (callback)
export type MyFunction = (str:string, num:number) => boolean

/**
 * A commented version of a callback definition.
 * The return type must be a single line comment in this case
 */
export type CommentedCB = (
    str:string, // a comment about str
    num:number  // a comment about num
) => boolean // comment that we return true or false