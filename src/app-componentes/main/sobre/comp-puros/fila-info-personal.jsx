import React from 'react';

const FilaInfoPersonal = ({ dato, valor }) => {
  return (
    <>
      <tr className='not-italic'>
        <td className='texto-color-distintivo'>{ dato }</td>
        <td>{ valor }</td>
      </tr>
    </>
  );
}

export default FilaInfoPersonal;
