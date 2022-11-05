import React from 'react'
import "./CarrouselStyle.css"
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Carrousel = () => {
	return (
		<div className='imgBannerPrincipal'>

			<Carousel fade className='noMostrarMobile'>
				
				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={process.env.PUBLIC_URL + "/imagenes/banner/banner4.jpg"}
							alt="Primer imagen slider"
						/>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={process.env.PUBLIC_URL + "/imagenes/banner/banner2.jpg"}
							alt="Segunda imagen slider"
						/>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/">
						<img
							className="d-block w-100"
							src={process.env.PUBLIC_URL + "/imagenes/banner/banner3.jpg"}
							alt="Tercer imagen slider"
						/>
					</Link>
				</Carousel.Item>

			</Carousel>

		</div>
	)

}
