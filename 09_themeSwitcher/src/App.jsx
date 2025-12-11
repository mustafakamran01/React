import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-pink-600 text-white p-4 text-3xl'>Chai aur context API</h2>
    </>
  )
}

export default App
