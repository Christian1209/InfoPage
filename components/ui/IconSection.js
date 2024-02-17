import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const IconSection = () => {
  return (
    <div className='d-flex justify-content-center bg-light ' style={{ marginBottom: '5%'}}>
        <section className='new'>
            <Row>
            <Col>
                    <Image
                        className='img-fluid'
                        src={"/assets/icons/cerdo.png"}
                        width={200}
                        height={200}
                    />
                    <h6 className='text-center fw-bold'>CERDO</h6>
            </Col>
            <Col>
                <Image
                    className='img-fluid'
                    src={"/assets/icons/pollo.png"}
                    width={200}
                    height={200}
                />
                <h6 className='text-center fw-bold'>POLLO</h6>
            </Col>
            <Col>
                <Image
                    className='img-fluid'
                    src={"/assets/icons/res.png"}
                    width={200}
                    height={200}
                />
                <h6 className='text-center fw-bold'>RES</h6>
            </Col>
            </Row>
        </section>
    </div>

  )
}
