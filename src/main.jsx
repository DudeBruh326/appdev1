import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "./app/store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
=======

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
>>>>>>> d1394555a18fd4805ce357ccc815f5bfe3c5469e
  </StrictMode>,
)
