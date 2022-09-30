import React from 'react';
import TituloSection from '../componentes-generales/titulo-section';
import { HiOutlineLightBulb } from "react-icons/hi";
import FormacionList from './formacion/comp-cont/formacion-list';

const Formacion = () => {
  return (
    <>
      <section className='fondo-section-claro section-standar md:px-16' id='formacion'>
        <TituloSection titulo={ 'formación  it' } icono={ HiOutlineLightBulb() } />
        <FormacionList />
      </section>
    </>
  );
}

export default Formacion;
