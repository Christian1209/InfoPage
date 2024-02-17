import React, { useEffect, useState } from 'react'
import { PageContext } from './PageContext'
import axios from 'axios';
import { Categoria } from '../components/ui/Categoria';


export const PageProvider = ({children}) => {

  const [sucursal, setSucursal] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({})
  const [nav1Actual, setNav1Actual] = useState(1);
  const [nav2Actual, setNav2Actual] = useState(1);
  const [vacantes, setVacantes] = useState({})

  const obtenerCategorias = async () => {
    const {data} = await axios('/api/categorias');
    setCategorias(data);
  } 

  const obtenerVacantes = async () => {
    const {data} = await axios('/api/vacantes');
    setVacantes(data);
  } 

  useEffect(()=>{
    obtenerCategorias()
  }, [])

  useEffect(()=>{
    obtenerVacantes()
  }, [])

  useEffect(()=>{
    setCategoriaActual(categorias[0]);
  }, [categorias])


  const handleClickCategoria = id => {
    const categoria = categorias.filter(cat => cat.id === id);
    setCategoriaActual(categoria[0]);
  }


  return (
    <PageContext.Provider value = {{sucursal,setSucursal,categorias,handleClickCategoria, categoriaActual, vacantes, nav1Actual, setNav1Actual, nav2Actual, setNav2Actual}}>
        {children}
    </PageContext.Provider>

  )
}
