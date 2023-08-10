import React, { useEffect,useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listFeedbacks } from '../actions/feedbackActions'

const FeedbackListScreen = ({ history }) => {
  const dispatch = useDispatch()
  const [num, setNum] = useState(0)
  const feedbackList = useSelector((state) => state.feedbackList)
  const { loading, error, feedbacks } = feedbackList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    let i=setNum(num+1);

    if (userInfo &&  userInfo.isSystemAdmin) {
      dispatch(listFeedbacks())
    }
    else if (userInfo &&  userInfo.isAdmin) {
      dispatch(listFeedbacks())
    }
    else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  return (
    <>
    <Container>
      <h1  className='tag my-5' style={{fontSize:'45px',fontFamily:'Lucida Console',fontWeight:'bold'}}>Feedbacks & Requested books</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr style={{background:"#20B2AA"}}>
              <th className='text-light'>No</th>
              <th className='text-light'>USER</th>
              <th className='text-light'>Email</th>
              <th className='text-light'>Feedback</th>
              <th className='text-light'>Requested Book</th>
            
              
              <th></th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback,i) => (
              <tr key={feedback._id}>
                <td>{i+1}</td>
                <td>{feedback.user && feedback.user.name}</td>
                <td>{feedback.user && feedback.user.email}</td>
                <td>{feedback.feedback !='' ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}</td>
                <td>
                {feedback.bookName !='' ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
               
                <td>
                  <LinkContainer to={`/admin/feedback/${feedback._id}`}   style={{ backgroundImage: 'linear-gradient(to right, #191654 , #43C6AC)',color:'white',fontWeight:'600'}}>
                    <Button  className='btn btn-sm' 
                
                   >
                      Details
                    </Button>
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

export default  FeedbackListScreen
