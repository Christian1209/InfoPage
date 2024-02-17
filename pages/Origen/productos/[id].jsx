import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../../context/PageContext';
import Layout from '../../../components/layout/Layout';
import { PageLayout } from '../../../components/layout/PageLayout';
import { ProductoAmpliado } from '../../../components/ui/ProductoAmpliado';
import { Sugerencias } from '../../../components/ui/Sugerencias';
import { TiArrowBack } from 'react-icons/ti';
import { desktop, laptop, mobile, tablet } from '../../../helpers/mediaQuerys';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ReturnContainer = styled.div`

   ${mobile(css`
      padding: 0 1.1em;
      margin: 1 auto;
      width: 50%;
   `)};

   ${tablet(css`
      padding: 0 1.1em;
      margin: 1 auto;
      width: 35%;
   `)};

   ${laptop(css`
      padding: 0 6em;
      margin: 1 auto;
      width: 35%;
   `)};

   ${desktop(css`
      padding: 0 6em;
      margin: 1 auto;
      width: 35%;
   `)};
`;

export default function ProductoPage(){
 
   const {categorias} = useContext(PageContext);
   const [reload, setReload] = useState(0);
   const [producto, setProducto] = useState({})
   const [productosDiferentes, setProductosDiferentes] = useState({})

    //Routing para obteener el id actual.
    const router = useRouter();




    useEffect(() => {
      console.log('Router');
      console.log(router);

      if(!router.isReady)
        return;

      if(router.isReady){
        const {query:{id}} = router;
        for(var i = 0; i < categorias.length; i++){
          const producto = categorias[i].productos.filter(producto => producto.id == id);
          if(producto.length > 0){
            setProducto(producto[0]);
            
            const productosDiferentesArray = categorias[i].productos.filter(producto => producto.id != id);
            setProductosDiferentes(productosDiferentesArray);

          }
        }

      }

    }, [router.isReady, categorias])

    

    
    if (producto.nombre === undefined) {
      return <>Still loading...</>;
    }

  return (
    <>
        <Layout Sucursal = {'Origen'}> 
          <PageLayout/> 
          <ReturnContainer className='d-flex justify-content-end   '>
            <TiArrowBack className='btn' onClick={() => router.back()} size=  {100} />
            <p className= 'mt-5'>Regresar...</p>
          </ReturnContainer>
            <div className='d-flex justify-content-center w-100'>
              <ProductoAmpliado  imagen = {producto?.imagen} nombre = {producto?.nombre}  precio = {producto?.precio}/>
            </div>
            <p className='display-5 fw-bold mt-2 text-center'>
                Quizá te interesen...
              </p>
            <div className='d-flex justify-content-center mt- w-100'>

              <Sugerencias productosDiferentes = {productosDiferentes} />
            </div>
        </Layout>
    </>

  )
}
