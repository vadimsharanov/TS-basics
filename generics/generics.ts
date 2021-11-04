function logTime<T>(num: T): T {
  console.log(new Date());
  return num;
}
console.log(logTime<string>("asd"));

function logTime2<T>(num: T): T {
  if (typeof num === "string") {
    num.toLocaleUpperCase;
  }
  return num;
}

interface MyInterface {
  transform: <T, F>(a: T) => F;
}

class MyClass<T> {
  value: T;
}

const newMyClass = new MyClass<number>();

interface TimeStamp {
  stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
  console.log(num.stamp);
  return num;
}
