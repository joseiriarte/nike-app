import { star } from '../assets/icons';

export const PopularProductCard = ({ id, imgURL, name, price, handleShownProduct }) => {
  return (
    <div
      className='flex flex-1 flex-col items-center w-full max-sm:w-full px-2 py-2 rounded-xl hover:border-2 hover:border-coral-red cursor-pointer transition hover:scale-110 hover:duration-300'
      onClick={() => {
        handleShownProduct(id);
      }}
    >
      <img
        src={imgURL}
        alt={name}
        className='w-[280px] max-h-[280px]'
      />
      <div className='flex justify-start mt-8 gap-2.5'>
        <img
          src={star}
          alt='rating'
          width={24}
          height={24}
        />
        <p className='font-montserrat text-xl text-slate-gray leading-normal'>4.5</p>
      </div>
      <h3 className='mt-2 text-2xl font-semibold font-palanquin leading-normal'>{name}</h3>
      <p className='mt-2 text-2xl text-coral-red font-semibold font-montserrat leading-normal'>{price}</p>
    </div>
  );
};
