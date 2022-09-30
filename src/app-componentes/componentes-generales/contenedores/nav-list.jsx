import React from 'react';
import { navBotones } from '../../../servicios/nav-bar/nav-botones.js';
import NavLink from '../puros/nav-link';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineArrowRight } from "react-icons/ai";

const NavList = ({ ocultaMenu, estilosNavList, estilosLi, estilosLiOcultar }) => {
  return (
    <>
      <ul className={ estilosNavList }>      
        {
          navBotones.map(({texto, section}) => 
            <li key={uuidv4()} className={ estilosLi } onClick={ ocultaMenu }>
              <NavLink texto={ texto } section={ section } />
            </li>
          )
        }
        <li className={ estilosLiOcultar } onClick={ ocultaMenu }>
          ocultar menu
          <AiOutlineArrowRight />
        </li>
      </ul>
    </>
  );
};

export default NavList;