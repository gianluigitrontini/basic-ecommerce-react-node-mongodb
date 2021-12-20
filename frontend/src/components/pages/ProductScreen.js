import React, { useState, useEffect } from 'react';
import Reviews from '../Product/Reviews';
import Alert from '../Alert';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../../redux/actions/productActions';

function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?quantity=${quantity}`);
  };

  return (
    <>
      {loading ? (
        <div className='absolute flex items-center justify-center top-0 left-0 bottom-0 right-0 bg-white opacity-75'>
          <h1 className='text-gray-900 animate-pulse'>Loading</h1>
        </div>
      ) : error ? (
        <>
          <Alert type='error' fullWidth message="The product doesn't exist" />
          <div className='flex flex-col text-center h-full justify-center m-auto '>
            <h1>Product not Found</h1>
            <p>Ooops. The product you were looking for doesn't exist.</p>
          </div>
        </>
      ) : (
        <section className='text-gray-600 body-font overflow-hidden w-full'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='lg:w-4/5 mx-auto flex flex-wrap'>
              <img
                alt='ecommerce'
                className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
                src='https://dummyimage.com/400x400'
              />
              <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                  {product.brand}
                </h2>
                <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                  {product.name}
                </h1>
                <div className='flex mb-2'>
                  <Reviews
                    reviews={product.numReviews}
                    rating={product.rating}
                  />
                </div>
                {product.countInStock > 0 && (
                  <p className='text-green-400 mb-2'>
                    {' '}
                    <span className='animate-pulse'>&#9679;</span> In Stock
                  </p>
                )}
                <p className='leading-relaxed'>{product.description}</p>
                <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'></div>
                <div className='flex items-center'>
                  <span className='title-font font-medium text-2xl text-gray-900'>
                    ${product.price}
                  </span>
                  <div className='ml-auto'>
                    {product.countInStock === 0 && (
                      <p className='text-red-400'>
                        <span className='animate-pulse'>&#9679;</span> Out of
                        stock
                      </p>
                    )}
                  </div>

                  {product.countInStock > 0 && (
                    <>
                      <div className='flex flex-col ml-auto'>
                        <div className='custom-number-input my-2 w-32'>
                          <label
                            htmlFor='custom-input-number'
                            className='w-full text-gray-700 text-sm font-semibold'>
                            Quantity
                          </label>
                          <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
                            <button
                              onClick={() =>
                                quantity === 1
                                  ? null
                                  : setQuantity(quantity - 1)
                              }
                              className=' bg-gray-100 mr-2 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded cursor-pointer outline-none'>
                              <span className='m-auto text-2xl font-thin'>
                                −
                              </span>
                            </button>
                            <input
                              type='number'
                              className='outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none'
                              name='custom-input-number'
                              value={quantity}
                              readOnly
                              min='1'
                              max={product.countInStock}></input>
                            <button
                              onClick={() =>
                                quantity === product.countInStock
                                  ? null
                                  : setQuantity(quantity + 1)
                              }
                              className='bg-gray-100 ml-2 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded cursor-pointer'>
                              <span className='m-auto text-2xl font-thin'>
                                +
                              </span>
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={addToCartHandler}
                          className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
                          Add to Cart
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductScreen;
