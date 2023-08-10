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
      </Container>
    </>
    
  )
}

export default HomeScreen
