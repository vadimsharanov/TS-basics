// tsconfig line 81;
class Masina {
  readonly x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  protected a() {}
}

class D3Masina extends Masina {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }
  a(name?: string) {}
}

const honda = new D3Masina(1, 1, 1);

class StaticTest {
  static c = "sdsdds";
  static test() {}
}

const bla = StaticTest.test();

abstract class Test3 {
  myMethod() {}
}

class Test4 extends Test3 {}

interface C {
  test: () => number;
}

class D implements C {
  test() {
    return 3;
  }
}
