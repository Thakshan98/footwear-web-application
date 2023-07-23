import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { HelmetProvider } from 'react-helmet-async'

const Rootlayout = () => {
  return (
    <HelmetProvider>
      <Header/>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </HelmetProvider>
  )
}

export default Rootlayout
