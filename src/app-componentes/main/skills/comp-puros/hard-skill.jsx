import React from 'react';

const HardSkill = ({ nombre, icono }) => {
  return (
    <div className='flex items-center justify-center gap-2 w-1/3 hover:scale-y-105 md:w-1/5'>
      <div className='text-6xl'>
        { icono }
      </div>
      <p className='w-1/6'>{ nombre }</p>
    </div>
  );
};

export default HardSkill;
