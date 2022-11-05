import React from 'react'
import "./BienvenidaStyle.css"
import { Link } from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const Bienvenida = () => {
  return (
    <div className='titulosPrincipales'>
    <AnimationOnScroll animateIn="animate__bounceInUp">
        <h1 className='titulo'>Conozca la propuesta de Vimail</h1>
            <div>
                <Link to="/contacto" className='buttonHomeP'>
                    <span>Contactenos!</span>
                </Link>
            </div>
    </AnimationOnScroll>
    </div>

)
}
