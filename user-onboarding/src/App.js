import { useState } from "react";
import './App.css';
import Form from "./components/Form";


function App() {
  const [formValues, setFormValues] = useState(null);
  return (
    <>
      <Form values={formValues}/>
    </>
  );
}

export default App;
