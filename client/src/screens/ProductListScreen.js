import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link,useNavigate, useParams } from 'react-router-dom'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { confirm } from "react-confirm-box";

import {
  listProducts,
  deleteProduct,
  createProduct,
} from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'

const ProductListScreen = () => {
  const { keyword, pageNumber } = useParams()
  
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin && !userInfo.isSystemAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/product/${createdProduct._id}/edit`)
    } else {
      dispatch(listProducts('', pageNumber))
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ])

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel"
    }
  }
  const deleteHandler = async(id) => {
    const result = await confirm("Are you sure?", options);
    
    if (result) {
      dispatch(deleteProduct(id))
      return;
    }
    console.log("You click No!");
  };
   
 


  return (
    <Container className='my-5'>
    <>
      <Row className='align-items-center'>
        <Col>
          <h1 className='tag my-5' style={{fontSize:'45px',fontFamily:'Lucida Console',fontWeight:'bold'}}>Products</h1>
        </Col>
        <Col className='text-right'>
        <Link to='/admin/product/create'><Button className='my-3'  style={{ backgroundImage: 'linear-gradient(to bottom right,#0a0366,#475cd1,#8ec7f5)',color:'white',fontWeight:'600'}} >
            <i className='fas fa-plus'></i> Add Product
          </Button></Link>
          
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr style={{background:"#20B2AA"}}>
                
                <th className='text-light'>Category</th>
                <th className='text-light'>Product</th>
                <th className='text-light'>PRICE</th>
                <th className='text-light'>COUNT IN STOCK</th>
                <th className='text-light'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.cat}</td>
                  <td>{product.name}</td>
                  <td>LKR.{product.price}</td>
                  <td>{product.countInStock}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant='light' className='btn-sm m-2'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm m-1'
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page}  keyword={keyword ? keyword : ''} isAdmin={true} />
        </>
      )}
    </>
  </Container>
  )
}

export default ProductListScreen
