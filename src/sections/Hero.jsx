import { useState } from 'react';
import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import { Button } from '../components/Button';
import { ShoeCard } from '../components/ShoeCard';
import { shoes, statistics } from '../constants';

export const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative w-full xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28 max-lg:pt-36'>
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='relative z-10 pr-10 max-xl:z-0 xl:bg-white xl:whitespace-nowrap'>The New Arrival</span>{' '}
          <br />
          <span className='inline-block mt-3 text-coral-red'>Nike</span> Shoes
        </h1>
        <p className='mt-6 mb-14 text-lg text-slate-gray font-montserrat leading-8 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort and innovation for your active life.
        </p>
        <Button
          label={'Shop now'}
          iconURL={arrowRight}
        />

        <div className='w-full flex justify-start items-start flex-wrap mt-20 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='text-slate-gray font-montserrat leading-7'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={500}
          className='object-contain relative z-10'
        />

        <div className='flex absolute -bottom-[5%] sm:left-[10%] gap-4 sm:gap-6 max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
