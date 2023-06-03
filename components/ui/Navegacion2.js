import React, { useState } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled';

const NavMenu = styled.div`
    .nav-link {
        &:hover {
            color: #fb7840;
        }
    }
`;



export const Navegacion2 = () => {

  return (
    <>
      <nav class="navbar navbar-expand-md pt-0 ">
          <div class="container-fluid border bg-success">
              <div class="collapse navbar-collapse px-5"  id = "menu"  >
                  <ul class="navbar-nav me-auto fs-6 fw-bold px-3">
                      <li class="nav-item px-3">
                        <NavMenu>
                          <Link class="nav-link" href='#'>PRODUCTOS</Link>
                        </NavMenu>
                      </li>
                      <li class="nav-item px-3">
                        <NavMenu>
                              <Link class="nav-link" href= "#">PROMOCIONES</Link>
                        </NavMenu>
                      </li>
                      <li class="nav-item px-3">
                        <NavMenu>
                          <Link class="nav-link " href='#'>QUIENES SOMOS</Link>
                        </NavMenu>
                      </li>
                      <li class="nav-item px-3">
                        <NavMenu>
                          <Link class="nav-link" href='#'>BOLSA DE TRABAJO</Link>
                        </NavMenu>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  </>
  )
}
