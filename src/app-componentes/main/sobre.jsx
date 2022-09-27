import React from 'react';
import { BsFillExclamationCircleFill } from "react-icons/bs";
import TituloSection from '../componentes-generales/titulo-section';
import InfoPersonal from './sobre/comp-contenedores/info-personal';
import MeGustaSeccion from './sobre/comp-contenedores/me-gusta-seccion';
import LinkCv from './sobre/comp-puros/link-cv';
import TextoSobreMi from './sobre/comp-puros/texto-sobre-mi';

const Sobre = () => {
  return (
    <>
      <section className='fondo-section-oscuro section-standar flex flex-col items-center' id='sobre-mi'>
        <TituloSection titulo={ 'sobre mi' } icono={ BsFillExclamationCircleFill() } />
        <TextoSobreMi />
        <div className='mt-8'>
          <InfoPersonal />
          <MeGustaSeccion />
        </div>
        <LinkCv />
      </section>
    </>
  );
}

export default Sobre;
