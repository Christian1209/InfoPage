import Image from 'next/image'
import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import { formatearDinero } from '../../helpers/formatearDinero';
import Link from 'next/link';
import { PageContext } from '../../context/PageContext';
import styled from '@emotion/styled';
import { desktop, laptop, mobile, tablet } from '../../helpers/mediaQuerys';
import { css } from '@emotion/react';


  const CardStyle = styled.div`
  padding: 0% 10%;
 
  .card-hover {
      transition: all 0.3s;
      &:hover {
          transform: scale(1.15);
      }
  }
  .card-size{

    ${mobile(css`
      width: 10rem;
      height: 16rem;
    `)};
    ${tablet(css`
      width: 10rem;
      height: 16rem;
    `)};

    ${laptop(css`
      width: 14rem;
      height: 18rem;
    `)};

    ${desktop(css`
      width: 14rem;
      height: 18rem;
    `)};
  }

  .font-size{

    ${mobile(css`
    font-size: 1.2rem;
    `)};
    ${tablet(css`
    font-size: 1.2rem;
    `)};

    ${laptop(css`
    font-size: 1.5rem;
    `)};

    ${desktop(css`
    font-size: 1.5rem;
    `)};
  }
`;

export const Producto = ({producto}) => {
//        src = {`/assets/productos/${imagen}.jpg`} 
  const {id, nombre, imagen, precio} = producto;
  const {sucursal} = useContext(PageContext);



  return (
    <CardStyle className='mt-4 '>
      <Card className='position-relative border-dark  card-hover card-size' >
        <Card.Img variant="top" className='hover-zoom' width={10} height={110} src={`/assets/productos/${imagen}.jpg`}/>
        <Card.Body className='font-size'>
            <p className='fw-bold text-center'>
              {nombre}
            </p>
            <Link href={`productos/[id]`} as={`productos/${id}`} className='text-center d-block  fw-bold stretched-link  w-100 ' style={{ color: '#105b72c2', textDecoration: 'none' }}> 
                  {formatearDinero(precio) + ' kg'}
            </Link>

        </Card.Body>
      </Card>

    </CardStyle>

  )
}
