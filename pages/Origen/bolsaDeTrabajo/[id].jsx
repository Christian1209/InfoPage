import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../../../context/PageContext';
import Layout from '../../../components/layout/Layout';
import { PageLayout } from '../../../components/layout/PageLayout';
import CardVacanteAmpliada from '../../../components/ui/CardVacanteAmpliada';

export default function VacantePage(){
 
   const {vacantes} = useContext(PageContext);

   const [vacante, setVacante] = useState({})

    //Routing para obteener el id actual.
    const router = useRouter();



  
    useEffect(() => {
      console.log('Router');
      console.log(router);

      if(!router.isReady)
        return;

      if(router.isReady){
        const {query:{id}} = router;
        console.log('Vacante: ');
        console.log(vacantes);
        console.log('ID: ');
        console.log(id);
        for(var i = 0; i < vacantes.length; i++){

          const vacante = vacantes.filter(vacante => vacante.id == id);
          if(vacante.length > 0){
            setVacante(vacante[0]);
          }

        }

      }

    }, [router.isReady, vacantes])

    

    
    if (vacante.id === undefined) {
      return <>Still loading...</>;
    }

  return (
    <>
        <Layout Sucursal = {'Origen'}> 
          <PageLayout/>
            <div className='d-flex justify-content-center w-100'>
              <CardVacanteAmpliada vacante = {vacante}/>
            </div>
        </Layout>
    </>

  )
}
