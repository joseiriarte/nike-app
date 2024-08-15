import { sizes } from '../constants';
import { Size } from './Size';

export const SizeTable = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      {sizes.map((size) => (
        <Size
          size={size}
          key={size}
        />
      ))}
    </div>
  );
};
