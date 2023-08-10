import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Book Corner'
}

export default Meta
