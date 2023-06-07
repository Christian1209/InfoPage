import React, { useContext } from 'react'
import { Header } from '../ui/Header'
import { Navegacion2 } from '../ui/Navegacion2'
import CarruselPromo from '../ui/CarruselPromo'
import { PageContext } from '../../context/PageContext'

export const PageLayout = () => {

  const {sucursal} = useContext(PageContext); 

  return (
    <>
      <Navegacion2/>
      <h1>
        a
        {sucursal}
      </h1>
    </>
  )
}
