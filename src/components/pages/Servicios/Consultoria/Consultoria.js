import React from 'react'
import { Link } from 'react-router-dom'

export const Consultoria = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <h2 >Consultoría</h2>
                </div>


                <div className="text">
                  <p>
                    Ponemos a vuestra disposición nuestro staff de consultores de IT con mas de 15 años de experiencia en el mercado Tenemos certificaciones en diversas tecnologías y productos.
                    Nuestro servicio de Consultaría Tecnológica abarca diferentes áreas de análisis:
                    <ul className="list-style-two">
                      <li>Seguridad (FORINET/CISCO/SOPHOS)</li>
                      <li>Infraestructura de redes (HPE/CISCO/MIKROTIK/VMWARE)</li>
                      <li>Dimensionamiento de hardware (HPE/APC)</li>
                      <li>Licenciamiento software (MICROSOFT/LINUX)</li>
                      <li>Plan de recuperación de desastres (VEEAM)</li>
                    </ul>
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
                      src={"/imagenes/imagenes-productos/consultoria.jpg"}
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
