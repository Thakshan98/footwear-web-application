import React from 'react'
import { Col, Row, Container, Card, Button } from 'react-bootstrap'
import companyImage from '../images/company.jpg'
import BreadCrumb from '../components/BreadCrumb'
import { AiOutlineHome } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { GrCircleInformation } from 'react-icons/gr'
import { FaCodeBranch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ChatBot from '../components/ChatBot'

function ContactScreen() {
  return (
    // <div className='m-4 px-5'>
    //   <div className='text-center p-3 my-5'>
    //     <h3 style={{ color: 'Green' }}>Thank you for using Phoenix</h3>
    //     <h5 style={{ color: 'purple' }}>A BETTER WAY TO BUY FOOTWEAR ONLINE</h5>
    //   </div>
    //   <Row>
    //     <Col sm={4} >
    //       <Card style={{ borderRadius: '10px' }}>
    //         <Card.Header
    //           className='bg-info text-center text-light'
    //           style={{ borderRadius: '10px 10px 0 0' }}
    //         >
    //           Our Vission & Mission
    //         </Card.Header>
    //         <Card.Body>
    //           <Card.Title>Vission</Card.Title>
    //           <Card.Text style={{textAlign:"justify"}}>
    //             We work to connect readers with independent booksellers all over
    //             the world. We believe local bookstores are essential community
    //             hubs that foster culture, curiosity, and a love of reading, and
    //             we're committed to helping them survive and thrive. Our platform
    //             gives independent bookstores tools to compete online and
    //             financial support to help them maintain their presence in local
    //             communities.
    //           </Card.Text>
    //           <Card.Title >Mission</Card.Title>
    //           <Card.Text style={{textAlign:"justify"}}>
    //             To help local, independent bookstores thrive in the age of
    //             ecommerce.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>

    //     <Col sm={4}>
    //       <Card style={{ borderRadius: '10px' }}>
    //         <Card.Header
    //           className='bg-warning text-center text-light'
    //           style={{ borderRadius: '10px 10px 0 0' }}
    //         >
    //           Our Story
    //         </Card.Header>
    //         <Card.Body>
    //           <Card.Text className='py-3' style={{textAlign:"justify"}}>
    //             Book Corner began as an idea to help support bookstores and
    //             their communities at a time when more and more people were
    //             buying their books online. We saw an opportunity to create an
    //             alternative to Amazon for socially-conscious online shoppers.
    //             Amazon sells over 60% of all books in the US and is growing.
    //             That shift threatens the future of bookstores and will hurt
    //             readers, authors, and publishers who rely on a diverse, healthy
    //             ecosystem for books. We had a better idea — give readers the
    //             convenience of online shopping while supporting independent
    //             bookstores at the same time.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //     <Col sm={4}>
    //       <Card style={{ borderRadius: '10px' }}>
    //         <Card.Header
    //           className='bg-danger text-center text-light'
    //           style={{ borderRadius: '10px 10px 0 0' }}
    //         >
    //           FAQ
    //         </Card.Header>
    //         <Card.Body>
    //           <Card.Title className='py-4'>
    //             How does Bookcorner target online customers?
    //           </Card.Title>
    //           <Card.Text  style={{textAlign:"justify"}}>
    //             Bookcorner is designed to generate affiliate revenue. Our
    //             network of publishers, authors, bookstagrammers, celebrity book
    //             clubs, and other media sites reaches socially-conscious online
    //             consumers who are not yet buying their books online through an
    //             independent bookstore. Bookcorner interface and purchase
    //             process is designed to be as convenient, streamlined, and
    //             user-friendly as possible, for an alternative that is just as
    //             easy as our competitors.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </div>
    <>
      <BreadCrumb title='About Us' />
      <div class='container py-3'>
        <div class='row'>
          <div class='col'>
            <div className='text-center p-3 my-5'>
              <h3 style={{ color: 'Green' }}>Thank you for using Phoenix</h3>
              <h5 className=' uppercase' style={{ color: 'purple' }}>
                Sole Haven Footwear Emporium.
              </h5>
            </div>
            <div>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.8201299446455!2d79.892794875595!3d7.030416992971442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f70b6a4ac5b5%3A0xa8a5e649e5d823fa!2s57%20Thotupola%20Rd%2C%20Kandana!5e0!3m2!1sen!2slk!4v1691680900050!5m2!1sen!2slk'
                // width='1200'
                height='450'
                style={{ border: 0, width: '100%' }}
                allowfullscreen=''
                loading='lazy'
                title='Company Location'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div class='container py-5'>
        <div class='row bg-secondary-subtle'>
          <div class='col-lg-6 col-md-12 col-sm-12'>
            <div class='p-3 text-white'>
              <img
                className=' img-fluid'
                src={companyImage}
                alt='company building'
              />
            </div>
          </div>
          <div class='col-lg-6 col-md-12 col-sm-12'>
            <div class='p-3 text-black'>
              <div>
                <h3 className='text-2xl font-semibold mt-2 py-3 mr-6'>
                  Get In Touch With Us
                </h3>
                <div>
                  <ul style={{ listStyle: 'none' }}>
                    <li className='mb-4 d-flex align-items-center gap-3'>
                      <AiOutlineHome size={20} className='mr-2' />
                      <address className='mb-0'>
                      No 57, Thotupola road, Welisara Sri lanka
                      </address>
                    </li>
                    <li className='mb-4 d-flex align-items-center gap-3'>
                      <BsTelephone size={20} />
                      <Link
                        to='tel:+94 0112952702'
                        style={{ textDecoration: 'none' }}
                        className='text-black'
                      >
                       +94 112952702
                      </Link>
                    </li>
                    <li className='mb-4 d-flex align-items-center gap-3'>
                      <HiOutlineMail size={20} />
                      <Link
                        to='mailto:phoenixind@yahoo.com'
                        style={{ textDecoration: 'none' }}
                        className='text-black'
                      >
                       phoenixind@yahoo.com
                      </Link>
                    </li>
                    <li className='mb-4 d-flex align-items-center gap-3'>
                      <GrCircleInformation size={20} />
                      <p className='mb-0'>Weekdays 8 AM - 10 PM</p>
                    </li>
                    <li className='mb-4 d-flex align-items-center gap-3'>
                      <FaCodeBranch size={20} />
                      <p className='mb-0'>Main three branches</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatBot/>
    </>
  )
}

export default ContactScreen
