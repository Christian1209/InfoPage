import Image from 'next/image'
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { formatearDinero } from '../../helpers/formatearDinero';

export const ProductoAmpliado = ({imagen,nombre, precio}) => {

let nombreMayus = nombre + "";
nombreMayus = nombreMayus.toString();
nombreMayus = nombreMayus.toUpperCase();


//console.log(nombreMayus);
return (
  <>
    <Row className='w-75'>
      <Col xs = {12} lg = {6}   style={{ marginLeft: '10%'}}>
          <p className='mt-5 pl-5 fw-bold display-1 text-center'>
            {nombreMayus}
          </p>
          <p className='mt-1 fw-bold fs-2 text-center'>
            {formatearDinero(precio) + ' kg'}
          </p>
          <p className='mt-1 fs-4 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nunc aliquet, egestas dui vitae.
          </p>
      </Col>
      <Col xs = {12} lg = {4}>
        <div class="text-left text-sm-left mt-2">
          <Image variant="top" width={400} height={400} src={`/assets/productos/${imagen}.jpg`} alt={nombre}/>
        </div>
      </Col>
    </Row>
  </>

)
}