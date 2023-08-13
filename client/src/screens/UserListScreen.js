import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listUsers, deleteUser } from '../actions/userActions'
import { confirm } from "react-confirm-box";

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isSystemAdmin ) {
      dispatch(listUsers())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, successDelete, userInfo])

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel"
    }
  }
  const deleteHandler = async(id) => {
    const result = await confirm("Are you sure?", options);
    
    if (result) {
      dispatch(deleteUser(id))
      return;
    }
    console.log("You click No!");
  };
   
 
  return (
    <Container>
    <>
      <h3 className='tag my-5 text-center' style={{fontWeight:'bold'}}>Users List</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm rounded-md'>
          <thead >
            <tr>
            
              <th className='text-black text-center py-2'>Name</th>
              <th className='text-black text-center py-2'>Email Address</th>
              <th className='text-black text-center py-2'>Admin</th>
              <th className='text-black text-center py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} >
              
                <td className='text-center'>{user.name}</td>
                <td className='text-center'>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td className='text-center'>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td className='text-center'>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='success' className='btn-sm m-2'>
                      {/* <i className='fas fa-edit'></i> */}
                      Edit
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm m-3'
                    onClick={() => deleteHandler(user._id)}
                  >
                    {/* <i className='fas fa-trash'></i> */}
                    Delete
                  </Button>
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

export default UserListScreen
