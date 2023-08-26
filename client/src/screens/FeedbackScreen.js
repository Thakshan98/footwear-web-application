import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { createFeedback } from '../actions/feedbackActions'
import { FEEDBACK_CREATE_RESET } from '../constants/feedbackConstants'
import { FaWhatsappSquare, FaPhoneSquareAlt } from 'react-icons/fa'
import BreadCrumb from '../components/BreadCrumb'
const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('')

  const dispatch = useDispatch()

  const feedbackCreate = useSelector((state) => state.feedbackCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = feedbackCreate

  const navigate = useNavigate()
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
    <>
      <BreadCrumb title='Feedback' />
      <Container className='py-3'>
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
              <div className='py-3 px-4 shadow-lg my-5 bg-body-tertiary rounded'>
                <h3
                  className='heading-color text-center py-3'
                  style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  Give Feedback
                </h3>
                {loadingCreate && <Loader />}
                {errorCreate && (
                  <Message variant='danger'>{errorCreate}</Message>
                )}
                <p className='text-secondary text-center'>
                  We all need people who will give us feedback. That’s how we
                  improve.
                </p>

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
                <div>
                  <Button
                    type='submit'
                    className='my-3 text-white'
                    style={{
                      fontWeight: '600',
                      width: '120px',
                    }}
                  >
                    Send
                  </Button>
                </div>
              </div>
            </FormContainer>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default FeedbackScreen
