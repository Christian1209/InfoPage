import React, { useContext } from 'react'
import Link from 'next/link'
import { Header } from '../ui/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageContext } from '../../context/PageContext';

export const Layout = props => {
  const {sucursal, setSucursal} = useContext(PageContext);
  setSucursal(props.Sucursal);


  return (

    

    <>
        <Header/>
        <main>
            {props.children}
        </main>
        <h1>
            {props.Sucursal}
        </h1>
    </>

  );
}

export default Layout;
