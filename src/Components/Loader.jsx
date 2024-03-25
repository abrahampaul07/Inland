import React from 'react'
import loading from '../assets/animation.gif'

const Loader = () => {
  return (
    <div className="loader-container bg-black fixed top-0 left-0 w-full h-full flex justify-center items-center ">
    <img src={loading} alt="Loading..." className='w-36 h-36'/>
  </div>
  )
}

export default Loader