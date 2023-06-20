import React, { useContext, useEffect } from 'react'
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
        <Footer/>
    </>

  );
}

export default Layout;
