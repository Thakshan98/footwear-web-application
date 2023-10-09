import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Service from '../components/Service';
import MarqueeBrand from '../components/MarqueeBrand';
import TopRatedProduct from '../components/TopRatedProduct';
import TopNewArrivals from '../components/TopNewArrivals';
import men from '../images/men.png';
import './homescreen.css';

const HomeScreen = () => {
  const { keyword, pageNumber } = useParams();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const categoriesList = useSelector((state) => state.categoriesList);
  const { category } = categoriesList;

  useEffect(() => {
    // Dispatch your actions here, such as listCategories and listProducts
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <div className='bg-stone-300 text-center'>
        <div>
          <div
            style={{ height: '90vh' }}
            className='d-flex flex-column align-items-center justify-content-center heroBack'
          >
            <h1 className='text-white collect'>Shop Collection</h1>
            <Link to='/shop'>
              <button className='btn btn-primary px-3 py-2'>Shop Now</button>
            </Link>
          </div>
        </div>

        <Container>
          <div>
            <div className='text-center mt-5 pt-5 collect'>
              <h1
                className='text-center collect'
                style={{ color: '#4d0000' }}
              >
                Most Popular Collection
              </h1>
            </div>
            <div className='container text-center py-3 mt-5'>
              <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12 my-2'>
                  <div
                    className='shadow p-3 rounded pop-tilt'
                    style={{ backgroundColor: '#B3E140' }}
                  >
                    <h4 className='mt-4 collect'>MEN COLLECTION</h4>
                    <img
                      src={men}
                      style={{ width: '300px', height: '150px' }}
                      alt='Men Collection'
                      className='img-fluid'
                    />
                    <Link to='/men-collection'>
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
                    className='shadow p-3 rounded pop-tilt'
                    style={{ backgroundColor: '#EEBDEA' }}
                  >
                    <h4 className='mt-4 collect'>WOMEN COLLECTION</h4>
                    <img
                      src={men}
                      style={{ width: '300px', height: '150px' }}
                      alt='Men Collection'
                      className='img-fluid'
                    />
                    <Link to='/women-collection'>
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
                    className='shadow p-3 rounded pop-tilt'
                    style={{ backgroundColor: '#E8D0D0' }}
                  >
                    <h4 className='mt-4 collect'>UNISEX COLLECTION</h4>
                    <img
                      src={men}
                      style={{ width: '300px', height: '150px' }}
                      alt='Men Collection'
                      className='img-fluid'
                    />
                    <Link to='/unisex-collection'>
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
            </div>

            <div>
              <div className='text-center mt-5 py-5 collect'>
                <h1
                  className='text-center collect'
                  style={{ color: '#4d0000' }}
                >
                  Top Rated Footwears
                </h1>
              </div>
            </div>
            <TopRatedProduct />

            <div>
              <div className='text-center mt-5 py-5 collect'>
                <h1
                  className='text-center collect'
                  style={{ color: '#4d0000' }}
                >
                  Top Price Footwears
                </h1>
              </div>
            </div>
            <TopNewArrivals />
          </div>

          <Service />
          <MarqueeBrand />
        </Container>
      </div>
    </>
  );
};

export default HomeScreen;
