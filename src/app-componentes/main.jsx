import React from 'react';
import Formacion from './main/formacion';
import ExperienciaIt from './main/experiencia-it';
import Home from './main/home';
import Skills from './main/skills';
import Sobre from './main/sobre';
// import Contacto from './main/contacto';

const Main = () => {
  return (
    <>
      <main>
        <Home />
        <Sobre />
        <Skills />
        <ExperienciaIt />
        <Formacion />
        {/* <Contacto /> */}
      </main>
    </>
  );
}

export default Main;
