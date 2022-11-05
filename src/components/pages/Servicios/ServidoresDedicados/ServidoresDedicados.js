import React from 'react'
import { Link } from 'react-router-dom'

export const ServidoresDedicados = () => {
  return (
  <>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                <h2>Servidores Dedicados</h2>
                </div>

                <div className="text">
                  <p>
                  Consiste en un equipo físico exclusivo para su empresa, con espacio en disco, procesador, memoria asegurados y la posibilidad de realizar una conexión “lan to lan”.
                  Características diferenciales:
                    <ul className="list-style-two">
                      <li>Garantía de funcionamiento constante.</li>
                      <li>Acceso a tu servidor dedicado por VPN.</li>
                      <li>Storage externo para extender los límites físicos del equipo.</li>
                      <li>Sin un alto costo de inversión inicial.</li>
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
                      src={"/imagenes/imagenes-productos/servidores.jpg"}
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
