import React from 'react'
import { PageContext } from '../../context/PageContext';
import { Producto } from './Producto';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { desktop, laptop, mobile, tablet } from '../../helpers/mediaQuerys';

export const ProductosGrid = () => {
  
    const {categoriaActual} = useContext(PageContext);
    const ProductosContainer = styled.div`
      ${mobile(css`
          padding: 0 em;
      `)};

      ${tablet(css`
       padding: 0 2em;
      `)};

      ${laptop(css`
      padding: 0 2em;
      `)};

      ${desktop(css`
      padding: 0 2em;
      `)};
  `;

  return (
    <ProductosContainer className='d-flex justify-content-center'>
      <Row style={{ minHeight: '80vh'}} className='mb-5 pb-5' >
          {categoriaActual?.productos?.map(producto => (
            <>
              <Col className='mt-3 mb-0' >
                <Producto
                key={producto.id} producto = {producto}
                />
              </Col>
              <Col className='mt-3 mb-0' >
                <Producto
                key={producto.id} producto = {producto}
                />
              </Col>
              <Col className='mt-3 mb-0' >
                <Producto
                key={producto.id} producto = {producto}
                />
              </Col>
            </>
          ))}
      </Row>
    </ProductosContainer>
  )
}
