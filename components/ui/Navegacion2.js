import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled';
import { PageContext } from '../../context/PageContext';
const NavMenu = styled.div`
    .nav-link {
        &:hover {
            color: #fb7840;
        }
    }
`;



export const Navegacion2 = () => {

  const {sucursal} = useContext(PageContext);
  const {nav2Actual, setNav2Actual} = useContext(PageContext);

  const handleSetSelected = (numero) =>{

     setNav2Actual(numero)

  }
  

  return (
    <>
      <nav class="navbar navbar-expand-md pt-0  navbar-light bg-light">
          <div class="container-fluid  ">
              <div class="collapse navbar-collapse px-5"  id = "menu"  >
                  <ul class="navbar-nav me-auto fs-4 fw-bold px-3">
                      <li class="nav-item px-3">
                        <NavMenu>
                          <Link style={nav2Actual === 1 ? { color: '#fb7840'} : {color: ''}} onClick={()=>handleSetSelected(1)}  class="nav-link" href={`/${sucursal}/`}>INICIO</Link>
                        </NavMenu>
                      </li>
                      <li class="nav-item px-3">
                        <NavMenu>
                          <Link style={nav2Actual === 2 ? { color: '#fb7840'} : {color: ''}} onClick={()=>handleSetSelected(2)} class="nav-link" href={`/${sucursal}/Productos`}>PRODUCTOS</Link>
                        </NavMenu>
                      </li>
                      <li class="nav-item px-3">
                        <NavMenu>
                          <Link style={nav2Actual === 3 ? { color: '#fb7840'} : {color: ''}} onClick={()=>handleSetSelected(3)} class="nav-link" href={`/${sucursal}/BolsaDeTrabajo`}>BOLSA DE TRABAJO</Link>
                        </NavMenu>
                      </li>
                      <li class="nav-item px-3">
                        <NavMenu>
                          <Link style={nav2Actual === 4 ? { color: '#fb7840'} : {color: ''}} onClick={()=>handleSetSelected(4)} class="nav-link " href={`/${sucursal}/Contacto`}>CONTACTO</Link>
                        </NavMenu>
                      </li>
                      <li class="nav-item px-3">
                        <NavMenu>
                          <Link style={nav2Actual === 5 ? { color: '#fb7840'} : {color: ''}} onClick={()=>handleSetSelected(5)} class="nav-link " href={`/${sucursal}/QuienesSomos`}>QUIENES SOMOS</Link>
                        </NavMenu>
                      </li>

                  </ul>
              </div>
          </div>
      </nav>
  </>
  )
}
