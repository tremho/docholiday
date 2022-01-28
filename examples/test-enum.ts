// Working with enum

// Constants for direction
// Explicit start
enum Direction {
    Up = 1,     // vertical ascend
    Down,  // vertical descend
    Left,  // westward if facing north
    Right, // eastward if facing north
}

// Implicit values
enum Direction2 {
    Up,
    Down,
    Left,
    Right,
}

// String values
enum Direction3 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// String values = key
// should not repeat value in description
enum Direction4 {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
}

enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES"
}

// including an optional const modifier
const enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
}

// Explicit after implicit
enum Jumper {
    Zero,
    One,
    Two,
    OneHundred = 100,
    OneOhOne,
    OneOhTwo
}

// Explicit non sequential
enum Scattered {
    Foo = 456,
    Bar=  123,
    Fubar = 42,
}

// Bug case: No comma on last element
enum BugCase1 {
    Foo = 456,
    Bar=  123,
    Fubar = 42
}

// Bug case explore: No comma on last element, comments
enum BugCase1b {
    Foo = 456, // this is foo
    Bar=  123, // this is bar
    Fubar = 42 // this is fubar
}

// Bug case explore: No comma on last element, string
enum BugCase1c {
    Foo = "Foo",
    Bar=  "Bar",
    Fubar = "Fubar"
}