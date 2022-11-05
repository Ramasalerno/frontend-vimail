import React from 'react'
import { Container } from 'react-bootstrap'
import "./BannerBodySoporteStyle.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const BannerBodySoporte = () => {
  return (
    <div className='imagenSoporte mt-5 mb-5 '>
        <Container className='containerImagenSoporte'>
            <h2 className='flexMarcasTitulo mt-3'> Soporte las 24hs </h2>

            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <img src={"/imagenes/imagenes-productos/soporte24.jpg"} alt="Imagen banner"></img>
            </AnimationOnScroll>

        </Container>
</div>
  )
}