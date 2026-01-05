import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
import Mustafa, { gitInfoLoaderMust } from './Components/Github/Mustafa.jsx'
import Shahnawaz, { githubLoaderShah } from './Components/Github/Shahnawaz.jsx'
import Mobashshir, { githubInfoLoaderMobi } from './Components/Github/Mobashshir.jsx'
import PasswordGenerator from './Components/PasswordGenerator/PasswordGenerator.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userID' element={<User />} />
      <Route path='github' element={<Github />}>
        <Route 
          path='mustafa' 
          loader={gitInfoLoaderMust} 
          element={<Mustafa />} />

        <Route 
        path='shahnawaz' 
        loader={githubLoaderShah} 
        element={<Shahnawaz />} /> 

        <Route 
        path='mobashshir' 
        loader={githubInfoLoaderMobi} 
        element={<Mobashshir />} />
      </Route>
      <Route path='password' element={<PasswordGenerator />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

// Creating routes and accumulating all components together