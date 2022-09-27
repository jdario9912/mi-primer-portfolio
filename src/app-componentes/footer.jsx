import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-900 text-gray-200 p-4 flex flex-col justify-center gap-4'>
        <p className='text-center'>© Copyrigth <em className='not-italic texto-color-distintivo'>Joel</em> Dario Muñoz | 2022</p>
        <a href='https://github.com/jdario9912/mi-primer-portfolio' className='hidden'>repositorio</a>
      </footer>
    </>
  );
}

export default Footer;
