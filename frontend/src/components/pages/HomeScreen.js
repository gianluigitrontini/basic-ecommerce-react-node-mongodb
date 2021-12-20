import React, { useEffect } from 'react';
import Alert from '../Alert';
import Product from '../Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productActions';

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className='absolute flex items-center justify-center top-0 left-0 bottom-0 right-0 bg-white opacity-75'>
          <h1 className='text-gray-900 animate-pulse'>Loading</h1>
        </div>
      ) : error ? (
        <Alert type='error' fullWidth>
          {error}
        </Alert>
      ) : (
        <div className='flex flex-wrap'>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default HomeScreen;
