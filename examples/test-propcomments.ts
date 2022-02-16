/*
Test forms of property comments
 */

// used to define a complex type
export class TopComments {
    // name of person
    name:string
    // age of person
    age: number
    // which office
    office:string
    // which value
    value: number
}

// used to define a complex type, side-commented version
export class SideComments {
    name:string; // name of person
    age: number; // age of person
    office:string; // which office
    value: number; // which value
}

/*
If we have both top and side comments, the side comments win out.
 */
export class TopAndSide {
    // this is the
    name:string; // name of person
                 // to be named

    // age is the
    age: number; // age of person

    // Specific strings for office
    office:string; // which office
                   // by name

    // which value
    value: number;

}

// used to define a complex type
export type Complex = {
    // name of person
    name:string,
    // age of person
    age: number,
    // which office
    office:string,
    // which value
    value: number
}

// used to define a complex type, side-commented version
export type Complex2 = {
    name:string, // name of person
    age: number, // age of person
    office:string, // which office
    value: number // which value
}
