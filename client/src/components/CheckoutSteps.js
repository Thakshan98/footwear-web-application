import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4 font-popins'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>
              <div className='d-flex align-items-center justify-content-center'>
                <div
                  style={{
                    width: '0px',
                    height: '0px',
                    borderTop: '20px solid #cc9900',
                    borderBottom: '20px solid #cc9900',
                    borderLeft: '20px solid transparent',
                  }}
                ></div>
                <span
                  className='px-4 py-2'
                  style={{
                    backgroundColor: '#cc9900',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  Sign In
                </span>
                <div
                  style={{
                    width: '0px',
                    height: '0px',
                    borderTop: '20px solid transparent',
                    borderBottom: '20px solid transparent',
                    borderLeft: '20px solid #cc9900',
                  }}
                ></div>
              </div>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='mt-2'>
            Sign In
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>
              <div className='d-flex align-items-center justify-content-center'>
                <div
                  style={{
                    width: '0px',
                    height: '0px',
                    borderTop: '20px solid #cc9900',
                    borderBottom: '20px solid #cc9900',
                    borderLeft: '20px solid transparent',
                  }}
                ></div>
                <span
                  className='px-4 py-2'
                  style={{
                    backgroundColor: '#cc9900',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  Shipping
                </span>
                <div
                  style={{
                    width: '0px',
                    height: '0px',
                    borderTop: '20px solid transparent',
                    borderBottom: '20px solid transparent',
                    borderLeft: '20px solid #cc9900',
                  }}
                ></div>
              </div>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='mt-2'>
            Shipping
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>
              <div className='d-flex align-items-center justify-content-center'>
                <div
                  style={{
                    width: '0px',
                    height: '0px',
                    borderTop: '20px solid #cc9900',
                    borderBottom: '20px solid #cc9900',
                    borderLeft: '20px solid transparent',
                  }}
                ></div>
                <span
                  className='px-4 py-2'
                  style={{
                    backgroundColor: '#cc9900',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  Payment
                </span>
                <div
                  style={{
                    width: '0px',
                    height: '0px',
                    borderTop: '20px solid transparent',
                    borderBottom: '20px solid transparent',
                    borderLeft: '20px solid #cc9900',
                  }}
                ></div>
              </div>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='mt-2'>
            Payment
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>
              <div className='d-flex align-items-center justify-content-center'>
                <div
                  style={{
                    width: '0px',
                    height: '0px',
                    borderTop: '20px solid #cc9900',
                    borderBottom: '20px solid #cc9900',
                    borderLeft: '20px solid transparent',
                  }}
                ></div>
                <span
                  className='px-4 py-2'
                  style={{
                    backgroundColor: '#cc9900',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  Place Order
                </span>
                <div
                  style={{
                    width: '0px',
                    height: '0px',
                    borderTop: '20px solid transparent',
                    borderBottom: '20px solid transparent',
                    borderLeft: '20px solid #cc9900',
                  }}
                ></div>
              </div>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='mt-2'>
            Place Order
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
