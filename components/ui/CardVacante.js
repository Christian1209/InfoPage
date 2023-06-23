import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { HiLocationMarker } from "react-icons/hi";
import { RiKnifeLine } from "react-icons/ri";
import { CiClock1, CiShop } from "react-icons/ci";

const CardVacante = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <div className="px-2">
                    <RiKnifeLine size={35} /> {/* Utiliza el componente HiLocationMarker */}

                  </div>
                </Col>
                <Col xs={10} className="text-end">
                  <p >22/06/2023</p> {/* Reemplaza "Fecha" por la fecha que deseas mostrar */}
                </Col>
                <h5 className='mt-4 fs-5 fw-bold mb-0' style={{ color: '#D4AF37'}}>Tablajero Para Mostrador</h5> {/* Reemplaza "Título" por el título de la card */}
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
                          AREA: Cremería {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <span className="mr-5">
                          <CiClock1 size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '3%'}}>
                          TURNO: Matutino {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <span className="mr-5">
                          <HiLocationMarker size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '3%'}}>
                          AV.PRESA OSORIO 3212 {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                      </div>
                    </li>
                    <div className='text-end'>
                      <Button variant="outline-warning" className=''>Ver mas...</Button>{' '}
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