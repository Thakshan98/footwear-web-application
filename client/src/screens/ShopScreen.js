import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import { listCategories } from '../actions/categoryAction'
import SearchBox from '../components/SearchBox'
import Paginate from '../components/Paginate'
import TopNewArrivals from '../components/TopNewArrivals'
import TopRatedProduct from '../components/TopRatedProduct'

const ShopScreen = () => {
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
      <div className='container py-5'>
        <div>
          <div className='text-center py-3'>
            <h1 classNameName='text-center collect'>Let's Shop</h1>
          </div>
        </div>
        <div className='row'>
          <div className='search'>
            <SearchBox />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row align-items-end justify-content-start'>
              <div className='col-lg-12 text-end py-4'></div>
            </div>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <>
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
                <div className='text-center d-flex align-items-center justify-content-center'>
                  <Paginate
                    pages={pages}
                    page={page}
                    keyword={keyword ? keyword : ''}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopScreen
