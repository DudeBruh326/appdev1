import { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import './App.css'

function MyButton({ count, onClick }) {
  return (
	<button onClick={onClick}>
  	Clicked {count} times
	</button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
	setCount(count + 1);
  }

  return (
	<div>
  	<h1>Counters that update together</h1>
  	<MyButton count={count} onClick={handleClick} />
  	<MyButton count={count} onClick={handleClick} />
	</div>
  );
}


export default App
>>>>>>> a9e246a929b1aa9f179a305dc0b7d639ed7668fe
