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
import latest from '../images/latest.png'
import SearchBox from '../components/SearchBox'
import Marquee from 'react-fast-marquee'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BiSupport } from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'
import { GiPriceTag } from 'react-icons/gi'

const HomeScreen = () => {
  const { keyword, pageNumber } = useParams()

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <div className='bg-stone-300'>
      <div className='caro'>
        <Meta />
        {!keyword ? (
          <ProductCarousel />
        ) : (
          <Link to='/' className='btn btn-light'>
            Go Back
          </Link>
        )}
      </div>
      <Container>
        <div>
          <div>
           <h3 className='text-center bg-stone-600'>Footwear Collections</h3>
          </div>

          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <div className='books'>
              <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              <Paginate
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ''}
              />
            </div>
          )}
        </div>

        <div class='container py-5'>
          <div class='row'>
            <div class='col-lg-3 col-md-6 col-sm-12'>
              <div class='bg-primary p-3 text-white'>
                <div>
                  <LiaShippingFastSolid size='30' />
                  <div>
                    <h5 className='text-base'>Free Shipping</h5>
                    <p className='text-sm text-stone-400 mb-0'>
                      From all orders over Rs.20000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 col-sm-12'>
              <div class='bg-secondary p-3 text-white'>
                <div>
                  <BiSupport size='30' />
                  <div>
                    <h5 className='text-base'>Support 24/7</h5>
                    <p className='text-sm text-stone-400 mb-0'>
                      Shop with an expert
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 col-sm-12 '>
              <div class='bg-success p-3 text-white'>
                <div>
                  <GiPriceTag size='30' />
                  <div>
                    <h5 className='text-base'>Affordable Price</h5>
                    <p className='text-sm text-stone-400 mb-0'>
                      Get Factory direct price
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 col-sm-12'>
              <div class='bg-info p-3 text-white'>
                <div>
                  <MdPayment size='30' />
                  <div>
                    <h5 className='text-base'>Secure Payments</h5>
                    <p className='text-sm text-stone-400 mb-0'>
                      100% protected payments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='container py-5 bg-white font-poppins'>
          <div class='row'>
            <div class='col'>
              <h5 className='text-center uppercase py-3'>OUR COMPANY SLOGAN</h5>
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
