import './App.css'
import CatFact from "./CatFact.jsx";
import doge from '/doge.jpg'
import cat from '/cat.jpeg'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={doge} className="logo" alt="doge logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={cat} className="logo react" alt="cat logo" />
        </a>
      </div>
      <h1 style={{color:'black'}}>Doge + Cat</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p style={{color:'black'}}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs" style={{ color: '006A71' }}>
        <CatFact/>
      </p>
    </>
  )
}


export default App
