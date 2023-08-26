import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import { useNavigate } from 'react-router-dom'

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const navigate = useNavigate()

  if (!shippingAddress.address) {
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }

  return (
    <div className='my-5'>
      <CheckoutSteps step1 step2 step3 />
      <FormContainer>
        <div className='px-4 py-2 font-popins shadow-lg p-3 m-5 bg-body-tertiary rounded'>
          <h2 className='text-center py-2 heading-color'>Payment Method</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label as='legend'>Select Method</Form.Label>
              <Col>
                <Form.Check
                  className='mb-3'
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

            <Button
              className='px-4 py-2 my-3'
              type='submit'
              style={{
                color: 'white',
                fontWeight: '600',
              }}
            >
              Continue
            </Button>
          </Form>
        </div>
      </FormContainer>
    </div>
  )
}

export default PaymentScreen
