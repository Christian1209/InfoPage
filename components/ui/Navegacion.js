import React, { useState } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useContext } from 'react';
import { PageContext } from '../../context/PageContext';



const NavMenu = styled.div`
    .nav-link {
        &:hover {
            text-decoration: underline;
        }
    }
`;

//style={{ backgroundImage:`url(/assets/img/bgCortes.jpg)`}}

export const Navegacion = () => {
    const {nav1Actual, setNav1Actual} = useContext(PageContext);
    const {nav2Actual, setNav2Actual} = useContext(PageContext);
    const handleSetSelected = (numero) =>{

       setNav1Actual(numero)
       setNav2Actual(1);

    }

    

  return (
    <nav class="navbar navbar-expand-lg pb-0 mb-0 lg navbar-dark bg-dark"  >
        <div class="container-fluid  ">
            <div class= "pb-2 px-5" > 
                <img 
                src="/assets/img/assets.jpg"
                width="200"
                height="70"/>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse pl-5"  id = "menu"  >
                <ul class="navbar-nav me-auto my-lg-0 fs-2 fw-bold  ">
                    <li class="nav-item px-3">
                        <NavMenu>
                            <Link style={nav1Actual === 1 ? { color: '#4169E1'} : {color: ''}} onClick={()=>handleSetSelected(1)} class="nav-link" href='/'>Grupo ICEA</Link>
                        </NavMenu>
                    </li>
                    <li class="nav-item px-3">
                        <NavMenu>
                            <Link style={nav1Actual === 2 ? { color: '#4169E1'} : {color: ''}} onClick={()=>handleSetSelected(2)}  class="nav-link" href='/Origen'>Origen</Link>
                        </NavMenu>
                    </li>
                    <li class="nav-item px-3">
                        <NavMenu>
                            <Link style={nav1Actual === 3 ? { color: '#4169E1'} : {color: ''}} onClick={()=>handleSetSelected(3)}   class="nav-link" href= "/Normandia">Normandia</Link>
                        </NavMenu>
                    </li>
                    <li class="nav-item px-3">
                        <NavMenu>
                            <Link style={nav1Actual === 4 ? { color: '#4169E1'} : {color: ''}} onClick={()=>handleSetSelected(4)}  class="nav-link" href='/Tonala'>Tonalá</Link>
                        </NavMenu>
                    </li>
                    <li class="nav-item px-3">
                        <NavMenu>
                            <Link style={nav1Actual === 5 ? { color: '#4169E1'} : {color: ''}} onClick={()=>handleSetSelected(5)}  class="nav-link" href='/DelCampo'>Del campo</Link>
                        </NavMenu>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
