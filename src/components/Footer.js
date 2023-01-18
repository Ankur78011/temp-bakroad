import React from 'react'
import {socialLinks} from '../data'
const Footer = () => {
  return (
    <footer  className="section footer">
    <ul  className="footer-links">
      <li>
        <a href="#home"  className="footer-link">home</a>
      </li>
      <li>
        <a href="#about"  className="footer-link">about</a>
      </li>
      <li>
        <a href="#service"  className="footer-link">services</a>
      </li>
      <li>
        <a href="#featured"  className="footer-link">featured</a>
      </li>
    </ul>
    <ul  className="footer-icons">
    {socialLinks.map((e,i)=>{
            return(<li key={e.id}><a href={e.href} className="footer-icon" ><i className={e.icon}></i></a></li>)
      })}
        
    </ul>
    <p  className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date"></span> all rights reserved
    </p>
  </footer>
  )
}

export default Footer
