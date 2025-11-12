import { useState } from 'react'

// import './App.css'

function App() {

  const [color, setColor] = useState("olive")


  return (

    <div className='w-full h-screen' style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2'
      >
        <div className='flex flex-wrap bg-white gap-3 justify-center rounded-4xl px-3 py-2'
        >
          <button onClick={ () => setColor("red")}
          className='outline-none bg-red-500 text-white rounded-full px-6 py-2'
          >Red</button>

          <button onClick={ () => setColor("green")}
          className='outline-none bg-green-600 text-white rounded-full px-4 py-2'
          >Green</button>

          <button onClick={ () => setColor("blue")}
          className='outline-none bg-blue-600 text-white rounded-full px-5 py-2'
          >Blue</button>

          <button onClick={ () => setColor("pink")}
          className='outline-none bg-pink-500 text-white rounded-full px-5 py-2'
          >Pink</button>

          <button onClick={ () => setColor("gray")}
          className='outline-none bg-gray-500 text-white rounded-full px-5 py-2'
          >Gray</button>

          <button onClick={ () => setColor("black")}
          className='outline-none bg-black text-white rounded-full px-5 py-2'
          >Black</button>

          <button onClick={ () => setColor("purple")}
          className='outline-none bg-purple-600 text-white rounded-full px-4 py-2'
          >Purple</button>

        </div>

      </div>

    </div>
  )
}

export default App
