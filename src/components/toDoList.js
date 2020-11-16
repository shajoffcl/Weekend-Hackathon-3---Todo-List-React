import React from "react";
import "./../styles/App.css";

function ToDoList(props) {
  const {
    id,
    itemName,
    handleDelete,
    handleEditChange,
    editText,
    handleSave
  } = props;
  const [display, setDisplay] = React.useState(false);
  const handleEdit = () => {
    setDisplay(true);
  };
  return (
    <>
      <li className="list">{itemName}</li>
      <div>
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={() => handleDelete(itemName)}>
          Delete
        </button>
      </div>
      {display ? (
        <div>
          <input
            type="text"
            className="editTask"
            onChange={(event) => handleEditChange(event)}
            value={editText}
            placeholder="Edit task"
          />
          <button className="saveTask" onClick={() => handleSave(id)}>
            Save
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ToDoList;
