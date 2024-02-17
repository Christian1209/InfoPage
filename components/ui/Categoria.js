import styled from '@emotion/styled';
import { IoIosArrowForward } from "react-icons/io";
import React from 'react'
import { PageContext } from '../../context/PageContext';
import { useContext } from 'react';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';


const Div = styled.div`
&:hover {
  background-color: #C5C5C5;
  
}  
`
const NavMenu = styled.div`
    .nav-link {
        &:hover {
            color: #fb7840;
        }
    }
`;



export const Categoria = ({categoria}) => {

    const {nombre, icono, id} = categoria;
    const {handleClickCategoria, categoriaActual} = useContext(PageContext);

  return (

      <Div  
      style={categoriaActual?.id === id ? { backgroundColor: '#C5C5C5'} : {backgroundColor: ''}}
      className={ 'border-bottom  w-100  position-relative'}
      >
        <div className='d-flex  py-3 w-100'>
            <NavMenu className='w-100'>
              <Row className='w-100'>
                <Col xs = {9}>
                  <Link href="#" onClick={()=>handleClickCategoria(id)} style={categoriaActual?.id === id ? { color: '#FFFFFF'} : {color:'' }} className={'px-5 nav-link text-decoration-none fs-5 stretched-link'} >
                    {nombre}
                  </Link>
                </Col>
                <Col xs = {3} style={{ paddingRight: '0px'}}>
                  <IoIosArrowForward size = {20} className='w-100 '/>
                </Col>
              </Row>
            </NavMenu>
        </div>
      </Div>
  )
}
