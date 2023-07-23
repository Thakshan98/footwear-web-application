import React from 'react'
import MetaData from '../Components/MetaData'
import Carousels from '../Components/Carousels'

const Home = ({title}) => {
  return (
      <>
        <MetaData title={'Our Home page'}/>
        <Carousels ClassName='py-2'/>
      </>
    )
}

export default Home