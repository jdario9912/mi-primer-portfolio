import React from 'react';
import NavBar from './componentes-generales/nav-bar';

const Footer = () => {
  const estilosNavBarFooter = '';
  const estilosNavList = 'flex justify-center gap-4 flex-wrap';
  const estilosLi = '';
  const estilosLiOcultar = 'hidden';
  return (
    <>
      <footer className='bg-gray-900 text-gray-200 p-4 flex flex-col justify-center gap-4'>
        <NavBar 
          visible={ true } 
          ocultaMenu={ null } 
          estilos={ estilosNavBarFooter }
        estilosNavList={ estilosNavList }
          estilosLi={ estilosLi }
          estilosLiOcultar={ estilosLiOcultar }
        />
        <p className='text-center'>© Copyrigth <em className='not-italic texto-color-distintivo'>Joel</em> Dario Muñoz | 2022</p>
        <a href='https://github.com/jdario9912/mi-primer-portfolio' className='hidden'>repositorio</a>
      </footer>
    </>
  );
}

export default Footer;
