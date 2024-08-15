import { Button } from '../components/Button';

export const Subscribe = () => {
  return (
    <section
      className='flex justify-between items-center max-container max-lg:flex-col gap-10'
      id='contact-us'
    >
      <h3 className='lg:max-w-md text-4xl font-palanquin font-bold leading-[68px]'>
        Sign Up For <span className='text-coral-red'>Updates</span> & Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input
          type='text'
          placeholder='subscribe@nike.com'
          className='input'
        />
        <div className='flex items-center max-sm:justify-end max-sm:w-full'>
          <Button
            label='Sign Up'
            fullWidth
          />
        </div>
      </div>
    </section>
  );
};
