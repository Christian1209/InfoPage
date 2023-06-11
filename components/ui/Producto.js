import Image from 'next/image'
import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { formatearDinero } from '../../helpers/formatearDinero';

export const Producto = ({producto}) => {
//        src = {`/assets/productos/${imagen}.jpg`} 
  const {nombre, imagen, precio} = producto;
  console.log('Fui llamado soy producto');
  console.log(imagen);
  return (
    <Card style={{ width: '18rem', height:'25rem' }}>
      <Card.Img variant="top" width={200} height={200} src={`/assets/productos/${imagen}.jpg`}/>
      <Card.Body>
          <p className='mt-2 fw-bold fs-3'>
            {nombre}
          </p>
          <p className=' fs-2 fw-bold' style={{ color: '#105b72c2'}}> 
                {formatearDinero(precio) + ' kg'}
          </p>
      </Card.Body>
    </Card>
  )
}
