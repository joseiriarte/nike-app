import { star } from '../assets/icons';

export const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='max-w-sm mt-6 text-center info-text'>{feedback}</p>
      <div className='flex justify-center items-center mt-3 gap-2.5'>
        <img
          src={star}
          width={24}
          height={24}
          className='object-contain m-0'
        />
        <p className='text-xl text-slate-gray font-montserrat'>{rating}</p>
      </div>
      <h3 className='mt-1 text-3xl text-center font-palanquin font-semibold'>{customerName}</h3>
    </div>
  );
};
