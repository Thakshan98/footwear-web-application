import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <div className='shadow p-3 mb-5 bg-white rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          className='d-flex align-items-center justify-content-center img-fluid'
          src={product.image}
          height='220px'
          variant='top'
        />
      </Link>

      <Card.Body>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          to={`/product/${product._id}`}
        >
          <Card.Text>
            <div>
              <strong className='heading-color my-2'>{product.name}</strong>
            </div>
          </Card.Text>
        </Link>

        <Card.Text as='div' className='my-2'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h5'>LKR.{product.price}</Card.Text>
        
      </Card.Body>
    </div>
  )
}

export default Product
