import React from 'react'
import { Formulario } from '../../components/ui/Formulario'
import Layout from '../../components/layout/Layout'
import { PageLayout } from '../../components/layout/PageLayout'
import { Col, Row } from 'react-bootstrap'

export default function(){
  return (
    <Layout Sucursal = {'Origen'}> 
      <PageLayout/>
        <Row className='d-flex justify-content-center'>
          <Col xs={12}>
            <h1 className='text-center'>Tu Opinión Es Importante</h1>
          </Col>
          <Col xs = {11} md = {6}  className='d-flex justify-content-center' >
            <h5 className='text-center     w-sm-80'>
En Carniceria NOMBRE DE, nos encantaría escuchar tu opinión. Si tienes alguna sugerencia, queja, peticiones y/o felicitaciones que quieras hacernos llegar ponemos a tu disposición un formulario para que nos las indiques.</h5>
          </Col>
        </Row>

      <Formulario/>
    </Layout>
  )
}
