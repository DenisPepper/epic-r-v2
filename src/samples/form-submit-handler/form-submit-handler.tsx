import './form-submit-handler.css';

export function FormSubmitHandler() {
  function submitHandler(data: FormData) {
    console.log(Object.fromEntries(data));
  }

  return (
    <form action={submitHandler} className='form-submit-handler'>
      <h2>Form Submit Handler</h2>
      <label>
        First Name
        <input type='text' name='firstName' />
      </label>
      <label>
        Second Name
        <input type='text' name='secondName' />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}
