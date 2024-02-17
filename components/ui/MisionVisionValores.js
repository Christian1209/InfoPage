import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const MisionVisionValores = () => {
  return (
    <div className='d-flex justify-content-center bg-light ' >
        <section className='mb-3 mt-3'>
            <Row>
                <Col  xs = {6} sm = {6} md = {4}   className='px-3  '>
                    <Row>
                        <Col className='d-flex justify-content-center' xs = {12}>
                            <Image
                                className='img-fluid'
                                src={"/assets/inicio/vision.png"}
                                width={100}
                                height={100}
                            />
                        </Col>
                        <Col>
                            <h6 className='text-center fw-bold'>VISION</h6>
                            <p className='text-center fw-bold'>Nuestra visión en Grupo Icea es convertirnos en el referente indiscutible en la industria de la carne, reconocidos no solo por la calidad de nuestros productos, sino también por nuestra innovación, compromiso con la sostenibilidad y excelencia en el servicio al cliente.</p>
                        </Col>
                    </Row>

                </Col>
                <Col  xs = {6} sm = {6} md = {4}  className='px-3'>
                    <Row>
                        <Col className='d-flex justify-content-center' xs = {12}>
                            <Image
                                className='img-fluid py-2'
                                src={"/assets/inicio/mision.png"}
                                width={170}
                                height={100}
                            />
                        </Col>
                        <Col >
                            <h6 className='text-center fw-bold'>MISION</h6>
                            <p className='text-center fw-bold'>En Grupo Icea, nuestra misión es satisfacer las necesidades de nuestros clientes proporcionando productos cárnicos de la más alta calidad y servicios excepcionales en todas nuestras ubicaciones. Nos comprometemos a ser el destino preferido para aquellos que buscan cortes frescos, variados y deliciosos para sus comidas.</p>
                        </Col>
                    </Row>

                </Col>
                <Col  xs = {12}  sm = {12} md = {4} className='px-3 '>
                    <Row>
                        <Col className='d-flex justify-content-center' xs = {12}>
                            <Image
                                className='img-fluid py-2'
                                src={"/assets/inicio/valores.png"}
                                width={95}
                                height={100}
                            />
                        </Col>
                        <Col >
                            <h6 className='text-center fw-bold'>VALORES</h6>
                            <ul className=' fw-bold'>
                                <li>Calidad: Nos esforzamos por ofrecer productos de la más alta calidad, desde la selección hasta el servicio al cliente.</li>
                                <li>Integridad: Actuamos con honestidad y transparencia en todas nuestras interacciones.</li>
                                <li>Pasión: Compartimos una pasión por la carne y la excelencia culinaria.</li>
                                <li>Comunidad: Respetamos y apoyamos a las comunidades en las que operamos.</li>
                                <li>Innovación: Abrazamos la innovación para mejorar constantemente.</li>
                                <li>Sostenibilidad: Nos comprometemos con prácticas responsables para cuidar el medio ambiente."</li>
                            </ul>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </section>
    </div>

  )
}
