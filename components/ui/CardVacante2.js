import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { HiLocationMarker } from "react-icons/hi";
import { RiCellphoneLine } from "react-icons/ri";

const CardVacante2 = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <div className="px-2">
                    <RiCellphoneLine size={35} /> {/* Utiliza el componente HiLocationMarker */}

                  </div>
                </Col>
                <Col xs={10} className="text-end">
                  <h5 >22/06/2023</h5> {/* Reemplaza "Fecha" por la fecha que deseas mostrar */}
                </Col>
                <h5 className='mt-4 fs-5 fw-bold mb-0' style={{ color: '#D4AF37'}}>Telefonista</h5> {/* Reemplaza "Título" por el título de la card */}
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
                          <HiLocationMarker size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '3%'}}>
                          Componente 1 {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <span className="mr-5">
                          <HiLocationMarker size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '3%'}}>
                          Componente 1 {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <span className="mr-5">
                          <HiLocationMarker size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '3%'}}>
                          Componente 1 {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                      </div>
                    </li>
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

export default CardVacante2;