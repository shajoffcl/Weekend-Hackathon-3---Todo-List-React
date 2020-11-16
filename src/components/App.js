import React from "react";
import "./../styles/App.css";
import ToDoList from "./toDoList";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [itemList, setItemList] = React.useState([]);

  const handleChange = (event) => {
    let input = event.target.value;
    setInputText(input);
  };

  const handleClick = () => {
    if (!inputText) {
      return;
    }
    let arr = [...itemList];
    arr.push(inputText);
    setItemList(arr);
    setInputText("");
  };

  // const handleDelete = (name) => {
  //   //console.log(name);
  //   let arr = [...itemList];
  //   //console.log(arr);
  //   let filterArr = arr.filter((item) => item !== name);
  //   // console.log(filterArr);
  //   setItemList(filterArr);
  // };

  return (
    <div id="main">
      <input type="text" id="task" onChange={handleChange} value={inputText} />
      <button id="btn" onClick={handleClick}>
        Add
      </button>
      <ul>
        {itemList.map((item, index) => (
          <ToDoList key={item + index} itemName={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
