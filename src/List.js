import React from "react";

export const List = ({ sendData }) => {
  return (
    <ul>
      {sendData.map((data) => {
        return <li>{data}</li>;
      })}
    </ul>
  );
};
