import Image from 'next/image'
import React, { useContext } from 'react';
import { desktop, laptop, mobile, tablet } from '../../../helpers/mediaQuerys';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Card } from 'react-bootstrap';



  const CardStyle = styled.div`
  padding: 0% 6%;
 
  .card-hover {
      transition: all 0.3s;
      &:hover {
          transform: scale(1.04);
      }
  }
  .card-size{

    ${mobile(css`
      width: 11rem;
      height: 11rem;
    `)};
    ${tablet(css`
      width: 11rem;
      height: 11em;
    `)};

    ${laptop(css`
      width: 14rem;
      height: 12rem;
    `)};

    ${desktop(css`
      width: 14rem;
      height: 12rem;
    `)};
  }

  .font-size{

    ${mobile(css`
    font-size: 1.4rem;
    `)};
    ${tablet(css`
    font-size: 1.4rem;
    `)};

    ${laptop(css`
    font-size: 1.5rem;
    `)};

    ${desktop(css`
    font-size: 1.5rem;
    `)};
  }
`;

export const CategoriaCard = (categoria) => {

  
  const {id, nombre, icono} = categoria; 

  return (
    <CardStyle className='mt-4 mb-1'>
      <Card className='position-relative border-dark  card-hover card-size' >
        <Card.Img variant="top" className='hover-zoom' width={30} height={100} src={`/assets/categorias/res.jpg`}/>
        <Card.Body className='font-size'>
            <p className='fw-bold text-center text-decoration-underline'>
              Res
            </p>
        </Card.Body>
      </Card>
    </CardStyle>

  ) 
}
