import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css'

import video from '../assets/inland-vd.mp4';
import thumb from '../assets/bg.jpg'

const Videos = () => {
  return (
           <div className="flex justify-center items-center mt-9 shadow-sm rounded   p-4" data-aos="fade-up"
           data-aos-duration="1000">
             <Video 
             className='h-auto m-2 lg:m-4 md:h-[400px]  lg:h-[400px]  '
             poster={thumb}>
                <source src={video} type='video/mp4'></source>
            </Video>
           </div>
  )
}

export default Videos


// import React from 'react';
// import VideoPlayer from './VideoPlayer'; // Assuming VideoPlayer.js is in the same directory

// const Videos = () => {
//   return (
//     <div className="flex justify-center items-center mt-9 shadow-sm rounded p-4" data-aos="fade-up" data-aos-duration="1000">
//       <VideoPlayer url="../assets/video.mp4" />
//     </div>
//   );
// };

// export default Videos;