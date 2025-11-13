import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  // Getting all the variables to whose states needs to be change in UI
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false)

  // Generating random password
  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (charAllowed) str += "~`!@#$%^&*(){}[]?><="
    if (numberAllowed) str += "1234567890"

    for (let i = 1; i <= length; i++) {
      let randomChar = Math.floor(Math.random() * str.length)
      pass += str.charAt(randomChar)
    }

    setPassword(pass)

  }, [length, charAllowed, numberAllowed, setPassword])

  // Copying password to clipboard
  const copyToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5)
    window.navigator.clipboard.writeText(password)
  }

  // Storing the reference of input box
  const passwordRef = useRef(null)

  // Re-render the program whenever there is any change in given dependencies
  useEffect( () => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, setPassword])


  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg justify-center inset-x-0">
      <h3 className="text-lg font-semibold mb-4">Input & Controls</h3>
      <div className="flex items-center gap-2">
        
        <input
        type="text"
        value={password}
        placeholder='password'
        readOnly
        ref={passwordRef}
        className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-gray-700"
        />

        <button
        className="px-4 py-2 rounded-md shadow-sm border hover:brightness-95 active:scale-95 transition hover:text-red-500 hover:bg-white"
        onClick={copyToClipboard}
        title="Copy to clipboard"
        >Copy</button>
      </div>

      <div className="mt-4 text-gray-800">

        <label className="block text-sm font-medium mb-1 cursor-pointer">Length: {length}</label>
        <input
        type="range"
        min={1}
        max={100}
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="w-full"/>

      </div>

      <div className="mt-4 flex items-center gap-6">

        <label className="inline-flex items-center gap-2 text-gray-800">
        <input
        type="checkbox"
        onChange={ () => setCharAllowed( (prev) => !prev)}
        className="w-4 h-4"/>
        <span>Character</span>
        </label>

        <label className="inline-flex items-center gap-2 text-gray-800">
        <input
        type="checkbox"
        onChange={ () => setNumberAllowed( (prev) => !prev)}
        className="w-4 h-4"/>
        <span>Number</span>
        </label>

      </div>

    </div>   
  )
}

export default App
