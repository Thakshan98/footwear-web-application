import React, { useState, useEffect } from 'react'
import { Link ,useParams,useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Table,
  Container,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import { getFeedbackDetails } from '../actions/feedbackActions'

const FeedbackDetailScreen = () => {
  const dispatch = useDispatch()
  const { id:feedbackId }= useParams();

  const feedbackDetails = useSelector((state) => state.feedbackDetails)
  const { loading, error, feedbacks } = feedbackDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo && userInfo.isSystemAdmin) {
      dispatch(getFeedbackDetails(feedbackId))
    } else if (userInfo && userInfo.isAdmin) {
      dispatch(getFeedbackDetails(feedbackId))
    } else {
      navigate('/login')
    }
  }, [dispatch, navigate, userInfo, ])

  return (
    <Container>
      <>
        <Link
          className='btn btn-outline-primary btn-sm my-5'
          style={{
            backgroundImage:
              'linear-gradient(to bottom right,#0a0366,#475cd1,#8ec7f5)',
            color: 'white',
            fontWeight: '600',
          }}
          to='/admin/feedback'
        >
          Go Back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
           
            <Row>
              {feedbacks.bookName != '' && feedbacks.feedback != '' ? (
                <>
                  <Col md={4}></Col>
                  <Col md={8}>
                    <Card style={{background:"#8cb2d1"}}>
                      <ListGroup variant='flush' >
                      
                        <ListGroup.Item>
                          <h5
                            style={{
                              fontSize: '18px',
                              
                            }}
                          >
                            {feedbacks.feedback}
                          </h5>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                </>
              ) : (
                ''
              )}
            </Row>
          </>
        )}
      </>
    </Container>
  )
}

export default FeedbackDetailScreen
