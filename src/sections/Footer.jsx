import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

export const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start flex-wrap gap-20 max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src={footerLogo}
              width={150}
              height={46}
            />
          </a>
          <p className='mt-6 text-base text-white-400 font-montserrat leading-7 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards.
          </p>
          <div className='flex items-center mt-8 gap-5'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer'
                key={icon.alt}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 flex-wrap justify-between lg:gap-10 gap-20'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className=' mb-6 text-2xl text-white font-montserrat font-medium leading-normal'>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className='mt-3 text-white-400 text-base font-montserrat leading-normal hover:text-slate-gray'
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center'>
        <div className='font-montserrat'>
          <p>No copyright infringement intended.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};
