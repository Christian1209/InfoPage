import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';
import styled from '@emotion/styled';
 
const UbicacionStyle = styled.div`
.card-hover {
    transition: all 0.3s;
    &:hover {
        transform: scale(1.50);
    } 
}
`;


export const Formulario = () => {
 
  return (
    <Row className='mb-5'>
        <Col md={12} xl={6}>
                <img 
                className='img-fluid'
                src="/assets/img/contact.jpg"
                />
        </Col>
        <Col>
            <div className="container align-items-center py-5 mt-5 px-5">
                <form>
                    <div className="form-group">
                    <label htmlFor="nombre" className='py-1 fs-4 fw-bold'>Nombre:</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email" className='py-1 fs-4 fw-bold'>Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Ingrese su email" />
                    </div>
                    <div className="form-group pb-3">
                    <label htmlFor="mensaje" className='py-1 fs-4 fw-bold'>Mensaje:</label>
                    <textarea className="form-control" id="mensaje" rows="3" placeholder="Ingrese su mensaje"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary px-5">Enviar</button>
                </form>
            </div>
            <h2 className='px-5 mt-4'>O Contáctanos por Whatsapp / Facebook</h2>
            <div className='d-flex justify-content-center mt-5'>
                <UbicacionStyle className = "px-5">
                    <SocialIcon className='card-hover'  url="https://api.whatsapp.com/"  style={{ height: 99, width: 99 }} />
                </UbicacionStyle>
                <UbicacionStyle className='px-5'>
                    <SocialIcon  className='card-hover' url="https://www.facebook.com/"   style={{ height: 99, width: 99 }}/>
                </UbicacionStyle>


            </div>

        </Col>

    </Row>

  )
}
