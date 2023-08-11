import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
  const { title } = props
  return (
    <div className='py-3'>
      <div className='container'>
        <div class='grid grid-cols-3 gap-4'>
          <div class='border-blue-500 col-span-3'>
            <p className='mb-0 text-center'>
              <Link to='/' className=' text-blue-700 font-popins text-lg font-bold' style={{textDecoration:'none'}}>
                Home &nbsp;
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
