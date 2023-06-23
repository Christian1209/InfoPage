import React from 'react'
import CardVacante from './CardVacante'
import { Col, Row } from 'react-bootstrap'
import CardVacante2 from './CardVacante2'

export const CardVacantes = () => {
  return (
    <div className='d-flex justify-content-center mt-3 px-5'>
        <div  className='d-flex w-75'>
            <Row className='w-100'>
                <Col className='px-2 mt-2' xs={12} md={6}  xl={4}  xxl={3} >
                  <CardVacante/>
                </Col>
                <Col className='px-2 mt-2' xs={12} md={6} xl={4}  xxl={3} >
                  <CardVacante/>
                </Col>
                <Col className='px-2 mt-2' xs={12} md={6} xl={4} xxl={3} >
                  <CardVacante/>
                </Col>
                <Col className='px-2 mt-2' xs={12} md={6} xl={4} xxl={3}>
                  <CardVacante2/>
                </Col>
                <Col className='px-2 mt-2' xs={12} md={6} xl={4} xxl={3}>
                  <CardVacante2/>
                </Col>
                <Col className='px-2 mt-2' xs={12} md={6} xl={4} xxl={3}>
                  <CardVacante/>
                </Col>
                <Col className='px-2 mt-2' xs={12} md={6} xl={4} xxl={3}>
                  <CardVacante/>
                </Col>
                <Col className='px-2 mt-2' xs={12} md={6} xl={4} xxl={3}>
                  <CardVacante/>
                </Col>
            </Row>
        </div>
    </div>

  )
}
