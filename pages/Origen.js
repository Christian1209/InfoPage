import React from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import Layout from '../components/layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageProvider } from '../context/PageProvider';
import CarruselPromo from '../components/ui/CarruselPromo';

export default function Origen(){

  //const {sucursal,setSucursal} = useContext(PageContext);

  return (
    <PageProvider>
      <Layout Sucursal = {'Origen'}>
        <PageLayout/>
        <div className='d-flex justify-content-center w-100'>
          <CarruselPromo/>
        </div>
      </Layout>
    </PageProvider>
  )
}
