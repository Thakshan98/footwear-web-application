import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import BarChart from '../components/Chart/BarChart';
import LineChart from '../components/Chart/LineChart';
import PieChart from '../components/Chart/PieChart';
import { useSelector, useDispatch } from 'react-redux';

import { listFeedbacks } from '../actions/feedbackActions'
import { listCategory} from '../actions/categoryAction'
import { listOrders} from '../actions/orderActions'
import {listProducts} from '../actions/productActions'
const Dashboard = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const categoryList = useSelector((state) => state.categoryList);
  const orderList = useSelector((state) => state.orderList);
  const feedbackList = useSelector((state) => state.feedbackList);

  const [productCount, setProductCount] = useState(1);
  const [categoryCount, setCategoryCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [feedbackCount, setFeedbackCount] = useState(0);


  const userData = {
    labels: productList.products ? productList.products.map((data) => data.name) : [],
    datasets: [
      {
        label: 'Top 12 New Arrival Product',
        data: productList.products ? productList.products.map((data) => data.price) : [],
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#3cf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };
  
  useEffect(() => {
    dispatch(listFeedbacks());
    dispatch( listCategory());
    dispatch(listOrders());
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    if (productList.totalCount !== undefined) {
      setProductCount(productList.totalCount);
    }
    if (categoryList.category) {
      setCategoryCount(categoryList.category.length);
    }
    if (orderList.orders) {
      setOrderCount(orderList.orders.length);
    }
    if (feedbackList.feedbacks) {
      setFeedbackCount(feedbackList.feedbacks.length);
    }
  }, [productList, categoryList, orderList, feedbackList]);
  

  return (
    <>
      <div className='container text-center py-3 mt-3'>
        <h2 className='text-center navFont py-5'>Dashboard</h2>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12 my-2'>
            <div
              className='shadow p-5  rounded'
              style={{ backgroundColor: '#B3E140' }}
            >
              <h4 className='mt-4 collect'>Footwear's</h4>
              <h1>{productCount}</h1>
              <Link to='/admin/productlist'>
                <button
                  className='px-4 py-2 mb-3'
                  style={{ backgroundColor: '#B3E140' }}
                >
                  Explore All <FaLongArrowAltRight />
                </button>
              </Link>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 my-2'>
            <div
              className='shadow p-5  rounded'
              style={{ backgroundColor: '#EEBDEA' }}
            >
              <h4 className='mt-4 collect'>Categories</h4>
              <h1>{categoryCount}</h1>

              <Link to='/admin/categorylist'>
                <button
                  className='px-4 py-2 mb-3'
                  style={{ backgroundColor: '#EEBDEA' }}
                >
                  Explore All <FaLongArrowAltRight />
                </button>
              </Link>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 my-2'>
            <div
              className='shadow p-5  rounded'
              style={{ backgroundColor: '#E8D0D0' }}
            >
              <h4 className='mt-4 collect'>Order's</h4>
              <h1>{orderCount}</h1>
              <Link to='/admin/orderlist'>
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
        <div className='row py-5 d-flex justify-content-center align-items-center'>
          <div className='col-lg-4 col-md-6 col-sm-12 my-2'>
            <div
              className='shadow p-5  rounded '
              style={{ backgroundColor: '#3cf0f1' }}
            >
              <h4 className='mt-4 collect'>Feedback's</h4>
              <h1>{feedbackCount}</h1>
              <Link to='/admin/feedback'>
                <button
                  className='px-4 py-2 mb-3'
                  style={{ backgroundColor: '#3cf0f1' }}
                >
                  Explore All <FaLongArrowAltRight />
                </button>
              </Link>
            </div>
          </div>
          <div className='col-lg-8 col-md-6 col-sm-12 my-2'>
            <LineChart chartData={userData} />
          </div>
        </div>
      </div>

      <div className='container text-center'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col my-5'>
            <BarChart chartData={userData} />
          </div>
          <div className='col my-5' style={{ width: 500, height: 500 }}>
            <PieChart chartData={userData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
