import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../../context/PageContext';
import Layout from '../../../components/layout/Layout';
import { PageLayout } from '../../../components/layout/PageLayout';
import Image from 'next/image';
import { ProductoAmpliado } from '../../../components/ui/ProductoAmpliado';
import { Sugerencias } from '../../../components/ui/Sugerencias';

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
            <div className='d-flex justify-content-center w-100'>
              <ProductoAmpliado  imagen = {producto?.imagen} nombre = {producto?.nombre}  precio = {producto?.precio}/>
            </div>
            <p className='display-5 fw-bold text-center'>
                Quizá te interesen...
              </p>
            <div className='d-flex justify-content-center w-100'>

              <Sugerencias productosDiferentes = {productosDiferentes} />
            </div>
        </Layout>
    </>

  )
}
