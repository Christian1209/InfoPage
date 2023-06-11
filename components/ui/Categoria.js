import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react'
import { PageContext } from '../../context/PageContext';
import { useContext } from 'react';

const Div = styled.div`
&:hover {
  background-color: #105b72c2;
}
`

export const Categoria = ({categoria}) => {

    const {nombre, icono, id} = categoria;
    const {handleClickCategoria, categoriaActual} = useContext(PageContext);

  return (

      <Div  
      style={categoriaActual?.id === id ? { backgroundColor: '#105b72c2'} : {backgroundColor: ''}}
      className={ 'border px-5  position-relative'}
      >
        <div className='d-flex justify-content-around w-full px-5 py-3'>
            <Image
                width={110}
                height={110}
                src={`/assets/img/icono_${icono}.jpg`}
                alt = "Imagen Icono"
                className='ml-5 img-fluid '

            />
            <div className='mt-5 w-50 px-3'> 
              <a href="#" onClick={()=>handleClickCategoria(id)} className='link-dark text-decoration-none fs-3 fw-bold stretched-link' >
                {nombre}
              </a>
            </div>

        </div>
      </Div>
  )
}
