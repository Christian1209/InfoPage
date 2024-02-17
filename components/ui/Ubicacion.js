import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { HiLocationMarker } from "react-icons/hi";
import styled from '@emotion/styled';
import { ClassNames } from '@emotion/react';

const UbicacionStyle = styled.div`
.card-hover {
    transition: all 0.3s;
    &:hover {
        transform: scale(1.50);
    } 
}
`;

export const Ubicacion = () => {
  return (
    <div className='mt-4 border-end border-bottom border-start pb-3 pr-3'>
        <div className='d-flex justify-content-center'>
        <img 
                src="/assets/img/logo.jpg"
                width="50"
                height="50"/>
          <h3 className='mb-0 text-center px-2'>Carniceria Normandia</h3>
        </div>
        <p className='mb-0  text-center fs-3'>San lorenzo</p>
        <p className='mb-0  text-center px-1 fs-4'> <strong>Dirección:</strong>  Av Presa de Osorio #3212, Agustín Yáñez (La Florida), 44790 Guadalajara, Jal.</p>
        <p className='mb-0  text-center fs-5'> <strong>Horario:</strong> 06:00 - 20:00</p>
        <p className='mb-0  text-center fs-5'> <strong>Tel:</strong> 3311225566</p>
        <p className='mb-0  text-center fs-5'> <strong>Whatsapp:</strong> 3311225566</p>
        <UbicacionStyle className='d-flex justify-content-between px-5 pt-2'>
          <SocialIcon url="https://api.whatsapp.com/" className='card-hover' />
          <SocialIcon url="https://www.facebook.com/" className='card-hover' />
          <button className='card-hover' onClick={() => alert("Settings page")}>
                  <HiLocationMarker size="39px" />
          </button>
        </UbicacionStyle>
    </div>
  )
}
