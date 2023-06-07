import React from 'react'
import { PageProvider } from '../../context/PageProvider'
import Layout from '../../components/layout/Layout'
import { PageLayout } from '../../components/layout/PageLayout'

export default function TonalaBolsa(){
  return (
    <>
      <PageProvider>
        <Layout Sucursal = {'DelCampo'}> 
          <PageLayout />
        </Layout>
      </PageProvider>
    </>
  )
}