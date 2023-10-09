import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { listTopArrivalProducts } from '../actions/productActions';
import './TopNewArrivals.css'; 

const TopNewArrivals = () => {
  const dispatch = useDispatch();

  const productTopArrival = useSelector((state) => state.productTopArrival);
  const { loading, error, products } = productTopArrival;

  useEffect(() => {
    dispatch(listTopArrivalProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <div className='row'>
      <div className='col-lg-12'>
        <div className='d-flex flex-row align-items-center justify-content-center gap-4'>
          {products.map((product) => (
            <Card
              style={{ width: '20rem' }}
              key={product._id}
              className='shadow bg-body rounded border-0 pop'
            >
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: 'none' }}
              >
                <Card.Img
                  variant='top'
                  src={product.image}
                  alt={product.name}
                  fluid
                  className='pop-img' 
                />
                <Card.Body>
                  <Card.Title className='text-black'>{product.name}</Card.Title>
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
  );
};

export default TopNewArrivals;
