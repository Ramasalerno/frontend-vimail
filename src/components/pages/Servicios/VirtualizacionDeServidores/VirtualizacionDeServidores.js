import React from 'react'
import { Link } from 'react-router-dom'

export const VirtualizacionDeServidores = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>Virtualización de Servidores</h2>
                </div>


                <div className="text">
                <h5><b>¿Que es la virtualizacion?</b></h5>
                <p>
                  La virtualización es una tecnología probada de software que permite ejecutar múltiples sistemas operativos y aplicaciones simultáneamente en un mismo hardware o grupo de hardware produciendo un sistema autónomo tolerante a fallas y altamente performante.
                  El servidor virtual es la mejor opción para aquellas empresas que desean tener su propio servidor donde correr aplicaciones, sin incurrir en altos costos vinculados a la adquisición, mantenimiento, renovación y crecimiento del equipamiento (ups, servidores, sistemas de almacenamiento, sistemas de backup,etc).
                </p>

                <h5><b>Ventajas de la virtualización</b></h5>
                <ul className="list-style-two">
                  <li>Reduzca los costos de capital y operacionales.</li>
                  <li>Proporcione alta disponibilidad de las aplicaciones.</li>
                  <li>Minimice o elimine el tiempo fuera de servicio.</li>
                  <li>Aumente la capacidad de respuesta, la agilidad, la eficiencia y la productividad de TI.</li>
                  <li>Acelere y simplifique el aprovisionamiento de recursos y aplicaciones.</li>
                  <li>Respalde la continuidad del negocio y la recuperación ante desastres.</li>
                  <li>Permita la administración centralizada.</li>
                  <li>La virtualización puede aumentar la escalabilidad, flexibilidad y agilidad de TI, al mismo tiempo que genera ahorros significantes en los costos.</li>
                  <li>Capacidad de ampliación (memoria, disco, cpu) sin necesidad de interrumpir el servicio por un prolongado tiempo.</li>
                </ul>

                <p>
                  <b>Alcance del servicio</b><br/>
                  DVG ofrece diferentes alternativas flexibles y dinámicas, en base a las necesidades del cliente. Los clientes podrán optar por configuraciones de conectividad, seguridad y servidores virtuales a la medida.
                </p>

                <h5><b>Conectividad:</b></h5>
                <p>
                  El cliente puede optar por diferentes servicios de conectividad.
                </p>

                <ul className="list-style-two">
                  <li><b>Acceso a Internet:</b> DVG ofrece conectividad a los servidores virtuales mediante conexión a Internet de 10 megas simétrico multiplexada.</li>
                  <li><b>Acceso a Internet dedicado:</b> Le ofrecemos acceso a internet dedicado de 1, 2, 3 y hasta 20 MB simétricos.</li>
                  <li><b>Acceso al datacenter mediante punto a punto dedicada:</b> El cliente puede conectar una PAP o mpls desde su empresa a nuestro datacenter, así mismo como utilizar nuestro servicio de datos como plan de contingencia en caso de perdida del enlace principal.</li>
                </ul>

                <p>Todos los servidores virtuales poseen un rango de ip privado y 1 ip publica, en caso de ser necesario el cliente puede optar por aumentar el pool de ip públicos así como el rango de ips privadas, dependiendo las necesidades del mismo.</p>

                <h5><b>Seguridad:</b></h5>
                <p>
                  Para la protección del servidor virtual DVG le ofrece al cliente 2 alternativas de firewall.
                </p>
                <ul className="list-style-two">
                  <li><b>Firewall Básico:</b> El cliente podrá solicitar a DVG diferentes configuraciones de seguridad sin la administración del firewall por parte del mismo. (*)</li>
                  <li><b>Firewall Premium (UTM) sin Management (**):</b> Los servicios de firewall premium cuenta con ids, ips, antivirus navegación etc. Este servicio es administrador por personal de DVG (***).</li>
                  <li><b>Firewall Premium con Management (**):</b> El cliente podrá administrar su propio firewall (IDS, IPS, ACL, ETC), la plataforma de firewall es Fortigate.</li>
                </ul>

                <p><b>*</b>El servicio de firewall básico cuenta con 3 vpns por cada cliente, en tecnologías PPTP, OPENVPN, SSTP.<br/>
                    <b>**</b> El servicios de firewall premium (sin mgt), cuenta con 3 vpn bajo ssl o ipsec.<br/>
                    <b>***</b> el servicio de firewall premium (con mngt) cuenta con la posibilitad de 10 vpn ssl, ipsec, peer to peer, etc.
                </p>

                <h5><b>Servidor virtual:</b></h5>
                <p>
                    El dimensionamiento de los mismas dependerá de las siguientes variables:
                </p>
                <ul className="list-style-two">
                  <li><b>Procesador:</b> Se podrá definir la cantidad de procesadores disponibles. Ponemos a vuestra disposición de 1 a 12 procesadores y los mismos pueden ser modificados bajo demanda.</li>
                  <li><b>Memoria:</b> Los servidores vienen como minino con 2 GB, pudiendo aumentar gradualmente en 1 hasta llegar a los 32 GB, dependiendo la versión de sistema operativo y función de vuestras necesidades.</li>
                  <li><b>Disco Rígido (almacenamiento):</b> El servidor virtual cuenta con 1 disco de 100 GB y podrá ser ampliado bajo demanda. La ampliación del espacio de almacenamiento va a estar dada por módulos de 100 GB con un máximo de 1TB (1TB = 1000 GB)por unidad lógica. Por default el almacenamientos esta basado sobre raid 5 en discos de 10000 rpm tecnología SAS. En caso de ser necesario DVG cuenta la posibilidad de ofrecer servicios en raid 6 o 10 en disco sas o de estado solido.</li>
                  <li><b>Sistema Operativo:</b> Los sistemas operativos disponibles son windows 2008/2012 estándar y GNU/LINUX en cualquier distribución (Debian, ubuntu, centos, etc).</li>
                  <li><b>Backup Servidor/es:</b> El cliente puede contratar espacio de almacenamiento adicional que va a poder utilizar con el fin de respaldo de información que van de los 50 GB y con la opción de contratar pack adicionales de espacio de 50,100 o 150 GB.</li>
                </ul>

                <p>
                Esta unidad que va a ser agregada como un el servidor esta alojado en un sistema de almacenamiento al del servidor virtual. A su vez DVG cuenta con una solución integral de resguardo de la información, La plataforma de backup está conectada al servidor Virtual contratado por el cliente realizando resguardo de toda la información en caso de ser necesario un escenario de recover disaster (recuperación de desastres) La política de respaldo puede ser diaria, semanal y mensual, sin costo alguno para el cliente. La política de backup va a ser definida a la hora de realizar la contratación del servidor virtual. La política de backup es hasta 5 backup históricos sin costo.
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
                      src={"/imagenes/imagenes-productos/virtualizacion.jpg"}
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
