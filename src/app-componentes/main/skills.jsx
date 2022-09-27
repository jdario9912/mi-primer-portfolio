import React from 'react';
import TituloSection from '../componentes-generales/titulo-section';
import { TiMortarBoard } from "react-icons/ti";
import HardSkill from './skills/comp-puros/hard-skill';
import { hardSkillsList } from './skills/modelos/hard-skills-list.js';
import { v4 as uuidv4 } from 'uuid';

const Skills = () => {
  return (
    <>
      <section className='fondo-section-claro section-standar' id='skills'>
        <TituloSection titulo={ 'skills' } icono={ TiMortarBoard() } />
        <div className='flex flex-wrap gap-2'>
          {
            hardSkillsList.map(({ nombre, icono }) => {
              return(
                <HardSkill key={ uuidv4()} nombre={ nombre } icono={ icono } />
                )
              })
          }
        </div>
      </section>
    </>
  );
}

export default Skills;
