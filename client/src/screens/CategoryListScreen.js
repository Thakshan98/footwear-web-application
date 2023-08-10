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
  listCategory,
  deleteCategory,
  createCategory,
} from '../actions/categoryAction'

import { CATEGORY_CREATE_RESET } from '../constants/categoryConstants'

const CategoryListScreen = () => {
  const pageNumber = useParams();
  
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
      navigate(`/admin/category/${createdCategory._id}/edit`)
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
   
  

  const createCategoryHandler = () => {
    dispatch(createCategory())
  }

  return (
    <Container className='my-5'>
    <>
      <Row className='align-items-center'>
        <Col>
          <h1 className='tag my-5' style={{fontSize:'45px',fontFamily:'Lucida Console',fontWeight:'bold'}}>categories</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3'  style={{ backgroundImage: 'linear-gradient(to bottom right,#0a0366,#475cd1,#8ec7f5)',color:'white',fontWeight:'600'}} onClick={createCategoryHandler}>
            <i className='fas fa-plus'></i> Add Category
          </Button>
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
                <th className='text-light'>Edit</th>
                <th className='text-light'>Delete</th>
             
                
              </tr>
            </thead>
            <tbody>
              {category.map((category) => (
                <tr key={category._id}>
                
                  <td>{category.name}</td>
                 
                  
                  <td>
                    <LinkContainer to={`/admin/category/${category._id}/edit`}>
                      <Button variant='light' className='btn-sm m-2'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    </td> 
                    <td>
                    <Button
                      variant='danger'
                      className='btn-sm m-1'
                      onClick={() => deleteHandler(category._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </>
  </Container>
  )
}

export default CategoryListScreen
