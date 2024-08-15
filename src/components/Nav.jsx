import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import { HamburgerMenu } from './HamburgerMenu';

export const Nav = () => {
  return (
    <header className='w-full padding-x py-8 absolute z-10'>
      <nav className='flex max-lg:flex-col justify-between items-center max-container relative'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='Nike logo'
            width={130}
            height={29}
          />
        </a>
        <ul className='flex-1 justify-center items-center gap-16 hidden lg:flex'>
          {navLinks.map((item) => (
            <li
              key={item.label}
              className='hover:underline underline-offset-4 decoration-coral-red decoration-2'
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
        <HamburgerMenu />
      </nav>
    </header>
  );
};
