import React, { Component } from 'react';
import {Navbar, Nav , Container} from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default class Barra1 extends Component {

  render() {
    return <div>

      <Navbar expand="lg" className='barra'>
          <Container fluid>

              <Navbar.Brand href="/">
                <Link to="/">
                <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-logo/logo-vimail2.png"} alt="Logo VIMAIL" className='setLogo'></img>
                </Link>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className='colt'>
                <Nav className="me-auto my-2 my-lg-0"style={{ height: '100%' }}>
                <Link to="/" className='linkeado' id="navbarScrollingDropdown">Home</Link>
                <Link to="/servicios" className='linkeado' id="navbarScrollingDropdown">Servicios</Link>
                <Link to="/nosotros" className='linkeado' id="navbarScrollingDropdown">Nosotros</Link>
                <Link to="/contacto" className='linkeado' id="navbarScrollingDropdown">Contacto</Link>
                </Nav>
              </Navbar.Collapse>
          </Container>
</Navbar>
    </div>;
  }
}


