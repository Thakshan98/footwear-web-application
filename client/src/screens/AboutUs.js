import React from 'react'
import { Col, Row, Container, Card, Button } from 'react-bootstrap'

function ContactScreen() {
  return (
    <div className='m-4 px-5'>
      <div className='text-center p-3 my-5'>
        <h3 style={{ color: 'Green' }}>Thank you for using Bookcorner</h3>
        <h5 style={{ color: 'purple' }}>A BETTER WAY TO BUY BOOKS ONLINE</h5>
      </div>
      <Row>
        <Col sm={4} >
          <Card style={{ borderRadius: '10px' }}>
            <Card.Header
              className='bg-info text-center text-light'
              style={{ borderRadius: '10px 10px 0 0' }}
            >
              Our Vission & Mission
            </Card.Header>
            <Card.Body>
              <Card.Title>Vission</Card.Title>
              <Card.Text style={{textAlign:"justify"}}>
                We work to connect readers with independent booksellers all over
                the world. We believe local bookstores are essential community
                hubs that foster culture, curiosity, and a love of reading, and
                we're committed to helping them survive and thrive. Our platform
                gives independent bookstores tools to compete online and
                financial support to help them maintain their presence in local
                communities.
              </Card.Text>
              <Card.Title >Mission</Card.Title>
              <Card.Text style={{textAlign:"justify"}}>
                To help local, independent bookstores thrive in the age of
                ecommerce.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col sm={4}>
          <Card style={{ borderRadius: '10px' }}>
            <Card.Header
              className='bg-warning text-center text-light'
              style={{ borderRadius: '10px 10px 0 0' }}
            >
              Our Story
            </Card.Header>
            <Card.Body>
              <Card.Text className='py-3' style={{textAlign:"justify"}}>
                Book Corner began as an idea to help support bookstores and
                their communities at a time when more and more people were
                buying their books online. We saw an opportunity to create an
                alternative to Amazon for socially-conscious online shoppers.
                Amazon sells over 60% of all books in the US and is growing.
                That shift threatens the future of bookstores and will hurt
                readers, authors, and publishers who rely on a diverse, healthy
                ecosystem for books. We had a better idea — give readers the
                convenience of online shopping while supporting independent
                bookstores at the same time.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card style={{ borderRadius: '10px' }}>
            <Card.Header
              className='bg-danger text-center text-light'
              style={{ borderRadius: '10px 10px 0 0' }}
            >
              FAQ
            </Card.Header>
            <Card.Body>
              <Card.Title className='py-4'>
                How does Bookcorner target online customers?
              </Card.Title>
              <Card.Text  style={{textAlign:"justify"}}>
                Bookcorner is designed to generate affiliate revenue. Our
                network of publishers, authors, bookstagrammers, celebrity book
                clubs, and other media sites reaches socially-conscious online
                consumers who are not yet buying their books online through an
                independent bookstore. Bookcorner interface and purchase
                process is designed to be as convenient, streamlined, and
                user-friendly as possible, for an alternative that is just as
                easy as our competitors.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ContactScreen