import React from 'react'
import { PageContext } from '../../context/PageContext';
import { Producto } from './Producto';
import { useContext } from 'react';

export const ProductosGrid = () => {
    const {categoriaActual} = useContext(PageContext);
    console.log('Hey aqui ando');
    console.log(categoriaActual);
  return (
    <div className='d-flex px-5 pt-3' >
        {categoriaActual?.productos?.map(producto => (
            <Producto
            key={producto.id} producto = {producto}
            />
        ))}
    </div>
  )
}
