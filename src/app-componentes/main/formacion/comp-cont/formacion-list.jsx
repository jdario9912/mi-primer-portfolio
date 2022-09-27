import React from 'react';
import FormacionLink from '../comp-puros/formacion-link';
import { mediosList } from '../modelos/medios-list';
import { v4 as uuidv4 } from 'uuid';

const FormacionList = () => {
  return (
    <>
      <ul className='flex flex-wrap gap-1'>
        {
          mediosList.map(({ linkImagen, altImagen, canal, curso }) => {
            return (
              <FormacionLink
                key={ uuidv4() } 
                linkImagen={ linkImagen } 
                altImagen={ altImagen }
                canal={ canal }
                curso={ curso }
              />
            )
          })
        }
      </ul>
    </>
  );
}

export default FormacionList;
