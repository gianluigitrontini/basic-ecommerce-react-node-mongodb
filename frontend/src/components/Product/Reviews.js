import React from 'react';
import Stars from './Stars';

function Reviews({ rating, reviews }) {
  return (
    <div className='flex items-center'>
      <Stars rating={rating} />
      <span className='text-sm text-yellow-500 ml-2'>
        {reviews}
        {reviews === 0 ? ' reviews' : reviews === 1 ? ' review' : ' reviews'}
      </span>
    </div>
  );
}

export default Reviews;
