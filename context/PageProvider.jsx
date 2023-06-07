import React, { useState } from 'react'
import { PageContext } from './PageContext'



export const PageProvider = ({children}) => {

  const [sucursal, setSucursal] = useState('');

  return (
    <PageContext.Provider value = {{sucursal,setSucursal}}>
        {children}
    </PageContext.Provider>

  )
}
