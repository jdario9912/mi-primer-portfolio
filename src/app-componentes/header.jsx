import React, { useState } from 'react';
import Logo from './componentes-generales/logo';
import NavBar from './componentes-generales/nav-bar';
import Hamburguesa from './componentes-generales/puros/hamburguesa';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const mostrarMenu = () => {
    setShowMenu(true);
  };

  const ocultarMenu = () => {
    setShowMenu(false);
  };
  
  const estilosNavList = 'md:flex'
  const estilosLi = 'border md:border-0 px-4 py-3 text-right bg-orange-600 md:bg-inherit';
  const estilosLiOcultar = 'flex items-center gap-2 justify-end border px-4 py-3 text-right bg-orange-600 capitalize text-zinc-200 md:absolute hover:cursor-pointer md:invisible';

  return (
    <>
      <header className='bg-gray-900 flex items-center justify-between p-4'>
        <Logo />
        <Hamburguesa funcionClick={ mostrarMenu } />
        <NavBar 
          ocultarMenu={ ocultarMenu } 
          estilos={ showMenu }
          estilosNavList={ estilosNavList } 
          estilosLi={ estilosLi }
          estilosLiOcultar = { estilosLiOcultar }
        />
      </header>
    </>
  );
}

export default Header;