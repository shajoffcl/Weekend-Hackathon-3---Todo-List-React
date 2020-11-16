import React from "react";
import "./../styles/App.css";
import ToDoList from "./toDoList";

function App() {
  const [itemName, setItemName] = React.useState("");
  const [itemList, setItemList] = React.useState([]);

  const handleChange = (event) => {
    let input = event.target.value;
    setItemName(input);
  };

  const handleClick = () => {
    let arr = [...itemList];
    arr.push(itemName);
    setItemList(arr);
  };
  return (
    <div id="main">
      <input type="text" id="task" onChange={handleChange} value={itemName} />
      <button id="btn" onClick={handleClick}>
        Add
      </button>
      <ul>
        {itemList.map((item, index) => (
          <li className="list">
            <ToDoList key={index} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
