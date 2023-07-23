import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Container, FloatingLabel } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const ContactUs = () => {
  return (
    <Container>
      <div class='grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4 py-8'>
        <div>
          <h3 className=' font-popins text-2xl font-bold'>Get in touch</h3>
          <p
            className='leading-loose
            font-inter text-lg py-3 tracking-wider text-stone-500'
          >
            For any inquiries or assistance, you can reach out to the footwear
            company's customer service team. They are available to answer your
            questions and provide support through various channels.
          </p>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center'>
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant='top'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTdVdbNxSsV1QOT-Lpl3l3-FiYQUB9ssklg&usqp=CAU'
                />
                <Card.Body>
                  <Card.Title>Location</Card.Title>
                  <Card.Text>B19,Etaweeragollewa,Colombo,Sri Lanka</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant='top'
                  src='https://www.stacked.ie/wp-content/uploads/2021/12/contact-us-hand-businessman-holding-mobile-smartphone-with-mail-phone-email-icon.png'
                />
                <Card.Body>
                  <Card.Title>Contact No</Card.Title>
                  <Card.Text>+94 768 234 980</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant='top'
                  src='https://blog.hubspot.com/hs-fs/hubfs/132_Find%20Email%20Address.jpg?width=893&height=600&name=132_Find%20Email%20Address.jpg'
                />
                <Card.Body>
                  <Card.Title>Email</Card.Title>
                  <Card.Text>phoenixindustry.business.com</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div>
          <h3 className='font-popins font-bold text-xl text-center my-5'>
            Feedback Form
          </h3>
          <Row className='justify-content-md-center'>
            <Col lg='6'>
              <Form>
                <Form.Group className='mb-4' controlId='username'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group className='mb-4' controlId='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Label>Comments</Form.Label>
                <FloatingLabel controlId='comments' className='mb-4'>
                  <Form.Control as='textarea' style={{ height: '100px' }} />
                </FloatingLabel>
                <div className='text-end'>
                  <Button variant='primary' type='submit'>
                    Send Message
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default ContactUs
