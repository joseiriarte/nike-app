import { useState } from 'react';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

export const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='flex flex-col items-center justify-start'>
      {isActive ? (
        <div className='flex flex-col justify-center items-center absolute z-20 lg:hidden bg-white'>
          <img
            src={hamburger}
            alt='Hamburger'
            width={25}
            height={25}
            className='cursor-pointer mt-4 mb-4'
            onClick={handleClick}
          />
          <ul className='w-[100vw] h-[100vh] flex flex-col justify-start items-center z-20 lg:hidden'>
            {navLinks.map((item) => (
              <li
                key={item.label}
                className='pt-8 hover:underline underline-offset-4 decoration-coral-red decoration-2'
                onClick={handleClick}
              >
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center absolute z-20 lg:hidden'>
          <img
            src={hamburger}
            alt='Hamburger'
            width={25}
            height={25}
            className='cursor-pointer mt-4 mb-4'
            onClick={handleClick}
          />
        </div>
      )}
    </div>
  );
};
