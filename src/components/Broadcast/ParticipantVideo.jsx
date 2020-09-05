import React, { Fragment, useEffect, useState } from 'react'
import './broadcast.css'

const ParticipantVideo = props => {
  const myVideo = document.createElement('video')
  myVideo.id = 'video-stream-creator'
  myVideo.muted = true
  const getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia

  let myVideoStream = null

  const addVideoStream = (video, stream) => {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
      video.play()
    })

    if (!document.getElementById('video-stream-creator')) {
      document.getElementById('main-video').append(video)
    }
  }

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then(stream => {
        myVideoStream = stream
        addVideoStream(myVideo, stream)
        props.setRoomCreator({
          live: true,
          stream: stream,
        })

        // socket.on('user-conncted', userID => {
        //   connectToNewUser(userID, stream)
        // })
      })
  }, [])
  return <div className='participant-video-wrapper'></div>
}

export default ParticipantVideo
