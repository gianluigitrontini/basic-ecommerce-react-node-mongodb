import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='text-gray-600 body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <Link
          to='/'
          className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-10 h-10 text-white p-2 bg-gray-900 rounded-full'
            viewBox='0 0 24 24'></svg>
          <span className='ml-3 text-xl'>DejaVu</span>
        </Link>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © 2021 Ecommerce
        </p>
      </div>
    </footer>
  );
}

export default Footer;
