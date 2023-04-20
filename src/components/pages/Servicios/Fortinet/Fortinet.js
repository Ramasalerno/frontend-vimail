import React from 'react'
import { Link } from 'react-router-dom';
import "./PromocionesStyle.css"

export const Fortinet = () => {
  return (
    <>
    <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                <h2>Fortinet: Una marca líder en seguridad cibernética</h2>
                </div>


                <div className="text">
                <p>Fortinet es una compañía de tecnología de la información y seguridad informática con sede en Sunnyvale, California. Fundada en 2000, la compañía ha crecido hasta convertirse en una de las marcas más reconocidas en el mercado de la seguridad cibernética.</p>
                <p>Fortinet se enfoca en proporcionar soluciones de seguridad para empresas de todo tamaño, incluyendo pequeñas y medianas empresas, grandes corporaciones y proveedores de servicios. La compañía ofrece soluciones de seguridad integradas que incluyen firewall, VPN, antivirus, prevención de intrusiones, filtrado de contenido y análisis de seguridad.
                <h3 className='mt-3'>Usos de Fortinet en seguridad informática</h3>
                    <ul className="list-style-two">
                    <li>Protección de redes y sistemas contra ataques cibernéticos.</li>
                    <li>Filtrado de contenido para garantizar el cumplimiento de las políticas de uso de internet en la empresa.</li>
                    <li>Prevención de intrusiones y detección de amenazas avanzadas.</li>
                    <li>Protección de la privacidad de los datos de la empresa y de sus clientes.</li>
                    <li>Control de acceso a los recursos de la red y autenticación de usuarios.</li>
                    <li>Seguridad para redes inalámbricas y dispositivos móviles.</li>
                    <li>Protección de aplicaciones y servidores contra vulnerabilidades conocidas y desconocidas.</li>
                    <li>Visibilidad y control de la actividad de la red en tiempo real.</li>
                    <li>Automatización de tareas de seguridad y cumplimiento normativo.</li>
                    <li>Integración con otras soluciones de seguridad y gestión de TI.</li>
                    </ul>
                  </p>
                  <p>En resumen, Fortinet es una marca líder en el mercado de la seguridad cibernética, conocida por su amplia gama de productos y soluciones avanzadas, su enfoque en la innovación y la satisfacción del cliente, y su presencia global en la comunidad de seguridad informática. Si estás buscando soluciones de seguridad informática de alta calidad, Fortinet es una marca que definitivamente vale la pena considerar.</p>
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
