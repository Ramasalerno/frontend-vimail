import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import "./PromocionesStyle.css"

export const Promociones = () => {
  return (
    <>
    <h2 className='flexMarcasTitulo mt-3'> Promociones en hosting</h2>
    <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='container' id='servicios'>

            <div className='card-promociones'>
                <div className='fondoCardPromo'><img src={"/imagenes/imagenes-productos/hosting-mini.png"} alt='img consultoria'/></div>
                
                <div className="cont-precio">
                    <div className="cont-tachado">

                      <div className="tachado">
                      <span className="monedaPesos">$</span><span className="total">999</span>
                      </div>
                      
                      <div className="porcentaje">
                        <span className="valor-porcentaje">60%</span> OFF
                      </div>
                      
                    </div>

                    <div className="valor">
                      <span className="monedaPesos">$</span><span className="total">399</span><span className="mes">/mes</span>
                    </div>
                    
                    <p className="moneda">ARS</p>
                </div>

                <ul className="list-style-promo mt-3">
                  <li>512 MB de Espacio en Disco sitio web</li>
                  <li>10 GB transferencia mensual</li>
                  <li>5 Cuentas de Email hasta 2GB en disco</li>
                  <li>1 usuario FTP</li>
                  <li className='sinPromo'>APP pre-instaladas</li>
                </ul>
                <Link to="/contacto" className='btnContactoPromo'>Me interesa!</Link>
            </div>

            {/* segunda card */}
            <div className='card-promociones'>
                <div className='fondoCardPromo'><img src={"/imagenes/imagenes-productos/hosting-basico.png"} alt='img consultoria'/></div>
                
                <div className="cont-precio">
                    <div className="cont-tachado">

                      <div className="tachado">
                      <span className="monedaPesos">$</span><span className="total">1400</span>
                      </div>
                      
                      <div className="porcentaje">
                        <span className="valor-porcentaje">70%</span> OFF
                      </div>
                      
                    </div>

                    <div className="valor">
                      <span className="monedaPesos">$</span><span className="total">420</span><span className="mes">/mes</span>
                    </div>
                    
                    <p className="moneda">ARS</p>
                </div>

                <ul className="list-style-promo mt-3">
                  <li>5 GB de Espacio en Disco sitio web</li>
                  <li>30 GB transferencia mensual</li>
                  <li>10 Cuentas de Email hasta 5GB en disco</li>
                  <li>1 Base de Datos Mysql / 3 usuarios FTP</li>
                  <li>APP pre-instaladas</li>
                </ul>
                <Link to="/contacto" className='btnContactoPromo'>Me interesa!</Link>
            </div>
            
        </div>
    </AnimationOnScroll>

    <h2 className='flexMarcasTitulo mt-3'> Promociones en servidores</h2>
    <AnimationOnScroll animateIn="animate__fadeIn">
    <div className='container'>
        
        {/* tercera card */}
        <div className='card-promociones2'>
                <div className='fondoCardPromo'><img src={"/imagenes/imagenes-productos/servidor-virtual-windows.png"} alt='img consultoria'/></div>
                
                <div className="cont-precio">
                    <div className="cont-tachado">

                      <div className="tachado">
                      <span className="monedaPesos">$</span><span className="total">1500</span>
                      </div>
                      
                      <div className="porcentaje">
                        <span className="valor-porcentaje">60%</span> OFF
                      </div>
                      
                    </div>

                    <div className="valor">
                      <span className="monedaPesos">$</span><span className="total">899</span><span className="mes">/mes</span>
                    </div>
                    
                    <p className="moneda">ARS</p>
                </div>

                <ul className="list-style-promo mt-3">
                  <li>VIMAIL VP2</li>
                  <li>2 CPU Xeon 2.4</li>
                  <li>2 GB RAM</li>
                  <li>Disco 100 gb SAS</li>
                  <li>3 usuarios acceso VPN</li>
                  <li>5 MB sin límite de transferencia</li>
                </ul>
                <Link to="/contacto" className='btnContactoPromo'>Me interesa!</Link>
            </div>

            {/* cuarta card */}
            <div className='card-promociones2'>
                <div className='fondoCardPromo'><img src={"/imagenes/imagenes-productos/servidor-virtual-linux.png"} alt='img consultoria'/></div>
                
                <div className="cont-precio">
                    <div className="cont-tachado">

                      <div className="tachado">
                      <span className="monedaPesos">$</span><span className="total">1999</span>
                      </div>
                      
                      <div className="porcentaje">
                        <span className="valor-porcentaje">50%</span> OFF
                      </div>
                      
                    </div>

                    <div className="valor">
                      <span className="monedaPesos">$</span><span className="total">999</span><span className="mes">/mes</span>
                    </div>
                    
                    <p className="moneda">ARS</p>
                </div>

                <ul className="list-style-promo mt-3">
                  <li>VIMAIL VP1</li>
                  <li>1 CPU Xeon 2.4</li>
                  <li>2 GB RAM</li>
                  <li>Disco 100 gb SAS</li>
                  <li>3 usuarios acceso VPN</li>
                  <li>5 MB sin límite de transferencia</li>
                </ul>
                <Link to="/contacto" className='btnContactoPromo'>Me interesa!</Link>
            </div>
    </div>
    </AnimationOnScroll>

    </>
)
}
