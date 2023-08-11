import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom'
import { Form, Button, Container, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, createProduct } from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'




const ProductCreateScreen = () => {

    const { id: productId } = useParams();

  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [price, setPrice] = useState(0)
  const [size, setSize] = useState(0)
  const [image, setImage] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = productCreate


  const navigate = useNavigate();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET })
      navigate('/admin/productlist')
    }   }, [dispatch, navigate, productId, product, successCreate])

  
    const uploadFileHandler = async (e) => {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('image', file)
  
      try {
        setUploading(true)
  
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
  
        const { data } = await axios.post('/api/upload', formData, config)
  
        setImage(data)
        setUploading(false)
      } catch (error) {
        console.error(error)
        setUploading(false)
      }
    }
  
    const submitHandler = (e) => {
      e.preventDefault()
  
      // Perform form validation here before dispatching the action
  
      dispatch(
        createProduct({
          category,
          name,
          size,
          gender,
          price,
          image,
          description,
          countInStock,
        })
      )
  }

  return (
    <Container>
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3' style={{ backgroundImage: 'linear-gradient(to bottom right,#0a0366,#475cd1,#8ec7f5)',color:'white',fontWeight:'600'}}>
        Go Back
      </Link>
      <FormContainer>
        <h1 className='tag my-5' style={{fontSize:'45px',fontFamily:'Lucida Console',fontWeight:'bold'}} >Phonix</h1>
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>

            <Form.Group controlId='category'>
              <Form.Label className='mt-3' style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Category</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group> 

            <Form.Group controlId='gender'>
              <Form.Label className='mt-3' style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Gender</Form.Label>
              <Form.Control
                type='name'
                placeholder='Gender'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              ></Form.Control>
            </Form.Group> 

            <Form.Group controlId='name'>
              <Form.Label className='mt-3' style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Product</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter product'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='size'>
              <Form.Label className='mt-3' style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Size</Form.Label>
              <Form.Control
                min={0}
                type='number'
                placeholder='Size'
                value={size}
                onChange={(e) => setSize(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label className='mt-3' style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Price</Form.Label>
              <Form.Control
                min={0}
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>
       

            <Form.Group controlId='image'>
              <Form.Label className='mt-3' style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.Control
              id='image-file'
              type='file'
              custom
              onChange={uploadFileHandler}
                />
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label className='mt-3' style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit'  style={{  backgroundImage: 'linear-gradient(to bottom right,#79db58,#036920,#79db58)',color:'white',fontWeight:'600',borderRadius: '15px'}}>
              Create
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
    </Container>
  )
}

export default ProductCreateScreen
                