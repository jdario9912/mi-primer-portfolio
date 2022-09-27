import React from 'react';
import { navBotones } from '../../../servicios/nav-bar/nav-botones.js';
import NavLink from '../puros/nav-link';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineArrowRight } from "react-icons/ai";

const NavList = ({ ocultaMenu }) => {
  return (
    <>
      <ul className=''>      
        {
          navBotones.map(({texto, section}) => 
            <li key={uuidv4()} className='border px-4 py-3 text-right bg-orange-600' onClick={ ocultaMenu }>
              <NavLink texto={ texto } section={ section } />
            </li>
          )
        }
        <li className='flex items-center gap-2 justify-end border px-4 py-3 text-right bg-orange-600 capitalize text-zinc-200 hover:cursor-pointer' onClick={ ocultaMenu }>
          ocultar menu
          <AiOutlineArrowRight />
        </li>
      </ul>
    </>
  );
};

export default NavList;
