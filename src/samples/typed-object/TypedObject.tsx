import './TypedObject.module.css';
import { methods } from './methods';

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
