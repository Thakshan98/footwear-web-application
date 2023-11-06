import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <div className='shadow p-3 mb-5 bg-white rounded pop'>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          style={{ height: '250px' }}
          className='d-flex align-items-center justify-content-center img-fluid rounded border'
          src={product.image}
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
              <strong className='d-flex my-2 py-2'>{product.name}</strong>
            </div>
          </Card.Text>
        </Link>

        <Card.Text as='div' className='my-2'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h5'>
          LKR.{product.price}
          <Link to=''>
          <button
            style={{
              marginRight: '10px',
              backgroundColor:'brown',
              color:'#FFFFFF',
              float: 'right'
            }}
            className='px-3 py-1 no-underline fs-6 border-0'
          >
            {product.gender}
          </button></Link>
        </Card.Text>
      </Card.Body>
    </div>
  )
}

export default Product
