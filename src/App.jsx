import { useState } from 'react'
import './App.css'





function AdminPanel(){
  return (
    <h1>Admin Panel</h1>
  )
}

function LoginForm(){
  return (
    <h1>Login Form</h1>
  )
}


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>click</button>
      {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <LoginForm />
      )}

    </>
  )
}

export default App