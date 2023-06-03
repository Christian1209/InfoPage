import React from 'react'
import Link from 'next/link'
import { Header } from '../ui/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Layout = props => {
  return (
    <>
        <Header/>
        <main>
            {props.children}
        </main>
        <div>
          Info
        </div>
    </>

  );
}

export default Layout;
