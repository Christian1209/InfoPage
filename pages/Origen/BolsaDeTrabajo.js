import React from 'react'
import { PageLayout } from '../../components/layout/PageLayout'
import Layout from '../../components/layout/Layout'

export default function OrigenBolsa(){
  return (
    <>
        <Layout Sucursal = {'Origen'}> 
          <PageLayout/>
          <h1>Bolsa</h1>
        </Layout>
    </>
  )
}