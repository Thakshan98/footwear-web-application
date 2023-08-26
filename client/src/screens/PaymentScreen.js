import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import {  useNavigate } from 'react-router-dom';

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
     navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
     navigate('/placeorder')
  }

  return (
    <div  className='my-5'>
    <CheckoutSteps step1 step2 step3 />
    <FormContainer>
     
      <h1>Payment Method</h1>
      <br/><br/>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='Online Payment'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type='radio'
              label='Cash on Delivery'
              id='Cash on Delivery'
              name='paymentMethod'
              value='Cash on Delivery'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            {/* <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
          </Col>
        </Form.Group>

        <Button type='submit' 
           style={{ backgroundImage: 'linear-gradient(to bottom right,#0a0366,#475cd1,#8ec7f5)',color:'white',fontWeight:'600',float:'right',padding:'7px 20px'}}>
          Continue
        </Button>
      </Form>
    </FormContainer>
    </div>
  )
}

export default PaymentScreen
