import React from 'react';
import Logo from './componentes-generales/logo';
import NavBar from './componentes-generales/nav-bar';
import Hamburguesa from './componentes-generales/puros/hamburguesa';

const Header = () => {
  // const [showMenu, setShowMenu] = useState(false);

  const mostrarOcultarMenu = () => {
    // setShowMenu(!showMenu);
    console.log('Estoy pulsando la hamburguesa');
  };

  const ocultarMenu = () => {
    // setShowMenu(false);
    console.log('Estoy pulsando algun elemento del NavBar');
  };

  const estilosNavBarHeader = 'absolute md:relative translate-y-48 md:translate-y-0 translate-x-full md:translate-x-0 w-full md:w-auto';
  const estilosNavList = 'md:flex'
  const estilosLi = 'border md:border-0 px-4 py-3 text-right bg-orange-600 md:bg-inherit';
  const estilosLiOcultar = 'flex items-center gap-2 justify-end border px-4 py-3 text-right bg-orange-600 capitalize text-zinc-200 md:absolute hover:cursor-pointer md:invisible';

  return (
    <>
      <header className='bg-gray-900 flex items-center justify-between p-4'>
        <Logo />
        <Hamburguesa funcionClick={ mostrarOcultarMenu } />
        <NavBar 
          ocultaMenu={ ocultarMenu } 
          estilos={ estilosNavBarHeader }
          estilosNavList={ estilosNavList } 
          estilosLi={ estilosLi }
          estilosLiOcultar = { estilosLiOcultar }
        />
      </header>
    </>
  );
}

export default Header;