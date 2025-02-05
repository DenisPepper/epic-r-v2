import { FormSubmitHandler } from './samples/form-submit-handler/form-submit-handler';
import TypedObject from './samples/typed-object/TypedObject';

export default function App() {
  return (
    <main>
      <h1>Epic React v2</h1>
      <TypedObject a={2} b={3} method='**' />
      <FormSubmitHandler />
    </main>
  );
}
