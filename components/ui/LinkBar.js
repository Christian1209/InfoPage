import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { MdDoubleArrow } from "react-icons/md";

export const LinkBar = () => {
  return (
    <Navbar  >
        <Container>
            <Nav className="me-auto">
                <Nav.Link className='fs-5' href="#home">Inicio</Nav.Link>
                <MdDoubleArrow className='mt-3'/>
                <Nav.Link className='fs-5'  href="#features">Productos</Nav.Link>
                <MdDoubleArrow className='mt-3'/>
                <Nav.Link className='fs-5'  href="#pricing">Res</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}
