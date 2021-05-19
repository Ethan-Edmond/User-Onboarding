import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  border-radius: 5%;
  padding: 1.5%;
  background: white;
  margin: 10px 10px 0 10px;
  display: flex;
  flex-direction: column;
  border: 3px outset #f1f1ff;
  @media (max-width: 600px){
    width: 95%;
    margin: 2.5%;
    border-radius: 10px;
  }
`;

const FormField = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 5px 0;
`;

const FieldLabel = styled.label`
  margin-right: 10px;
`;

const FieldInput = styled.input`
  border-radius: 4px;
  border: 1px solid #e7e7f5;
`;

const SubmitButton = styled.button`
  background-color: #f1f1ff;
  border: 3px outset #f9f9ff;
  border-radius: 5px;
  margin: 0 auto;
  &:active {
    background: #e7e7f5;
    border: 3px inset #f6f6ff;
  }
  &:disabled {
    background: #f9f9f9;
    border: 3px inset #f9f9ff;
  }
`;

function Form({values, errors, disabled, update, submit}){
  const [submitDown, setSubmitDown] = useState(false);

  const onChange = (event) => {
    const valueToUse = (event.target.type === "checkbox") ? event.target.checked : event.target.value;
    update(event.target.name, valueToUse);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormField>
        <FieldLabel htmlFor="username">{
          errors.username.length ?
            (<span style={{color: "red"}}>{errors.username}</span>) :
            "Username"
        }</FieldLabel>
        <FieldInput onChange={onChange} value={values.username} type="text" name="username"/>
      </FormField>
      <FormField>
        <FieldLabel htmlFor="email">{
          errors.email.length ?
            (<span style={{color: "red"}}>{errors.email}</span>) :
            "Email"
        }
        </FieldLabel>
        <FieldInput onChange={onChange} value={values.email} type="text" name="email"/>
      </FormField>
      <FormField>
        <FieldLabel htmlFor="password">{
          errors.password.length ?
            (<span style={{color: "red"}}>{errors.password}</span>) :
            "Password"
        }
        </FieldLabel>
        <FieldInput onChange={onChange} value={values.password} type="text" name="password"/>
      </FormField>
      <FormField>
        <FieldLabel htmlFor="terms">{
          errors.terms.length ?
            (<span style={{color: "red"}}>{errors.terms}</span>) :
            "Do you agree to the terms?"
        }</FieldLabel>
        <input onChange={onChange} checked={values.terms} type="checkbox" name="terms"/>
      </FormField>
      <SubmitButton disabled={disabled}>Submit</SubmitButton>
    </FormContainer>
  );
}

export default Form;
