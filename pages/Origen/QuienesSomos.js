import React from 'react'
import Layout from '../../components/layout/Layout'
import { PageLayout } from '../../components/layout/PageLayout'
import { HeroSectionPage } from '../../components/ui/HeroSectionPage'
import { QuienesSomosGrid } from '../../components/ui/QuienesSomosGrid'

export default function OrigenQuienesSomos(){
  return (
    <>
        <Layout Sucursal = {'Origen'}> 
          <PageLayout />
          <HeroSectionPage/>
          <QuienesSomosGrid/>
        </Layout>
    </>
  )
}