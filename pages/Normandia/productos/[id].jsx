import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../../context/PageContext';
import Layout from '../../../components/layout/Layout';
import { PageLayout } from '../../../components/layout/PageLayout';
import Image from 'next/image';
import { ProductoAmpliado } from '../../../components/ui/ProductoAmpliado';

export default function ProductoPage(){
 
   const {categorias} = useContext(PageContext);
   const [producto, setProducto] = useState({})
    //Routing para obteener el id actual.
    const router = useRouter();
    const {query:{id}} = router;
    useEffect(() => {
      if(id){
        for(var i = 0; i < categorias.length; i++){
          const categoria = categorias[i].productos.filter(producto => producto.id === parseInt(id));
          if(categoria.length > 0)
            setProducto(categoria[0]);
        }

      }

    }, [id])


  return (
    <>
        <Layout Sucursal = {'Origen'}> 
          <PageLayout/>
            <div className='d-flex justify-content-center w-100'>
              <ProductoAmpliado  imagen = {producto?.imagen} nombre = {producto?.nombre}  precio = {producto?.precio}/>
            </div>
        </Layout>
    </>

  )
}
