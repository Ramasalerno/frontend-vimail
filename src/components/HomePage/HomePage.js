import React from 'react';
import { FlexMarcas } from '../FlexMarcas/FlexMarcas';
import { Carrousel } from '../Carrousel/Carrousel';
import { ServiciosCard } from '../ServiciosCard/ServiciosCard';
import { BannerBodySoporte } from '../BannerBodySoporte/BannerBodySoporte';
import FlexFeatures from '../FlexFeatures/FlexFeatures';
import { InfoHome } from '../InfoHome/InfoHome';

export const HomePage = () => {
  return (
    <>
        <Carrousel/>
        <FlexFeatures/>
        <ServiciosCard/>
        <InfoHome/>
        <BannerBodySoporte/>
        <FlexMarcas/>
    </>
  )
}
