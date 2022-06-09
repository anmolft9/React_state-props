import "./App.css";
import { Form } from "./Form";
import { List } from "./List";
import { useState } from "react";

function App() {
  const [arr, setArr] = useState([]);

  const getTheData = (value) => {
    setArr([...arr, value]);
  };

  return (
    <div className="App">
      <Form getTheData={getTheData} />
      <hr />
      <List sendData={arr} />
    </div>
  );
}

export default App;
