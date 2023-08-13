import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders,showOrder, getOrderDetails, } from '../actions/orderActions'
import { confirm } from "react-confirm-box";
import {
  ORDER_SHOW_RESET,
  ORDER_SHOW_SUCCESS,
} from '../constants/orderConstants'
const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order } = orderDetails

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const  orderShow = useSelector((state) => state. orderShow)
  const { loading: loadingShow, success: successShow } =  orderShow

  useEffect(() => {
    if(successShow ){
      dispatch({ type: ORDER_SHOW_RESET })
      dispatch({ type: ORDER_SHOW_SUCCESS })
      
    }
    if (userInfo &&  userInfo.isSystemAdmin) {
      dispatch(listOrders())
    }
    else if (userInfo &&  userInfo.isAdmin) {
      dispatch(listOrders())
    }
    else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo,successShow])

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel"
    }
  }
  const shipHandler = async(id) => {
    const result = await confirm("Is order ready for shipping?", options);
    
    if (result) {
     
      dispatch(showOrder(id))
      return;
    }
    console.log("You click No!");
  };


  return (
    <Container>
    <>
      <h1 className='tag my-5' style={{fontSize:'45px',fontFamily:'Lucida Console',fontWeight:'bold'}}>Orders</h1>
      {loadingShow && <Loader />}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr style={{background:"#663399"}}>
              <th className='text-light'>ID</th>
              <th className='text-light'>USER</th>
              <th className='text-light'>DATE</th>
              <th className='text-light'>TOTAL</th>
              <th className='text-light'>PAID</th>
              <th className='text-light'>SHIPPED</th>
              <th className='text-light'>DELIVERED</th>
              <th className='text-light'>Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>LKR.{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {order.show ? (
                     <Button
                     variant='success'
                     className='btn-sm'
                     onClick={() => shipHandler(order._id)}
                    
                   >
                     
                    Send
                   </Button>
                  ) : (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
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
                  <LinkContainer to={`/order/${order._id}`}  style={{ backgroundImage: 'linear-gradient(to right, #191654 , #43C6AC)',color:'white',fontWeight:'600'}}>
                    <Button className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
    </Container>
  )
}

export default OrderListScreen
