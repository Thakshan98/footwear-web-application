import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
  const { title } = props
  return (
    <div className='py-3'>
      <div className='container'>
        <div class='grid grid-cols-3 gap-4'>
          <div class='border-blue-500 col-span-3'>
            <p className='mb-0 text-center'>
              <div className='d-flex align-items-center justify-content-center'>
                <Link
                  to='/'
                  className=' text-blue-700 font-popins text-lg font-bold'
                  style={{ textDecoration: 'none' }}
                >
                  <div className='d-flex align-items-center justify-content-center'>
                    {/* <div
                  style={{
                    width: '0px',
                    height: '0px',
                    borderTop: '20px solid #cc9900',
                    borderBottom: '20px solid #cc9900',
                    borderLeft: '20px solid transparent',
                  }}
                ></div> */}
                    <span
                      className='px-4 py-2'
                      style={{
                        backgroundColor: '#938BF6',
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      Home
                    </span>
                    <div
                      style={{
                        width: '0px',
                        height: '0px',
                        borderTop: '20px solid transparent',
                        borderBottom: '20px solid transparent',
                        borderLeft: '20px solid #938BF6',
                      }}
                    ></div>
                  </div>
                </Link>
                <div className='d-flex align-items-center justify-content-center'>
                  <div
                    style={{
                      width: '0px',
                      height: '0px',
                      borderTop: '20px solid #ffffff',
                      borderBottom: '20px solid #ffffff',
                      borderLeft: '20px solid transparent',
                    }}
                  ></div>
                  <span
                    className='px-4 py-2'
                    style={{
                      backgroundColor: '#ffffff',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {title}
                  </span>
                  <div
                    style={{
                      width: '0px',
                      height: '0px',
                      borderTop: '20px solid transparent',
                      borderBottom: '20px solid transparent',
                      borderLeft: '20px solid #ffffff',
                    }}
                  ></div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
