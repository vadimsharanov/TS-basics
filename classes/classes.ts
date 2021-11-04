class Something {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  protected someMethod() {}
}

const someWhere = new Something(3, 3);

class Another extends Something {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }
  someMethod() {}
}
const someWhereWhere = new Another(1, 1, 1);
someWhereWhere;

class StaticSomething {
  static c = "sddd";

  static test() {
    console.log("Hello");
  }
}

const d = StaticSomething.c;
const v = StaticSomething.test;
v();

abstract class Yoyoyoy {
  myMethod() {}
}

class Vvovovovo extends Yoyoyoy {}

interface C {
  test: () => number;
}

class Ddddd implements C {
  test() {
    return 23;
  }
}
