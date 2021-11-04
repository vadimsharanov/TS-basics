"use strict";
class Something {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    someMethod() { }
}
const someWhere = new Something(3, 3);
class Another extends Something {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    someMethod() { }
}
const someWhereWhere = new Another(1, 1, 1);
someWhereWhere;
class StaticSomething {
    static test() {
        console.log("Hello");
    }
}
StaticSomething.c = "sddd";
const d = StaticSomething.c;
const v = StaticSomething.test;
v();
class Yoyoyoy {
    myMethod() { }
}
class Vvovovovo extends Yoyoyoy {
}
class Ddddd {
    test() {
        return 23;
    }
}
