import React from 'react'
import loading from '../assets/loade.gif'

const Loader = () => {
  return (
    <div className="loader-container fixed top-0 left-0 w-full h-full flex justify-center items-center ">
    <img src={loading} alt="Loading..." className='w-36 h-36'/>
  </div>
  )
}

export default Loader