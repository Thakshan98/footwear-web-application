import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import './ProductCarousel.css'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return (
    <Container>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='d-flex flex-row align-items-center justify-content-center gap-4'>
            {products.map((product) => (
              <Card
                style={{ width: '25rem' }}
                key={product._id}
                className='shadow bg-body rounded border-0 pop'
              >
                <Link
                  to={`/product/${product._id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Card.Img
                    style={{ width: '210px' }}
                    variant='top'
                    src={product.image}
                    alt={product.name}
                    fluid
                    className='pop-img border m-3 img-fluid popImage'
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: '15px' }}
                      className='text-black'
                    >
                      {product.name}
                    </Card.Title>
                    <Card.Text className='text-black'>
                      Rs.{product.price}
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductCarousel
