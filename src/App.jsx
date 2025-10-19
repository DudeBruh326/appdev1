import { useState } from 'react'
import './App.css'

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}



function App() {
  

  return (
    <>
      <MyButton/>
    </>
  )
}

export default App