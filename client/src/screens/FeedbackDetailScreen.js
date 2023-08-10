import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

const FeedbackDetailScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const feedbackDetails = useSelector((state) => state.feedbackDetails)
  const { loading, error, feedbacks } = feedbackDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isSystemAdmin) {
      dispatch(getFeedbackDetails(match.params.id))
    } else if (userInfo && userInfo.isAdmin) {
      dispatch(getFeedbackDetails(match.params.id))
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo, match])

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
              {feedbacks.bookName != '' ? (
                <>
                  <Col md={4}>
                    <Image
                      className='bookImg '
                      src={feedbacks.image}
                      alt={feedbacks.bookName}
                      fluid
                    />
                  </Col>
                  <Col md={8}>
                    <Table
                      striped
                      bordered
                      hover
                      responsive
                      className='table-sm'
                    >
                      <thead>
                        <tr style={{background:"#20B2AA"}}>
                          <th>
                            <h5
                              className='my-2 text-light'
                              style={{
                                fontSize: '25px',
                                fontFamily: 'Times New Roman',
                                fontWeight: 'bold',
                              }}
                            >
                              Requested Book Name
                            </h5>
                          </th>
                          <th>
                            <h5
                              className='my-2 text-light'
                              style={{
                                fontSize: '25px',
                                fontFamily: 'Times New Roman',
                                fontWeight: 'bold',
                              }}
                            >
                              Author Name
                            </h5>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {' '}
                            <h5
                              style={{
                                fontSize: '15px',
                                
                                color: '#591f1f',
                              }}
                            >
                              {feedbacks.bookName}
                            </h5>
                          </td>
                          <td>
                            {' '}
                            <h5
                              style={{
                                fontSize: '15pxpx',
                              
                                color: '#591f1f',
                              }}
                            >
                              {feedbacks.authorName}
                            </h5>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </>
              ) : (
                <Col md={12}>
                  <ListGroup variant='flush'>
                    <ListGroup.Item style={{background:"#4682B4"}}>
                      <h3 class='text-center text-light'>Feedback</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5>{feedbacks.feedback}</h5>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              )}
            </Row>
            <Row>
              {feedbacks.bookName != '' && feedbacks.feedback != '' ? (
                <>
                  <Col md={4}></Col>
                  <Col md={8}>
                    <Card style={{background:"#8cb2d1"}}>
                      <ListGroup variant='flush' >
                        <ListGroup.Item  style={{background:"#8cb2d1"}}>
                          <h3 class='text-center text-light'>Feedback</h3>
                        </ListGroup.Item>
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
