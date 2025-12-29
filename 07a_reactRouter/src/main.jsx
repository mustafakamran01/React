import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'
import Github from './component/Github/Github.jsx'
import Mustafa, { githubInfoLoaderMust } from './component/Github/Mustafa.jsx'
import Hitesh, { githubInfoLoaderHit } from './component/Github/Hitesh.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} > 
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} >
        <Route loader={githubInfoLoaderMust} path='mustafa' element={<Mustafa />} />
        <Route loader={githubInfoLoaderHit} path='hitesh' element={<Hitesh />} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

// Creating routes for each element
