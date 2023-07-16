import React, { useState } from 'react'
import {
  FaBuysellads,
  FaBitcoin,
  FaDocker,
  FaFirefoxBrowser,
  FaInvision,
  FaRockrms,
} from 'react-icons/fa6'
import { BiCategoryAlt } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const menuClicked = () => {
    setOpen(!open)
  }

  return (
    <>
      {/* Navbar start */}
      <nav className='bg-gray-800'>
        <div className='md:container lg:container sm:container-fluid px-8 flex'>
          {/* Category */}
          <div className='px-2 py-4 bg-blue-600 items-center flex cursor-pointer relative group'>
            <span className=' text-white'>
              <BiCategoryAlt />
            </span>
            <span className=' text-white capitalize ml-2 font-popins xs:px-3'>
              All categories
            </span>
            <div className=' absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-solid hidden group-hover:block'>
              <NavLink
                to='/new-arrivals'
                className='flex items-center px-6 py-3 hover:bg-gray-100 transition no-underline'
              >
                <FaBuysellads className='w-5 h-5 text-gray-500' />
                <span className='ml-6 text-gray-600 text-sm no-underline font-popins'>
                  New Arrivals
                </span>
              </NavLink>
              <NavLink
                to='/function'
                className='flex items-center px-6 py-3 hover:bg-gray-100 transition no-underline'
              >
                <FaBitcoin className='w-5 h-5 text-gray-500' />
                <span className='ml-6 text-gray-600 text-sm no-underline font-popins'>
                  Function
                </span>
              </NavLink>
              <NavLink
                to='/women'
                className='flex items-center px-6 py-3 hover:bg-gray-100 transition no-underline'
              >
                <FaDocker className='w-5 h-5 text-gray-500' />
                <span className='ml-6 text-gray-600 text-sm no-underline font-popins'>
                  Women
                </span>
              </NavLink>
              <NavLink
                to='/men'
                className='flex items-center px-6 py-3 hover:bg-gray-100 transition no-underline'
              >
                <FaFirefoxBrowser className='w-5 h-5 text-gray-500' />
                <span className='ml-6 text-gray-600 text-sm no-underline font-popins'>
                  Mens
                </span>
              </NavLink>
              <NavLink
                to='/sold-out'
                className='flex items-center px-6 py-3 hover:bg-gray-100 transition no-underline'
              >
                <FaInvision className='w-5 h-5 text-gray-500' />
                <span className='ml-6 text-gray-600 text-sm no-underline font-popins'>
                  Sold Out
                </span>
              </NavLink>
              <NavLink
                to='/child'
                className='flex items-center px-6 py-3 hover:bg-gray-100 transition no-underline'
              >
                <FaRockrms className='w-5 h-5 text-gray-500' />
                <span className='ml-6 text-gray-600 text-sm no-underline font-popins'>
                  Child
                </span>
              </NavLink>
            </div>
          </div>
          {/* Navbar links */}
          {/* <div className={`${open ? 'block' : 'hidden'}`}> */}
          <div className='flex items-center justify-between flex-grow pl-12 font-popins'>
            <div className='capitalize space-x-6 items-center hidden lg:block'>
              <NavLink
                to='/'
                className='text-gray-200 hover:text-white transition no-underline'
              >
                Home
              </NavLink>
              <NavLink
                to='/product'
                className=' text-gray-200 hover:text-white transition no-underline'
              >
                Product
              </NavLink>
              <NavLink
                to='/contact-us'
                className=' text-gray-200 hover:text-white transition no-underline'
              >
                Contact us
              </NavLink>
              <NavLink
                to='/about-us'
                className=' text-gray-200 hover:text-white transition no-underline'
              >
                About us
              </NavLink>
            </div>
            <div className='capitalize space-x-6 items-center hidden lg:block'>
              <NavLink
                to='/sign-in'
                className=' text-gray-200 hover:text-white transition no-underline'
              >
                Sign in
              </NavLink>
              <NavLink
                to='/register'
                className=' text-gray-200 hover:text-white transition no-underline'
              >
                Register
              </NavLink>
            </div>
          </div>
          <button onClick={menuClicked}>
            <AiOutlineMenu
              className='lg:hidden block ms-auto text-white text-xl'
              aria-controls='mobile-menu'
              aria-expanded='false'
            />
          </button>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className='lg:hidden bg-blue-600' id='mobile-menu items-center'>
            <div className='px-2 items-center pt-2 pb-3 space-y-1 md:px-3'>
              <NavLink
                to='/'
                className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base md:text-center font-medium font-popins'
              >
                Home
              </NavLink>
              <NavLink
                to='/about-us'
                className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base md:text-center font-medium font-popins'
              >
                About
              </NavLink>
              <NavLink
                to='/product'
                className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base md:text-center font-medium font-popins'
              >
                Product
              </NavLink>
              <NavLink
                to='/contact-us'
                className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base md:text-center font-medium font-popins'
              >
                Contact
              </NavLink>
              <NavLink
                to='/sign-in'
                className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base md:text-center font-medium font-popins'
              >
                Sign In
              </NavLink>
              <NavLink
                to='/register'
                className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base md:text-center font-medium font-popins'
              >
                Register
              </NavLink>
            </div>
          </div>
        )}
      </nav>
      {/* Navbar end */}
    </>
  )
}

export default Navbar
