import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css'

import video from '../assets/video.mp4';
import thumb from '../assets/prj2.jpg'

const Videos = () => {
  return (
           <div className="flex justify-center items-center mt-9 shadow-sm rounded mb-9 ">
             <Video 
             autoPlay loop playsInline 
             className='h-auto m-2 lg:m-4 md:h-[400px]  lg:h-[400px]  '
             poster={thumb}>
                <source src={video} type='video/mp4'></source>
            </Video>
           </div>
  )
}

export default Videos