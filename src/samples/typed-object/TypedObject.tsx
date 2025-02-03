import './TypedObject.module.css';

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

type TypedObjectProps = {
  a?: number;
  b?: number;
  method?: keyof typeof methods;
};

// Пример типизации props
export default function TypedObject(props: TypedObjectProps) {
  const { a = 0, b = 1, method = '+' } = props;

  return (
    <section>
      <h2>typed object</h2>
      <p>
        {a} {method} {b} = {methods[method](a, b)}
      </p>
    </section>
  );
}
