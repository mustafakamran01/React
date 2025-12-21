
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'

function App() { 

  const [theme, setTheme] = useState("light")

  const themeMode = () => {
    if (themeMode == "light") {
      themeMode = "dark"
    } else {
      themeMode = "light"
    }
  }

  // Actual way of changing theme in HTML

  useEffect( () => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    
    <ThemeProvider value={{theme, themeMode}}>                                                                                                                                                                                                                   
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
