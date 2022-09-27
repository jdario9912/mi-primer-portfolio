import React from 'react';
import NavList from './contenedores/nav-list';

const NavBar = ({visible, ocultaMenu}) => {
  return (
    <>
      <nav className={ visible? 'absolute w-full mr-0 ml-auto' : 'hidden'}>
        <NavList ocultaMenu={ ocultaMenu }/>
      </nav>
    </>
  );
}

export default NavBar;
