import React from "react";
import "./../styles/App.css";
import ToDoList from "./toDoList";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [itemList, setItemList] = React.useState([]);
  const [editText, setEditText] = React.useState("");

  const handleChange = (event) => {
    let input = event.target.value;
    setInputText(input);
  };

  const handleAdd = () => {
    if (!inputText) {
      return;
    }
    let arr = [...itemList];
    arr.push(inputText);
    setItemList(arr);
    setInputText("");
  };

  const handleEditChange = (event) => {
    let edit = event.target.value;
    setEditText(edit);
  };

  const handleSave = (id) => {
    if (!editText) {
      return;
    }
    let arr = [...itemList];
    arr[id] = editText;
    setItemList(arr);
    setEditText("");
  };

  const handleDelete = (name) => {
    let arr = [...itemList];
    let filterArr = arr.filter((item) => item !== name);
    setItemList(filterArr);
  };

  return (
    <div id="main">
      <input
        type="text"
        id="task"
        onChange={handleChange}
        value={inputText}
        placeholder="Enter task"
      />
      <button id="btn" onClick={handleAdd}>
        Add
      </button>
      <ul>
        {itemList.map((item, index) => (
          <ToDoList
            key={item + index}
            id={index}
            itemName={item}
            handleDelete={handleDelete}
            handleEditChange={handleEditChange}
            editText={editText}
            handleSave={handleSave}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
