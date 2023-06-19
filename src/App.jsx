import React, { useEffect, useState } from 'react'
import './App.css';
import Video from './pages/Video';
import db from './config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite'

function App() {

  let maxHeight;
  if(window.innerHeight <= 800) {
    maxHeight = window.innerHeight
  }

  const [video, setVideo] = useState([])
  async function getVideos() {
    const videosCollection = collection(db, "videos")
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideo(videosList)
  }
  useEffect(() => {
    getVideos()
  }, [])

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className='app__videos'>
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              comments={item.comments}
              shares={item.shares}
              name={item.name}
              descrip={item.descrip}
              musicTitle={item.musicTitle}
              url={item.url}
              src={item.src}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
