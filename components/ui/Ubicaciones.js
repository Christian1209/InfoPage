import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Ubicacion } from './Ubicacion';


export const Ubicaciones = () => {
    return (
        <Container >
          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row>
            <Col xs={6} md={4}>
                <Ubicacion/>
            </Col>
            <Col xs={6} md={4}>
                <Ubicacion/>
            </Col>
            <Col xs={6} md={4}>
                <Ubicacion/>
            </Col>
            <Col xs={6} md={4}>
                <Ubicacion/>
            </Col>
            <Col xs={6} md={4}>
                <Ubicacion/>
            </Col>
            <Col xs={6} md={4}>
                <Ubicacion/>
            </Col>
            <Col xs={6} md={4}>
                <Ubicacion/>
            </Col>
          </Row>
        </Container>
      );
}
