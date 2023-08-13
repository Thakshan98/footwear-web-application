import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Table, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listFeedbacks } from '../actions/feedbackActions'

const FeedbackListScreen = () => {
  const dispatch = useDispatch()
  const [num, setNum] = useState(0)
  const feedbackList = useSelector((state) => state.feedbackList)
  const { loading, error, feedbacks } = feedbackList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const navigate = useNavigate()
  useEffect(() => {
    let i = setNum(num + 1)

    if (userInfo && userInfo.isSystemAdmin) {
      dispatch(listFeedbacks())
    } else if (userInfo && userInfo.isAdmin) {
      dispatch(listFeedbacks())
    } else {
      navigate('/login')
    }
  }, [dispatch, navigate, userInfo])

  return (
    <>
      <Container className='pb-5'>
        <h1
          className='my-5 font-popins text-center'
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        >
          Feedbacks
        </h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th
                  className='text-white text-center py-3'
                  style={{ backgroundColor: '#019678' }}
                >
                  No
                </th>
                <th
                  className='text-white text-center py-3'
                  style={{ backgroundColor: '#019678' }}
                >
                  USER
                </th>
                <th
                  className='text-white text-center py-3'
                  style={{ backgroundColor: '#019678' }}
                >
                  Email
                </th>
                <th
                  className='text-white text-center py-3'
                  style={{ backgroundColor: '#019678' }}
                >
                  Feedbacks
                </th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback, i) => (
                <tr key={feedback._id}>
                  <td className='text-center p-3'>{i + 1}</td>
                  <td className='text-center p-3'>
                    {feedback.user && feedback.user.name}
                  </td>
                  <td className='text-center p-3'>
                    {feedback.user && feedback.user.email}
                  </td>
                  <td className='text-center p-3'>
                    <LinkContainer
                      to={`/admin/feedback/${feedback._id}`}
                      style={{
                        color: 'white',
                        fontWeight: '600',
                      }}
                    >
                      <Button className='btn btn-sm'>Feedback</Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  )
}

export default FeedbackListScreen
