import React, { useState, useEffect,useRef } from 'react'
import { Table, Form, Button, Row, Col, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { deleteOrder, listMyOrders,showOrder } from '../actions/orderActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import {  ORDER_SHOW_RESET} from '../constants/orderConstants'
import { confirm } from "react-confirm-box";




const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [num, setNum] = useState(0)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order} = orderDetails

  const  orderShow = useSelector((state) => state. orderShow)
  const { loading: loadingShow, success: successShow } =  orderShow

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const {loading: loadingUpdate, success: success,  error: errorUpdate } = userUpdateProfile

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

  const  orderDelete = useSelector((state) => state. orderDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } =  orderDelete

  useEffect(() => {
    let i=setNum(num+1);
   
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
        dispatch(listMyOrders())
      } 
    }
  }, [dispatch, history, userInfo, user, success,successDelete, orderListMy,successShow ])

  const submitHandler = (e) => {
    e.preventDefault()

    
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else{
      dispatch(updateUserProfile({ id: user._id, name, email, password,currentPassword }))
      setMessage('')
    }
  }

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel"
    }
  }
  const deleteHandler = async(id) => {
    const result = await confirm("Are you sure?", options);
    
    if (result) {
     
     dispatch(deleteOrder(id))
      return;
    }
    console.log("You click No!");
  };
  
 
  return (
    <Container className='mt-5'>
    <Row>
      <Col md={3} >
        <h6  className='tag mb-5' style={{fontSize:'27px',fontFamily:'Lucida Console',fontWeight:'bold',textAlign:'center'}}>User Profile</h6>
        {message && <Message variant='danger'>{message}</Message>}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {success && <Message variant='success'>Profile Updated</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label style={{fontSize:'14px',fontWeight:'bold',color:'#591f1f'}}>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label style={{fontSize:'14px',fontWeight:'bold',color:'#591f1f'}}>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label style={{fontSize:'14px',fontWeight:'bold',color:'#591f1f'}}>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
              <Form.Label style={{fontSize:'14px',fontWeight:'bold',color:'#591f1f'}}>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='currentPassword'>
              <Form.Label style={{fontSize:'14px',fontWeight:'bold',color:'#591f1f'}}>Current Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter current password'
                value={currentPassword}
                onChange={(e) =>setCurrentPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit'  style={{ width:'95%',backgroundImage: 'linear-gradient(to bottom right,#50025c, #d20be0,#db3bb6)',color:'white',fontWeight:'600'}}>
              Update
            </Button>
          </Form>
        )}
      </Col>
      <Col md={1}></Col>
      <Col md={8}>
      {userInfo && !userInfo.isAdmin && (
        <h6  className='tag mb-5' style={{fontSize:'27px',fontFamily:'Lucida Console',fontWeight:'bold',textAlign:'center'}}>My Orders</h6>
        )}
          {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (

        
          <Table striped bordered hover responsive  className='table-sm'>
            
              {userInfo && !userInfo.isAdmin && (
            <thead>
              <tr>
                <th>ORDER NO</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
              )}
            
            <tbody>
           
              {orders.map((order,i) => (
              
                
                <tr key={order._id}>
                 
                  <td>{i+1}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`} style={{ backgroundImage: 'linear-gradient(to bottom right,#0a0366,#475cd1,#8ec7f5)',color:'white',fontWeight:'600'}}>
                      <Button className='btn-sm'  >
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                  
                  <td>
                  
                  {
                  order.show?
                  <Button
                  style={{ backgroundImage: 'linear-gradient(to bottom right,#c20e0e,#bf301d,#a19c99)',color:'white',fontWeight:'600'}}
                      className='btn-sm'
                      onClick={() => deleteHandler(order._id)}
                     
                    >
                      
                      Cancel
                    </Button>:null}
                   
                   

                   
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
    
      </Col>
    </Row>
    </Container>
  )
}

export default ProfileScreen
