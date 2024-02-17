import React, { useEffect, useState } from 'react'
import { UbicacionesCarrusel } from '../components/ui/UbicacionesCarrusel'
import { Ubicaciones } from '../components/ui/Ubicaciones'
import { useMediaQuery } from 'react-responsive'


export const UbicacionesHandler = () => {

    const [isMobile, setIsMobile] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    //Es necesario meter el conditional rendering dentro de un useEffect y apoyarnos de un UseState para que el render del server y del cliente coincidan en un primer momento 
    //Y no tener un error de hydration.
  
    useEffect(() => {
      setIsMobile(isTabletOrMobile);
    },[isTabletOrMobile])
    


    if(isMobile){
        return(
            <UbicacionesCarrusel/>
        )
    }
    else{
        return(
            <Ubicaciones/>
        )
    }
  return (
    <div>UbicacionesHandler</div>
  )
}
