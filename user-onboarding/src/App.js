import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import './App.css';
import Form from "./components/Form";
import schema from "./validation";

const initFormValues = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

const initFormErrors = {
  username: "",
  email: "",
  password: "",
  terms: ""
};

const AppContainer = styled.div`
  overflow: auto;
  display: flex;
  align-items: flex-start;
`;

const UserContainer = styled.div`
  width: 70%;
  margin: 0;
  padding: 0;
`;

const User = styled.div`
  background: white;
  margin: 10px 10px 10px 0;
  padding: 10px;
  overflow: auto;
  border-radius: 10px;
  border: 3px outset #f1f1ff;
`;

const UserH = styled.h3`
  margin: 0;
  font-weight: 400;
`;

const UserText = styled.p`
  margin: 0;
  font-weight: 500;
  color: #656570;
`;

function App() {
  const [formValues, setFormValues] = useState(initFormValues);
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState(initFormErrors);
  const [disabled, setDisabled] = useState(true);

  const formUpdate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then((res) => setFormErrors({...formErrors, [name]: ""}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors}));
    setFormValues({...formValues, [name]: value});
  };

  const formSubmit = () => {
    axios.post("https://reqres.in/api/users", {
      email: formValues.email.trim(),
      username: formValues.username.trim(),
      password: formValues.password,
      terms: formValues.terms
    })
      .then(res => setUsers([res.data, ...users]))
      .catch(err => console.log("ERR", err));
    setFormValues(initFormValues);
  };

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid));
  }, [formValues]);

  return (
    <AppContainer>
      <Form
        values={formValues}
        update={formUpdate}
        submit={formSubmit}
        errors={formErrors}
        disabled={disabled}
      />
      <UserContainer>
      {users.map(user => {
        return (
          <User key={user.id}>
            <UserH>User: {user.username}</UserH>
            <UserText>Email: {user.email}</UserText>
            <UserText>Password: {user.password}</UserText>
            <UserText>Term: {user.terms ? "Has agreed to the terms" : "Has not agreed to the terms"}</UserText>
          </User>
        );
      })}
      </UserContainer>
    </AppContainer>
  );
}

export default App;
