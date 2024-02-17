import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Producto } from './Producto'

export const Sugerencias = ({productosDiferentes}) => {

  return (
    <div className='d-flex justify-content-center w-100 mb-5'>
        <Row >
            <Col >
                <Producto producto={ productosDiferentes[0] }/>
            </Col >
            <Col>
                <Producto producto={ productosDiferentes[0] }/>
            </Col>
            <Col>
                <Producto producto={ productosDiferentes[0] }/>
            </Col>
            <Col>
                <Producto producto={ productosDiferentes[0] }/>
            </Col>
        </Row>
    </div>
  )
}
