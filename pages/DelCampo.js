import React from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import Layout from '../components/layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageProvider } from '../context/PageProvider';
import CarruselPromo from '../components/ui/CarruselPromo';
import { InicioHero } from '../components/ui/InicioHero';
import { Ubicacion } from '../components/ui/Ubicacion';
import { InicioSteps } from '../components/ui/InicioSteps';
import { InicioColumnsSection } from '../components/ui/InicioColumnsSection';

export default function DelCampo(){
  return (
    <Layout Sucursal = {'DelCampo'}> 
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
  )
}
