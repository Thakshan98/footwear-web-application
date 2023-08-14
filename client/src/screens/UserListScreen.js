import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listUsers, deleteUser } from '../actions/userActions'
import { confirm } from 'react-confirm-box'
import { Link } from 'react-router-dom'

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isSystemAdmin) {
      dispatch(listUsers())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, successDelete, userInfo])

  const options = {
    labels: {
      confirmable: 'Confirm',
      cancellable: 'Cancel',
    },
  }
  const deleteHandler = async (id) => {
    const result = await confirm('Are you sure?', options)

    if (result) {
      dispatch(deleteUser(id))
      return
    }
    console.log('You click No!')
  }

  return (
    <>
      <Container className='pb-3'>
        <h3 className='my-3 text-center' style={{ fontWeight: 'bold' }}>
          Users List
        </h3>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Table
            striped
            bordered
            hover
            responsive
            className='table-sm rounded-md'
          >
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
                  Name
                </th>
                <th
                  className='text-white text-center py-3'
                  style={{ backgroundColor: '#019678' }}
                >
                  Email Address
                </th>
                <th
                  className='text-white text-center py-3'
                  style={{ backgroundColor: '#019678' }}
                >
                  Admin
                </th>
                <th
                  className='text-white text-center py-3'
                  style={{ backgroundColor: '#019678' }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user,i) => (
                <tr key={user._id}>
                  <td className='text-center p-3'>{i + 1}</td>
                  <td className='text-center p-3'>{user.name}</td>
                  <td className='text-center p-3'>
                    <Link
                      style={{ textDecoration: 'none' }}
                      href={`mailto:${user.email}`}
                    >
                      {user.email}
                    </Link>
                  </td>
                  <td className='text-center p-3'>
                    {user.isAdmin ? (
                      <i
                        className='fas fa-check'
                        style={{ color: 'green' }}
                      ></i>
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td className='text-center'>
                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                      <Button variant='success' className='btn-sm m-2'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm m-3'
                      onClick={() => deleteHandler(user._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
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

export default UserListScreen
