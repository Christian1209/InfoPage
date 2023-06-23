import React from 'react'
import { PageLayout } from '../../components/layout/PageLayout'
import Layout from '../../components/layout/Layout'
import { CardVacantes } from '../../components/ui/CardVacantes'

export default function OrigenBolsa(){
  return (
    <> 
        <Layout Sucursal = {'Origen'}> 
          <PageLayout/>
          <h1 className='display-5 fw-bold mt-2' style={{ marginLeft: '12%'}}>UNETE A NUESTRO EQUIPO!</h1>
          <h2 className='fs-5 w-50 text-cente' style={{ marginLeft: '8%'}}>(Descripcion)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus faucibus, rutrum ligula suscipit, aliquet mi. Donec imperdiet id ex id fermentum. Pellentesque finibus metus non hendrerit egestas. Ut congue mi a sem congue tristique. Praesent ultricies ante mi, lacinia convallis ipsum auctor et. </h2>
          <CardVacantes/>
        </Layout>
    </>
  )
}