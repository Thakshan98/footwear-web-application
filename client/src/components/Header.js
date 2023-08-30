import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { logout } from '../actions/userActions'
import logo from '../images/logo.png'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      <header
        className='header-top-content py-3'
        style={{
          backgroundColor: '#131921',
          borderBottom: '1px solid #3b4149',
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0 font-popins text-sm tracking-wider'>
                Free Delivery Over Rs.20000 & free Returns
              </p>
            </div>
            <div className='col-6'>
              <p className='text-white text-sm mb-0 text-end font-popins tracking-wide'>
                Hotline :
                <NavLink
                  to='tel:+94 112952702'
                  className='text-white text-sm tracking-wide'
                  style={{ textDecoration: 'none' }}
                >
                  +94 112952702
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* <div
        class='toast align-items-center text-bg-primary border-0'
        role='alert'
        aria-live='assertive'
        aria-atomic='true'
      >
        <div class='d-flex'>
          <div class='toast-body'>Hello, world! This is a toast message.</div>
          <button
            type='button'
            class='btn-close btn-close-white me-2 m-auto'
            data-bs-dismiss='toast'
            aria-label='Close'
          ></button>
        </div>
      </div> */}
      <header
        style={{
          backgroundColor: '#ffffff',
          color: '#000000',
        }}
      >
        <div className='container-xxl'>
          <Navbar expand='lg' collapseOnSelect>
            <LinkContainer to='/'>
              <Navbar.Brand>
                {' '}
                <img
                  src={logo}
                  height='45px'
                  width='130px'
                  class='mx-2 my-1 px-1'
                  alt='logoImage'
                />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                {userInfo && !userInfo.isAdmin && !userInfo.isSystemAdmin && (
                  <LinkContainer to='/shop'>
                    <Nav.Link>
                      <div className='navLink '>Shop</div>
                    </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo && !userInfo.isAdmin && !userInfo.isSystemAdmin && (
                  <LinkContainer to='/cart'>
                    <Nav.Link>
                      <div className='navLink'>
                        <i className='fas fa-shopping-cart'></i> Cart
                      </div>
                    </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo && !userInfo.isAdmin && !userInfo.isSystemAdmin && (
                  <LinkContainer to='/about'>
                    <Nav.Link>
                      <div className='navLink'> About Us</div>
                    </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo && !userInfo.isAdmin && !userInfo.isSystemAdmin && (
                  <LinkContainer to='/feedback'>
                    <Nav.Link>
                      <div className='navLink'> Feedback</div>
                    </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo && userInfo.isAdmin && (
                  <LinkContainer to='/shop'>
                    <Nav.Link>
                      <div className='navLink'> Shop</div>
                    </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo && userInfo.isAdmin && (
                  <LinkContainer to='/about'>
                    <Nav.Link>
                      <div className='navLink'> About Us</div>
                    </Nav.Link>
                  </LinkContainer>
                )}

                {userInfo && userInfo.isAdmin && (
                  <LinkContainer to='/admin/feedback'>
                    <Nav.Link>
                      <div className='navLink'> Customer Feedback</div>
                    </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo && userInfo.isSystemAdmin && (
                  <LinkContainer to='/shop'>
                    <Nav.Link>
                      <div className='navLink'> Shop</div>
                    </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo && userInfo.isSystemAdmin && (
                  <LinkContainer to='/about'>
                    <Nav.Link>
                      <div className='navLink'> About Us</div>
                    </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo && userInfo.isSystemAdmin && (
                  <LinkContainer to='/admin/feedback'>
                    <Nav.Link>
                      <div className='navLink'> Customer Feedback</div>
                    </Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
              <Nav className='ms-auto'>
                {userInfo ? (
                  <NavDropdown
                    className='navLink'
                    title={userInfo.name}
                    id='username'
                  >
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <i className='fas fa-user'></i> Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title='Admin' id='adminmenu'>
                    <LinkContainer to='/admin/categorylist'>
                      <NavDropdown.Item>Category</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Footware</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
                {userInfo && userInfo.isSystemAdmin && (
                  <NavDropdown title='System Admin' id='adminmenu'>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to='/admin/categorylist'>
                      <NavDropdown.Item>Category</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Footware</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </>
  )
}

export default Header
