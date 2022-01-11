/**
 * Make an estimate of how far we can chuck a thing
 * in a vacuum while standing on our head
 *
 * @param thing
 * @param distance
 */
export function spitball(thing:string, distance:number): number {
    return 0
}

/**
 * This function is not exported, and should only be documented if
 * _internal_ flag is given.
 */
function notExported(name:string) {

}

/**
 * This is a comment for the Basic class
 */
export class Basic {
    width:number // side comment for property
    height:number /// side comment for property form 2
    name:string //< side comment for property form 3
    /** on top comment */
    description: string
    /// another on-top comment
    folklore: string

    /**
     * Constructs a Basic object
     */
    constructor() {
        this.name = 'foobar'
    }
}

/**
 * This is a comment for the BirdType enum
 */
export enum BirdType {
    Crow,
    Raven,
    Starling,
    Goldfinchz, /// State bird
    Sparrow
}