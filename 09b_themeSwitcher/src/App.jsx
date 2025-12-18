import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-amber-800 text-3xl text-white p-5'>React with context API</h2>
    </>
  )
}

export default App
