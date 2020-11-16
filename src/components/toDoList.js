import React from "react";
import "./../styles/App.css";

function ToDoList(props) {
  const { itemName, handleDelete } = props;
  return (
    <>
      {itemName}
      <div>
        <button className="delete" onClick={() => handleDelete(itemName)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default ToDoList;
