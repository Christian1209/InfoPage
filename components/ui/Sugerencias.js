import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Producto } from './Producto'

export const Sugerencias = ({productosDiferentes}) => {
    console.log('recibi el parametro de productos diferentes')
    console.log(productosDiferentes);

  return (
    <Row >
        <Col>
            <Producto producto={ productosDiferentes[0] }/>
        </Col>
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
  )
}
