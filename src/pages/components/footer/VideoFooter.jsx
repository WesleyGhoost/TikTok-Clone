import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, descrip, musicTitle, url}) {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>{name}</h3>
        <p>{descrip}</p>
        <div className='videoFooter__music'>
          <MusicNoteIcon className='videoFooter__icon'/>
          <div className='videoFooterMusic__text'>
            <p>{musicTitle}</p>
          </div>
        </div>
      </div>
      <img 
         className='videoFooter__record'
         alt='Imagem de um vinil girando'
         src={url}
      />
    </div>
  )
}

export default VideoFooter