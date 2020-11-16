import React from "react";
import "./../styles/App.css";

function ToDoList(props) {
  const { itemName } = props;
  return (
    <>
      <li className="list">{itemName}</li>
      <div>
        <button className="delete">Delete</button>
      </div>
    </>
  );
}

export default ToDoList;
