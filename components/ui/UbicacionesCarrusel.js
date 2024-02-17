import React from 'react'
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Carousel from 'react-bootstrap/Carousel';
import { Ubicacion } from './Ubicacion';

const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "3500px",
  desktop: "7060px",
}
export const mobile = (inner) => css`
  @media (max-width: ${size.mobile}) {
    ${inner};
  }
`;
export const tablet= (inner) => css`
  @media (max-width: ${size.tablet})and (min-width:${size.mobile}) {
    ${inner};
  }
`;
export const laptop= (inner) => css`
  @media (max-width: ${size.laptop}) and (min-width:${size.tablet}) {
    ${inner};
  }
`;

export const desktop= (inner) => css`
  @media (max-width: ${size.desktop}) and (min-width:${size.laptop}) {
    ${inner};
  }
`;

const CarruselContainer = styled.div`

   ${mobile(css`
    width: 93%;
    margin-top: 2%;
   `)};

   ${tablet(css`
   width: 93%;
   margin-top: 2%;
   `)};

   ${laptop(css`
   width: 80%;
   margin-top: 1%;
   `)};

   ${desktop(css`
   width: 80%;
   margin-top: 1%;
   `)};
`;

export const UbicacionesCarrusel = () => {
  return (
    <CarruselContainer>
      <Carousel variant="dark">
        <Carousel.Item className='py-5'>  
          <Ubicacion/>
        </Carousel.Item>
        <Carousel.Item className='py-5'>  
          <Ubicacion/>
        </Carousel.Item>
        <Carousel.Item className='py-5'>  
          <Ubicacion/>
        </Carousel.Item>
        <Carousel.Item className='py-5'>  
          <Ubicacion/>
        </Carousel.Item>
      </Carousel>
    </CarruselContainer>
  )
}
