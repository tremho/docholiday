/*
Working with enum
 */

// Constants for direction
enum Direction {
    Up = 1,     // vertical ascend
    Down,  // vertical descend
    Left,  // westward if facing north
    Right, // eastward if facing north
}

enum Direction2 {
    Up,
    Down,
    Left,
    Right,
}

enum Direction3 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
}