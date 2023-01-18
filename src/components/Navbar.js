import React from 'react'
import  logo from "../images/logo.svg"
import  {pageLinks} from '../data'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-center'>
        <div className='nav-header'>
        <img src={logo}  className="nav-logo" alt="backroads" />
        <button type='button' className='nav-toggle'> <i  className="fas fa-bars"></i></button>
        </div>
          <ul className='nav-links' id='nav-links'>
             {pageLinks.map((e,i)=>{
              return (<li key={e.id}> <a href={e.href} className="nav-link">{e.text}</a></li>)
             })}
          </ul>
          <ul className='nav-icons'>
          <li><a href='https://www.facebook.com/' className='nav-icon' target="blank"><i  className="fab fa-facebook"></i></a></li>
          <li><a href='https://www.twitter.com' className='nav-icon' target="blank"><i  className="fab fa-twitter"></i></a></li>
          <li><a href='https://www.instagram.com/' className='nav-icon' target="blank"><i  className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    </nav>)
}

export default Navbar
