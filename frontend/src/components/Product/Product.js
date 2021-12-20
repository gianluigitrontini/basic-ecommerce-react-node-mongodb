import React from 'react';
import Reviews from './Reviews';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div key={product._id} className='md:p-2 xl:w-1/5 lg:w-1/4 md:w-1/2 w-full'>
      <div className='p-4 hover:shadow-classic rounded-md'>
        <Link
          className='block relative h-48 rounded overflow-hidden'
          to={`/product/${product._id}`}>
          <img
            alt='ecommerce'
            className='object-cover object-center w-full h-full block'
            src='https://dummyimage.com/421x261'
          />
        </Link>
        <div className='mt-4'>
          <Reviews rating={product.rating} reviews={product.numReviews} />
          <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
            {product.category}
          </h3>
          <h2 className='text-gray-900 title-font text-lg font-medium'>
            <a href={`/product/${product._id}`}>{product.name}</a>
          </h2>
          <p className='mt-1'>${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
