
import {FunctionInfo, ParameterInfo, ReturnInfo, SpecificationStatus} from "../src/types";
import * as TypeCheck from "../src/TypeCheck";

// before the class
function foobar() {

}

// we are starting our class
class Foobar {
    alone = 'solo' // side comment on one prop

    /**
     * Something about this function will make the parse fail,
     * but only if there is a quote mark in the comment block,
     * so is it that there can't be quotes in comments?
     */
    problemFunction() {
            // if we have a comment here, it can't have a quote mark
    }

    // a mid-point class prop
    public mProp:string = 'weird'

    // the function following
    public nextFunc() {

    }
}

// we are now out of the class again
function classLess() {

}