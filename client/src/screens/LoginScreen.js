import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const navigate = useNavigate()
  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <div
        className='p-2 my-5'
        style={{ background: 'white', borderRadius: '10px' }}
      >
        <h1
          className='tag my-5'
          style={{
            fontSize: '35px',
            fontFamily: 'Times New Roman',
            fontWeight: 'bold',
          }}
        >
          Sign In
        </h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='email'>
            <Form.Label
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#591f1f',
                marginLeft: '40px',
              }}
            >
              Email Address
            </Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter the email'
              value={email}
              style={{ borderRadius: '10px', width: '80%', marginLeft: '40px' }}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label
              className='mt-3'
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#591f1f',
                marginLeft: '40px',
              }}
            >
              Password
            </Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter the password'
              value={password}
              style={{ borderRadius: '10px', width: '80%', marginLeft: '40px' }}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button
            type='submit'
            className='my-3'
            style={{
              marginLeft: '40px',
              width: '80%',
              backgroundImage:
                'linear-gradient(to bottom right,#50025c, #d20be0,#db3bb6)',
              color: 'white',
              fontWeight: '600',
            }}
          >
            Sign In
          </Button>
        </Form>

        <Row className='py-3'>
          <Col>
            <p
              style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#591f1f',
                marginLeft: '40px',
              }}
            >
              {' '}
              New Customer?{' '}
              <Link
                style={{ color: 'blue' }}
                to={redirect ? `/register?redirect=${redirect}` : '/register'}
              >
                Register
              </Link>
            </p>
          </Col>
        </Row>
      </div>
    </FormContainer>
  )
}

export default LoginScreen
