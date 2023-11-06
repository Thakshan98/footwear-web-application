import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {
  listProductDetails,
  createProductReview,
} from '../actions/productActions'
import { addToCart } from '../actions/cartActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

const ProductScreen = () => {
  const { id } = useParams()

  const [selectedSize, setSelectedSize] = useState('')
  const [selectedSizeCount, setSelectedSizeCount] = useState(0)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const handleSizeChange = (e) => {
    const newSize = e.target.value
    setSelectedSize(newSize)
    setSelectedSizeCount(1) // Reset count when size changes
  }

  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate

  const navigate = useNavigate()
  useEffect(() => {
    if (successProductReview) {
      setRating(0)
      setComment('')
    }
    if (!product._id || product._id !== id) {
      dispatch(listProductDetails(id))
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
  }, [dispatch, navigate, id, successProductReview])

  const addToCartHandler = () => {
    if (selectedSize && selectedSizeCount > 0) {
      dispatch(addToCart(id, selectedSize, selectedSizeCount))
      navigate('/cart') // Redirect to the cart page
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(id, {
        rating,
        comment,
      })
    )
  }

  return (
    <>
      <Container className='my-5 font-popins'>
        <Link
          className='btn btn-sm my-3'
          style={{
            backgroundImage:
              'linear-gradient(to bottom right,#0a0366,#475cd1,#8ec7f5)',
            color: 'white',
            fontWeight: '600',
          }}
          to='/shop'
        >
          Go Back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Meta title={product.name} />
            <Row>
              <Col md={3} className='my-3 shadow p-3 mb-5 bg-white rounded'>
                <Image
                  className='productImg'
                  src={product.image}
                  alt={product.name}
                  fluid
                />
              </Col>
              <Col md={6} className='my-3'>
                <ListGroup
                  variant='flush'
                  className='rounded px-3 shadow bg-white'
                >
                  <ListGroup.Item>
                    <h4 className='text-secondary'>{product.name}</h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>Price: LKR.{product.price}</ListGroup.Item>
                  <ListGroup.Item>
                    <div class='text-justify'>
                      Description: {product.description}
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3} className='my-3'>
                {userInfo && !userInfo.isAdmin && !userInfo.isSystemAdmin && (
                  <Card className='shadow p-3 mb-5 bg-white rounded  border-0'>
                    <ListGroup variant='flush'>
                      <ListGroup.Item>
                        <Row>
                          <Col>Price:</Col>
                          <Col>
                            <strong>LKR.{product.price}</strong>
                          </Col>
                        </Row>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Row>
                          <Col>Size:</Col>
                          <Col>
                            <Form.Control
                              as='select'
                              value={selectedSize}
                              onChange={(e) => handleSizeChange(e)}
                            >
                              <option value=''>Select Size</option>
                              {product.size &&
                                product.size.map((sizeObj, index) => (
                                  <option key={index} value={sizeObj.size}>
                                    {sizeObj.size}
                                  </option>
                                ))}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Row>
                          <Col>Count:</Col>
                          <Col>
                            <Form.Control
                              as='select'
                              value={selectedSizeCount}
                              onChange={(e) =>
                                setSelectedSizeCount(e.target.value)
                              }
                            >
                              <option value={0}>Select Count</option>
                              {selectedSize &&
                                product.size &&
                                product.size.find(
                                  (sizeObj) => sizeObj.size === selectedSize
                                ) &&
                                [
                                  ...Array(
                                    product.size.find(
                                      (sizeObj) => sizeObj.size === selectedSize
                                    ).count
                                  ).keys(),
                                ].map((count) => (
                                  <option key={count + 1} value={count + 1}>
                                    {count + 1}
                                  </option>
                                ))}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Button
                          onClick={addToCartHandler}
                          className='btn-block'
                          type='button'
                          disabled={selectedSizeCount === 0}
                          style={{
                            backgroundImage:
                              'linear-gradient(to bottom right,#50025c, #d20be0,#db3bb6)',
                            color: 'white',
                            fontWeight: '600',
                          }}
                        >
                          Add To Cart
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                )}
              </Col>
            </Row>
            <Row>
              <Col md={3}></Col>
              <Col md={6} className='ps-0 rounded'>
                <div className='shadow p-3 mb-5 bg-white rounded'>
                  {userInfo && !userInfo.isAdmin && !userInfo.isSystemAdmin && (
                    <div class='py-2 m-4 rounded'>
                      <h3 className='text-lg'>Reviews</h3>

                      {product.reviews.length === 0 && (
                        <Message>No Reviews</Message>
                      )}
                      <ListGroup variant='flush' className='py-2'>
                        {product.reviews.map((review) => (
                          <ListGroup.Item key={review._id}>
                            <strong>{review.name}</strong>
                            <Rating value={review.rating} />
                            <p>{review.createdAt.substring(0, 10)}</p>
                            <p>{review.comment}</p>
                          </ListGroup.Item>
                        ))}
                        <ListGroup.Item>
                          <h4 className='text-secondary'>
                            Write a Customer Review
                          </h4>
                          {successProductReview && (
                            <Message variant='success'>
                              Review submitted successfully
                            </Message>
                          )}
                          {loadingProductReview && <Loader />}
                          {errorProductReview && (
                            <Message variant='danger'>
                              {errorProductReview}
                            </Message>
                          )}
                          {userInfo ? (
                            <Form onSubmit={submitHandler}>
                              <Form.Group controlId='rating'>
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                  as='select'
                                  value={rating}
                                  onChange={(e) => setRating(e.target.value)}
                                >
                                  <option value=''>Select...</option>
                                  <option value='1'>1 - Poor</option>
                                  <option value='2'>2 - Fair</option>
                                  <option value='3'>3 - Good</option>
                                  <option value='4'>4 - Very Good</option>
                                  <option value='5'>5 - Excellent</option>
                                </Form.Control>
                              </Form.Group>
                              <Form.Group controlId='comment'>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control
                                  as='textarea'
                                  row='3'
                                  value={comment}
                                  onChange={(e) => setComment(e.target.value)}
                                ></Form.Control>
                              </Form.Group>
                              <Button
                                disabled={loadingProductReview}
                                type='submit'
                                className='btn-block my-3'
                                style={{
                                  backgroundImage:
                                    'linear-gradient(to bottom right,#79db58,#036920,#79db58)',
                                  color: 'white',
                                  fontWeight: '600',
                                  borderRadius: '15px',
                                }}
                              >
                                Submit
                              </Button>
                            </Form>
                          ) : (
                            <Message>
                              Please <Link to='/login'>sign in</Link> to write a
                              review{' '}
                            </Message>
                          )}
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  )
}

export default ProductScreen
