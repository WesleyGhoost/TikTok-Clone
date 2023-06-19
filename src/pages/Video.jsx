import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'

function Video({likes, comments, shares, name, descrip, musicTitle, url, src}) {
  const [play, setPlay] = useState(false)
  const videoRef = useRef(null)

  function handleStart() {
    if (play === false) {
      videoRef.current.play()
      setPlay(true)
    }

    if (play === true) {
      videoRef.current.pause()
      setPlay(false)
    }
  }

  return (
    <div className='video'>
      <video
        className='video__player'
        src={src}
        ref={videoRef}
        onClick={handleStart}
        loop
      >
      </video>
      <VideoSidebar 
        likes={likes}
        comments={comments}
        shares={shares}
      />
      <VideoFooter 
        name={name}
        descrip={descrip}
        musicTitle={musicTitle}
        url={url}
      />
    </div>
  )
}

export default Video