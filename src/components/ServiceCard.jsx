export const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 w-full sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img
          src={imgURL}
          alt={label}
          width={24}
          height={24}
        />
      </div>
      <h3 className='mt-5 text-3xl font-palanquin font-bold leading-normal'>{label}</h3>
      <p className='mt-3 break-words text-lg text-slate-gray font-montserrat leading-normal'>{subtext}</p>
    </div>
  );
};
