import React from 'react'
import { PageLayout } from '../../components/layout/PageLayout'
import Layout from '../../components/layout/Layout'
import { CardVacantes } from '../../components/ui/CardVacantes'
import styled from '@emotion/styled';
import { desktop, laptop, mobile, tablet } from '../../helpers/mediaQuerys';
import { css } from '@emotion/react';


const Description = styled.h2`

   ${mobile(css`
      padding: 0 1.1em;
   `)};

   ${tablet(css`
      padding: 0 1.1em;
   `)};

   ${laptop(css`
      padding: 0 6em;
      margin: 1 auto;
      width: 1300px;
   `)};

   ${desktop(css`
      padding: 0 6em;
      margin: 1 auto;
      width: 1300px;
   `)};
`;


export default function OrigenBolsa(){
  return (
    <> 
        <Layout Sucursal = {'Origen'}> 
          <PageLayout/>
          <h1 className=' d-flex display-5 fw-bold mt-2 ' style={{ marginLeft: '12%'}}>UNETE A NUESTRO EQUIPO!</h1>
          <div className='w-100 d-flex '>
            <Description className=' fs-5  text-center mt-1' >(Descripcion)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus faucibus, rutrum ligula suscipit, aliquet mi. Donec imperdiet id ex id fermentum. Pellentesque finibus metus non hendrerit egestas. Ut congue mi a sem congue tristique. Praesent ultricies ante mi, lacinia convallis ipsum auctor et. </Description>
          </div>
          <CardVacantes/>
        </Layout>
    </>
  )
}