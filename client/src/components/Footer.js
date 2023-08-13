import React from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaFacebookMessenger,
  FaTwitter,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='text-light footer' style={{ backgroundColor: '#232F3E' }}>
        <Container className='p-4 font-popins leading-6 tracking-wider'>
          <Row>
            <Col sm={7} className='justify-content-md-center text-center p-2 '>
              <p style={{ fontWeight: '900' }}>
                Get connected with us on our social networks:
              </p>
            </Col>
            <Col sm={1} className='justify-content-md-center text-light'>
              <Navbar.Text className='d-inline-block'>
                <Link
                  to=''
                  target='_blank'
                >
                  <FaFacebookF size={'18px'} color={'#ffffff'} />
                </Link>
              </Navbar.Text>
            </Col>
            <Col sm={1} className='justify-content-md-center text-light'>
              <Navbar.Text className='d-inline-block'>
                <Link
                  to=''
                  target='_blank'
                >
                  <FaInstagram size={'18px'} color={'#ffffff'} />
                </Link>
              </Navbar.Text>
            </Col>
            <Col sm={1} className='justify-content-md-center text-light'>
              <Navbar.Text className='d-inline-block'>
                <Link
                  to=''
                  target='_blank'
                >
                  <FaTelegramPlane size={'18px'} color={'#ffffff'} />
                </Link>
              </Navbar.Text>
            </Col>
            <Col sm={1} className='justify-content-md-center text-light'>
              <Navbar.Text className='d-inline-block'>
                <Link to=''>
                  <FaTwitter size={'18px'} color={'#ffffff'} />
                </Link>
              </Navbar.Text>
            </Col>
            <Col sm={1} className='justify-content-md-center text-light'>
              <Navbar.Text className='d-inline-block'>
                <Link
                  to=''
                  target='_blank'
                >
                  <FaFacebookMessenger size={'18px'} color={'#ffffff'} />
                </Link>
              </Navbar.Text>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={3} className='text-start'>
              <ul className='list-unstyled '>
                <li className='py-2'>
                  <h5 style={{ color: '#fc7b03' }}>Contact Us</h5>
                </li>
                <li className='py-2'>
                  <p>Phoenix industries pvt ltd</p>
                </li>
                <li className='py-2'>
                  <address className='text-white font-popins'>
                    No 57, Thotupola road, Welisara Sri lanka
                  </address>
                </li>
                <li className='py-2'>
                  <Link
                    to='tel:+94 112952702'
                    className='text-white font-popins mb-0'
                    style={{ textDecoration: 'none' }}
                  >
                    +94 112952702
                  </Link>
                </li>
                <li className='py-2'>
                  <Link
                    to='mailto:phoenixind@yahoo.com'
                    className='text-white font-popins mb-0'
                    style={{ textDecoration: 'none' }}
                  >
                    phoenixind@yahoo.com
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm={3} className='text-start'>
              <ul className='list-unstyled'>
                <li className='py-2'>
                  <h5 style={{ color: '#fc7b03' }}>Information</h5>
                </li>
                <li className='py-2'><Link
                  to='privacy-policy'
                  className='text-white font-popins text-sm py-2 mb-1'
                  style={{ textDecoration: 'none' }}
                >
                  Privacy Policy
                </Link></li>
                <li className='py-2'><Link
                  to='shipping-policy'
                  className='text-white font-popins text-sm py-2 mb-1'
                  style={{ textDecoration: 'none' }}
                >
                  Shipping Policy
                </Link></li>
                <li className='py-2'><Link
                  to='order-policy'
                  className='text-white font-popins text-sm py-2 mb-1'
                  style={{ textDecoration: 'none' }}
                >
                  Order Policy
                </Link></li>
                <li className='py-2'><Link
                  to='term-and-conditions'
                  className='text-white font-popins text-sm py-2 mb-1'
                  style={{ textDecoration: 'none' }}
                >
                  Terms and Conditions
                </Link></li>
              </ul>
            </Col>
            <Col sm={3} className='text-start'>
              <ul className='list-unstyled'>
                <li className='py-2'>
                  <h5 style={{ color: '#fc7b03' }}>My Account</h5>
                </li>
                <li className='py-2'>Profile</li>
                <li className='py-2'>Cart</li>
                <li className='py-2'>Account Settings</li>
                <li className='py-2'>Order Details</li>
              </ul>
            </Col>
            <Col sm={3} className='text-start'>
              <ul className='list-unstyled'>
                <li className='py-2'>
                  <h5 style={{ color: '#fc7b03' }}>Services</h5>
                </li>
                <li className='py-2'>Door Delivery</li>
                <li className='py-2'>Online Payment</li>
                <li className='py-2'>24/7 Helpline</li>
                <li className='py-2'>Cancel Order within 24hours</li>
              </ul>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col sm={12}>
              <p className='copyright'>
                {' '}
                &copy; {new Date().getFullYear()} Powered by Phoenix Industries.
                All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer
