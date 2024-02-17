import styled from '@emotion/styled';
import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { desktop, laptop, mobile, tablet } from '../../helpers/mediaQuerys';
import { css } from '@emotion/react';



const Title = styled.h4`
  ${mobile(css` 
  font-size: 2.0rem;
  `)};

  ${tablet(css`
  font-size: 2.2rem;
  `)};

  ${laptop(css`
  font-size: 3.2rem;
  `)};

  ${desktop(css`
    font-size: 3.2rem;
  `)};
`;

const Content = styled.p`
  padding: 0 2rem ;
  ${mobile(css` 
    font-size: 1.2rem;
    padding: 0 .3rem ;
  `)};

  ${tablet(css`
  font-size: 1.2rem;
  `)};

  ${laptop(css`
  font-size: 1.2rem;
  `)};

  ${desktop(css`
    font-size: 1.2rem;
  `)};
`;


export const HeroSectionPage = () => {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='py-3 text-center bg-image'
        style={{       backgroundImage: "url('/assets/img/asada.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}
      >
        <div className='mask h-100 w-75' style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <Title className='mb-3 display-1 fw-bold'>SOMOS CARNICERIA EL ORIGEN!</Title>
              <Content className='mb-3 '>"¡Bienvenidos a nuestra carnicería de calidad premium! En El Origen, nos enorgullecemos de ofrecer los cortes más frescos y deliciosos para satisfacer tus necesidades culinarias. Nuestra pasión por la carne de primera calidad nos impulsa a seleccionar cuidadosamente cada pieza para garantizar que recibas solo lo mejor."!</Content>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}