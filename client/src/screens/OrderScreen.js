import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Container,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  getOrderDetails,
  payOrder,
  payCashOrder,
  deliverOrder,
} from '../actions/orderActions'
import {
  ORDER_PAY_RESET,
  ORDER_PAYCASH_RESET,
  ORDER_DELIVER_RESET,
} from '../constants/orderConstants'

const OrderScreen = () => {
  const { id } = useParams()

  const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  const orderPayCash = useSelector((state) => state.orderPayCash)
  const { loading: loadingPayCash, success: successPayCash } = orderPayCash

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  if (!loading && order && order.orderItems) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.count, 0)
    )
  }
  const navigate = useNavigate()
  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (
      !order ||
      successPay ||
      successPayCash ||
      successDeliver ||
      order._id !== id
    ) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDER_PAYCASH_RESET })
      dispatch({ type: ORDER_DELIVER_RESET })
      dispatch(getOrderDetails(id))
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [dispatch, id, successPay, successPayCash, successDeliver, order])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payOrder(id, paymentResult))
  }

  const deliverHandler = () => {
    dispatch(deliverOrder(id))
  }
  const cashOnPaymentHandler = () => {
    dispatch(payCashOrder(id))
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Container className='py-5'>
      <>
        <h3 className='text-center my-2'>Order Information</h3>
        <Row>
          <Col md={8}>
            <div className='bg-white px-4 py-2 font-popins shadow-lg p-3 my-5 rounded'>
              <ListGroup variant='flush'>
                <ListGroup.Item className='my-2'>
                  <h3 className='heading-color'>Shipping</h3>
                  <p>
                    <strong>Name:&nbsp; </strong> {order.user.name}
                  </p>
                  <p>
                    <strong>Email:&nbsp; </strong>{' '}
                    <Link
                      to={`mailto:${order.user.email}`}
                      style={{ textDecoration: 'none' }}
                    >
                      {order.user.email}
                    </Link>
                  </p>
                  <p>
                    <strong>Address:&nbsp;&nbsp;</strong>
                    {order.shippingAddress.address},{' '}
                    {order.shippingAddress.city}{' '}
                    {order.shippingAddress.postalCode},{' '}
                    {order.shippingAddress.country}
                  </p>
                  {order.isDelivered ? (
                    <Message variant='success'>
                      Delivered on {order.deliveredAt}
                    </Message>
                  ) : (
                    <Message variant='danger'>Not Delivered</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item className='my-2'>
                  <h3 className='heading-color'>Payment Method</h3>
                  <p>
                    <strong>Method: &nbsp;</strong>
                    {order.paymentMethod}
                  </p>
                  {order.isPaid ? (
                    <Message variant='success'>Paid on {order.paidAt}</Message>
                  ) : (
                    <Message variant='danger'>Not Paid</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item className='my-2'>
                  <h3 className='heading-color'>Order Items</h3>

                  {order.orderItems.length === 0 ? (
                    <Message>Order is empty</Message>
                  ) : (
                    <ListGroup variant='flush'>
                      {order.orderItems.map((item, index) => (
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
                              <Link
                                to={`/product/${item.product}`}
                                style={{ textDecoration: 'none' }}
                              >
                                {item.name}
                              </Link>
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
              <Card className='bg-white px-4 py-2 font-popins border-0 shadow-lg p-3 my-5 rounded'>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2>Order Summary</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Items</Col>
                      <Col>LKR.{order.itemsPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping</Col>
                      <Col>LKR.{order.shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>LKR.{order.taxPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total</Col>
                      <Col>LKR.{order.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  {userInfo && !userInfo.isAdmin && !order.isPaid && (
                    <ListGroup.Item>
                      {loadingPay && <Loader />}
                      {!sdkReady ? (
                        <Loader />
                      ) : (
                        <PayPalButton
                          amount={order.totalPrice}
                          onSuccess={successPaymentHandler}
                        />
                      )}
                    </ListGroup.Item>
                  )}
                  {loadingDeliver && <Loader />}
                  {userInfo && userInfo.isSystemAdmin && !order.isDelivered && (
                    <ListGroup.Item>
                      <Button
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                        type='button'
                        className='btn btn-block'
                        onClick={deliverHandler}
                      >
                        Mark As Delivered
                      </Button>
                    </ListGroup.Item>
                  )}
                  {userInfo && userInfo.isAdmin && !order.isDelivered && (
                    <ListGroup.Item>
                      <Button
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                        type='button'
                        className='btn btn-block'
                        onClick={deliverHandler}
                      >
                        Mark As Delivered
                      </Button>
                    </ListGroup.Item>
                  )}
                  {loadingPayCash && <Loader />}
                  {userInfo && userInfo.isSystemAdmin && !order.isPaid && (
                    <ListGroup.Item>
                      <Button
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                        type='button'
                        className='btn btn-block'
                        onClick={cashOnPaymentHandler}
                      >
                        Mark As Paid
                      </Button>
                    </ListGroup.Item>
                  )}
                  {userInfo && userInfo.isAdmin && !order.isPaid && (
                    <ListGroup.Item>
                      <Button
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                        type='button'
                        className='btn btn-block'
                        onClick={cashOnPaymentHandler}
                      >
                        Mark As Paid
                      </Button>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card>
            </div>
          </Col>
        </Row>
      </>
    </Container>
  )
}

export default OrderScreen
