import React, { useCallback, useEffect, useRef, useState } from 'react'

function PasswordGenerator() {

    const [password, setPassword] = useState('')
    const [length, setLength] = useState(10)
    const [charAllowed, setCharAllowed] = useState(false)
    const [numberAllowed, setNumberAllowed] = useState(false)

    const generatePassword = useCallback( () => {
        let str = "qwertyASDFGH"
        let pass = ""

        if (charAllowed) str += "!@#$%^&*()_+"
        if (numberAllowed) str += "1234567890"

        for (let i = 0; i < length; i++) {
            let randomChar = Math.floor(Math.random() * str.length)
            pass += str.charAt(randomChar)
        }
        setPassword(pass)
    }, [length, charAllowed, numberAllowed])

    useEffect( () => {
        generatePassword()
    }, [length, charAllowed, numberAllowed, setPassword])

    const passwordRef = useRef()

    const copyToClipboard = () => {
        window.navigator.clipboard.writeText(password)
        passwordRef.current?.select()
    }

    return (
    <div className="max-w-xl mx-auto p-9 bg-blue-700 rounded-2xl shadow-lg justify-center inset-x-0">
      <h3 className="text-2xl font-semibold mb-6 text-neutral-100">PASSWORD GENERATOR</h3>
      <div className="flex items-center gap-1">
        
        <input
        type="text"
        placeholder='password'
        readOnly
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ref={passwordRef}
        className="flex-1 px-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-100 text-black"
        />

        <button
        className="px-4 py-2 rounded-md shadow-sm hover:brightness-95 active:scale-95 transition bg-white cursor-pointer hover:bg-red-600 hover:text-white"
        title="Copy to clipboard"
        onClick={copyToClipboard}
        >Copy</button>
        
      </div>

      <div className="mt-4 text-white">

        <label className="block text-sm font-medium mb-1 cursor-pointer">LENGTH : {length}</label>
        <input
        type="range"
        min={1}
        max={100}
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="w-full"/>

      </div>

      <div className="mt-4 flex items-center gap-6">

        <label className="inline-flex items-center gap-2 text-white">
        <input
        type="checkbox"
        value={charAllowed}
        onChange={(e) => setCharAllowed(prev => !prev)}
        className="w-4 h-4"/>
        <span>Character</span>
        </label>

        <label className="inline-flex items-center gap-2 text-white">
        <input
        type="checkbox"
        value={numberAllowed}
        onChange={(e) => setNumberAllowed(prev => !prev)}
        className="w-4 h-4"/>
        <span>Number</span>
        </label>

      </div>

    </div>
  )
}

export default PasswordGenerator

// Creating passwordGenerator component

