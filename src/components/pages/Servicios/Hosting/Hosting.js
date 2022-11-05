import React from 'react'
import { Link } from 'react-router-dom'

export const Hosting = () => {
  return (
  <>
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
              <h2>Hosting</h2>
              </div>
              
              <div className="text">
                <p>
                  Permite alojar su página web HTML o PHP, de forma <b>rápida y sencilla</b>.<br/>
                  Cuenta con una base de datos mysql con acceso vía ftp.<br/>
                  DVG Hosting ofrece casillas de correo POP3 o IMAP con 5 GB de espacio en disco y filtro anti spam.<br/>
                  Nuestro servicio de Consultaría Tecnológica abarca diferentes áreas de análisis.
                </p>
              </div>

              <div className="btn-box">
              <Link to="/contacto" className="theme-btn btn-style-two">Contacto!</Link>
              </div>
            </div>
          </div>

          {/* <!-- Image Column --> */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <figure className="image-1">
                <a href="/" className="lightbox-image" data-fancybox="images">
                  <img
                    src={"/imagenes/imagenes-productos/hosting.jpg"}
                    alt=""
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
