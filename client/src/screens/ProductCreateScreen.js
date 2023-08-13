import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { createProduct } from '../actions/productActions';
import { PRODUCT_CREATE_RESET } from '../constants/productConstants';
import { date } from 'yup';


const ProductCreateScreen = () => {
  const { id: productId } = useParams();

  const [cat, setCategory] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [countInStock, setCount] = useState(0);
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const categoriesList = useSelector((state) => state.categoriesList)
  const {  category } = categoriesList


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
      
      const formData = new FormData();
      formData.append('image', file)

      const{ data }  = await axios.post('/api/upload', formData,{
        headers: {'Content-Type': 'multipart/form-data'},}
        
      )
      setImage(data)
   

    };

   
    
    const submitHandler = (e) => {
     
      e.preventDefault();
    
     
  
      dispatch(
        createProduct({
          cat,
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
          <Form onSubmit={submitHandler} enctype="multipart/form-data">

<Form.Group controlId='cat'>
  <Form.Label className='mt-3' style={{ fontSize: '18px', fontWeight: 'bold', color: '#591f1f' }}>Category</Form.Label>
  <Form.Control
    as='select'
    value={cat}
    onChange={(e) => setCategory(e.target.value)}
  >
    {category.map((catItem) => (
      <option key={catItem._id} value={catItem.name}>
        {catItem.name}
      </option>
    ))}
  </Form.Control>
</Form.Group>



            

            <Form.Group controlId='gender'>
              <Form.Label className='mt-3' style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Gender</Form.Label>
              <Form.Control
                          as='select'
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value=''>Select Gender</option>
                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                          <option value='Unisex'>Unisex</option>                          
                        </Form.Control>
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
                