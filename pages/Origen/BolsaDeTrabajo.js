import React from 'react'
import { PageLayout } from '../../components/layout/PageLayout'
import Layout from '../../components/layout/Layout'
import { PageProvider } from '../../context/PageProvider'

export default function OrigenBolsa(){
  return (
    <>
      <PageProvider>
        <Layout Sucursal = {'DelCampo'}> 
          <PageLayout/>
        </Layout>
      </PageProvider>
    </>
  )
}