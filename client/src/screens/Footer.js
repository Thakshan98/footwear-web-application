import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaYoutube,
} from 'react-icons/fa'
// import { IoLogoDesignernews } from 'react-icons/io'

const Footer = () => {
  return (
    <>
      {/* <footer className='py-4'>
        <div className='container-xl'>
          <div class='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 text-center gap-4 py-2'>
            <div className='flex flex-row items-center'>
              <IoLogoDesignernews className='text-white text-4xl' />
              <h3 className='text-white font-popins text-xl mx-4 mt-2'>
                Newsletter
              </h3>
            </div>
            <div>02</div>
          </div>
        </div>
      </footer> */}
      <footer className='py-4'>
        <div className='container-xl py-4'>
          <div class='grid lg:grid-cols-5 md:grid-cols-3 md:ml-24 lg:ml-0 sm:ml-12 sm:grid-cols-1 gap-4'>
            <div className='col-span-2'>
              <h4 className='text-white font-popins text-base font-semibold mb-3'>
                Contact Us
              </h4>
              <div className='flex flex-col'>
                <address className='text-white font-popins text-sm leading-10'>
                  Hno: 3rd Floor, <br />
                  409, Colombo - Galle Main Rd, Colombo. Postal Code: 00300
                </address>
                <Link
                  to='tel:+94 773467897'
                  className='text-white font-popins text-sm no-underline mb-3'
                >
                  +94 773467897
                </Link>
                <Link
                  to='mailto:phoenixbusiness@gmail.com'
                  className='text-white font-popins text-sm no-underline mb-3'
                >
                  phoenixbusiness@gmail.com
                </Link>
                <div className='flex items-center gap-4 mt-3'>
                  <Link to=''>
                    <FaFacebookSquare className='text-white text-xl' />
                  </Link>
                  <Link to=''>
                    <FaTwitterSquare className='text-white text-xl' />
                  </Link>
                  <Link to=''>
                    <FaInstagramSquare className='text-white text-xl' />
                  </Link>
                  <Link to=''>
                    <FaGithubSquare className='text-white text-xl' />
                  </Link>
                  <Link to=''>
                    <FaYoutube className='text-white text-xl' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <h4 className='text-white font-popins text-base font-semibold mb-4'>
                Information
              </h4>
              <div className='flex flex-col'>
                <Link
                  to='privacy-policy'
                  className='text-white font-popins text-sm py-2 mb-1 no-underline'
                >
                  Privacy Policy
                </Link>
                <Link
                  to='shipping-policy'
                  className='text-white font-popins text-sm py-2 mb-1 no-underline'
                >
                  Shipping Policy
                </Link>
                <Link
                  to='order-policy'
                  className='text-white font-popins text-sm py-2 mb-1 no-underline'
                >
                  Order Policy
                </Link>
                <Link
                  to='term-and-conditions'
                  className='text-white font-popins text-sm py-2 mb-1 no-underline'
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>
            <div className='col-span-1'>
              <h4 className='text-white font-popins text-base font-semibold mb-4'>
                Account
              </h4>
              <div className='flex flex-col'>
                <Link className='text-white font-popins text-sm py-2 mb-1 no-underline'>
                  Search
                </Link>
                <Link className='text-white font-popins text-sm py-2 mb-1 no-underline'>
                  Contact
                </Link>
                <Link className='text-white font-popins text-sm py-2 mb-1 no-underline'>
                  About
                </Link>
                <Link className='text-white font-popins text-sm py-2 mb-1 no-underline'>
                  Chatbot
                </Link>
              </div>
            </div>
            <div className='col-span-1'>
              <h4 className='text-white font-popins text-base font-semibold mb-4'>
                Quick Links
              </h4>
              <div className='flex flex-col'>
                <Link className='text-white font-popins text-sm py-2 mb-1 no-underline'>
                  Shoes
                </Link>
                <Link className='text-white font-popins text-sm py-2 mb-1 no-underline'>
                  Boots
                </Link>
                <Link className='text-white font-popins text-sm py-2 mb-1 no-underline'>
                  Shippers
                </Link>
                <Link className='text-white font-popins text-sm py-2 mb-1 no-underline'>
                  Bata
                </Link>
                <Link className='text-white font-popins text-sm py-2 mb-1 no-underline'>
                  Shantle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xl'>
          <div class='grid grid-cols-1 text-center gap-4'>
            <div>
              <p className='text-white font-popins tracking-wider mb-0 text-sm'>
                &copy; {new Date().getFullYear()} Powered by Phoenix. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
