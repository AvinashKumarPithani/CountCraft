import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React App</h1>
      <h2>Counter Value : </h2>
      <button>Add Value</button> {" "}
      <button>Remove Value</button>
      <p>footer: </p>
    </>
  )
}

export default App
