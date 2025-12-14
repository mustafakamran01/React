import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // Actual change in theme

  useEffect( () => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
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

// function App() {

//   return (
//     <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
//       <button
//         onClick={() => {
//           document.documentElement.classList.toggle("dark")
//         }}
//         className="px-6 py-3 bg-blue-600 text-white rounded"
//       >
//         Toggle Dark
//       </button>

//       <p className="ml-6 text-black dark:text-white">
//         Dark Mode Text
//       </p>
//     </div>
//   )
// }

// export default App

 