//import
import React from 'react'
import { NavLink } from 'react-router-dom'

//const arrow functional component
const Menu = (props) => {
    return (
        <nav className="menu">
            <div className="container">
           <div id="logo">
               <NavLink to={`/`}>Portfolio</NavLink>
            </div>
               <ul className="menu-right">
                    <li>
                    <NavLink to={`/`}>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to={`/about`}>About</NavLink>
                    </li>
                    <li>
                    <NavLink to={`/resume`}>Resume</NavLink>
                    </li>
                    <li>
                    <NavLink to={`/projects`}>Projects</NavLink>
                    </li>
                    <li>
                    <NavLink to={`/contact`}>Contact</NavLink>
                    </li>
               </ul>
            </div>
        </nav>
    )
}

export default Menu