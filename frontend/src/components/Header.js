import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { signOut } from '../redux/actions/userActions';

function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signOut());
  };
  return (
    <header className='fixed top-0 left-0 right-0 py-2 bg-black text-white shadow-classic'>
      <div className='container mx-auto px-4 flex items-center'>
        <Link to='/'>
          <img src={logo} style={{ maxWidth: '55px' }} alt='LOGO' />{' '}
        </Link>

        <nav className='ml-auto'>
          <ul className='flex items-center'>
            <li className='mx-4 ml-0'>
              {userInfo ? (
                <div className='dropdown relative'>
                  <Link to='#'>
                    {userInfo.name}{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='inline ml-1 h-4 w-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </Link>
                  <div className='dropdown-parent absolute right-0 pt-4'>
                    <ul className='dropdown-content bg-white text-black min-w-32 rounded shadow-classic z-50 overflow-hidden'>
                      <Link
                        to='#'
                        onClick={signOutHandler}
                        className='px-4 py-2 hover:bg-blue-50 block'>
                        Sign Out
                      </Link>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to='/login'>Login</Link>
              )}
            </li>
            <li className='mx-4 mr-0'>
              <Link to='/cart'>
                <div className='relative'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                  {cartItems.length > 0 && (
                    <span className='badge bg-yellow-600 rounded-full h-4 w-4 inline-block flex items-center justify-center text-xs font-bold absolute -right-3 -top-1'>
                      {cartItems.length}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
