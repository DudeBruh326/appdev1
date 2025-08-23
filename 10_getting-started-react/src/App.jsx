import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>About Me</h1>
      <h2>Name: Samuel Eli Miguel T. Pintado</h2>
      <p><strong>Course & Year:</strong> BS Computer Science, 3rd Year</p>
      <p><strong>Fun Fact:</strong> I am good at drawing</p>
      
      <h3>Why I Want to Learn React</h3>
      <p>
        I want to learn React so that I can learn new things
      </p>
    </div>
  )
}

export default App
