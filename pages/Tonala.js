import React from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import Layout from '../components/layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarruselPromo from '../components/ui/CarruselPromo';

export default function Tonala(){
  return (
      <Layout Sucursal = {'Tonala'}>
        <PageLayout/>
        <div className='d-flex justify-content-center w-100'>
          <CarruselPromo/>
        </div>
      </Layout>
  )
}
