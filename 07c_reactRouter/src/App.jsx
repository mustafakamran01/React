import './App.css'
import {Outlet} from 'react-router'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

// Creating layout to insert outlet    
