import React from "react";
import { useState } from "react";

export const Form = ({ getTheData }) => {
  const [string, setString] = useState("");

  const onChange = (e) => {
    const { value } = e.target; //destructuring
    setString(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getTheData(string);
  };

  return (
    <div>
      <h1>user form</h1>
      <form action="" onSubmit={handleOnSubmit}>
        <p>
          <input onChange={onChange} type="text" />
        </p>
        <p>
          <button type="submit">Add user</button>
        </p>
      </form>
    </div>
  );
};
