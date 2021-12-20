import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../Alert';
import { Link } from 'react-router-dom';

function CartScreen(props) {
  const productId = props.match.params.id;
  const quantity = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/login?redirect=shipping');
  };
  return (
    <div>
      {cartItems.length === 0 && (
        <Alert type='info' fullWidth>
          You cart is currently empty.
        </Alert>
      )}
      {cartItems.length > 0 && (
        <div className='flex justify-between items-start'>
          <div className='w-4/6'>
            <div className='flex w-full justify-between items-center my-4 p-4 '>
              <span className='block w-48'></span>
              <span className='flex-1 text-center font-bold text-gray-700'>
                Product
              </span>
              <span className='flex-1 text-center font-bold text-gray-700'>
                Price
              </span>
              <span className='flex-1 text-center font-bold text-gray-700'>
                Quantity
              </span>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.product}
                className='flex w-full justify-between items-center my-4 p-4'>
                <Link to={`/product/${item.product}`}>
                  <img
                    alt='ecommerce'
                    className='object-cover object-center w-48 h-full block'
                    src='https://dummyimage.com/421x261'
                  />
                </Link>
                <span className='flex-1 text-center'>
                  {' '}
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </span>
                <span className='flex-1 text-center'>€{item.price}</span>
                <div className='flex flex-col my-2 flex-1'>
                  <div className='flex flex-row h-10 w-36 mx-auto rounded-lg relative bg-transparent mt-1'>
                    <button
                      onClick={() =>
                        item.quantity === 1
                          ? null
                          : dispatch(
                              addToCart(item.product, Number(item.quantity - 1))
                            )
                      }
                      className=' bg-gray-100 mr-2 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded cursor-pointer outline-none'>
                      <span className='m-auto text-2xl font-thin'>−</span>
                    </button>
                    <input
                      type='number'
                      className='outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none'
                      name='custom-input-number'
                      value={item.quantity}
                      readOnly
                      min='1'
                      max={item.countInStock}></input>
                    <button
                      onClick={() =>
                        item.quantity === item.countInStock
                          ? null
                          : dispatch(addToCart(item.product, item.quantity + 1))
                      }
                      className='bg-gray-100 ml-2 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded cursor-pointer'>
                      <span className='m-auto text-2xl font-thin'>+</span>
                    </button>
                  </div>

                  <button
                    className=''
                    onClick={() => removeFromCartHandler(item.product)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='shadow-classic rounded p-4 w-1/6'>
            <div>
              <h2 className='text-xl font-bold tracking-wide'>Subtotal</h2>
              <span>
                for {cartItems.reduce((a, c) => a + c.quantity, 0)} items
              </span>
              <span className='block text-2xl my-2 text-gray-800'>
                €{cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
              </span>
            </div>
            <button
              className='bg-yellow-400 px-4 py-2 rounded w-full'
              disabled={cartItems.length === 0}
              onClick={() => checkoutHandler()}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartScreen;
