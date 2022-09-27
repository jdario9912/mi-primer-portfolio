import React from 'react';

const FormacionLink = ({ linkPlataforma, linkImagen, altImagen, canal, curso }) => {
  return (
    <>
      <li className='fondo-section-oscuro p-3 w-full shadow-2xl hover:scale-y-105'>
        <a href={ linkPlataforma } className='flex'>
          <img 
            src={ linkImagen }  
            alt={ altImagen } 
            className='w-16 h-16 mr-3'
            />
          <div>
            <h4 className='text-gray-500'>{ canal }</h4>
            <p>{ curso }</p>
          </div>
        </a>
      </li>
    </>
  );
}

export default FormacionLink;

