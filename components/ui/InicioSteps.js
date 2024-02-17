import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { aux } from '../../helpers/mediaQuerys';


const Steps = styled.section`
    pading-bottom: 40px;
    padding-top: 50px;
    ${aux(css`
        padding-top: 20px;
        padding-bottom: 80px;
   `)};
    .steps-thumbnail{
        height: auto;
        object-fit: cover;
        margin: 0 auto;
        ${aux(css`
            height: auto;
       `)};
    }
    
    .steps-width{
        max-width: 456px;
        margin: 0 auto;
    }

    

`;



export const InicioSteps = () => {
  return (
    <>
        <Steps className='d-flex justify-content-center'>
            <Row>
                <Col sm={12} md={6} d-md-flex justify-content-md-ceneter >
                    <img  src="/assets/inicio/mango.jpg" alt='mango' className='img-fluid pb-4 ml-5 steps-thumbnail'
                    width="553" height="746" loading='lazy'/>
                </Col>

                <Col sm={12} md = {6} className='align-self-center justify-content-md-center'>
                    <div className='steps-width'>
                        <span>01</span>
                            <h1 className='h2 mb-4 px-5'>Los mejores productos</h1>
                            <p className='mb-4 px-4'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus orci nec justo fringilla, non gravida justo tincidunt. Sed at mattis quam. Nunc id arcu quis tortor cursus ultricies. Suspendisse sit amet massa at dui finibus tincidunt. Sed tristique dui vel elit consectetur, nec varius tortor consectetur. Fusce consectetur tortor vel enim vulputate, a tincidunt lectus fringilla. Praesent feugiat, turpis non imperdiet eleifend, justo augue tincidunt odio, a gravida purus eros et leo. Aenean elementum lacinia nulla, ut tempor nisi fermentum sit amet. Sed interdum, elit vel lacinia dapibus, mauris augue sodales odio, ut luctus ligula dolor sit amet lectus."</p>
                    </div>
                </Col>
            </Row>
        </Steps>
        <Steps className='d-flex justify-content-center' style={{background: '#fffdee'}}>
            <Row>
                <Col sm={12} md={6} d-md-flex  className='order-sm-1'>
                    <img  src="/assets/inicio/mango.jpg" alt='mango' className='img-fluid pb-4 steps-thumbnail'
                    width="553" height="746" loading='lazy'/>
                </Col>

                <Col sm={12} md = {6} className='align-self-center justify-content-md-center'>
                    <div className='steps-width'>
                        <span>01</span>
                            <h1 className='h2 mb-4 px-5'>Los mejores productos</h1>
                            <p className='mb-4 px-4'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus orci nec justo fringilla, non gravida justo tincidunt. Sed at mattis quam. Nunc id arcu quis tortor cursus ultricies. Suspendisse sit amet massa at dui finibus tincidunt. Sed tristique dui vel elit consectetur, nec varius tortor consectetur. Fusce consectetur tortor vel enim vulputate, a tincidunt lectus fringilla. Praesent feugiat, turpis non imperdiet eleifend, justo augue tincidunt odio, a gravida purus eros et leo. Aenean elementum lacinia nulla, ut tempor nisi fermentum sit amet. Sed interdum, elit vel lacinia dapibus, mauris augue sodales odio, ut luctus ligula dolor sit amet lectus."</p>
                    </div>
                </Col>
            </Row>
        </Steps>
    </>
  )
}
