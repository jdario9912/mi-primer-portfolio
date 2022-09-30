import React from 'react';
import NavList from './contenedores/nav-list';

const NavBar = ({ ocultaMenu, estilos, estilosNavList, estilosLi, estilosLiOcultar }) => {
  return (
    <>
      <nav className={ estilos }>
        <NavList 
          ocultaMenu={ ocultaMenu } 
          estilosNavList={ estilosNavList }
          estilosLi={ estilosLi } 
          estilosLiOcultar={ estilosLiOcultar } 
        />
      </nav>
    </>
  );
}

export default NavBar;
