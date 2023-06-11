import React from 'react'
import Layout from '../components/layout/Layout'
import { PageLayout } from '../components/layout/PageLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarruselPromo from '../components/ui/CarruselPromo';

export default function Normandia(){
  return (
    <>
        <Layout Sucursal = {'Normandia'}>
          <PageLayout/>
          <div className='d-flex justify-content-center w-100'>
            <CarruselPromo/>
          </div>
        </Layout>
    </>

  )
}
