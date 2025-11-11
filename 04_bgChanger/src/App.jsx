import { useState } from 'react'

// import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen"
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-5 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-none bg-white px-3 py-2 rounded-3xl'>

          <button onClick={ () => setColor("red")}
          className='outline-none px-6 py-2 rounded-full text-white bg-red-500'
          >Red</button>

          <button onClick={ () => setColor("green")}
          className='outline-none px-5 py-2 rounded-full text-white bg-green-600'
          >Green</button>

          <button onClick={ () => setColor("blue")}
          className='outline-none px-6 py-2 rounded-full bg-blue-600 text-white'
          >Blue</button>

          <button onClick={ () => setColor("pink")}
          className='outline-none px-6 py-2 rounded-full bg-pink-400 text-white'
          >Pink</button>

          <button onClick={ () => setColor("yellow")}
          className='outline-none px-5 py-2 bg-yellow-400 text-white rounded-full'
          >Yellow</button>
          
        </div>

      </div>

    </div>
  )
}

export default App
