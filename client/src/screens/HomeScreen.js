import React, { useEffect } from 'react'
import { Link,Route,useParams,Routes } from 'react-router-dom'
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
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BiSupport } from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'
import { GiPriceTag } from 'react-icons/gi'

const HomeScreen = () => {
  const { keyword, pageNumber } = useParams();
 
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
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
      <div className='book'>
       <div className="latest">
         <img src={latest} style={{width:'60%'}} alt="latest books "/>
      </div>
      
     <br/><br/><br/>
    
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
      <section className='home-section-2 py-5'>
        <div className='container'>
          <div class='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center justify-between font-popins'>
            <div className='flex lg:items-center lg:justify-center gap-4'>
              <LiaShippingFastSolid size='30' />
              <div>
                <h4 className='text-base'>Free Shipping</h4>
                <p className='text-sm text-stone-400 mb-0'>
                  From all orders over Rs.10000
                </p>
              </div>
            </div>
            <div className='flex lg:items-center lg:justify-center gap-4'>
              <BiSupport size='30' />
              <div>
                <h4 className='text-base'>Support 24/7</h4>
                <p className='text-sm text-stone-400 mb-0'>
                  Shop with an expert
                </p>
              </div>
            </div>
            <div className='flex lg:items-center lg:justify-center gap-4'>
              <GiPriceTag size='30' />
              <div>
                <h4 className='text-base'>Affordable Price</h4>
                <p className='text-sm text-stone-400 mb-0'>
                  Get Factory direct price
                </p>
              </div>
            </div>
            <div className='flex lg:items-center lg:justify-center gap-4'>
              <MdPayment size='30' />
              <div>
                <h4 className='text-base'>Secure Payments</h4>
                <p className='text-sm text-stone-400 mb-0'>
                  100% protected payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Container>
    </>
    
  )
}

export default HomeScreen
