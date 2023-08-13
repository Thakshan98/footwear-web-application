import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listCategoryDetails, createCategory } from '../actions/categoryAction'
import { CATEGORY_CREATE_RESET } from '../constants/categoryConstants'

const CategoryCreateScreen = () => {
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const categoryDetails = useSelector((state) => state.categoryDetails)
  const { loading, error, category } = categoryDetails

  const categoryCreate = useSelector((state) => state.categoryCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = categoryCreate

  const navigate = useNavigate()
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: CATEGORY_CREATE_RESET })
      navigate('/admin/categorylist')
    }
  }, [dispatch, navigate, successCreate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createCategory({ name }))
  }

  return (
    <Container className='py-5 font-popins'>
      <>
        <Link
          to='/admin/categorylist'
          className='btn btn-light my-3'
          style={{
            backgroundImage:
              'linear-gradient(to bottom right,#0a0366,#475cd1,#8ec7f5)',
            color: 'white',
            fontWeight: '600',
          }}
        >
          Go Back
        </Link>
        <FormContainer>
          <div className='bg-white py-3 px-5 rounded'>
            <h5
              className='my-3 text-center'
              style={{ fontSize: '25px', fontWeight: 'bold' }}
            >
              Add Footwear Category
            </h5>
            {loadingCreate && <Loader />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                  <Form.Label
                    className='mt-3'
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#591f1f',
                    }}
                  >
                    Category
                  </Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter the Category '
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Button
                  type='submit'
                  className='my-3'
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '15px',
                  }}
                >
                  Create
                </Button>
              </Form>
            )}
          </div>
        </FormContainer>
      </>
    </Container>
  )
}

export default CategoryCreateScreen
