import React, { useContext } from 'react'
import Link from 'next/link'
import { Header } from '../ui/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageContext } from '../../context/PageContext';
import Footer from '../ui/Footer';

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
        <Footer/>
    </>

  );
}

export default Layout;
