import React, { useContext } from 'react'
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

  return (
    <>
      <nav class="navbar navbar-expand-md pt-0 ">
          <div class="container-fluid border bg-success">
              <div class="collapse navbar-collapse px-5"  id = "menu"  >
                  <ul class="navbar-nav me-auto fs-6 fw-bold px-3">
                      <li class="nav-item px-3">
                        <NavMenu>
                          <Link class="nav-link" href={`/${sucursal}/`}>INICIO</Link>
                        </NavMenu>
                      </li>
                      <li class="nav-item px-3">
                        <NavMenu>
                          <Link class="nav-link" href={`/${sucursal}/Productos`}>PRODUCTOS</Link>
                        </NavMenu>
                      </li>
                      <li class="nav-item px-3">
                        <NavMenu>
                          <Link class="nav-link" href={`/${sucursal}/BolsaDeTrabajo`}>BOLSA DE TRABAJO</Link>
                        </NavMenu>
                      </li>
                      <li class="nav-item px-3">
                        <NavMenu>
                          <Link class="nav-link " href={`/${sucursal}/QuienesSomos`}>QUIENES SOMOS</Link>
                        </NavMenu>
                      </li>

                  </ul>
              </div>
          </div>
      </nav>
  </>
  )
}
