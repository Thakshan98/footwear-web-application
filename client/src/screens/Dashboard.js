import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import BarChart from '../components/Chart/BarChart'
import { UserData } from '../Data'
import LineChart from '../components/Chart/LineChart'
import PieChart from '../components/Chart/PieChart'
import { listProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { listCategories } from '../actions/categoryAction'

const Dashboard = () => {
  //   const { keyword, pageNumber } = useParams()

  //   const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { products } = productList

  //   const orderDetails = useSelector((state) => state.orderDetails)
  //   const { order } = orderDetails

  //   const categoriesList = useSelector((state) => state.categoriesList)
  //   const { category } = categoriesList

  //   useEffect(() => {
  //     dispatch(listCategories())
  //     dispatch(listProducts(keyword, pageNumber))
  //   }, [dispatch, keyword, pageNumber])

  const [userData, setUserData] = useState({
    labels: products.map((data) => data.name),
    datasets: [
      {
        label: 'Top 12 New Arrival Product',
        data: products.map((data) => data.price),
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
  })

  return (
    <>
      <div className='container text-center py-3 mt-3'>
        <h2 classNameName='text-center navFont py-5'>Dashboard</h2>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12 my-2'>
            <div
              className='shadow p-5  rounded'
              style={{ backgroundColor: '#B3E140' }}
            >
              <h4 classNameName='mt-4 collect'>Footwear's</h4>
              <h1>08</h1>
              <Link to='/admin/productlist'>
                <button
                  classNameName='px-4 py-2 mb-3'
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
              <h4 classNameName='mt-4 collect'>Categories</h4>
              <h1>08</h1>

              <Link to='/admin/categorylist'>
                <button
                  classNameName='px-4 py-2 mb-3'
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
              <h4 classNameName='mt-4 collect'>Order's</h4>
              <h1>08</h1>
              <Link to='/admin/orderlist'>
                <button
                  classNameName='px-4 py-2 mb-3'
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
              <h4 classNameName='mt-4 collect'>Feedback's</h4>
              <h1>08</h1>
              <Link to='/admin/feedback'>
                <button
                  classNameName='px-4 py-2 mb-3'
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
      {/* <BarChart chartData={userData} /> */}

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
  )
}

export default Dashboard
