import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { signin } from '../../redux/actions/userActions';
function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, redirect, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  return (
    <div className='flex h-full my-auto items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-lg w-full bg-gray-50 rounded p-4 space-y-8'>
        <div>
          <span className='block w-20 h-20 bg-gray-900 flex items-center justify-center rounded-full mx-auto'>
            <img className='mx-auto h-12 w-auto' src={logo} alt='Workflow' />
          </span>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900 tracking-wide'>
            Login
          </h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={submitHandler}>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div className='my-2'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className='my-2'>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>

          {/* <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-gray-900'>
                Remember me
              </label>
            </div>

            <div className='text-sm'>
              <a
                href='#'
                className='font-medium text-indigo-600 hover:text-indigo-500'>
                Forgot your password?
              </a>
            </div>
          </div> */}

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Login
            </button>
          </div>
        </form>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Don't have an account yet?{' '}
          <Link
            to='/register'
            className='font-medium text-indigo-600 hover:text-indigo-500'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginScreen;
