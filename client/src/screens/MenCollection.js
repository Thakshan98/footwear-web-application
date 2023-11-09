import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import { listCategories } from '../actions/categoryAction'
import Service from '../components/Service'
import MarqueeBrand from '../components/MarqueeBrand'
import { Slider } from '@material-ui/core'
import Rating from '../components/Rating'

const MenCollection = () => {
  const { keyword, pageNumber } = useParams()

  const dispatch = useDispatch()
  const [filterApplied, setFilterApplied] = useState(false)
  const [value, setValue] = useState([500, 10000])
  const [rateFilter, setRateFilter] = useState([0, 5])
  const [categoryFilter, setCategoryFilter] = useState('Any')
  const rangeSelector = (event, newValue) => {
    setValue(newValue)
  }
  const rateSelector = (event, newValue) => {
    setRateFilter(newValue)
  }
  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  const categoriesList = useSelector((state) => state.categoriesList)
  const { category } = categoriesList

  useEffect(() => {
    dispatch(listCategories())
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])
  console.log(products)
  return (
    <div classNameName='bg-stone-300 text-center'>
      <Container>
        <div>
          <div>
            <div className='text-center py-5 collect'>
              <h1
                classNameName='text-center collect heading-color'
                style={{ color: '#4d0000' }}
              >
                MEN COLLECTION
              </h1>
            </div>

            {!filterApplied && (
              <div>
                <Button
                  onClick={() => setFilterApplied(true)}
                  className='btn-block my-5'
                  style={{
                    color: 'white',
                    fontWeight: '600',
                  }}
                >
                  Apply filters
                </Button>
              </div>
            )}
          </div>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
              }}
            >
              {filterApplied && (
                <div
                  style={{
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    flexDirection: 'column',
                    position: 'relative',
                    marginBottom: '20px',
                    width: '25%',
                    height: '600px',
                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                  }}
                >
                  <div
                    style={{
                      margin: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '60%',
                      flexDirection: 'column',
                    }}
                  >
                    <h3>Category</h3>
                    <select
                      style={{
                        width: '100%',
                        height: '35px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        padding: '5px',
                      }}
                      onChange={(e) => {
                        setCategoryFilter(e.target.value)
                      }}
                      value={categoryFilter}
                    >
                      <option value='Any'>Any</option>
                      <option value='Bata'>Bata</option>
                      <option value='Sandals'>Sandals</option>
                      <option value='Formal Shoe'>Formal Shoe</option>
                      <option value='Sports Shoe'>Sports Shoe</option>
                      <option value='Sneakers'>Sneakers</option>
                    </select>
                  </div>
                  <div
                    style={{
                      margin: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '60%',
                      flexDirection: 'column',
                    }}
                  >
                    <h3>Price Range</h3>
                    from
                    <input
                      style={{
                        width: '100%',
                        height: '35px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        padding: '5px',
                      }}
                      type='text'
                      value={value[0]}
                      readOnly
                    />
                    to
                    <input
                      style={{
                        width: '100%',
                        height: '35px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        padding: '5px',
                      }}
                      type='text'
                      value={value[1]}
                      readOnly
                    />
                    <Slider
                      value={value}
                      onChange={rangeSelector}
                      valueLabelDisplay=''
                      min={500}
                      max={10000}
                    />
                  </div>
                  <div
                    style={{
                      margin: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '60%',
                      flexDirection: 'column',
                    }}
                  >
                    <h3>Rating</h3>
                    from
                    <Rating value={rateFilter[0]} readOnly />
                    to
                    <Rating value={rateFilter[1]} readOnly />
                    <Slider
                      value={rateFilter}
                      onChange={rateSelector}
                      valueLabelDisplay=''
                      min={0}
                      max={5}
                    />
                  </div>
                  <Button
                    onClick={() => setFilterApplied(false)}
                    className='btn-block'
                    type='button'
                    style={{
                      backgroundImage:
                        'linear-gradient(to bottom right,#50025c, #d20be0,#db3bb6)',
                      color: 'white',
                      fontWeight: '600',
                    }}
                  >
                    Clear Filter
                  </Button>
                </div>
              )}

              <Row
                style={{
                  width: filterApplied ? '70%' : '100%',
                }}
              >
                {!filterApplied &&
                  products
                    .filter((product) => product.gender === 'Male') // Filter products by gender
                    .map((product) => (
                      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                      </Col>
                    ))}
                {filterApplied &&
                  products
                    .filter(
                      (product) =>
                        product.gender === 'Male' &&
                        product.price >= value[0] &&
                        product.price <= value[1] &&
                        product.rating >= rateFilter[0] &&
                        product.rating <= rateFilter[1] &&
                        (product.cat === categoryFilter ||
                          categoryFilter === 'Any')
                    ) // Filter products by gender
                    .map((product) => (
                      <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
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
