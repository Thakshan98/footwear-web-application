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
    <Form onSubmit={submitHandler} inline className='d-flex flex-row'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Footwear... '
        style={{
          height: '40px',
          width: '250px',
          borderRadius: '8px 0 0 8px',
        }}
      ></Form.Control>
      <Button
        type='submit'
        variant='primary'
        style={{ height: '40px', width: '60px' ,borderRadius: '0 8px 8px 0' }}
      >
        <FaSearch size={'14px'} className='' color={'#ffffff'} />
      </Button>
    </Form>
  );
};

export default SearchBox;
