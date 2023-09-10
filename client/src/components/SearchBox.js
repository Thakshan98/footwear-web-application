import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const navigate = useNavigate()

  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline style={{ marginRight: '130px' }}>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Books... '
        style={{ height: '40px', width: '350px', borderRadius: '8px' }}
      ></Form.Control>

    </Form>
  )
}

export default SearchBox
