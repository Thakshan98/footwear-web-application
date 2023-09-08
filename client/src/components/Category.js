import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import { listCategories } from '../actions/categoryAction'

const Category = () => {
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
      <h2 className='text-center text-info collect'>Let's Shop</h2>
      <div className='container'>
        <div className='row align-items-end'>
          <div className='col-lg-12 text-end py-4'>
            {/* <SearchBox/> */}
            <div className=''>
              {/* <fieldset> */}
              {/* <legend>What's your cat's personality?</legend> */}
              <input
                id='search'
                type='text'
                name='search'
                placeholder='Search'
                className='py-1 px-3'
              />
              <button className='py-1 px-3 bg-primary text-white border border-primary'>
                Search
              </button>
              {/* </fieldset> */}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <h3 className='text-info collect py-4'>Categories</h3>
            <div className='d-flex flex-column'>
              <input type='checkbox' name='shoes' /> Shoes
              <input type='checkbox' name='shoes' /> Shoes
              <input type='checkbox' name='shoes' /> Shoes
              <input type='checkbox' name='shoes' /> Shoes
              <input type='checkbox' name='shoes' /> Shoes
            </div>
            {/* <button className='btn btn-outline-warning m-1'>Shoes</button> */}
            <h3 className='text-info collect py-4'>Gender</h3>
            <button className='btn btn-outline-warning m-1'>Mens</button>
            <button className='btn btn-outline-warning m-1'>Womens</button>{' '}
            <button className='btn btn-outline-warning m-1'>Uni Sex</button>
          </div>
          <div className='col-md-9'>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <div className='row'>
                {products.map((product) => (
                  <div
                    key={product._id}
                    className='col-lg-4 col-md-6 col-xl-3 col-sm-12'
                  >
                    <Product product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Category
