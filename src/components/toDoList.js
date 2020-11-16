import React from "react";
import "./../styles/App.css";

function ToDoList(props) {
  const { itemName, handleDelete } = props;
  return (
    <>
      {itemName}
      <button onClick={() => handleDelete(itemName)}>Delete</button>
    </>
  );
}

export default ToDoList;
