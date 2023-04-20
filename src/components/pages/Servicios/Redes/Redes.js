import React from 'react'
import { Link } from 'react-router-dom'

export const Redes = () => {
  return (
  <>
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
              <h2>Redes</h2>
              </div>
              
              <div className="text">
                <p>
                Somos expertos en cableado de redes informáticas y garantizamos la correcta instalación, administración y mantenimiento de las redes informáticas de su negocio. <br/>
                Brindamos servicios de instalación y mantenimiento de cableado de redes informáticas para empresas, mejorando la infraestructura informática y conectividad. Prevenimos cualquier fallo o error que perjudique el proceso productivo empresarial, apoyándose en herramientas tecnológicas y diseñando una red segura que, además de incorporar soluciones, mantenga una infraestructura de redes que garantice el rendimiento. <br/>
                <ul className="list-style-two">
                <li>Ofrecemos <b>la instalación de red de cableado estructurado y el soporte técnico IT necesario para asegurar su eficacia.</b> Contamos con técnicos altamente capacitados.<br/></li>

                <li>Instalamos su <b>red informática de forma ordenada y segura</b>, a partir de un diagnóstico exhaustivo de sus equipos y las oportunidades de crecimiento que brinda su negocio. Instalamos y mantenemos su red informática y sus conexiones locales, para un mayor y mejor rendimiento, <b>ahorrándole tiempo y dinero.</b><br/></li>

                <li>Nuestro cableado de red brinda soluciones para la productividad de sus sistemas.<b> Nos encargamos de la planificación, instalación y configuración</b> necesaria para un cableado eficiente, una Red Wi-Fi o ambas infraestructuras combinadas.<br/></li>

                <li>Gestionamos diversos tipos de redes de manera eficiente y segura. <b>Contamos con certificaciones de Red</b> y mantenimiento de red activo y preventivo, solucionando incidencias o eventuales fallas de cualquier requerimiento.<br/></li>
                </ul>

                Servicio IT profesional <br/>
                  Trabajamos de manera integral, asegurando el rendimiento de su red<br/>

                  Contamos con soporte IT altamente calificado en la eficiencia de redes<br/>

                  Garantizamos la seguridad en la conectividad y privacidad de los entornos de trabajo<br/>

                  Reducimos costos operativos y aumentamos la productividad de sus recursos<br/>
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
