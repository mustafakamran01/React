import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserProvider } from './Contexts/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserProvider>
      <Login />
      <Profile />
    </UserProvider>
  )
}

export default App
