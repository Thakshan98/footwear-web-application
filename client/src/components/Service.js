import React from 'react'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BiSupport } from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'
import { GiPriceTag } from 'react-icons/gi'

const Service = () => {
  return (
    <>
      <div className='container mt-5 py-5 text-center collect'>
        <h1 className='collect headind-color'>Our Services</h1>
        <div className='row'>
          <div className='col-md-6 col-lg-3 col-sm-12 py-5'>
            <div className='py-4 d-flex align-items-center rounded shadow justify-content-center bg-primary pop'>
              <div className=' text-white'>
                <div>
                  <LiaShippingFastSolid size='30' />
                  <div>
                    <h6 className='navFont'>Free Shipping</h6>
                    <p classNameName='mb-0'>From all orders over Rs.20000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3 col-sm-12 py-5'>
            <div className='py-4 d-flex align-items-center rounded shadow justify-content-center bg-secondary pop'>
              <div className='text-white'>
                <div>
                  <BiSupport size='30' />
                  <div>
                    <h6 className='navFont'>Support 24/7</h6>
                    <p classNameName='text-sm text-stone-400 mb-0'>
                      Shop with an expert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3 col-sm-12 py-5'>
            <div className='py-4 d-flex align-items-center rounded shadow justify-content-center bg-success pop'>
              <div className='text-white'>
                <div>
                  <GiPriceTag size='30' />
                  <div>
                    <h6 className='navFont'>Affordable Price</h6>
                    <p classNameName='text-sm text-stone-400 mb-0'>
                      Get Factory direct price
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3 col-sm-12 py-5'>
            <div className='py-4 d-flex align-items-center rounded shadow justify-content-center bg-info pop'>
              <div className=' text-white'>
                <div>
                  <MdPayment size='30' />
                  <div>
                    <h6 className='navFont'>Secure Payments</h6>
                    <p classNameName='text-sm text-stone-400 mb-0'>
                      100% protected payments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
