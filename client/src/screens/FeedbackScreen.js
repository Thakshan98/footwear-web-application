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
import BreadCrumb from '../components/BreadCrumb'
import feedbackImage from '../images/feedback.png'

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
      <Container className='py-5'>
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
                <div
                  className='py-4'
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <img src={feedbackImage} alt='' />
                </div>
                <h3
                  className='heading-color collect text-center py-3'
                  style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  Product Customer Feedback Form
                </h3>
                {loadingCreate && <Loader />}
                {errorCreate && (
                  <Message variant='danger'>{errorCreate}</Message>
                )}
                <p
                  className='text-secondary text-center pb-2'
                  style={{ lineHeight: '2', color: 'brown' }}
                >
                  Thank you for taking time to provide feedback. We appreciate
                  hearing from you and will review your comments carefully.
                </p>
                <hr className='py-2' />
                <Form.Group controlId='feedback'>
                  <Form.Label
                    className='py-2 text-secondary'
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      textAlign: 'center',
                      alignItems: 'center',
                    }}
                  >
                    Do you have any suggestions to improve our products and
                    services?
                  </Form.Label>
                  <Form.Control
                    as='textarea'
                    className='bg-body-tertiary border-secondary'
                    style={{
                      borderRadius: '10px',
                      height: '100px',
                      opacity: '0.5',
                    }}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    type='submit'
                    className='my-3 text-white'
                    style={{
                      fontWeight: '600',
                    }}
                  >
                    Send Feedback
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
