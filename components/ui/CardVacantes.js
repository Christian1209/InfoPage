import React, { useContext } from 'react'
import CardVacante from './CardVacante'
import { Col, Row } from 'react-bootstrap'
import { PageContext } from '../../context/PageContext'
import styled from '@emotion/styled';
import { desktop, laptop, mobile, tablet } from '../../helpers/mediaQuerys';
import { css } from '@emotion/react';


const VacantesContainer = styled.div`

   ${mobile(css`
      padding: 0 0em;
   `)};

   ${tablet(css`
      padding: 0 0em;
   `)};

   ${laptop(css`
     padding: 0 3em;
   `)};

   ${desktop(css`
      padding: 0 10em;
   `)};
`;


export const CardVacantes = () => {

  const {vacantes} = useContext(PageContext);

  console.log(vacantes);

/*
            {vacantes?.map(vacante => (
              <Col className='mt-5'>
                <CardVacante2
                  key={producto.id}
                />
              </Col>
            ))}
*/

  return (
    <VacantesContainer className='d-flex justify-content-center pb-5 mb-2'>
        <div  className='d-flex w-100'>
          <Row style={{ marginLeft:'3rem', marginRight:'3rem'}} >
          {Array.isArray(vacantes) ? vacantes?.map(vacante => (
              <Col xs = {12} md = {6} lg = {4} xl = {3}  className='mt-5'>
                <CardVacante key={vacante.id} vacante={vacante}/>
              </Col>
            )): ''}
          </Row>
        </div>
    </VacantesContainer>

  )
}
