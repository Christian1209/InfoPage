import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const HeroSection = () => {
  return (
    <section className='bg-dark text-light text-center text-sm-start h-100 w-100' border id='home'  style={{ marginBottom: '5%', height: '90vh',}}>
        <div className='container' >
        <h1 className='display-2 fw-bold text-center px-5'>Contamos Con Todo Lo Que Necesitas !</h1>
            <div className='d-sm-flex align-items-center'>
                <Row>
                    <Col md = {12} xl = {6}>
                        <div>
                            <h3 className='my-2 display-3'>Los Mejores Productos</h3>
                            <p className='lead my-4' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus faucibus, rutrum ligula suscipit, aliquet mi. Donec imperdiet id ex id fermentum. Pellentesque finibus metus non hendrerit egestas. Ut congue mi a sem congue tristique. Praesent ultricies ante mi, lacinia convallis ipsum auctor et. Donec facilisis faucibus velit, id pharetra velit aliquam non. Ut ipsum turpis, elementum ut mauris quis, laoreet varius orci. Vivamus pellentesque nisl ut dui laoreet egestas. Proin ut rutrum diam, nec iaculis sapien. Morbi condimentum mi sit amet accumsan dapibus. Fusce eu maximus metus.</p>
                        </div>
                    </Col>
                    <Col className='py-5'>
                        <Image
                            className='img-fluid' style={{ marginLeft: '5%'}}
                            src={"/assets/img/asada.jpg"}
                            width={600}
                            height={600}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    </section>
  )
}
