import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link ><span style={{backgroundImage: 'linear-gradient(to right,#59e35f,#006622)',color:'white',fontWeight:'bold',borderRadius: '15px',padding:'3px 9px'}}>Sign In</span></Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link><span style={{backgroundImage: 'linear-gradient(to right,#59e35f,#006622)',color:'white',fontWeight:'bold',borderRadius: '15px',padding:'3px 9px'}}>Shipping</span></Nav.Link>
           
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
             <Nav.Link><span style={{backgroundImage: 'linear-gradient(to right,#59e35f,#006622)',color:'white',fontWeight:'bold',borderRadius: '15px',padding:'3px 9px'}}>Payment</span></Nav.Link>
           
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
              <Nav.Link><span style={{backgroundImage: 'linear-gradient(to right,#59e35f,#006622)',color:'white',fontWeight:'bold',borderRadius: '15px',padding:'3px 9px'}}>Place Order</span></Nav.Link>
         
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
