import React from "react";

function Form({values, update, submit}){

  const onChange = (event) => {
    const valueToUse = (event.target.type === "checkbox") ? event.target.checked : event.target.value;
    update(event.target.name, valueToUse);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>UserName
        <input onChange={onChange} value={values.username} type="text" name="username"/>
      </label>
      <label>Email
      <input onChange={onChange} value={values.email} type="email" name="email"/>
      </label>
      <label>Password
      <input onChange={onChange} value={values.password} type="text" name="password"/>
      </label>
      <label>Do you agree to the terms?
      <input onChange={onChange} checked={values.terms} type="checkbox" name="terms"/>
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Form;
