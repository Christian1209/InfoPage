import React from 'react'
import  Carrusel from '../ui/Carrusel';
import { Ubicaciones } from '../ui/Ubicaciones';
import { HeroSection } from '../ui/HeroSection';
import { IconSection } from '../ui/IconSection';
import { About } from '../ui/About';


export const InicioLayout = () => {
  return (
    <>
      <HeroSection/>
      <IconSection/>
      <p className='d-flex justify-content-center w-100 display-3 fw-bold' >
        Nuestras Sucursales
      </p>
      <div className='d-flex justify-content-center w-100'>
        <Carrusel/>
      </div>
      <p className='d-flex justify-content-center w-100 fs-1 mt-5 fw-bold'>
        Ubicaciones
      </p>
      <Ubicaciones/>
      <About/>
    </>
  )
}
