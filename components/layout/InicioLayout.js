import React from 'react'
import  Carrusel from '../ui/Carrusel';
import { Ubicaciones } from '../ui/Ubicaciones';
import Footer from '../ui/Footer';


export const InicioLayout = () => {
  return (
    <>
      <div className='d-flex justify-content-center w-100'>
        <Carrusel/>
      </div>
      <Ubicaciones/>
    </>
  )
}
