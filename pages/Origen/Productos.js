import React from 'react'
import Layout from '../../components/layout/Layout'
import { PageLayout } from '../../components/layout/PageLayout'
import { SidebarProductos } from '../../components/ui/SidebarProductos'
import { ProductosGrid } from '../../components/ui/ProductosGrid'
import { LinkBar } from '../../components/ui/LinkBar'
import { useMediaQuery } from 'react-responsive'
import { useEffect } from 'react'
import { useState } from 'react'
import { CategoriasGrid } from '../../components/ui/productosComponents/CategoriasGrid'

export default function OrigenProductos(){

  const [isMobile, setIsMobile] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  //Es necesario meter el conditional rendering dentro de un useEffect y apoyarnos de un UseState para que el render del server y del cliente coincidan en un primer momento 
  //Y no tener un error de hydration.

  useEffect(() => {
    setIsMobile(isTabletOrMobile);
  },[isTabletOrMobile])
  
  
  return (
    <>
        <Layout Sucursal = {'Origen'}> 
          <PageLayout />
          {!isMobile ? 
          <div className='d-flex' >
            <SidebarProductos/>
            <ProductosGrid/>
          </div>
              :
          <div className='mb-5'>
            <LinkBar/>
            <CategoriasGrid />
          </div>
          }
        </Layout> 
    </> 
  )
}