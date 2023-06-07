import React from 'react'
import { PageLayout } from '../../components/layout/PageLayout'
import { PageProvider } from '../../context/PageProvider'
import Layout from '../../components/layout/Layout'

export default function DelCampoBolsa(){
  return (
      <PageProvider>
        <Layout Sucursal = {'DelCampo'}> 
          <PageLayout/>
        </Layout>
      </PageProvider>
  )
}