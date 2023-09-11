import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/shop');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline style={{ marginRight: '130px' }}>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Footwear... '
        style={{
          height: '40px',
          width: '230px',
          borderRadius: '8px 0 0 8px',
        }}
      ></Form.Control>
      <Button
        type='submit'
        variant='success'
        style={{ height: '40px', borderRadius: '0 8px 8px 0' }}
      >
        <FaSearch size={'20px'} style={{ marginBottom: '15px' }} color={'#ffffff'} />
      </Button>
    </Form>
  );
};

export default SearchBox;
