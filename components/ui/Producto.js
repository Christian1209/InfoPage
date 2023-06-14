import Image from 'next/image'
import React, { useContext } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { formatearDinero } from '../../helpers/formatearDinero';
import Link from 'next/link';
import { PageContext } from '../../context/PageContext';

export const Producto = ({producto}) => {
//        src = {`/assets/productos/${imagen}.jpg`} 
  const {id, nombre, imagen, precio} = producto;
  const {sucursal} = useContext(PageContext);


  return (

    <Card className='position-relative' style={{ width: '18rem', height:'25rem' }}>
      <Card.Img variant="top" width={200} height={200} src={`/assets/productos/${imagen}.jpg`}/>
      <Card.Body>
          <p className='mt-2 fw-bold fs-3 text-center'>
            {nombre}
          </p>
          <Link href={`productos/[id]`} as={`productos/${id}`} className='text-center fs-2 fw-bold stretched-link px-5' style={{ color: '#105b72c2'}}> 
                {formatearDinero(precio) + ' kg'}
          </Link>

      </Card.Body>
    </Card>
  )
}
