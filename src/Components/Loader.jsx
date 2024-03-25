import React from 'react'
import loading from '../assets/animation.gif'

const Loader = () => {
  return (
    <div className="loader-container bg-white fixed top-0 left-0 w-full  h-full flex justify-center items-center ">
    <img src={loading} alt="Loading..." className='w-36 h-36 lg:h-64 lg:w-64'/>
  </div>
  )
}

export default Loader