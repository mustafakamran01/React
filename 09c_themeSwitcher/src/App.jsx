import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() { 

  const [theme, setTheme] = useState("light")

  const themeMode = () => {
    if (theme == "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  // Actual way of changing theme in HTML

  useEffect( () => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  }, [themeMode])

  return (
    
    <ThemeProvider value={{theme, themeMode}}>                                                                                                                                                                                                                   
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
