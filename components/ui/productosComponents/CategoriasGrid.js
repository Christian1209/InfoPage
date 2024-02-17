import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { CategoriaCard } from './CategoriaCard'
import { PageContext } from '../../../context/PageContext';

export const CategoriasGrid = () => {

  const {categorias} = useContext(PageContext);
    
  console.log('categorias');
  console.log(categorias);
  return (
    <Row>
      { Array.isArray(categorias) ? categorias?.map((categoria) => (
        <Col xs = {6} sm = {4}>
          <h1>Hola</h1>
        </Col>
      )) : ''}

    </Row>
  )
}
