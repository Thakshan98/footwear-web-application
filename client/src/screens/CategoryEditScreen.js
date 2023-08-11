import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listCategoryDetails, updateCategory } from '../actions/categoryAction'
import { CATEGORY_UPDATE_RESET } from '../constants/categoryConstants'

const CategoryEditScreen = () => {
    const { id: categoryId } = useParams();

  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const categoryDetails = useSelector((state) => state.categoryDetails)
  const { loading, error, category } = categoryDetails

  const categoryUpdate = useSelector((state) => state.categoryUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = categoryUpdate


  const navigate = useNavigate();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CATEGORY_UPDATE_RESET })
      navigate("/admin/categorylist")
    } else {
      if (!category.name || category._id !== categoryId) {
        dispatch(listCategoryDetails(categoryId))
      } else {
        setName(category.name)
      }
    }
  }, [dispatch, navigate, categoryId, category, successUpdate])


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateCategory({
        _id: categoryId,
        name,
   
      })
    )
  }

  return (
    <Container>
    <>
      <Link to='/admin/categorylist' className='btn btn-light my-3' style={{ backgroundImage: 'linear-gradient(to bottom right,#0a0366,#475cd1,#8ec7f5)',color:'white',fontWeight:'600'}}>
        Go Back
      </Link>
      <FormContainer>
        <h1 className='tag my-5 font-popins' style={{fontSize:'35px',fontWeight:'bold'}} >Add Category</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label className='mt-3' style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Title</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter Category '
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

           
           


            <Button type='submit' className='my-3' style={{  backgroundImage: 'linear-gradient(to bottom right,#79db58,#036920,#79db58)',color:'white',fontWeight:'600',borderRadius: '15px'}}>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
    </Container>
  )
}

export default CategoryEditScreen
