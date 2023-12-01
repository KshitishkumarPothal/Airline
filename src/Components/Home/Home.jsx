import React from 'react'
import video from '../../pic/video.mp4'
import plane from '../../pic/plane.png'



const Home = () => {
  return (
    <div className='container flex home'>
      <div className='mainText'>
        <h1>Create a new Memory</h1>
      </div>
      <div className="flex homeImage">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>
        <img src={plane} alt="no" className='plane' />
      </div>
      
    </div>
  )
}

export default Home
