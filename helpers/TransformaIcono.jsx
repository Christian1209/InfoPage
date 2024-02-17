import React from 'react'
import { BsBasket, BsTelephone, BsTruck } from 'react-icons/bs'
import { MdOutlineSportsMotorsports } from 'react-icons/md'
import { RiComputerLine, RiKnifeLine } from 'react-icons/ri'

export const TransformaIcono = ({numero,ampliada}) => {

    let tamaño = 0;
    console.log('valor booleano');
    console.log(ampliada);
    console.log('valor num');
    console.log(numero);
    if(ampliada == 1)
        tamaño = 60;
    else
        tamaño = 35;

    if(numero === 1 )
        return(
            <RiKnifeLine size={tamaño} />
        )
    
    if(numero === 2)
        return(
            <BsTelephone size={tamaño} />
        )

    if(numero === 3)
        return(
            <RiComputerLine size={tamaño} />
        )

    if(numero === 4)
        return(
            <MdOutlineSportsMotorsports size={tamaño} />
        )

    if(numero === 5)
        return(
            <BsTruck size={tamaño} />
        )

    if(numero === 6)
        return(
            <BsBasket size={tamaño} />
        )



  return (
    <div>TransformaIcono {numero}</div>
  )
}
