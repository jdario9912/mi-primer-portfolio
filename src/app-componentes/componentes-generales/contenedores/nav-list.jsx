import React from 'react';
import { navBotones } from '../../../servicios/nav-bar/nav-botones.js';
import NavLink from '../puros/nav-link';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineArrowRight } from "react-icons/ai";

const NavList = ({ ocultarMenu, estilosNavList, estilosLi, estilosLiOcultar }) => {
  return (
    <>
      <ul className={ estilosNavList } onClick={ ocultarMenu }>      
        {
          navBotones.map(({texto, section}) => 
            <li key={uuidv4()} className={ estilosLi } onClick={ ocultarMenu }>
              <NavLink texto={ texto } section={ section } />
            </li>
          )
        }
        <li className={ estilosLiOcultar }>
          ocultar menu
          <AiOutlineArrowRight />
        </li>
      </ul>
    </>
  );
};

export default NavList;