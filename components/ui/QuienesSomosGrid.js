import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const QuienesSomosGrid = () => {
  return (
    <section className='bg-light text-center text-sm-star' border id='home'  >
        <div className='container'>
            <Row>
                <Col md = {12} xl = {6} className='d-flex justify-content-center justify-content-xl-end'>
                    <div className='w-75'>
                        <h3 className='my-2 display-3'>Los Mejores Productos</h3>
                        <p className='lead my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus faucibus, rutrum ligula suscipit, aliquet mi. Donec imperdiet id ex id fermentum. Pellentesque finibus metus non hendrerit egestas. Ut congue mi a sem congue tristique. Praesent ultricies ante mi, lacinia convallis ipsum auctor et. Donec facilisis faucibus velit, id pharetra velit aliquam non. Ut ipsum turpis, elementum ut mauris quis, laoreet varius orci. Vivamus pellentesque nisl ut dui laoreet egestas. Proin ut rutrum diam, nec iaculis sapien. Morbi condimentum mi sit amet accumsan dapibus. Fusce eu maximus metus.</p>
                    </div>
                </Col>
                <Col className='py-5 text-center mt-5'>
                    <img
                        className='img-fluid' style={{ marginLeft: '5%'}}
                        src={"/assets/about/sucursal1.jpg"}
                        width={400}
                        height={400}
                    />
                </Col>
            </Row>
            <Row>
                <Col md = {12} xl = {6} className='py-5 mt-5'>
                    <img
                        className='img-fluid' style={{ marginLeft: '5%'}}
                        src={"/assets/about/sucursal2.jpg"}
                        width={400}
                        height={400}
                    />
                </Col>
                <Col className='py-5'>
                    <div>
                        <h3 className='my-2 display-3'>Los Mejores Productos</h3>
                        <p className='lead my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lacus faucibus, rutrum ligula suscipit, aliquet mi. Donec imperdiet id ex id fermentum. Pellentesque finibus metus non hendrerit egestas. Ut congue mi a sem congue tristique. Praesent ultricies ante mi, lacinia convallis ipsum auctor et. Donec facilisis faucibus velit, id pharetra velit aliquam non. Ut ipsum turpis, elementum ut mauris quis, laoreet varius orci. Vivamus pellentesque nisl ut dui laoreet egestas. Proin ut rutrum diam, nec iaculis sapien. Morbi condimentum mi sit amet accumsan dapibus. Fusce eu maximus metus.</p>
                    </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}
