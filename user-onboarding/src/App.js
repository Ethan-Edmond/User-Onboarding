import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
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
    // post to api
    // add return to users
  };

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
      <Form
        values={formValues}
        update={formUpdate}
        submit={formSubmit}
        errors={formErrors}
        disabled={disabled}
      />
      {users.map(user => {
        return (
          <div className="user" key={user.id}>
            <h1>{user.username}</h1>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <p>{user.terms ? "Has agreed to the terms" : "Has not agreed to the terms"}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
