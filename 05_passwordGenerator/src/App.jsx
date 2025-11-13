import { use, useState } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false)

  const passwordGenerator = () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (charAllowed) str += "~`!@#$%^&*(){}[]?><="
    if (numberAllowed) str += "1234567890"

    for (let i = 1; i <= length; i++) {
      let randomChar = Math.floor(Math.random() * str.length)
      pass += str.charAt(randomChar)
    }

    setPassword(pass)
  }

  const lengthChange = () => {
    setLength(length)
    passwordGenerator()
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg justify-center inset-x-0">
      <h3 className="text-lg font-semibold mb-4">Input & Controls</h3>
      <div className="flex items-center gap-2">
        
        <input
        type="text"
        placeholder="Type or paste text here"
        value={password}
        className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-gray-700"
        />

        <button
        className="px-4 py-2 rounded-md shadow-sm border hover:brightness-95 active:scale-95 transition"
        title="Copy to clipboard"
        >Copy</button>
      </div>

      <div className="mt-4 text-gray-800">

        <label className="block text-sm font-medium mb-1">Length: {length}</label>
        <input
        type="range"
        min={1}
        max={100}
        onChange={lengthChange}
        className="w-full"/>

      </div>

      <div className="mt-4 flex items-center gap-6">

        <label className="inline-flex items-center gap-2 text-gray-800">
        <input
        type="checkbox"
        className="w-4 h-4"/>
        <span>Character</span>
        </label>

        <label className="inline-flex items-center gap-2 text-gray-800">
        <input
        type="checkbox"
        className="w-4 h-4"/>
        <span>Number</span>
        </label>

      </div>

    </div>   
  )
}

export default App
