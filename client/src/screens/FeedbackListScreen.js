import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate} from 'react-router-dom'
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

  const navigate = useNavigate();
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
      <Container>
        <h1
          className='tag my-5 font-popins text-center text-center'
          style={{
            fontSize: '35px',
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
              <tr style={{ background: '#20B2AA' }}>
                <th className='text-black text-center'>No</th>
                <th className='text-black text-center'>USER</th>
                <th className='text-black text-center'>Email</th>
              
               

                <th></th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback, i) => (
                <tr key={feedback._id}>
                  <td>{i + 1}</td>
                  <td>{feedback.user && feedback.user.name}</td>
                  <td>{feedback.user && feedback.user.email}</td>
                 
                  

                  <td>
                    <LinkContainer
                      to={`/admin/feedback/${feedback._id}`}
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, #191654 , #43C6AC)',
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
