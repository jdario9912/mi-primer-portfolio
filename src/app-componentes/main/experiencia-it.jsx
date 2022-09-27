import React from 'react';
import TituloSection from '../componentes-generales/titulo-section';
import { AiFillCode } from "react-icons/ai";
import Experiencia from './experiencia/comp-puros/experiencia';
import { experienciasIT } from './experiencia/modelos/experiencia-list';

const ExperienciaIt = () => {
  return (
    <>
      <section className='fondo-section-oscuro section-standar' id='experiencia'>
        <TituloSection titulo={ 'experiencia it' } icono={ AiFillCode() } />
        <div className="flex gap-2 flex-wrap">
          {
            experienciasIT.map(({ titulo, descripcion, repositorioLink, demoLink}) => {
              return(
                <Experiencia 
                  titulo={ titulo } 
                  descripcion={ descripcion } 
                  repositorioLink={ repositorioLink }
                  demoLink={ demoLink }
                />
              )
            })
          }
        </div>
      </section>
    </>
  );
}

export default ExperienciaIt;
