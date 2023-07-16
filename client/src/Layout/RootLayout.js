import React from 'react'
import Appbar from '../Components/Appbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const Rootlayout = () => {
  return (
    <>
      <Appbar />
      <div className='py-12 px-10'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Rootlayout
