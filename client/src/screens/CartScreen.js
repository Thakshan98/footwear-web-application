import React, { useEffect } from 'react'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  Container,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = () => {
  const { id: productId } = useParams()

  const location = useLocation()
  const count = location.search ? Number(location.search.split('=')[1]) : 1
  const size = location.search ? location.search.split('=')[2] : '' // Extract size from URL

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const navigate = useNavigate()
  
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, size, count))
    }
  }, [dispatch, productId, size, count])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping')
  }

  return (
    <Container className='py-5 font-popins'>
      <Row>
        <Col md={8}>
          <h2 className='py-2 collect heading-color'>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroup.Item
                  key={item.product}
                  className='my-1 py-4 shadow bg-white rounded'
                >
                  <Row className='d-flex align-items-center justify-content-center'>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={2}>
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/product/${item.product}`}
                        className='navFont'
                      >
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={2}>
                      <b className='navFont'>LKR.</b> {item.price}
                    </Col>
                    <Col md={2}>
                      <b className='navFont'>Size</b> {item.size}
                    </Col>
                    <Col md={2}>
                      <b className='navFont'>Quantity</b> {item.count}
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i
                          className='fas fa-trash'
                          style={{ color: 'red' }}
                        ></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4} className='py-5 my-3'>
          <Card className='py-4 shadow bg-white border-0 rounded'>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3 className='collect text-secondary'>
                  Subtotal (
                  {cartItems.reduce((acc, item) => acc + item.count, 0)})
                  Footwears
                </h3>
                LKR.
                {cartItems
                  .reduce((acc, item) => acc + item.count * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '5px',
                  }}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CartScreen
