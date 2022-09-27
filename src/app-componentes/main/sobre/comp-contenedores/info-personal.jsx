import React from 'react';
import FilaInfoPersonal from '../comp-puros/fila-info-personal';
import { datosInfoPersonal } from '../modelos/datos-info-personal';
import { v4 as uuidv4 } from 'uuid';


const InfoPersonal = () => {
  return (
    <div>
      <h3 className='lowercase text-left text-3xl'>Información personal</h3>
      <address>
        <table className='border-separate border-spacing-2'>
          <tbody>
            {
              datosInfoPersonal.map(({ dato, valor }) =>
                  <FilaInfoPersonal key={ uuidv4() } dato={ dato } valor={ valor } />
              )
            }
          </tbody>
        </table>
      </address>
    </div>
  );
}

export default InfoPersonal;
