import React from 'react'
import { Link } from 'react-router-dom'

export const SoporteCorporativo = () => {
  return (

    <>
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
              <h2>Soporte Corporativo</h2>
              </div>

              <div className="text">
                <p>
                Sistema Operativo Gestionado DVG, es la mejor opción para aquellas empresas que desean delegar el día a día en la administración de los sistemas operativos de su compañía, para abocar sus recursos a la operatoria propia de su negocio con el consecuente ahorro de costos asociados por no requerir tener equipos técnicos calificados y herramientas de gestión y monitoreo.<br/>
                Sistema Operativo Gestionado DVG contempla la instalación, administración y mantenimiento del sistema operativo de su empresa.<br/>
                </p>
                <p className='mt-3'><b>Instalación, Configuración y Puesta en Marcha:</b><br/>
                Se incluye dentro de esta categoría aquellas tareas que deben ser realizadas por única vez al momento de la configuración original del servidor, allí donde se instala el sistema operativo a gestionar.<br/></p>
                <p className='mt-3'>
                  Mejoramiento, prevención o corrección<br/>
                  En esta categoría se incluyen aquellas tareas que son necesarias para:
                </p>
                <p>
                  <ul className="list-style-two">
                    <li>Mantener el sistema operativo estable.</li>
                    <li>Mejorar o mantener la performance del sistema operativo.</li>
                    <li>Hacer al sistema operativo más seguro y confiable.</li>
                    <li>Cumplir con las recomendaciones del proveedor del sistema operativo para la resolución de problemas.</li>
                  </ul>

                  <p>
                    <b>ABM de perfiles</b><br/>
                    Incluye todas aquellas tareas inherentes a la interacción de los usuarios con el sistema operativo.<br/>
                  </p>
                  <p>
                    <b>Administración Premium</b><br/>
                    DVG cuenta con opción de administración premium, para aquellos clientes que requieran alta disponibilidad en sus aplicaciones. Este servicio se gestiona por medio de herramientas de monitoreo on-line para detertar fallas tempranas en los diferentes servicios del cliente ( servidores web, servidores de correo, alertas espacio en disco, uso del procesador, servicios de base de datos etc).
                  </p>
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
                    src={"/imagenes/imagenes-productos/soporte.jpg"}
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
