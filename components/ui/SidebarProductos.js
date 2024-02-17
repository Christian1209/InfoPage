import React from 'react'
import { useContext } from 'react';
import { PageContext } from '../../context/PageContext';
import { Categoria } from './Categoria';

export const SidebarProductos = () => {
  const {categorias} = useContext(PageContext);

  return (
    <>
      <nav >
        {categorias.map(categoria => (
          <Categoria
            key = {categoria.id}
            categoria = {categoria}
          />
        ))}
      </nav>
    
    </>
  )
}
