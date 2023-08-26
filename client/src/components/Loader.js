import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <>
      <div
        className='contain'
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        }}
      >
        <div style={{ '--i': 1 }}>
          <div className='ball'></div>
        </div>
        <div style={{ '--i': 2 }}>
          <div className='ball'></div>
        </div>
        <div style={{ '--i': 3 }}>
          <div className='ball'></div>
        </div>
        <div style={{ '--i': 4 }}>
          <div className='ball'></div>
        </div>
        <div style={{ '--i': 5 }}>
          <div className='ball'></div>
        </div>
        <div style={{ '--i': 6 }}>
          <div className='ball'></div>
        </div>
        <div style={{ '--i': 7 }}>
          <div className='ball'></div>
        </div>
        <div style={{ '--i': 8 }}>
          <div className='ball'></div>
        </div>
        <div style={{ '--i': 9 }}>
          <div className='ball'></div>
        </div>
        <div style={{ '--i': 10 }}>
          <div className='ball'></div>
        </div>
      </div>
    </>
    // <Spinner
    //   animation='border'
    //   role='status'
    //   style={{
    //     width: '100px',
    //     height: '100px',
    //     margin: 'auto',
    //     display: 'block',
    //   }}
    // >
    //   <span className='sr-only'>Loading...</span>
    // </Spinner>
  )
}

export default Loader
