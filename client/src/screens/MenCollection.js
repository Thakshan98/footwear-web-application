import React, { useEffect } from 'react'
import { Link, Route, useParams, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import { listCategories } from '../actions/categoryAction'
import Marquee from 'react-fast-marquee'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BiSupport } from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'
import { GiPriceTag } from 'react-icons/gi'
import Service from '../components/Service'
import MarqueeBrand from '../components/MarqueeBrand'

const MenCollection = () => {
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
      <Container>
        <div>
          <div>
            <div className='text-center py-5 collect'>
              <h1
                classNameName='text-center collect'
                style={{ color: '#4d0000' }}
              >
                MEN COLLECTION
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
                {products
                  .filter((product) => product.gender === 'Male') // Filter products by gender
                  .map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
                  ))}
              </Row>
            </div>
          )}
        </div>
        <Service />
        <MarqueeBrand />
      </Container>
    </div>
  )
}

export default MenCollection
