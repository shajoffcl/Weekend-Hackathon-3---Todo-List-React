import React from "react";
import "./../styles/App.css";

function ToDoList(props) {
  return (
    <>
      <h1>{props.item}</h1>
    </>
  );
}

export default ToDoList;
