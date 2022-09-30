import React from 'react';

const Experiencia = ({titulo, descripcion, repositorioLink, demoLink}) => {
  return (
    <div className='p-4 fondo-section-claro shadow-2xl w-full md:w-[48.5%]'>
      <h4 className='text-2xl text-gray-500'>{ titulo }</h4>
      <p>{ descripcion }</p>
      <div className='mt-2 flex gap-1 flex-wrap justify-end'>
        <a 
          href={ repositorioLink }
          className='px-4 py-2 texto-color-distintivo border border-cyan-400 hover:bg-orange-500 hover:text-slate-50'
        >repositorio</a>
        <a 
          href={ demoLink }
          className='px-4 py-2 border hover:bg-orange-500'
        >ver demo</a>
      </div>
    </div>
  );
}

export default Experiencia;
