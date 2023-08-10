import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button ,Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { createFeedback } from '../actions/feedbackActions'
import {FEEDBACK_CREATE_RESET } from '../constants/feedbackConstants'
import { FaWhatsappSquare, FaPhoneSquareAlt } from 'react-icons/fa'
const FeedbackScreen = ({ match, history }) => {
  const feedbackId = match.params.id

  const [bookName, setBookName] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [image, setImage] = useState('')
  const [feedback, setFeedback] = useState('')
  const [uploading, setUploading] = useState(false)
 const [email, setEmail] = useState('')
 

  const dispatch = useDispatch()



  const feedbackCreate = useSelector((state) => state.feedbackCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = feedbackCreate

  useEffect(() => {
  
    if (successCreate) {
      dispatch({ type: FEEDBACK_CREATE_RESET })
      history.push('/')
    } 
  }, [dispatch, history, successCreate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
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
  
    dispatch(
     createFeedback({
        _id: feedbackId,
        bookName,
        authorName,
        image,
        feedback,

      })
    )
  }
 

  return (
    <Container>
      <br/><br/>
    <div className='feedback'>
      <Link to='/' className='btn btn-light my-3' style={{ backgroundImage: 'linear-gradient(to bottom right,#0a0366,#475cd1,#8ec7f5)',color:'white',fontWeight:'600'}}>
        Go Back
      </Link>
      <Form onSubmit={submitHandler}>
        
      <FormContainer>
        <h1 className='tag' style={{fontSize:'45px',fontFamily:'Lucida Console',fontWeight:'bold'}}>Feedback</h1>
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
        <p style={{fontSize:'20px',fontFamily:'Lucida Console',color:'#563491',textAlign:'center',fontWeight:'bold'}}>We all need people who will give us feedback. That’s how we improve.</p><br/><br/><br/>
        <Form.Group controlId='feedback'>
              <Form.Label style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Feedback</Form.Label>
              <Form.Control
               as='textarea'
               row='5'
                placeholder='feedback'
                style={{borderRadius:'10px'}}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></Form.Control>
            </Form.Group>
           
            </FormContainer>
            </Form>
            <br/><hr/><br/>

        
          <Form onSubmit={submitHandler}>
          <FormContainer>
          <h1 className='tag' style={{fontSize:'45px',fontFamily:'Lucida Console',fontWeight:'bold'}}>Request Books</h1>
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
        <p style={{fontSize:'20px',fontFamily:'Lucida Console',color:'#563491',textAlign:'justify',fontWeight:'bold'}}>We are here to provide  desired books to your door " Request your desired book and focus more reading" Reading fulfill human's life</p><br/><br/><br/>
            <Form.Group controlId='bookname'>
              <Form.Label style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Book Title</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter title of book'
                style={{borderRadius:'10px'}}
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='authorname'>
              <Form.Label style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Author</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enterauthor name'
                style={{borderRadius:'10px'}}
                value={authorName}
                onChange={(e) =>  setAuthorName(e.target.value)}
              ></Form.Control>
            </Form.Group>


            <Form.Group controlId='image'>
              <Form.Label style={{fontSize:'18px',fontWeight:'bold',color:'#591f1f'}}>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                style={{borderRadius:'10px'}}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

           
<br/>
            <Button type='submit'
              style={{ backgroundImage: 'linear-gradient(to bottom right,#50025c, #d20be0,#db3bb6)',color:'white',fontWeight:'600',float:'right',width:'120px'}}>
             Send
            </Button>
            </FormContainer>
          </Form>
        
     
      <div className='contact'>
          <a href='tel:+94776408775' target='_blank'>
            <FaPhoneSquareAlt size={'60px'} color={'#4CCC5B'} />
          </a>
          <a href='https://wa.me/+94770334171' target='_blank'>
            <FaWhatsappSquare size={'60px'} color={'#4CCC5B'} />
          </a>
        </div>
    </div>
    </Container>
  )
}

export default FeedbackScreen
