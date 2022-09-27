import React from 'react';

const TituloSection = ({ titulo, icono }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-4xl color-icono-section'>
         { icono }
      </div>
      <p className='text-3xl text-zinc-200 lowercase mb-8'>{ titulo }</p>
    </div>
  );
}

export default TituloSection;
