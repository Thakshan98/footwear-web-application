import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Button,
  Row,
  Col,
  Container,
  ListGroup,
  Image,
  Card,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import { USER_DETAILS_RESET } from '../constants/userConstants'

const PlaceOrderScreen = () => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const navigate = useNavigate()
  if (!cart.shippingAddress.address) {
    navigate('/shipping')
  } else if (!cart.paymentMethod) {
    navigate('/payment')
  }
  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.count, 0)
  )
  cart.shippingPrice = addDecimals(cart.itemsPrice > 10000 ? 0 : 500)
  // cart.taxPrice = addDecimals(Number((0.05 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) 
    // Number(cart.taxPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`)
      dispatch({ type: USER_DETAILS_RESET })
      dispatch({ type: ORDER_CREATE_RESET })
    }
    // eslint-disable-next-line
  }, [success, navigate])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        // taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  return (
    <>
      <Container className='py-5'>
        <CheckoutSteps step1 step2 step3 step4 />
        <Row>
          <Col md={8}>
            <div className='bg-white px-4 py-2 font-popins shadow-lg p-3 my-5 rounded'>
              <ListGroup variant='flush'>
                <ListGroup.Item className='py-3'>
                  <h3>Shipping</h3>
                  <p>
                    <strong>Address:</strong>
                    {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                    {cart.shippingAddress.postalCode}
                  </p>
                </ListGroup.Item>

                <ListGroup.Item className='py-3'>
                  <h3>Payment Method</h3>
                  <strong>Method: </strong>
                  {cart.paymentMethod}
                </ListGroup.Item>

                <ListGroup.Item className='py-3'>
                  <h3>Order Items</h3>
                  {cart.cartItems.length === 0 ? (
                    <Message>Your cart is empty</Message>
                  ) : (
                    <ListGroup variant='flush'>
                      {cart.cartItems.map((item, index) => (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                rounded
                              />
                            </Col>
                            <Col>
                              <Link to={`/product/${item.product}`} style={{textDecoration:'none'}}>
                                {item.name}
                              </Link>
                            </Col>
                            <Col>
                              <b>Size </b>
                              {item.size}
                            </Col>
                            <Col md={4}>
                              {item.count} x LKR.{item.price} = LKR.
                              {item.count * item.price}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <Card className='bg-white px-4 py-2 font-popins shadow-lg p-3 my-5 rounded border-0'>
                <ListGroup variant='flush'>
                  <ListGroup.Item >
                    <h2>Order Summary</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Items</Col>
                      <Col>LKR.{cart.itemsPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping</Col>
                      <Col>LKR.{cart.shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  {/* <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>LKR.{cart.taxPrice}</Col>
                    </Row>
                  </ListGroup.Item> */}
                  <ListGroup.Item>
                    <Row>
                      <Col>Total</Col>
                      <Col>LKR.{cart.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {error && <Message variant='danger'>{error}</Message>}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      type='button'
                      className='btn-block'
                      disabled={cart.cartItems === 0}
                      onClick={placeOrderHandler}
                      style={{ fontWeight: '600', borderRadius: '15px' }}
                    >
                      Place Order
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PlaceOrderScreen
