//import
import React from 'react'
import "./App.css"
import Menu from './component/menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Pnf from './component/Pnf'
import About from './component/About'
import Contact from './component/Contact'
import Projects from './component/Projects'
import Resume from './component/Resume'



//body  -> React functional component
function App(props) {
     return (
          <BrowserRouter>
               <Menu/>
             <Routes>
                    <Route path={`/`} element={<Home/>} />
                    <Route path={`/about`} element={<About/>} />
                    <Route path={`/contact`} element={<Contact/>} />
                    <Route path={`/projects`} element={<Projects/>} />
                    <Route path={`/resume`} element={<Resume/>} />
                    <Route path={`/*`} element={<Pnf/>} />
             </Routes>
          </BrowserRouter>
     )
}

//export
export default App