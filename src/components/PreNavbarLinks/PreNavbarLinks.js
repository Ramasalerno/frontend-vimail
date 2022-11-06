import React from 'react'
import "./PreNavbarLinksStyle.css"

export const PreNavbarLinks = () => {
  return (
    <div className='preNavLinks'>

      <div className='linkeado linkeado2' id="navbarScrollingDropdown">
        <a href="https://mail.vimail.com.ar/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.vimail.com.ar%2fowa%2f" target="_blank" rel="noreferrer"><p className='imagenFont4'>Email Corporativo</p></a>
      </div>

      <div className='linkeado linkeado2' id="navbarScrollingDropdown">
        <a href="https://panel.vimail.com.ar/webmail/" target="_blank" rel="noreferrer"><p className='imagenFont4'>Webmail</p></a>
      </div>

      <div className='linkeado linkeado2' id="navbarScrollingDropdown">
        <a href="https://panel.vimail.com.ar/login/" target="_blank" rel="noreferrer"><p className='imagenFont4'>Control Panel</p></a>
      </div>
    </div>
  )
}
