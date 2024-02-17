import React from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import Layout from '../components/layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InicioSteps} from '../components/ui/InicioSteps';
import { InicioHero } from '../components/ui/InicioHero';
import { Ubicacion } from '../components/ui/Ubicacion';
import { InicioColumnsSection } from '../components/ui/InicioColumnsSection';

export default function Origen(){

  //const {sucursal,setSucursal} = useContext(PageContext);

  return (
      <Layout Sucursal = {'Origen'}>
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
