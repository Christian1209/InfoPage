import styled from '@emotion/styled';
import React from 'react'
import { desktop, laptop, mobile, tablet } from '../../helpers/mediaQuerys';
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
   height: 79vh;
   `)};

   ${desktop(css`
   height: 85vh;
   `)};
    
    background-color: #0a1118;
    overflow: hidden;
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
    z-index: 1;
`;


export const InicioHero = () => {
  return (
    <Hero >
        <HeroOverlay>
            <HeroImage
              src="/assets/inicio/hero1.jpg"
              alt="Second slide"
              >

            </HeroImage>
        </HeroOverlay>
    </Hero>
  )
}
