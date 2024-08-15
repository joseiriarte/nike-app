import { ReviewCard } from '../components/ReviewCard';
import { reviews } from '../constants';

export const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-center text-4xl font-palanquin font-bold'>
        What Our <span className='text-coral-red'>Customers</span> Say
      </h3>
      <p className='max-w-lg m-auto mt-4 text-center info-text'>
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className='flex flex-1 justify-evenly items-center mt-24 gap-14 max-lg:flex-col '>
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};
