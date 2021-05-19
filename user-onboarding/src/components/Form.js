import React from "react";

function Form({values, errors, disabled, update, submit}){

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
      <label>{
        errors.username.length ?
          (<span style={{color: "red"}}>{errors.username}</span>) :
          "Username"
      }
        <input onChange={onChange} value={values.username} type="text" name="username"/>
      </label>
      <label>{
        errors.email.length ?
          (<span style={{color: "red"}}>{errors.email}</span>) :
          "Email"
      }
      <input onChange={onChange} value={values.email} type="text" name="email"/>
      </label>
      <label>{
        errors.password.length ?
          (<span style={{color: "red"}}>{errors.password}</span>) :
          "Password"
      }
      <input onChange={onChange} value={values.password} type="text" name="password"/>
      </label>
      <label>{
        errors.terms.length ?
          (<span style={{color: "red"}}>{errors.terms}</span>) :
          "Do you agree to the terms?"
      }
      <input onChange={onChange} checked={values.terms} type="checkbox" name="terms"/>
      </label>
      <button disabled={disabled}>Submit</button>
    </form>
  );
}

export default Form;
