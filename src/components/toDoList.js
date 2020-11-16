import React from "react";
import "./../styles/App.css";

function ToDoList(props) {
  const { itemName, handleDelete } = props;
  return (
    <>
      <li className="list">{itemName}</li>
      <div>
        <button className="delete" onClick={() => handleDelete(itemName)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default ToDoList;
