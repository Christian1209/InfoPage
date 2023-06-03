import React from 'react'
import { Header } from '../ui/Header'
import { Navegacion2 } from '../ui/Navegacion2'
import CarruselPromo from '../ui/CarruselPromo'

export const PageLayout = () => {
  return (
    <>
      <Navegacion2/>
      <div className='d-flex justify-content-center w-100'>
        <CarruselPromo/>
      </div>
    </>
  )
}
