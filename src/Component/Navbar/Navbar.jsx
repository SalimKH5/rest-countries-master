import React from 'react'
import './Navbar.css'
import DarkMode from "./dark_mode.svg"
import { Link } from 'react-router-dom'

function Navbar({containerApp}) {

    function change_theme(){
        containerApp.current.classList.toggle('light-theme')
    }
return (
    <nav className="navbar-wrapper">
        <div className="navbar-container">
            <div className="navbar-left">
                <Link to="/">Where in the wolrd?</Link>
            </div>
            <div className="navbar-right" onClick={change_theme}>
            <span className="material-symbols-outlined" >
                dark_mode
            </span>
                <p>
                Dark Mode</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar