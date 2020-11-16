import React from "react";
import "./../styles/App.css";

function ToDoList(props) {
  const { itemName } = props;
  return (
    <>
      {itemName}
      {/* <div>
        <button className="delete">Delete</button>
      </div> */}
    </>
  );
}

export default ToDoList;
