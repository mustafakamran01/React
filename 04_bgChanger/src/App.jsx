import { useState } from 'react'

// import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  return (

    <div className='w-full h-screen' style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-5 inset-x-0 px-2'
      >
        <div className='flex flex-wrap bg-white rounded-4xl gap-3 px-2 py-2 justify-center'
        >
          <button onClick={ () => setColor("red")}
          className='outline-none bg-red-500 text-white rounded-full px-5 py-2'
          >Red</button>

          <button onClick={ () => setColor("green")}
          className='outline-none text-white bg-green-600 rounded-full px-4 py-2'
          >Green</button>

          <button onClick={ () => setColor("blue")}
          className='outline-none bg-blue-600 text-white rounded-full px-5 py-2'
          >Blue</button>

          <button onClick={ () => setColor("pink")}
          className='outline-none bg-pink-500 text-white rounded-full px-5 py-2'
          >Pink</button>

          <button onClick={ () => setColor("purple")}
          className='outline-none bg-purple-700 text-white rounded-full px-4 py-2'
          >Purple</button>

          <button onClick={ () => setColor("gray")}
          className='outline-none bg-gray-600 text-white rounded-full px-4 py-2'
          >Gray</button>

          <button onClick={ () => setColor("black")}
          className='outline-none bg-black text-white rounded-full px-4 py-2'
          >Black</button>

        </div>

      </div>
      
    </div>
  )
}

export default App
