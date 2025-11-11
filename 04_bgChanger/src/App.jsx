import { useState } from 'react'

// import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen"
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-5 py-2 rounded-full text-white bg-red-500'
          >Red</button>
          <button className='outline-none px-5 py-2 rounded-full text-white bg-green-600'
          >Green</button>
          <button></button>
        </div>
      </div>
    </div>
  )
}

export default App
