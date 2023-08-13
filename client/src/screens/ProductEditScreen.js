import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'



const ProductEditScreen = () => {
  const { id: productId } = useParams();

  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [countInStock, setCount] = useState(0);
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate


  const navigate = useNavigate();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      navigate('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setGender(product.gender)
        setCategory(product.category)
        setSize(product.size)
        setCount(product.countInStock)
        setDescription(product.description)
      }
    }
  }, [dispatch, navigate, productId, product, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    
    const formData = new FormData();
    formData.append('image', file)

    const{ data }  = await axios.post('/api/upload', formData,{
      headers: {'Content-Type': 'multipart/form-data'},}
      
    )
    setImage(data)
 

  };

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
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
        <h1 className='tag my-5' style={{fontSize:'45px',fontFamily:'Lucida Console',fontWeight:'bold'}} >Phoenix Industry</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler} enctype="multipart/form-data">

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

            <Form.Group controlId='countInStock'>
              <Form.Label className='mt-3' style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Count in Stock</Form.Label>
              <Form.Control
                min={0}
                type='number'
                placeholder='Count in Stock'
                value={countInStock}
                onChange={(e) => setCount(e.target.value)}
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
                <Form.Label className='mt-3' style={{ fontSize: '18px', fontWeight: 'bold', color: '#591f1f' }}>Image</Form.Label>
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
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
    </Container>
  )
}

export default ProductEditScreen
