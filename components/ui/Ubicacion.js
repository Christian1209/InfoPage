import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { HiLocationMarker } from "react-icons/hi";

export const Ubicacion = () => {
  return (
    <div className='mt-4 border-end border-bottom pb-3 pr-3'>
        <h3 className='mb-0 text-center'>Carniceria Normandia</h3>
        <p className='mb-0  text-center fs-3'>San lorenzo</p>
        <p className='mb-0  text-center px-1 fs-4'> <strong>Dirección:</strong>  Av Presa de Osorio #3212, Agustín Yáñez (La Florida), 44790 Guadalajara, Jal.</p>
        <p className='mb-0  text-center fs-5'> <strong>Horario:</strong> 06:00 - 20:00</p>
        <p className='mb-0  text-center fs-5'> <strong>Tel:</strong> 3311225566</p>
        <div className='d-flex justify-content-md-between px-5 pt-2'>
          <SocialIcon url="https://api.whatsapp.com/" />
          <SocialIcon url="https://www.facebook.com/" />
          <button onClick={() => alert("Settings page")}>
                  <HiLocationMarker size="39px" />
          </button>
        </div>
    </div>
  )
}
