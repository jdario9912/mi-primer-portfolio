import React from 'react';

const HardSkill = ({ nombre, icono }) => {
  return (
    <div className='flex flex-col border border-cyan-800 hover:scale-y-105'>
      <div className='mx-auto text-8xl'>
        { icono }
      </div>
      <p className='text-center'>{ nombre }</p>
    </div>
  );
};

export default HardSkill;
