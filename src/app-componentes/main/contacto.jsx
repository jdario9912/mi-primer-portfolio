import React from 'react';
import TituloSection from '../componentes-generales/titulo-section';
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import Formulario from './contacto/formulario';

const Contacto = () => {
  return (
    <>
      <section className='fondo-section-oscuro section-standar' id='contacto'>
        <TituloSection titulo={ 'contacto' } icono={ BsFillEnvelopeOpenFill() } />
        <p className='mb-8 italic'>LLená el formulario, te respondo en breve.</p>
        <Formulario />
      </section>
    </>
  );
}

export default Contacto;
