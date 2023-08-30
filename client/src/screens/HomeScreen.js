import React, { useEffect } from 'react'
import { Link, Route, useParams, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import { listCategories } from '../actions/categoryAction'
import SearchBox from '../components/SearchBox'
import Marquee from 'react-fast-marquee'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BiSupport } from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'
import { GiPriceTag } from 'react-icons/gi'
import Caros from '../components/Caros'
import background from '../images/Caro.png'
import men from '../images/men.png'
import { FaLongArrowAltRight } from 'react-icons/fa'

const HomeScreen = () => {
  const { keyword, pageNumber } = useParams()

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  const categoriesList = useSelector((state) => state.categoriesList)
  const { category } = categoriesList

  useEffect(() => {
    dispatch(listCategories())
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <div classNameName='bg-stone-300 text-center'>
      <div>
        <img
          src={background}
          alt='background'
          style={{ height: '80vh', width: '100%' }}
          classNameName='img-fluid px-2'
        />
      </div>
      {/* <div classNameName='caro'>
        <Meta />
        {!keyword ? (
          <ProductCarousel />
        ) : (
          <Link to='/' classNameName='btn btn-light'>
            Go Back
          </Link>
        )}
      </div> */}
      {/* <div classNameName='py-3 px-5'>
        <Caros />
      </div> */}

      <Container>
        <div>
          <div class='container text-center py-5 my-3'>
            <div class='row'>
              <div class='col-lg-4 col-md-6 col-sm-12 my-2'>
                <div
                  class='shadow p-3  rounded'
                  style={{ backgroundColor: '#B3E140' }}
                >
                  <h4 className='mt-4 collect'>MEN COLLECTION</h4>
                  <img
                    src={men}
                    style={{ width: '300px', Height: '150px' }}
                    alt='Men Collection'
                    className='img-fluid'
                  />
                  <Link to='/men-collection'>
                    <button
                      className='px-4 py-2 mb-3'
                      style={{ backgroundColor: '#B3E140' }}
                    >
                      Explore All <FaLongArrowAltRight />
                    </button>
                  </Link>
                </div>
              </div>
              <div class='col-lg-4 col-md-6 col-sm-12 my-2'>
                <div
                  class='shadow p-3  rounded'
                  style={{ backgroundColor: '#EEBDEA' }}
                >
                  <h4 className='mt-4 collect'>WOMEN COLLECTION</h4>
                  <img
                    src={men}
                    style={{ width: '300px', Height: '150px' }}
                    alt='Men Collection'
                    className='img-fluid'
                  />
                  <Link to='/women-collection'>
                    <button
                      className='px-4 py-2 mb-3'
                      style={{ backgroundColor: '#EEBDEA' }}
                    >
                      Explore All <FaLongArrowAltRight />
                    </button>
                  </Link>
                </div>
              </div>
              <div class='col-lg-4 col-md-6 col-sm-12 my-2'>
                <div
                  class='shadow p-3  rounded'
                  style={{ backgroundColor: '#E8D0D0' }}
                >
                  <h4 className='mt-4 collect'>UNISEX COLLECTION</h4>
                  <img
                    src={men}
                    style={{ width: '300px', Height: '150px' }}
                    alt='Men Collection'
                    className='img-fluid'
                  />
                  <Link to='/unisex-collection'>
                    <button
                      className='px-4 py-2 mb-3'
                      style={{ backgroundColor: '#E8D0D0' }}
                    >
                      Explore All <FaLongArrowAltRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='text-center py-5 collect'>
              <h1
                classNameName='text-center collect'
                style={{ color: '#4d0000' }}
              >
                Footwear Collections
              </h1>
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <div>
              <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              <div className='text-center d-flex align-items-center justify-content-center'>
                <Paginate
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ''}
                />
              </div>
            </div>
          )}
        </div>
        <div className='text-center'>
          <h3 classNameName='text-center'>Latest Footwear</h3>
        </div>
        {/* <div className='container py-3 my-3'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 '>
              
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              
            </div>
          </div>
        </div> */}
        <div className='container py-3 text-center'>
          <div className='row'>
            <div className='col-md-6 col-lg-3 col-sm-12 d-flex align-items-center justify-content-center'>
              <div className='shadow p-3 rounded bg-primary'>
                <div className=' text-white'>
                  <div>
                    <LiaShippingFastSolid size='30' />
                    <div>
                      <h6 classNameName='text-base'>Free Shipping</h6>
                      <p classNameName='text-sm text-stone-400 mb-0'>
                        From all orders over Rs.20000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 d-flex align-items-center justify-content-center'>
              <div className='shadow p-3  rounded bg-secondary'>
                <div className=' text-white'>
                  <div>
                    <BiSupport size='30' />
                    <div>
                      <h6 classNameName='text-base'>Support 24/7</h6>
                      <p classNameName='text-sm text-stone-400 mb-0'>
                        Shop with an expert
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 d-flex align-items-center justify-content-center'>
              <div className='shadow p-3  rounded bg-success'>
                <div className=' text-white'>
                  <div>
                    <GiPriceTag size='30' />
                    <div>
                      <h6 classNameName='text-base'>Affordable Price</h6>
                      <p classNameName='text-sm text-stone-400 mb-0'>
                        Get Factory direct price
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 d-flex align-items-center justify-content-center '>
              <div className='shadow p-3  bg-info rounded'>
                <div className=' text-white'>
                  <div>
                    <MdPayment size='30' />
                    <div>
                      <h6 classNameName='text-base'>Secure Payments</h6>
                      <p classNameName='text-sm text-stone-400 mb-0'>
                        100% protected payments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container py-5 text-center font-poppins'>
          <div className='row'>
            <div className='col'>
              <h3 classNameName='text-center py-3' style={{ color: '#4d0000' }}>
                Footwear Brands
              </h3>
              <Marquee>
                <p>
                  Step into a world of comfort and style with our premium
                  footwear collection – where every step is a statement of
                  elegance.
                </p>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomeScreen
