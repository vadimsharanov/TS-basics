type Tipok = { x: number; y: number };
type P = keyof Tipok;

function myF() {
  return { a: 1 };
}

type MyFin = () => { a: number };

type K = ReturnType<MyFin>;

const masyvas = [
  {
    name: "Vasya,",
    age: 30,
  },
];

type Person = typeof masyvas[number];

type Age = typeof masyvas[number]["age"];

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Cat {
  test: number;
}

// type EmailMessageConte
