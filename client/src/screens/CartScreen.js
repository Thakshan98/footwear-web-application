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
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const navigate = useNavigate()
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping')
  }

  return (
    <Container className='my-5 font-popins'>
      <Row>
        <Col md={8}>
          <h2 className='py-2 text-secondary'>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product} className='my-2 py-3'>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link style={{textDecoration:'none'}} to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>LKR.{item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
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
          <Card className='py-2'>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h4 className='text-secondary'>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) Footwears
                </h4>
                LKR.
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom right,#50025c, #d20be0,#db3bb6)',
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '15px',
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
