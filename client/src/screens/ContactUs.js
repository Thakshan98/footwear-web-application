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
    <>
      <div class='container py-3'>
        <div class='row'>
          <div class='col'>
            <div className='text-center p-3 my-5'>
              <h1 style={{ color: 'Green' }} className='collect'>Thank you for visiting Phoenix</h1>
              <h3 className='collect py-2' style={{ color: 'purple' }}>
                Sole Haven Footwear Emporium.
              </h3>
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
                <h3 className='collect text-2xl font-semibold mt-2 py-3 mr-6'>
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
      <ChatBot />
    </>
  )
}

export default ContactScreen
