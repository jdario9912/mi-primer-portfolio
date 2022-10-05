import React from 'react';
import NavList from './contenedores/nav-list';

const NavBar = ({ ocultarMenu, estilos, estilosNavList, estilosLi, estilosLiOcultar }) => {
  const estilosNavBarHeaderMovileVisible = 'absolute md:relative -translate-x-4 translate-y-48 md:translate-y-0 md:translate-x-0 w-full md:w-auto';
  const estilosNavBarHeaderMovileOculta  = 'absolute md:relative translate-y-48 md:translate-y-0 translate-x-full md:translate-x-0 w-full md:w-auto';

  let widthMovile = (window.innerWidth < 768) ? true : false;

  return (
    <>
      <nav className={ widthMovile ?
                          estilos ? estilosNavBarHeaderMovileVisible : estilosNavBarHeaderMovileOculta
                        :
                          estilosNavBarHeaderMovileVisible 
                      }>
        <NavList 
          ocultarMenu={ ocultarMenu } 
          estilosNavList={ estilosNavList }
          estilosLi={ estilosLi } 
          estilosLiOcultar={ estilosLiOcultar } 
        />
      </nav>
    </>
  );
}

export default NavBar;
