import React from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsappSquare,
  FaFacebookMessenger,
  FaStore,
  FaPhoneSquareAlt,
  FaEnvelope,
  FaTwitter,
} from 'react-icons/fa'

function Footer() {
  return (
    <React.Fragment>
      <div className=' text-light footer' >
        <Container className='p-4'>
          <Row>
            <Col sm={7} className='justify-content-md-center text-center p-2 '>
              <p style={{fontWeight:"900"}}>Get connected with us on our social networks:</p>
            </Col>
            <Col sm={1} className='justify-content-md-center text-light'>
              <Navbar.Text className='d-inline-block'>
                <a
                  href='https://www.facebook.com/Book-Corner-110785811720166/?ref=pages_you_manage'
                  target='_blank'
                >
                  <FaFacebookF size={'18px'} color={'#ffffff'} />
                </a>
              </Navbar.Text>
              </Col>
              <Col sm={1} className='justify-content-md-center text-light'>
              <Navbar.Text className='d-inline-block'>
                <a href='https://www.instagram.com/bookcornerinfo/' target='_blank'>
                  <FaInstagram size={'18px'} color={'#ffffff'} />
                </a>
              </Navbar.Text>
              </Col>
              <Col sm={1} className='justify-content-md-center text-light'>
              <Navbar.Text className='d-inline-block'>
                <a href='https://web.telegram.org/z/#-1649825626' target='_blank'>
                  <FaTelegramPlane size={'18px'} color={'#ffffff'} />
                </a>
              </Navbar.Text>
              </Col>
              <Col sm={1} className='justify-content-md-center text-light'>
              <Navbar.Text className='d-inline-block'>
                <a href='https://twitter.com/infobookcorner' target='_blank'>
                  <FaTwitter size={'18px'} color={'#ffffff'} />
                </a>
              </Navbar.Text>
              </Col>
              <Col sm={1} className='justify-content-md-center text-light'>
              <Navbar.Text className='d-inline-block'>
                <a href='https://www.facebook.com/groups/805126427516599' target='_blank'>
                  <FaFacebookMessenger size={'18px'} color={'#ffffff'} />
                </a>
              </Navbar.Text>
            </Col>
          </Row>
        <hr/>
          <Row>
            <Col sm={3} className='text-start'>
              <ul className='list-unstyled  '>
                <li className='py-2'>
                  <h5 style={{color:"#fc7b03"}}>CONTACT</h5>
                </li>

                <li className='py-2'>
                  <a href='tel:+94776408775' target='_blank'>
                    <FaPhoneSquareAlt size={'16px'} color={'#ffffff'} />
                  </a>
                  &nbsp; +94776408775
                </li>
                <li className='py-2'>
                  <a href='https://wa.me/+94776408775' target='_blank'>
                    <FaWhatsappSquare size={'16px'} color={'#ffffff'} />
                  </a>
                  &nbsp; +94776408775
                </li>
                <li className='py-2'>
                  <a href='https://goo.gl/maps/CJXsuk9HqnJxRZBh6' target='_blank'>
                    <FaStore size={'16px'} color={'#ffffff'} />
                  </a>
                  &nbsp; Poonagary, Kilinochchi.
                </li>
                <li className='py-2'>
                  <a href='mailto:infobookcorner@gmail.com'>
                    <FaEnvelope size={'16px'} color={'#ffffff'} />
                  </a>
                  &nbsp; infobookcorner@gmail.com
                </li>
              </ul>
            </Col>
            <Col sm={3} className='text-start'>
              <ul className='list-unstyled'>
                <li className='py-2'>
                  <h5 style={{color:"#fc7b03"}}>USEFUL LINKS</h5>
                </li>
                <li className='py-2'>Feedback</li>
                <li className='py-2'>About Us</li>
                <li className='py-2'>Contact Us</li>
                <li className='py-2'>Search</li>
              </ul>
            </Col>
            <Col sm={3} className='text-start'>
              <ul className='list-unstyled'>
                <li className='py-2'>
                  <h5 style={{color:"#fc7b03"}}>MY ACCOUNT</h5>
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
                  <h5 style={{color:"#fc7b03"}}>SERVICES</h5>
                </li>
                <li className='py-2'>Doorstep Delivery</li>
                <li className='py-2'>Online Payment</li>
                <li className='py-2'>24/7 Helpline</li>
                <li className='py-2'>Cancel Order within 24hours</li>
              </ul>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col sm={12}>
              <p className='copyright'>&copy; 2022 Copyright bookcorner.com</p>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Footer
