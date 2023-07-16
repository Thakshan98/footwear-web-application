import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      {/* Header start */}
      <header className='py-3 shadow-sm	bg-white'>
        <div className='container-fluid flex items-center justify-between px-4'>
          {/* Company Logo */}
          <div>
            <NavLink to='/' className=' no-underline'>
              <span className='text-blue-600 text-2xl font-inter font-semibold'>
                PHOE
              </span>
              <span className='text-stone-600 text-2xl font-inter font-semibold'>
                NIX
              </span>
            </NavLink>
          </div>
          {/* Search bar */}
          <div className='lg:w-full lg:max-w-lg md:max-w-sm relative lg:flex md:flex hidden'>
            <span className='absolute left-4 top-3 text-lg text-gray-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </span>
            <input
              type='text'
              className='w-full border border-stone-300 border-r-0 pl-12 py-2 pr-3 rounded-l focus:outline-none'
              placeholder='Search'
            />
            <button className='bg-blue-600 border border-primary font-popins text-white px-8 rounded-r-md hover:text-primary transition'>
              Search
            </button>
          </div>
          {/* Icons */}
          <div className='flex items-center space-x-7'>
            <NavLink
              to='/wish-list'
              className='text-center text-gray-700 hover:text-primary transition relative'
            >
              <div className='text-2xl'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
                {/* <div className='text-xs leading-3'>Wish List</div> */}
                <span className='absolute -right-3 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-blue-500 text-white text-xs'>
                  8
                </span>
              </div>
            </NavLink>
            <NavLink
              to='/shopping-cart'
              className='text-center text-gray-700 hover:text-primary transition relative'
            >
              <div className='text-2xl'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                  />
                </svg>
                {/* <div className='text-xs leading-3'>Wish List</div> */}
                <span className='absolute -right-3 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-red-500 text-white text-xs'>
                  10
                </span>
              </div>
            </NavLink>
            <NavLink
              to='/account'
              className='text-center text-sky-800 font-medium font-inter  no-underline'
            >
              <div className='text-base'>
                <span>Profile</span>
              </div>
            </NavLink>
          </div>
        </div>
      </header>
      {/* Header end */}
    </>
  )
}

export default Header
