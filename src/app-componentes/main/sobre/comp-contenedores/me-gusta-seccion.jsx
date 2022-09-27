import React from 'react';
import MeGusta from '../comp-puros/me-gusta';
import { meGustaActividades }  from '../modelos/me-gusta-actividades.js';
import { v4 as uuidv4 } from 'uuid';


const MeGustaSeccion = () => {
  return (
    <div>
      <h3 className='lowercase text-right text-3xl'>me gusta</h3>
      <div className='flex flex-wrap gap-2 justify-end'>
        {
          meGustaActividades.map(({ nombre, actividad }) => 
            <MeGusta key={ uuidv4() } nombre={ nombre } actividad={ actividad } />
          )
        }
      </div>
    </div>
  );
}

export default MeGustaSeccion;
