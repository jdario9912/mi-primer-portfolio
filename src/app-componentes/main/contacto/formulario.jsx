import React from 'react';

const Formulario = () => {
  return (
    <div>
      <form action="" className='flex flex-col w-3/4 mx-auto'>
        
        <label htmlFor="nombre" className='mb-1'>Nombre</label>
        <input type="text" className='mb-4 h-8 text-gray-900' id='nombre' placeholder='Nombre' />

        <label htmlFor="email" className='mb-1'>e-mail</label>
        <input type="text" className='mb-4 h-8 text-gray-900' id='email' placeholder='ejemplo@mail.com' />
        
        <label htmlFor="asunto" className='mb-1'>Asunto</label>
        <input type="text" className='mb-4 h-8 text-gray-900' placeholder='Asunto' />
        
        <label htmlFor="mensaje" className='mb-1'>Mensaje</label>
        <textarea name="" id="mensaje" cols="30" rows="10" className='mb-4 text-gray-900'></textarea>

        <button type="submit" className='py-4 bg-color-distintivo'>Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
