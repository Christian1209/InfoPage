import styled from '@emotion/styled';
import React from 'react'
import { desktop, laptop, minAux, mobile, tablet } from '../../helpers/mediaQuerys';
import { css } from '@emotion/react';

const Hero = styled.div`
    position: relative;
    ${mobile(css` 
    height: 30vh;
   `)};

   ${tablet(css`
   height: 50vh;
   `)};

   ${laptop(css`
   height: 88vh;
   `)};

   ${desktop(css`
   height: 90vh;
   `)};
    
    background-color: #0a1118;
    overflow: hidden;

    .hero-content-width{
      max-width: 540px;
    }

    .hero-heading{
      ${minAux(css`
        font-size: 3.2rem;
      `)};
    }

    .hero-content {
      z-index: 1;
    }
    .custom-container {
      width: 100%;
     ${laptop(css`
        width: 1340px;
     `)};
  
     ${desktop(css`
        width: 1520px;
     `)};
      padding: 0 2rem ;
      margin: 0 auto;
    }
`;

const HeroImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: 100%;
    transform: translateX(-50%) translateY(-50%);
`;

const HeroOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #0a1118;
    opacity: 0.5;
    z-index: 1;
`;


export const InicioHeroIcea = () => {
  return (
    <Hero className='mb-5' >
        <HeroOverlay>
            <HeroImage
              src="/assets/inicio/hero1.jpg"
              alt="Second slide"
              >

            </HeroImage>
        </HeroOverlay>
        <div className='h-100 custom-container position-relative hero-content'>
          <div className='d-flex h-100 align-items-center hero-content-width'>
            <div className='text-white'>
              <h1 className='fw-bold mb-4 hero-heading'>"Bienvenido a Grupo ICEA"</h1>
              <p className='lead mb-4'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus orci nec justo fringilla."</p>
            </div>
          </div>
        </div>
    </Hero>
  )
}