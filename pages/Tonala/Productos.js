import React from 'react'
import Layout from '../../components/layout/Layout'
import { PageLayout } from '../../components/layout/PageLayout'
import { SidebarProductos } from '../../components/ui/SidebarProductos'
import { ProductosGrid } from '../../components/ui/ProductosGrid'

export default function TonalaProductos(){
  return (
    <>
        <Layout Sucursal = {'Tonala'}> 
          <PageLayout />
          <div className='d-flex'>
            <SidebarProductos/>
            <ProductosGrid/>
          </div>
        </Layout>
    </>
  )
}