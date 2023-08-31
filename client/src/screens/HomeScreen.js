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
import Caros from '../components/Caros'
import background from '../images/Caro.png'
import men from '../images/men.png'
import Hero from '../images/hero.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Service from '../components/Service'
import MarqueeBrand from '../components/MarqueeBrand'

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
    <>
      <div classNameName='bg-stone-300 text-center'>
        <div>
          {/* <div
            style={{ height: '90vh' }}
            className='d-flex align-items-center justify-content-center heroBack'
          >
            <div class='row'>
              <div class='col-lg-6 col-md-12'>
                <div className='d-flex align-items-center justify-content-center'>
                  <div className='m-auto'>
                    <h4>New Summer</h4>
                    <h4>Footwear Collection</h4>
                  </div>
                </div>
              </div>
              <div class='col-lg-6 col-md-12'>
                <img
                  src={Hero}
                  alt='Hero Section Images'
                  className='img-fluid d-flex align-items-center justify-content-center'
                />
              </div>
            </div>
          </div> */}
          <div
            style={{ height: '90vh' }}
            className='d-flex flex-column align-items-center justify-content-center heroBack'
          >
            <h3 className='text-white'>Shop Collection</h3>
            <Link to='/shop'>
              <button className='btn btn-primary px-3 py-2'>Shop Now</button>
            </Link>
          </div>
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
            <div class='container text-center py-5 mt-5'>
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
          {/* <div className='text-center'>
            <h3 classNameName='text-center'>Latest Footwear</h3>
          </div> */}
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

          <Service />
          <MarqueeBrand/>
        </Container>
      </div>
    </>
  )
}

export default HomeScreen
