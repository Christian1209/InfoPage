import React from 'react'
import { PageContext } from '../../context/PageContext';
import { Producto } from './Producto';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';

export const ProductosGrid = () => {
  
    const {categoriaActual} = useContext(PageContext);


  return (
    <Row style={{ marginLeft:'2rem'}} >
        {categoriaActual?.productos?.map(producto => (
          <Col className='mt-5'>
                      <Producto
            key={producto.id} producto = {producto}
            />
          </Col>
        ))}
    </Row>
  )
}
