import React from 'react'
import "./PreNavbarLinksStyle.css"
import { Link } from 'react-router-dom'

export const PreNavbarLinks = () => {
  return (
    <div className='preNavLinks'>
      <Link to="/" className='linkeado linkeado2' id="navbarScrollingDropdown">Email Corporativo</Link>
      <Link to="/" className='linkeado linkeado2' id="navbarScrollingDropdown"><p className='imagenFont4'></p>Webmail</Link>
      <Link to="/" className='linkeado linkeado2' id="navbarScrollingDropdown">Control Panel</Link>
    </div>
  )
}
