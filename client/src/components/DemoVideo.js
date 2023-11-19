import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import Demo from '../video/VideoDemo.mp4'

const DemoVideo = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2 className='collect heading-color text-center py-4'>AR View Demo</h2>
      <p
        style={{
          display: 'flex',
          fontSize: '20px',
          textAlign: 'justify-center',
        }}
      >
        Immerse yourself in the latest trends with our cutting-edge AR View
        technology for footwear. Step into the future of shopping as you explore
        our diverse collection. From casual to formal, experience the perfect
        blend of style and innovation with AR View Footwear.
      </p>
      <div
        className='my-5'
        style={{
          width: '600px',
          height: '350px',
        }}
      >
        <Video
          id='video'
          autoPlay
          loop
          poster='https://footwearnews.com/wp-content/uploads/2020/08/puma-future-rider-wannaby.jpg'
        >
          <source src={Demo} type='video/mp4' />
        </Video>
      </div>
    </div>
  )
}

export default DemoVideo
