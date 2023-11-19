import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
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
import phone from '../images/Phone.png'
import Android from '../images/android.png'
import Iphone from '../images/apple.png'
import ARViewer from '../components/ARViewer'
import { BsFillSkipBackwardCircleFill } from 'react-icons/bs'
import QRCode from 'qrcode.react'
import { TbBoxModel } from 'react-icons/tb'

const ProductScreen = () => {
  const { id } = useParams()
  const [isModelVisible, setModelVisible] = useState(false)
  const [isModel, setModel] = useState(true)
  const toggleModelVisibility = () => {
    setModelVisible(!isModelVisible)
  }
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedSizeCount, setSelectedSizeCount] = useState(0)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  //QR code availability
  const isQRCodeAvailable = () => {
    return product.qr !== undefined && product.qr !== null && product.qr !== ''
  }

  //3D model Availability
  const is3DModelAvailable = () => {
    return (
      product.url !== undefined && product.url !== null && product.url !== ''
    )
  }

  const is3DModelQRAvailable = () => {
    return (
      product.url !== undefined && product.url !== null && product.url !== ''
    )
  }

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
      <Container className='py-5 font-popins'>
        <div className='py-3 pb-4'>
          <Link to='/shop'>
            <BsFillSkipBackwardCircleFill
              className='rounded'
              size={45}
              color='black'
            />
          </Link>
        </div>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Meta title={product.name} />
            <Row>
              <Col
                lg={3}
                md={6}
                className='my-3 py-4 bg-white rounded'
                style={{ height: '300px', width: '300px' }}
              >
                <Image
                  className='productImg popImage border rounded img-fluid'
                  src={product.image}
                  alt={product.name}
                  fluid
                  style={{ height: '250px' }}
                />
              </Col>
              <Col lg={6} md={6} className='my-3'>
                <ListGroup variant='flush' className='rounded px-3 bg-white'>
                  <ListGroup.Item>
                    <h4 className='text-secondary collect heading-color py-2'>
                      {product.name}
                    </h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>Price: LKR.{product.price}</ListGroup.Item>
                  <ListGroup.Item>Gender: {product.gender}</ListGroup.Item>
                  <ListGroup.Item>Category: {product.cat} </ListGroup.Item>

                  <ListGroup.Item>
                    <div class='text-justify'>
                      Description: {product.description}
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {userInfo &&
                      !userInfo.isAdmin &&
                      !userInfo.isSystemAdmin && (
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <div>
                            <h5 className='py-3 collect heading-color'>
                              AR View Scan QR{' '}
                            </h5>
                            <div>
                              {isQRCodeAvailable() ? (
                                <img
                                  style={{ width: '200px' }}
                                  src={product.qr}
                                  alt='QR Code'
                                />
                              ) : (
                                <div
                                  class='alert alert-info text-center pb-0'
                                  role='alert'
                                >
                                  <p>
                                    QR Code is now unavailable in this product.
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                            }}
                          >
                            <a
                              href='https://play.google.com/store/apps/details?id=com.ibosoninnov.unitear'
                              target='_blank'
                              rel='noreferrer'
                            >
                              <img
                                className='img-fluid'
                                src={Android}
                                target='_blank'
                                alt='Android'
                                style={{ width: '180px', height: '60px' }}
                              />
                            </a>
                            <a
                              href='https://apps.apple.com/us/app/unitear/id1450089869'
                              target='_blank'
                              rel='noreferrer'
                            >
                              <img
                                className='img-fluid'
                                src={Iphone}
                                target='_blank'
                                alt='Iphone'
                                style={{ width: '180px', height: '60px' }}
                              />
                            </a>
                          </div>
                        </div>
                      )}
                  </ListGroup.Item>

                  <div className='py-3 px-3'>{/* <QR /> */}</div>
                </ListGroup>
              </Col>
              <Col lg={3} md={6} className='my-3'>
                {userInfo && !userInfo.isAdmin && !userInfo.isSystemAdmin && (
                  <>
                    <Card className='shadow-none p-3 mb-5 rounded border-0'>
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
                                        (sizeObj) =>
                                          sizeObj.size === selectedSize
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

                    <div className='shadow-none p-3 mb-5 rounded border-0 bg-white'>
                      <div
                        className='mx-5 py-3'
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column',
                        }}
                      >
                        <h4
                          className='collect heading-color text-center py-3'
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          3D Model View In <img src={phone} alt='phone' />
                        </h4>
                        <h4 className='collect heading-color py-2'>Scan QR</h4>
                        {is3DModelQRAvailable() ? (
                          <QRCode
                            value={product.url}
                            style={{ width: '200px', height: '200px' }}
                          />
                        ) : (
                          <div
                            class='alert alert-info text-center pb-0'
                            role='alert'
                          >
                            <p>QR is now unavailable in this product.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </Col>
            </Row>
            <Row className='my-5'>
              <Col md={6}>
                {userInfo && !userInfo.isAdmin && !userInfo.isSystemAdmin && (
                  <div class='sketchfab-embed-wrapper'>
                    <h2 className='collect heading-color py-3 text-center'>
                      Footwear 3D Model
                    </h2>{' '}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center horizontally
                        justifyContent: 'center', // Center vertically
                      }}
                    >
                      {/* <button
                        className='py-1 px-3 my-2 rounded btn btn-primary'
                        onClick={toggleModelVisibility}
                        style={{
                          fontWeight: 'bold',
                          border: '1px solid #DCDCDC',
                        }}
                      >
                        <TbBoxModel
                          color='white'
                          size={35}
                          style={{
                            padding: '6px',
                          }}
                        />
                        Click View in 3D
                      </button> */}

                      {is3DModelAvailable() ? (
                        <iframe
                          title='Footwear model'
                          frameborder='0'
                          allowfullscreen
                          mozallowfullscreen='true'
                          webkitallowfullscreen='true'
                          allow='autoplay; fullscreen; xr-spatial-tracking'
                          xr-spatial-tracking
                          execution-while-out-of-viewport
                          execution-while-not-rendered
                          web-share
                          width={600}
                          height={400}
                          // className='modelSize'
                          src={product.url}
                        ></iframe>
                      ) : (
                        <div
                          class='alert alert-info text-center pb-0 my-4'
                          role='alert'
                        >
                          <p>
                            3D Model View is now unavailable in this product.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </Col>
              <Col md={6} className='ps-0 rounded'>
                <div className='p-3 mb-5 bg-white rounded'>
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
                                  color: 'white',
                                  fontWeight: '600',
                                  borderRadius: '5px',
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
