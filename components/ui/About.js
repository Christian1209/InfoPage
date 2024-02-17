import styled from '@emotion/styled';
import React from 'react'
import { Image } from 'react-bootstrap'
import { desktop, laptop, mobile, tablet } from '../../helpers/mediaQuerys';
import { css } from '@emotion/react';

const Content = styled.p`
  padding: 0 2rem ;
  ${mobile(css` 
    font-size: 1.1rem;
    padding: 0 .3rem ;
  `)};

  ${tablet(css`
  font-size: 1.2rem;
  `)};

  ${laptop(css`
  font-size: 1.2rem;
  `)};

  ${desktop(css`
    font-size: 1.4rem;
  `)};
`;


export const About = () => {
  return (
    <div className='d-flex w-100 mt-5 align-items-center bg-dark'>
        <div className='w-100 px-5 position-relative bg-light'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 mb-4 mb-lg-0'>
                        <div className='text-center'>
                        <Image
                            className='img-fluid py-5'  style={{ marginLeft: '5%'}}
                            src={"/assets/img/about.jpg"}
                            width={600}
                            height={600}
                        />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 '>
                        <h2 className='fs-1 text-muted  border-start  px-3 border-dark pt-3'>
                            CONOCE MAS DE NOSOTROS.
                        </h2>
                         <div className='mb-2'></div>
                        <div className='col-12 col-md-4 mb-2 mb-md-0 w-100'>
                            <div>
                                <Content className=' mx-3 w-100 pb-5'>
"¡Bienvenidos a la familia de Grupo ICEA! Nos enorgullecemos de ser tu destino confiable para la mejor selección de carne en todas nuestras sucursales. Con 7 sucursales ubicadas en Jalisco, estamos comprometidos en ofrecerte cortes frescos y de calidad superior en cada visita. Nuestro equipo de expertos carniceros se esfuerza por brindarte atención personalizada y asesoramiento en la elección y preparación de la carne perfecta para cada ocasión.   
                                </Content>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
