import React from 'react'
import loading from '../assets/loading.gif'

const Loader = () => {
  return (
    <div className="loader-container fixed top-0 left-0 w-full h-full flex justify-center items-center ">
    <img src={loading} alt="Loading..." />
  </div>
  )
}

export default Loader