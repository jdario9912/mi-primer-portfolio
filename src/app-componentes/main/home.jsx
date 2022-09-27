import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className='home-img-fondo'id='home'>
        <div className='home-fondo-traslucido w-full h-full flex justify-center items-center'>
          <div className='bg-gray-900 w-auto p-8 rounded-t-3xl flex flex-col items-center text-zinc-200 text-center'>
            <div className='imagen-avatar w-64 h-64 rounded-full border-8 border-color-distintivo outline outline-[22px] outline-[#3dbfb240] mb-20'></div>
            <div>
              <p className='text-3xl font-bold'>Joel Dario Muñoz</p>
              <p className='mb-1'>front-end develop</p>
              <div className='flex justify-center gap-1 text-3xl'>
                <a href="https://www.linkedin.com/in/joel-develop/" rel="LinkedIn"><FaLinkedin /></a>
                <a href="http://github.com/jdario9912/"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
