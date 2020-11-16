import React from "react";
import "./../styles/App.css";

function App() {
  const [itemName, setItemName] = React.useState("");

  const handleChange = (event) => {
    let input = event.target.value;
    setItemName(input);
  };
  return (
    <div id="main">
      <input type="text" id="task" onChange={handleChange} value={itemName} />
      <button id="btn" onClick="handleClick">
        Add
      </button>
    </div>
  );
}

export default App;
