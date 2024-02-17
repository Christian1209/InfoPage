import React from 'react'
import Layout from '../components/layout/Layout'
import { PageLayout } from '../components/layout/PageLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarruselPromo from '../components/ui/CarruselPromo';
import { InicioHero } from '../components/ui/InicioHero';
import { Ubicacion } from '../components/ui/Ubicacion';
import { InicioSteps } from '../components/ui/InicioSteps';
import { InicioColumnsSection } from '../components/ui/InicioColumnsSection';

export default function Normandia(){
  return (
    <>
        <Layout Sucursal = {'Normandia'}>
          <PageLayout/>
          <InicioHero/>
          <div className='d-flex justify-content-center mt-5 ' style={{background: '#fffdee'}}>
            <h1>Ubicación</h1>
          </div>
          <div className='d-flex justify-content-center' style={{background: '#fffdee'}}>
            
            <Ubicacion/>
          </div>
          <InicioSteps/>
          <InicioColumnsSection/>
        </Layout>
    </>

  )
}
