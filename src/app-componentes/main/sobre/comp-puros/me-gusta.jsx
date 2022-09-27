import React from 'react';

const MeGusta = ({ nombre, actividad }) => {
  return (
    <div className='fondo-section-claro flex flex-col p-2 rounded'>
      <div className='text-4xl mx-auto'>
        { actividad }
      </div>
      <h4>{ nombre }</h4>
    </div>
  );
}

export default MeGusta;
