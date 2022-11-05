import React from 'react';
import { FlexMarcas } from '../FlexMarcas/FlexMarcas';
import { Carrousel } from '../Carrousel/Carrousel';

import { BannerBodySoporte } from '../BannerBodySoporte/BannerBodySoporte';
import FlexFeatures from '../FlexFeatures/FlexFeatures';
import { InfoHome } from '../InfoHome/InfoHome';
import { BannerBody } from '../BannerBody/BannerBody';
import { ServiciosCard } from '../ServiciosCard/ServiciosCard';
import { Bienvenida } from '../Bienvenida/Bienvenida';

export const HomePage = () => {
  return (
    <>
        <Carrousel/>
        <Bienvenida/>
        <FlexFeatures/>
        <InfoHome/>
        <BannerBody/>
        <ServiciosCard/>

        <BannerBodySoporte/>
        <FlexMarcas/>
    </>
  )
}
