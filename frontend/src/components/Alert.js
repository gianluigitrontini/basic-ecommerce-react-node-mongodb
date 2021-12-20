import React from 'react';
import Expire from './utils/Expire';

function Alert({
  type = 'success' || 'warning' || 'info' || 'error',
  expire,
  fullWidth = false,
  message = '',
  children,
}) {
  const Success = ({ fullWidth, children }) =>
    fullWidth ? (
      <div className='shadow-classic rounded w-full text-white bg-green-500'>
        <div className='container flex items-center justify-between px-6 py-4 mx-auto'>
          <div className='flex'>
            <svg viewBox='0 0 40 40' className='w-6 h-6 fill-current'>
              <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z'></path>
            </svg>

            <p className='mx-3'>{children}</p>
          </div>

          <button className='p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none'>
            <svg
              className='w-5 h-5'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6 18L18 6M6 6L18 18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    ) : (
      <div className='animate-fadeIn fixed right-4 bottom-16 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-classic dark:bg-gray-800'>
        <div className='flex items-center justify-center w-12 bg-green-500'>
          <svg
            className='w-6 h-6 text-white fill-current'
            viewBox='0 0 40 40'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z' />
          </svg>
        </div>

        <div className='px-4 py-2 -mx-3'>
          <div className='mx-3'>
            <span className='font-semibold text-green-500 dark:text-green-400'>
              Success
            </span>
            <p className='text-sm text-gray-600 dark:text-gray-200'>
              {children}
            </p>
          </div>
        </div>
      </div>
    );
  const Warning = ({ fullWidth, children }) =>
    fullWidth ? (
      <div className='shadow-classic rounded w-full text-white bg-yellow-400'>
        <div className='container flex items-center justify-between px-6 py-4 mx-auto'>
          <div className='flex'>
            <svg viewBox='0 0 40 40' className='w-6 h-6 fill-current'>
              <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z'></path>
            </svg>

            <p className='mx-3'>{children}</p>
          </div>

          <button className='p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none'>
            <svg
              className='w-5 h-5'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6 18L18 6M6 6L18 18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    ) : (
      <div className='fixed right-4 bottom-16 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-classic dark:bg-gray-800'>
        <div className='flex items-center justify-center w-12 bg-yellow-400'>
          <svg
            className='w-6 h-6 text-white fill-current'
            viewBox='0 0 40 40'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z' />
          </svg>
        </div>

        <div className='px-4 py-2 -mx-3'>
          <div className='mx-3'>
            <span className='font-semibold text-yellow-400 dark:text-yellow-300'>
              Warning
            </span>
            <p className='text-sm text-gray-600 dark:text-gray-200'>
              {children}
            </p>
          </div>
        </div>
      </div>
    );

  const Error = ({ fullWidth, children }) =>
    fullWidth ? (
      <div className='shadow-classic rounded w-full text-white bg-red-500'>
        <div className='container flex items-center justify-between px-6 py-4 mx-auto'>
          <div className='flex'>
            <svg viewBox='0 0 40 40' className='w-6 h-6 fill-current'>
              <path d='M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z'></path>
            </svg>

            <p className='mx-3'>{children}</p>
          </div>

          <button className='p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none'>
            <svg
              className='w-5 h-5'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6 18L18 6M6 6L18 18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    ) : (
      <div className='fixed right-4 bottom-16 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-classic dark:bg-gray-800'>
        <div className='flex items-center justify-center w-12 bg-red-500'>
          <svg
            className='w-6 h-6 text-white fill-current'
            viewBox='0 0 40 40'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z' />
          </svg>
        </div>

        <div className='px-4 py-2 -mx-3'>
          <div className='mx-3'>
            <span className='font-semibold text-red-500 dark:text-red-400'>
              Error
            </span>
            <p className='text-sm text-gray-600 dark:text-gray-200'>
              {children}
            </p>
          </div>
        </div>
      </div>
    );

  const Info = ({ fullWidth, children }) =>
    fullWidth ? (
      <div className='shadow-classic rounded w-full text-white bg-blue-500'>
        <div className='container flex items-center justify-between px-6 py-4 mx-auto'>
          <div className='flex'>
            <svg viewBox='0 0 40 40' className='w-6 h-6 fill-current'>
              <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z'></path>
            </svg>

            <p className='mx-3'>{children}</p>
          </div>

          <button className='p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none'>
            <svg
              className='w-5 h-5'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6 18L18 6M6 6L18 18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    ) : (
      <div className='animate-fadeIn fixed right-4 bottom-16 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-classic dark:bg-gray-800'>
        <div className='flex items-center justify-center w-12 bg-blue-500'>
          <svg
            className='w-6 h-6 text-white fill-current'
            viewBox='0 0 40 40'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z' />
          </svg>
        </div>

        <div className='px-4 py-2 -mx-3'>
          <div className='mx-3'>
            <span className='font-semibold text-blue-500 dark:text-blue-400'>
              Info
            </span>
            <p className='text-sm text-gray-600 dark:text-gray-200'>
              {children}
            </p>
          </div>
        </div>
      </div>
    );
  const Messages = ({ type, fullWidth, children }) => {
    return type === 'success' ? (
      <Success fullWidth={fullWidth}>{children}</Success>
    ) : type === 'warning' ? (
      <Warning fullWidth={fullWidth}>{children}</Warning>
    ) : type === 'error' ? (
      <Error fullWidth={fullWidth}>{children}</Error>
    ) : (
      <Info fullWidth={fullWidth}>{children}</Info>
    );
  };

  return (
    <>
      {expire ? (
        <Expire delay='5000'>
          <Messages type={type} fullWidth={fullWidth}>
            {children}
          </Messages>
        </Expire>
      ) : (
        <Messages type={type} fullWidth={fullWidth}>
          {children}
        </Messages>
      )}
    </>
  );
}

export default Alert;
