import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { HiLocationMarker } from "react-icons/hi";
import { RiKnifeLine } from "react-icons/ri";
import { CiClock1, CiShop } from "react-icons/ci";
import Link from 'next/link';
import { TransformaIcono } from '../../helpers/TransformaIcono';

const CardVacante = ({vacante}) => {

  const {id, area, turno, ubicacion,  titulo} = vacante;
  
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <div className="px-2">
                    <TransformaIcono numero = {vacante.icono} ampliada= {false}/> {/* Utiliza el componente HiLocationMarker */}

                  </div>
                </Col>
                <Col xs={10} className="text-end">
                  <p >{vacante.publicacion.slice(0,10)}</p> {/* Reemplaza "Fecha" por la fecha que deseas mostrar */}
                </Col>
                <h5 className='mt-4 fs-5 fw-bold mb-0' style={{ color: '#D4AF37'}}>{titulo}</h5> {/* Reemplaza "Título" por el título de la card */}
              </Row>
              <hr />
              <Row>
                <Col>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ul>
                    <li>
                      <div className="d-flex align-items-center">
                        <span className="mr-5">
                          <CiShop size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '3%'}}>
                          AREA: {area} {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <span className="mr-5">
                          <CiClock1 size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '3%'}}>
                          TURNO: {turno} {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <span className="mr-5">
                          <HiLocationMarker size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '3%'}}>
                          {ubicacion} {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                      </div>
                    </li>
                    <div className='text-end' >
                      <Link className='btn btn-outline-warning '  href={`bolsaDeTrabajo/[id]`} as={`bolsaDeTrabajo/${id}`}   >Ver mas...</Link>{' '}
                    </div>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardVacante;