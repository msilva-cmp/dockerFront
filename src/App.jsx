import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import test from './test.jsx'

function App() {
  //HOOKS
  const [count, setCount] = useState(5)
  const test1 = test()
  return (
    <>
      <h1>HOLA MUNDILLO</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
      </div>
      {test1}
    </>
  )
}

export default App
