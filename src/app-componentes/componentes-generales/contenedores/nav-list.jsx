import React from 'react';
import { navBotones } from '../../../servicios/nav-bar/nav-botones.js';
import NavLink from '../puros/nav-link';
import { v4 as uuidv4 } from 'uuid';

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
      </ul>
    </>
  );
};

export default NavList;
