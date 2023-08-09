import React from 'react'
import '../css/Comp.css'
import FastfoodIcon from '@material-ui/icons/Fastfood';


const Navbar = () => {
  return (
    <div className="nav">
        <div className="left">
            <FastfoodIcon id="logo"/>
            <h4>Haridwar Wala</h4>
        </div>
        <div className="right">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Restoro</a></li>
                <li><a href="/">Bar</a></li>
                <li><a href="/">Cousine</a></li>
                <li><a href="/">Specials</a></li>
            </ul>
        </div>
        <div className="login">
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar
