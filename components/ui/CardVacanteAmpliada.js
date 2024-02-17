import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { CiLocationOn } from "react-icons/ci";
import { RiKnifeLine } from "react-icons/ri";
import { CiClock1, CiShop } from "react-icons/ci";
import { FaRegCheckCircle, FaList} from "react-icons/fa";
import { BiListCheck } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from 'next/router';

import Link from 'next/link';
import { TransformaIcono } from '../../helpers/TransformaIcono';

const CardVacanteAmpliada = ({vacante}) => {

  console.log('Estoy en vacante ampliada: ');
  console.log(vacante);
  let requisitos = [];
  
  if(vacante.requisito1 !== "")
    requisitos.push(vacante.requisito1);
    
  if(vacante.requisito2 !== "")
    requisitos.push(vacante.requisito2);

  if(vacante.requisito3 !== "")
    requisitos.push(vacante.requisito3);

  if(vacante.requisito4 !== "")
    requisitos.push(vacante.requisito4);

  if(vacante.requisito5 !== "")
    requisitos.push(vacante.requisito5);

  console.log('requisitos: ');
  console.log(requisitos);
  
  const router = useRouter()


  return (
    <Container className='mt-1 mb-5'>
          <div className='d-flex justify-content-start mb-1 w-50  '>
            <TiArrowBack className='btn' onClick={() => router.back()} size=  {100} />
            <p className= 'mt-5'>Regresar...</p>
          </div>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <div className="px-2">
                    <TransformaIcono numero = {vacante.icono} ampliada = {true}/> {/* Utiliza el componente HiLocationMarker */}

                  </div>
                </Col>
                <Col xs={10} className="text-end fs-5">
                  <p > Publicación: {vacante.publicacion.slice(0,10)}</p> {/* Reemplaza "Fecha" por la fecha que deseas mostrar */}
                </Col>
                <h5 className='mt-4 fs-4 fw-bold mb-0' style={{ color: '#D4AF37'}}>{vacante.titulo}</h5> {/* Reemplaza "Título" por el título de la card */}
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
                      <div className="d-flex align-items-center border-bottom">
                        <span className="mr-5">
                          <CiShop size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '2%'}}>
                          AREA:
                        </p>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '1%'}}>
                          {vacante.area}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center border-bottom">
                        <span className="mr-5">
                          <BsSun size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '2%'}}>
                          TURNO: 
                        </p>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '1%'}}>
                          {vacante.turno}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center border-bottom">
                        <span className="mr-5">
                          <CiClock1 size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '2%'}}>
                          HORARIO: {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '1%'}}>
                          {vacante.horario} {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center border-bottom">
                        <span className="mr-5">
                          <CiLocationOn size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '2%'}}>
                          UBICACIÓN: {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '1%'}}>
                          {vacante.ubicacion} {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center border-bottom">
                        <span className="mr-5">
                          <AiOutlineDollar size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '2%'}}>
                          SUELDO APROXIMADO: {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '1%'}}>
                          {vacante.sueldo} {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center border-bottom">
                        <span className="mr-5">
                          <MdOutlineDescription size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 'style={{ marginLeft: '2%'}}>
                          DESCRIPCION: {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                        <p className='fs-6 mt-3 ' style={{ marginLeft: '1.5%'}}>
                          {vacante.descripcion}  {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center border-bottom">
                        <span className="mr-5">
                          <BiListCheck size={24} /> {/* Utiliza el componente HiLocationMarker */}
                        </span>
                        <p className='fs-6 mt-3 ' style={{ marginLeft: '2%'}}>
                          REQUISITOS: {/* Reemplaza "Componente 1" por el texto del primer componente */}
                        </p>
                        <Row className='w-75 mt-3' >
                          {requisitos.map(requisito => (
                            <Col className='d-flex align-items-center' xs = {12} md ={4} style={{ marginLeft: '3%', marginBottom: '0%'}}>
                              <FaRegCheckCircle className='pb-3' size=  {28} /><p>{requisito}</p>
                            </Col>
                          ))}
                        </Row>

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

export default CardVacanteAmpliada;