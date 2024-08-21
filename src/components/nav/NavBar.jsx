import { useState, useEffect } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

import logo from '../../assets/svg/logo.svg';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(prevState => !prevState);

  useEffect(() => {
    const handleResize = () => setIsNavOpen(false);

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-screen">
      <div className={`absolute top-0 w-screen flex items-start ${isNavOpen ? 'justify-end' : 'justify-between'}`}>
        {!isNavOpen && (
          <img
            src={logo}
            alt="NUTPAM"
            className="relative 2xl:w-80 2xl:h-80 lg:w-72 lg:h-72 md:w-60 md:h-60 sm:w-52 sm:h-52"
          />
        )}
        <button
          onClick={toggleNav}
          className="hidden sm:block z-30 text-white/90 text-3xl drop-shadow-md mt-5 mr-5"
          aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
        >
          {isNavOpen ? <IoClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      {isNavOpen && (
        <>
          <section className="absolute w-screen pt-14 pb-8 z-20 bg-black flex flex-col gap-6 justify-evenly items-center">
            <a href="#event" className="underline underline-offset-4 text-customOrange" style={{ textShadow: '0px 0px 6px #D9913B' }}>EVENT</a>
            <a href="#contact" className="underline underline-offset-4 text-customRed" style={{ textShadow: '0px 0px 6px #DD5454' }}>CONTACT US</a>
            <a href="#team" className="underline underline-offset-4 text-customBlue" style={{ textShadow: '0px 0px 6px #1377B5' }}>TEAM</a>
          </section>
          <div className='z-10 absolute bg-gradient-to-t h-screen w-screen from-black/90 to-black/60'></div>
        </>
      )}
    </div>
  );
};

export default NavBar;
