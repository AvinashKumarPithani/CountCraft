import { useState } from "react";
import "./App.css";

function App() {

  const [counter, setCounter] = useState(26)
  // let counter = 26;

  const addValue = () => {
    setCounter(counter + 1)
  };
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Count Craft {counter}</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
