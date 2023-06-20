import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled';


const NavMenu = styled.div`
    .nav-link {
        &:hover {
            text-decoration: underline;
        }
    }
`;

//style={{ backgroundImage:`url(/assets/img/bgCortes.jpg)`}}

export const Navegacion = () => {
  return (
    <nav class="navbar navbar-expand-lg pb-0 mb-0 lg navbar-dark bg-dark"  >
        <div class="container-fluid  mt-3 pb-3 ">
            <div class= "px-5 img-fluid" > 
                <img 
                src="/assets/img/assets.jpg"
                width="200"
                height="100"/>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse pl-5"  id = "menu"  >
                <ul class="navbar-nav me-auto my-2 my-lg-0 fs-2 fw-bold  ">
                    <li class="nav-item px-3">
                        <NavMenu>
                            <Link class="nav-link" href='/'>Grupo ICEA</Link>
                        </NavMenu>
                    </li>
                    <li class="nav-item px-3">
                        <NavMenu>
                            <Link class="nav-link" href='/Origen'>Origen</Link>
                        </NavMenu>
                    </li>
                    <li class="nav-item px-3">
                        <NavMenu>
                            <Link class="nav-link" href= "/Normandia">Normandia</Link>
                        </NavMenu>
                    </li>
                    <li class="nav-item px-3">
                        <NavMenu>
                            <Link class="nav-link" href='/Tonala'>Tonalá</Link>
                        </NavMenu>
                    </li>
                    <li class="nav-item px-3">
                        <NavMenu>
                            <Link class="nav-link" href='/DelCampo'>Del campo</Link>
                        </NavMenu>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
