import React, { useState } from 'react';
import Logo from './componentes-generales/logo';
import NavBar from './componentes-generales/nav-bar';
import Hamburguesa from './componentes-generales/puros/hamburguesa';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const mostrarMenu = () => {
    setShowMenu(!showMenu);
  };

  const ocultarMenu = () => {
    setShowMenu(false);
  }
  return (
    <>
      <header className='bg-gray-900 flex items-center justify-between p-4'>
        <Logo />
        <Hamburguesa funcionClick={ mostrarMenu } />
      </header>
        <NavBar visible={ showMenu } ocultaMenu={ ocultarMenu } />
    </>
  );
}

export default Header;