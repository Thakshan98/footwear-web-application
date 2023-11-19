import React from 'react'
import heroImg from '../images/shoe-image02.png'
import { Link } from 'react-router-dom'
import { BiPhone } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='hero-wrapper w-full bg-white pb-5'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-6 col-md-12 col-sm-12 hero-section1'>
            <div className='hero-contact py-2'>
              <span>
                <BiPhone className='mx-2' />
                +94 112952702
              </span>
              <span>
                <HiOutlineMail className='mx-2' />
                phoenixind@yahoo.com
              </span>
            </div>
            <h1 style={{ textTransform: 'uppercase' }}>
              The ultimate product with pleasure
            </h1>
            <p>
              Let your product do the magic care for you. Change the quality of
              your personality by changing your appearance. Everything reflects
              your charater and we are taking care of it.
            </p>
            <div className='hero-button'>
              <Link to='/shop'>
                <button
                  style={{ backgroundColor: 'brown', color: 'white' }}
                  className='px-5 py-2 border-0'
                >
                  Shop Now
                </button>
              </Link>
              <Link to='/about' className='px-2'>
                <button
                  style={{
                    backgroundColor: 'white',
                    textDecoration: 'underline',
                  }}
                  className='px-5 py-2 border-0'
                >
                  Contact Us
                  <FaLongArrowAltRight className='mx-2' />
                </button>
              </Link>
            </div>
          </div>
          <div class='col-lg-6 col-md-12 col-sm-12 hero-section2'>
            <div className='px-5'>
              <img
                style={{ backgroundColor: '#F2F3F7' }}
                className='my-5 px-5 rounded-circle z-3'
                src={heroImg}
                alt=''
                width={600}
              />
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-lg-6 col-md-12 col-sm-12 hero-section1'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
