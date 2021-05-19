import React, { useState } from "react";
import * as yup from "yup";
import './App.css';
import Form from "./components/Form";


const initFormValues = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

function App() {
  const [formValues, setFormValues] = useState(initFormValues);
  const [users, setUsers] = useState([]);

  const formUpdate = (name, value) => {
    setFormValues({...formValues, [name]: value});
  };

  const formSubmit = () => {
    setUsers([...users, {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }]);
    setFormValues(initFormValues);
  };

  return (
    <div className="App">
      <Form values={formValues} update={formUpdate} submit={formSubmit}/>
      {users.map(user => {
        return (
          <div className="user">
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
