import React from 'react'
import "./InfoHomeStyle.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const InfoHome = () => {
return (
    <>
    
    <section id="caracteristicas" class="caracteristicas"><div class="width_wrap">
        
    <h2 className='flexMarcasTitulo'>La mejor infraestructura para tu empresa</h2>
    <AnimationOnScroll animateIn="animate__fadeInRight">
    <div class="fila-carac">
        <div class="imagen"><img src={"/imagenes/imagenes-productos/serv-dedicados.png"} class="exclusivo" alt=""/>
        </div>

        <div class="texto">
        <h3 class="subtitulo">Pensado para tu proyecto</h3>
        <p class="parrafo">Con nuestro plan, obtendrás un servidor dedicado sólo para tu proyecto. No compartirás hardware con nadie más, por lo que podemos garantizar una conexión optima para tu empresa.</p>
        </div>
    </div>
    </AnimationOnScroll>


    <AnimationOnScroll animateIn="animate__fadeInLeft">

    <div class="fila-carac column-reverse">
        <div class="texto">
            <h3 class="subtitulo">Actualización y seguridad</h3>
            <p class="parrafo">El servicio incluye la actualización y aplicación de parches sobre el software pre-instalado en tu servidor, brindándole toda la seguridad y performance que tu negocio online necesita.
            </p>
        </div>
        <div class="imagen"><img src={"/imagenes/imagenes-productos/serv-dedicados-seguridad.png"} class="escudo" alt=""/>
        </div>
    </div>
    </AnimationOnScroll>


    <AnimationOnScroll animateIn="animate__fadeInRight">
    <div class="fila-carac">
        <div class="imagen">
            <img src={"/imagenes/imagenes-productos/serv-dedicados-disp.png"} class="disponibilidad" alt=""/>
        </div>
    <div class="texto">
    <h3 class="subtitulo">Máxima disponibilidad</h3>
    <p class="parrafo">Nuestros datacenters, equipados con marcas de primer nivel, garantizan su optimo funcionamiento 24/7 y tu negocio estara siempre en linea.</p>
    </div>
    </div>
    </AnimationOnScroll>

    </div>
    </section>
    </>
  )
}
