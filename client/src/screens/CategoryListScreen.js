import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link,useNavigate, useParams } from 'react-router-dom'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import PaginateCategory from '../components/PaginateCategory'
import { confirm } from "react-confirm-box";

import {
  listCategory,
  deleteCategory,
  createCategory,
} from '../actions/categoryAction'

import { CATEGORY_CREATE_RESET } from '../constants/categoryConstants'

const CategoryListScreen = () => {
  const { keyword, pageNumber } = useParams()
  
  const dispatch = useDispatch()

  const categoryList = useSelector((state) => state.categoryList)
  const { loading, error, category, page, pages } = categoryList
  

  const  categoryDelete = useSelector((state) => state.categoryDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } =  categoryDelete

  const categoryCreate = useSelector((state) => state.categoryCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    category: createdCategory,
  } = categoryCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: CATEGORY_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin && !userInfo.isSystemAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/category/${createdCategory._id}/create`)
    } else {
      dispatch(listCategory('', pageNumber))
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    createdCategory,
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
      dispatch(deleteCategory(id))
      return;
    }
    console.log("You click No!");
  };
   
  


  return (
    <Container className='my-5'>
    <>
      <Row className='align-items-center'>
        <Col>
          <h1 className='tag my-5' style={{fontSize:'35px',fontWeight:'bold'}}>categories</h1>
        </Col>
        <Col className='text-right'>
        <Link to='/admin/category/create'><Button className='my-3'  style={{ backgroundImage: 'linear-gradient(to bottom right,#0a0366,#475cd1,#8ec7f5)',color:'white',fontWeight:'600'}} >
            <i className='fas fa-plus'></i> Add Category
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
               
                <th className='text-black text-center'>Category</th>
                <th className='text-black text-center'>Edit</th>
                <th className='text-black text-center'>Delete</th>
             
                
              </tr>
            </thead>
            <tbody>
              {category.map((category) => (
                <tr key={category._id}>
                
                  <td className='text-center'>{category.name}</td>
                 
                  
                  <td className='text-center'>
                    <LinkContainer to={`/admin/category/${category._id}/edit`}>
                      <Button variant='success' className='btn-sm m-2'>
                        Edit Category
                      </Button>
                    </LinkContainer>
                    </td> 
                    <td className='text-center'>
                    <Button
                      variant='danger'
                      className='btn-sm m-1'
                      onClick={() => deleteHandler(category._id)}
                    >
                      Delete Category
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <PaginateCategory pages={pages} page={page} keyword={keyword ? keyword : ''} isAdmin={true} />
        </>
      )}
    </>
  </Container>
  )
}

export default CategoryListScreen
