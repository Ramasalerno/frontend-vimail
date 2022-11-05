import React from 'react'
import "./PreguntasFrecuentesStyle.css"

export const PreguntasFrecuentes = () => {
  return (
    <div>
        <h2 className='flexMarcasTitulo'>Preguntas frecuentes</h2>

                        <div className='container pregFrec'>
                            <p type="button" data-bs-toggle="collapse" data-bs-target="#preguntasFrec" aria-expanded="false" aria-controls="collapseExample">
                            <p className='imagenFont3'><span className='textFrec'>Formas de pago</span></p>
                            
                            </p>
                                <div className="collapse colapsados" id="preguntasFrec">
                                    <ul>
                                        <p><b>Titular:</b> VIMAIL S.R.L.</p>
                                        <p><b>Cuenta Corriente Nº:</b> 100-100114512-000</p>
                                        <p><b>CBU Nº:</b> 03401008 00100114512005</p>
                                        <p><b>CUIT Nº:</b> 30-71506354-5</p>
                                    </ul>
                                </div>
                        </div>
                        
                        <div className='container pregFrec'>
                            <p type="button" data-bs-toggle="collapse" data-bs-target="#soporte" aria-expanded="false" aria-controls="collapseExample">
                            <p className='imagenFont3'><span className='textFrec'>Soporte</span></p>
                            
                            </p>
                                <div className="collapse colapsados" id="soporte">
                                    <ul>
                                        <h5>Soporte alta ticket</h5>
                                        <p>Antes de realizar su consulta telefónica, consulte si la respuesta no está disponible en las Ayudas / How to, así como también cuenta con nuestra herramienta de soporte mediante ticket. .</p>
                                        <h5>Soporte telefónico</h5>
                                        <p>Si la respuesta no se encuentra dentro de las "Ayudas / How to" puede contactarnos a nuestras léneas telefónicas de:
Lunes a Viernes de 9 a 18 hs, 011-6841-3870.</p>
                                    </ul>
                                </div>
                        </div>

                        
    </div>
  )
}
