import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { createFeedback } from '../actions/feedbackActions'
import { FEEDBACK_CREATE_RESET } from '../constants/feedbackConstants'
import { FaWhatsappSquare, FaPhoneSquareAlt } from 'react-icons/fa'
const FeedbackScreen = () => {
  


  const [feedback, setFeedback] = useState('')
  

  const dispatch = useDispatch()

  const feedbackCreate = useSelector((state) => state.feedbackCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = feedbackCreate

  const navigate = useNavigate();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: FEEDBACK_CREATE_RESET })
      navigate('/')
    }
  }, [dispatch, navigate, successCreate])


  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(
      createFeedback({       
        feedback,
      })
    )
  }

  return (
    <Container>
      <br />
      <br />
      <div className='feedback'>
        <Link
          to='/'
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
        <Form onSubmit={submitHandler}>
          <FormContainer>
            <h1
              className='tag'
              style={{
                fontSize: '45px',
                fontFamily: 'Lucida Console',
                fontWeight: 'bold',
              }}
            >
              Feedback
            </h1>
            {loadingCreate && <Loader />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
            <p
              style={{
                fontSize: '20px',
                fontFamily: 'Lucida Console',
                color: '#563491',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              We all need people who will give us feedback. That’s how we
              improve.
            </p>
            <br />
            <br />
            <br />
            <Form.Group controlId='feedback'>
              <Form.Label
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#591f1f',
                }}
              >
                Feedback
              </Form.Label>
              <Form.Control
                as='textarea'
                row='5'
                placeholder='feedback'
                style={{ borderRadius: '10px' }}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></Form.Control>
            </Form.Group>
        

            <Button
              type='submit'
              style={{
                backgroundImage:
                  'linear-gradient(to bottom right,#50025c, #d20be0,#db3bb6)',
                color: 'white',
                fontWeight: '600',
                float: 'right',
                width: '120px',
              }}
            >
              Send
            </Button>
          </FormContainer>
        </Form>

        <div className='contact'>
          <Link href='tel:+94776408775' target='_blank'>
            <FaPhoneSquareAlt size={'60px'} color={'#4CCC5B'} />
          </Link>
          <Link href='https://wa.me/+94770334171' target='_blank'>
            <FaWhatsappSquare size={'60px'} color={'#4CCC5B'} />
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default FeedbackScreen
