// const user = { name: 'Denis', age: 42, js: true };
// type User = typeof user;
// type UserKeys = keyof User;
type Method = (a: number, b: number) => number;

// satisfies сохранит удобство первой реализации
// https://www.freecodecamp.org/news/typescript-satisfies-operator/
/* 
type Keys = "personID" | "personName" | "personEmail" | "personAge" | "personPhone";

const person = {
  personID: 12345,
  personName: "Jacky",
  personEmail: "jacky@testing.com",
  personAge: 22,
} satisfies Partial<Record<Keys, string | number>>;
*/
export const methods = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '**': (a, b) => a ** b,
} satisfies Record<string, Method>;