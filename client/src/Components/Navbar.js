import React, { useState } from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'
import CategoryList from './CategoryList'

const Navbar = (props) => {
  const [open, setOpen] = useState(false)
  const menuClicked = () => {
    setOpen(!open)
  }

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      {/* Navbar start */}
      <nav className='bg-gray-800'>
        <div className='md:container lg:container sm:container-fluid px-6 flex'>
          {/* Category */}
          <div className='px-2 py-3 bg-blue-600 items-center flex cursor-pointer relative group'>
            <span className=' text-white'>
              <BiCategoryAlt onClick={handleShow} />
            </span>
            <span
              className=' text-white capitalize ml-2 font-popins xs:px-3'
              onClick={handleShow}
            >
              All categories
            </span>
            <Offcanvas
              show={show}
              onHide={handleClose}
              {...props}
              style={{ width: '350px' }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className=' font-popins py-2'>
                  All Categories
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <CategoryList />
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          <div className='flex items-center justify-between flex-grow pl-12 font-popins'>
            <div className='capitalize space-x-6 items-center hidden lg:block'>
              <NavLink
                to='/'
                className='text-gray-200 hover:text-white transition no-underline'
              >
                Home
              </NavLink>
              <NavLink
                to='/products'
                className=' text-gray-200 hover:text-white transition no-underline'
              >
                Products
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
            <div className='px-2 items-center pt-2 pb-3 space-y-1 md:px-3 '>
              <NavLink
                to='/'
                className='text-gray-300 hover:text-white block px-3 py-2 no-underline rounded-md text-base md:text-center font-medium font-popins'
              >
                Home
              </NavLink>
              <NavLink
                to='/about-us'
                className='text-gray-300 hover:text-white block px-3 py-2 rounded-md no-underline text-base md:text-center font-medium font-popins'
              >
                About
              </NavLink>
              <NavLink
                to='/products'
                className='text-gray-300 hover:text-white block px-3 py-2 rounded-md no-underline text-base md:text-center font-medium font-popins'
              >
                Products
              </NavLink>
              <NavLink
                to='/contact-us'
                className='text-gray-300 hover:text-white block px-3 py-2 rounded-md no-underline text-base md:text-center font-medium font-popins'
              >
                Contact
              </NavLink>
              <NavLink
                to='/sign-in'
                className='text-gray-300 hover:text-white block px-3 py-2 rounded-md no-underline text-base md:text-center font-medium font-popins'
              >
                Sign In
              </NavLink>
              <NavLink
                to='/register'
                className='text-gray-300 hover:text-white block px-3 py-2 rounded-md no-underline text-base md:text-center font-medium font-popins'
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
