import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'


// function App() {

//   // Getting all the variables to whose states needs to be change in UI
//   const [password, setPassword] = useState("")
//   const [length, setLength] = useState(8)
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [numberAllowed, setNumberAllowed] = useState(false)

//   // Generating random password
//   const generatePassword = useCallback( () => {
//     let pass =""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     if (charAllowed) str += "`~!@#$%^&*()-_=+}]{[|;:'/?.>,<"
//     if (numberAllowed) str += "1234567890"

//     for (let i = 1; i <= length; i++) {
//       let randomChar = Math.floor(Math.random() * str.length)
//       pass += str.charAt(randomChar)
//     }

//     setPassword(pass)

//   }, [length, charAllowed, numberAllowed, setPassword])

//   // Re-render the program whenever there is any change in given dependencies
//   useEffect( () => {
//     generatePassword()
//   }, [length, charAllowed, numberAllowed, setPassword])

//   // Storing the reference of input box
//   const passwordRef = useRef(null)

//   // Copying password to clipboard
//   const copyToClipboard = () => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 100)
//     window.navigator.clipboard.writeText(password)
//   }

//   return(
//     <div className="max-w-xl mx-auto p-9 bg-white rounded-2xl shadow-lg justify-center inset-x-0">
//       <h3 className="text-2xl font-semibold mb-4 text-black">Password Generator</h3>
//       <div className="flex items-center gap-1">
        
//         <input
//         type="text"
//         value={password}
//         placeholder='password'
//         readOnly
//         ref={passwordRef}
//         className="flex-1 px-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-100 text-black"
//         />

//         <button
//         onClick={copyToClipboard}
//         className="px-4 py-2 rounded-md shadow-sm border hover:brightness-95 active:scale-95 transition"
//         title="Copy to clipboard"
//         >Copy</button>
        
//       </div>

//       <div className="mt-4 text-rose-500">

//         <label className="block text-sm font-medium mb-1 cursor-pointer">LENGTH : {length}</label>
//         <input
//         type="range"
//         min={1}
//         max={100}
//         value={length}
//         onChange={ (e) => setLength(e.target.value)}
//         className="w-full"/>

//       </div>

//       <div className="mt-4 flex items-center gap-6">

//         <label className="inline-flex items-center gap-2 text-stone-900">
//         <input
//         type="checkbox"
//         onChange={ () => setCharAllowed( (prev) => !prev)}
//         className="w-4 h-4"/>
//         <span>Character</span>
//         </label>

//         <label className="inline-flex items-center gap-2 text-stone-900">
//         <input
//         type="checkbox"
//         onChange={ () => setNumberAllowed( (prev) => !prev)}
//         className="w-4 h-4"/>
//         <span>Number</span>
//         </label>

//       </div>

//     </div>
//   )
// }

function App() {

  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false)

  const generatePassword = useCallback( () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""

    if (charAllowed) str += "`~!@#$%^&*()"
    if (numberAllowed) str += "1234567890"

    for (let i = 1; i <= length; i++) {
      let randomChar = Math.floor(Math.random() * str.length)
      pass += str.charAt(randomChar)
    }

    setPassword(pass)

  }, [length, charAllowed, numberAllowed, setPassword])

  useEffect( () => {
    generatePassword();
  }, [length, charAllowed, numberAllowed, setPassword])

  return(
    <div className="max-w-xl mx-auto p-9 bg-white rounded-2xl shadow-lg justify-center inset-x-0">
      <h3 className="text-2xl font-semibold mb-4 text-black">Password Generator</h3>
      <div className="flex items-center gap-1">
        
        <input
        type="text"
        placeholder='password'
        readOnly
        value={password}
        className="flex-1 px-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-100 text-black"
        />

        <button
        className="px-4 py-2 rounded-md shadow-sm border hover:brightness-95 active:scale-95 transition"
        title="Copy to Clipboard"
        >Copy</button>
        
      </div>

      <div className="mt-4 text-rose-500">

        <label title='Password Length' className="block text-sm font-medium mb-1 cursor-pointer">LENGTH : {length}</label>
        <input
        type="range"
        min={1}
        max={100}
        value={length}
        onChange={ (e) => setLength(e.target.value)}
        className="w-full"/>

      </div>

      <div className="mt-4 flex items-center gap-6">

        <label className="inline-flex items-center gap-2 text-stone-900">
        <input
        type="checkbox"
        onChange={ () => setCharAllowed( (prev) => !prev)}
        className="w-4 h-4"/>
        <span>Character</span>
        </label>

        <label className="inline-flex items-center gap-2 text-stone-900">
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
