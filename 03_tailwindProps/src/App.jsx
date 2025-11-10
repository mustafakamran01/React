import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  let myObj = {
    email: "k@apple.com"
  }

  let myArr = [1, 2, 3, 4, 5]

  return (
  <>
    <h1 className='bg-green-400 text-black p-4 rounded-3xl mb-4'>Tailwind test</h1>
    <Card userName = "Mustafa"/>
    <Card userName = "Kamran"/>
    {/* <Card name = "Mustafa Kamran" obj = {myObj} arr = {myArr}/> */}
  </>
  /* This is how we can transfer props(properties) from one component to another */
  )
}

export default App
