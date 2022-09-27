import React from 'react';
import NavBar from './componentes-generales/nav-bar';

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-900 text-gray-200 p-4 flex justify-center gap-4'>
        <NavBar />
        <p>© Copyrigth <em>Joel</em> Dario Muñoz | 2022</p>
        <a href='' className=''>repositorio</a>
      </footer>
    </>
  );
}

export default Footer;
