import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import { useNavigate } from 'react-router-dom'
const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [mobile, setMobile] = useState(shippingAddress.mobile)

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, mobile }))
    navigate('/payment')
  }

  return (
    <div className='my-5'>
      <CheckoutSteps step1 step2 />
      <FormContainer>
        <div className='bg-white px-4 py-2 font-popins shadow-lg p-3 m-5 bg-body-tertiary rounded'>
        <h2 className=' font-popins text-center py-3 heading-color'>Shipping Info</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='address' className='mb-3'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter address'
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='city' className='mb-3'>
              <Form.Label>City</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter city'
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='mobile' className='mb-3'>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your mobile number'
                pattern='[0-9]{10}'
                maxlength='10'
                value={mobile}
                required
                onChange={(e) => setMobile(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              className='my-3'
              type='submit'
              style={{ color: 'white', fontWeight: '600' }}
            >
              Continue
            </Button>
          </Form>
        </div>
      </FormContainer>
    </div>
  )
}

export default ShippingScreen
