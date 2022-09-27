import React from 'react';
import { BsFillSuitSpadeFill } from "react-icons/bs";

const Logo = () => {
  return (
    <div className='text-zinc-200'>
      <div className='hidden'>
        <BsFillSuitSpadeFill />
      </div>
      <div className=''>
        <h1 className='texto-color-distintivo font-extrabold text-2xl capitalize'>
          joel
        </h1>
        <p className='text-xs'>web develop front-end</p>
      </div>
    </div>
  );
}

export default Logo;
