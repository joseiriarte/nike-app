import { Button } from '../components/Button';
import { SizeTable } from '../components/SizeTable';

export const ProductPage = ({ shownProduct }) => {
  const { imgURL, name, price, description } = shownProduct;

  return (
    <section className='flex justify-between items-start gap-16 w-full mt-16 max-container max-lg:flex-col max-lg:items-center'>
      <div>
        <img
          src={imgURL}
          alt={name}
          className='w-[450px]'
        />
      </div>
      <div className='flex flex-col max-w-2xl max-lg:items-center'>
        <h2 className='text-3xl font-palanquin font-bold leading-normal'>{name}</h2>
        <p className='text-slate-gray font-montserrat'>Men&#39;s Shoes</p>
        <h3 className='mt-4 text-3xl font-semibold font-montserrat leading-normal'>{price}</h3>
        <div className='my-8 max-w-md'>
          <div className='flex justify-between px-2'>
            <p className='text-slate-gray font-montserrat font-medium'>Select size</p>
            <p className='text-slate-gray font-montserrat font-medium cursor-pointer underline underline-offset-2 decoration-slate-gray'>
              Size guide
            </p>
          </div>
          <SizeTable />
        </div>
        <div className='flex'>
          <Button label={'Add to cart'} />
        </div>
        <p className='max-w-3xl mt-16 info-text max-lg:max-w-md max-lg:mt-20'>{description}</p>
      </div>
    </section>
  );
};
