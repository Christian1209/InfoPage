import React from 'react'
import Layout from '../../components/layout/Layout'
import { PageLayout } from '../../components/layout/PageLayout'
import { SidebarProductos } from '../../components/ui/SidebarProductos'
import { ProductosGrid } from '../../components/ui/ProductosGrid'

export default function NormandiaProductos(){
  return (
    <>
        <Layout Sucursal = {'Normandia'}> 
          <PageLayout/>
          <div className='d-flex w-100'>
            <SidebarProductos/>
            <ProductosGrid/>
          </div>
        </Layout>
    </>
  )
}