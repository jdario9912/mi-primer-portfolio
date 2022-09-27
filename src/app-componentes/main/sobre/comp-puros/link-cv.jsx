import React from 'react';
import { AiOutlineDownload } from "react-icons/ai";

const LinkCv = () => {
  return (
    <div className='flex items-center mt-8 border-solid border-2 p-2 gap-2 hover:border-cyan-400'>
      { AiOutlineDownload() }
      <a href={ './' } className='capitalize'>descargar CV</a>
    </div>
  );
}

export default LinkCv;
