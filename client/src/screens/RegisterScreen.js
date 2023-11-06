import React, { useState } from 'react'
import {
  Button,
  Row,
  Col,
  Form,
  Alert,
  Spinner,
} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { register } from '../actions/userActions'

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    ></Spinner>
  )
}

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

Message.defaultProps = {
  variant: 'info',
}

const RegisterScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: yup.object({
      name: yup.string().max(20, 'Maximum 20 characters only').required(),
      email: yup.string().email().required(),
      password: yup.string().required('Password is required').min(6).max(30),
      confirmPassword: yup
        .string()
        .required('Confirm Password is required')
        .oneOf(
          [yup.ref('password')],
          'Confirm password and password must be the same'
        ),
    }),
    onSubmit: (userInputData) => {
      dispatch(
        register(
          userInputData.name,
          userInputData.email,
          userInputData.password
        )
      )
    },
  })

  const [message, setMessage] = useState('')

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const handleRegistration = async () => {
    setMessage(
      'Registration successful. Please check your email for verification instructions.'
    )
    formik.submitForm()
  }

  return (
    <>
      <FormContainer>
        <div className='shadow-lg p-3 m-5 bg-body-tertiary rounded'>
          <h1
            className='tag text-center py-3'
            style={{
              fontSize: '35px',
              fontFamily: 'Times New Roman',
              fontWeight: 'bold',
            }}
          >
            Sign Up
          </h1>
          {message && <Message variant='success'>{message}</Message>}
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}

          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId='name'>
              <Form.Label
                className='mt-3'
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#591f1f',
                  marginLeft: '40px',
                }}
              >
                Name
              </Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='Enter your name'
                style={{
                  borderRadius: '10px',
                  width: '80%',
                  marginLeft: '40px',
                }}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Form.Control>
              {formik.touched.name && formik.errors.name ? (
                <div style={{ marginLeft: '40px' }} className='text-danger'>
                  {formik.errors.name}
                </div>
              ) : null}
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label
                className='mt-3'
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
                placeholder='Enter your email'
                name='email'
                style={{
                  borderRadius: '10px',
                  width: '80%',
                  marginLeft: '40px',
                }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Form.Control>
              {formik.touched.email && formik.errors.email ? (
                <div style={{ marginLeft: '40px' }} className='text-danger'>
                  {formik.errors.email}
                </div>
              ) : null}
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
                placeholder='Enter your password'
                name='password'
                style={{
                  borderRadius: '10px',
                  width: '80%',
                  marginLeft: '40px',
                }}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Form.Control>
              {formik.touched.password && formik.errors.password ? (
                <div style={{ marginLeft: '40px' }} className='text-danger'>
                  {formik.errors.password}
                </div>
              ) : null}
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
              <Form.Label
                className='mt-3'
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#591f1f',
                  marginLeft: '40px',
                }}
              >
                Confirm Password
              </Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm your password'
                name='confirmPassword'
                style={{
                  borderRadius: '10px',
                  width: '80%',
                  marginLeft: '40px',
                }}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Form.Control>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div style={{ marginLeft: '40px' }} className='text-danger'>
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </Form.Group>

            <Button
              type='button'
              className='my-3 registerButton'
              style={{
                marginLeft: '40px',
                width: '80%',
                color: 'white',
                fontWeight: '600',
                backgroundColor: '#591f1f',
                border: 'none',
              }}
              onClick={handleRegistration}
            >
              Register
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
                Have an Account?{' '}
                <Link
                  style={{ color: 'blue' }}
                  to={redirect ? `/login?redirect=${redirect}` : '/login'}
                >
                  Login
                </Link>
              </p>
            </Col>
          </Row>
        </div>
      </FormContainer>
    </>
  )
}

export default RegisterScreen
