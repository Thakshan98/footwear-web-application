import React from 'react'
import Marquee from 'react-fast-marquee'
import Adiddas from '../images/adidas.png'
import Converse from '../images/converse.png'
import Nike from '../images/nike.png'
import Puma from '../images/puma.png'
import Reebox from '../images/Reebox.png'
import Skech from '../images/skech.png'
import Timber from '../images/timber.png'
import Vans from '../images/vans.png'

const MarqueeBrand = () => {
  return (
    <>
      <div className='container mt-3 mb-5 pt-1 pb-5 text-center '>
      <h1 className='collect headind-color pb-5 pt-1'>Shoes Brands</h1>
        <div className='row'>
          <div className='col'>
          
            <Marquee>
              <div className='d-flex flex-row align-items-center justify-content-center'>
                <img
                  src={Adiddas}
                  alt='Adiddas Shoes Brand Logo'
                  className='img-fluid'
                  style={{ height: '130px', opacity: '0.6' }}
                />
                <img
                  src={Converse}
                  alt='Converse Shoes Brand Logo'
                  className='img-fluid'
                  style={{ height: '130px', opacity: '0.6' }}
                />
                <img
                  src={Nike}
                  alt='Nike Shoes Brand Logo'
                  className='img-fluid'
                  style={{ height: '130px', opacity: '0.6' }}
                />
                <img
                  src={Puma}
                  alt='Puma Shoes Brand Logo'
                  className='img-fluid'
                  style={{ height: '130px', opacity: '0.6' }}
                />
                <img
                  src={Reebox}
                  alt='Reebox Shoes Brand Logo'
                  className='img-fluid'
                  style={{ height: '130px', opacity: '0.6' }}
                />
                <img
                  src={Skech}
                  alt='Skeck Shoes Brand Logo'
                  className='img-fluid'
                  style={{ height: '130px', opacity: '0.6' }}
                />
                <img
                  src={Timber}
                  alt='Timber Shoes Brand Logo'
                  className='img-fluid'
                  style={{ height: '130px', opacity: '0.6' }}
                />
                <img
                  src={Vans}
                  alt='Vans Shoes Brand Logo'
                  className='img-fluid'
                  style={{ height: '130px', opacity: '0.6' }}
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  )
}

export default MarqueeBrand
