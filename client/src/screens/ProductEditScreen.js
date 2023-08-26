import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import { listCategories } from '../actions/categoryAction'

const ProductEditScreen = () => {
  const { id: productId } = useParams()

  const [cat, setCategory] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [price, setPrice] = useState(0)
  const [sizeCounts, setSizeCounts] = useState([{ size: '', count: 0 }]);
  
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const categoriesList = useSelector((state) => state.categoriesList)
  const { category } = categoriesList

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  const navigate = useNavigate()
  useEffect(() => {
    dispatch(listCategories())
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
        setCategory(product.cat)
        setSizeCounts(product.size)
      
        setDescription(product.description)
      }
    }
  }, [dispatch, navigate, productId, product, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]

    const formData = new FormData()
    formData.append('image', file)

    const { data } = await axios.post('/api/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    setImage(data)
  }
  const handleSizeChange = (e, index) => {
    const newSizeCounts = [...sizeCounts];
    newSizeCounts[index].size = e.target.value;
    setSizeCounts(newSizeCounts);
  };
  
  const handleCountChange = (e, index) => {
    const newSizeCounts = [...sizeCounts];
    newSizeCounts[index].count = e.target.value;
    setSizeCounts(newSizeCounts);
  };
  
  const addSizeCount = () => {
    setSizeCounts([...sizeCounts, { size: '', count: 0 }]);
  };

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        cat,
        name,
        size: sizeCounts,
        gender,
        price,
        image,
        description,
      
      })
    )
  }

  return (
    <>
      <Container className='pb-5'>
        <Link
          to='/admin/productlist'
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
            <h1
              className='text-center my-3'
              style={{ fontSize: '28px', fontWeight: 'bold' }}
            >
              Edit Footwear
            </h1>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Form onSubmit={submitHandler} enctype='multipart/form-data'>
                <Form.Group controlId='cat'>
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
                  <Form.Label
                    className='mt-3'
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#591f1f',
                    }}
                  >
                    Gender
                  </Form.Label>
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
                  <Form.Label
                    className='mt-3'
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#591f1f',
                    }}
                  >
                    Product
                  </Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter product'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                {sizeCounts.map((sizeObj, index) => (
  <div key={index}>
    <Form.Group>
      <Form.Label>Size {index + 1}</Form.Label>
      <Form.Control
        type='text'
        placeholder='Enter size'
        value={sizeObj.size}
        onChange={(e) => handleSizeChange(e, index)}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Count {index + 1}</Form.Label>
      <Form.Control
        type='number'
        placeholder='Enter count'
        value={sizeObj.count}
        onChange={(e) => handleCountChange(e, index)}
      />
    </Form.Group>
  </div>
))}
<Button onClick={addSizeCount}>Add Size</Button>




                <Form.Group controlId='price'>
                  <Form.Label
                    className='mt-3'
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#591f1f',
                    }}
                  >
                    Price
                  </Form.Label>
                  <Form.Control
                    min={0}
                    type='number'
                    placeholder='Enter price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='image'>
                  <Form.Label
                    className='mt-3'
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#591f1f',
                    }}
                  >
                    Image
                  </Form.Label>
                  <Form.Control
                    id='image-file'
                    type='file'
                    custom
                    onChange={uploadFileHandler}
                  />
                  {uploading && <Loader />}
                </Form.Group>

                <Form.Group controlId='description'>
                  <Form.Label
                    className='mt-3'
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#591f1f',
                    }}
                  >
                    Description
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button
                  className='my-3'
                  type='submit'
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '15px',
                  }}
                >
                  Update
                </Button>
              </Form>
            )}
          </div>
        </FormContainer>
      </Container>
    </>
  )
}

export default ProductEditScreen
