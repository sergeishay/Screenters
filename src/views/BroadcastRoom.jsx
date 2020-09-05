import React, { Fragment, useEffect, useState } from 'react'
import Peer from 'peerjs'
import socketIOClient from 'socket.io-client'
import MainVideo from '../components/Broadcast/MainVideo'
import ParticipantVideo from '../components/Broadcast/ParticipantVideo'
import { inject, observer, PropTypes } from 'mobx-react'
import { useLocation } from 'react-router-dom'
import './BroadcastRoom.css'
import axios from 'axios'
const queryString = require('query-string')
const ENDPOINT = 'http://localhost:8181'
const ID = 321

const Homepage = inject('eventsStores')(
  observer(props => {
    const requestedRoomID = props.match.params.roomId
    const allVideoStreams = []

    console.log('requestedRoomID', requestedRoomID)
    const socket = socketIOClient(ENDPOINT)
    let roomInfo = {}
    let currentUserID = null
    let creatorID = null

    let location = useLocation()
    const myVideoObject = document.createElement('video')
    myVideoObject.muted = true
    const getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia

    let myVideoStream = null

    const addVideoStream = (video, stream, element) => {
      console.log('STREAM STREAM', stream)

      if (!allVideoStreams.includes(stream.id)) {
        allVideoStreams.push(stream.id)
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
          video.play()
        })
        document.getElementById(element).append(video)
      }
    }

    const connectToNewUser = (
      peerUserID,
      stream,
      peer,
      connectedUserID,
      otherUserStream
    ) => {
      console.log('user-connected with id:', connectedUserID)

      const call = peer.call(peerUserID, stream)
      const video = document.createElement('video')
      call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream, 'participants-videos')
      })
    }

    useEffect(() => {
      const queryParams = queryString.parse(location.search)
      currentUserID = queryParams.user

      async function getData() {
        const response = await axios.get(
          `http://localhost:8181/broadcast/${requestedRoomID}`,
          { params: { ID } }
        )
        console.log(response.data)
        if (!response.data.error) {
          roomInfo = response.data

          navigator.mediaDevices
            .getUserMedia({
              video: true,
              audio: true,
            })
            .then(stream => {
              myVideoStream = stream
              creatorID = response.data.creator
              socket.emit('update-streams', currentUserID, stream.id)
              const element =
                parseInt(queryParams.user) === parseInt(response.data.creator)
                  ? 'main-video'
                  : 'participants-videos'

              addVideoStream(myVideoObject, stream, element)

              const peer = new Peer(undefined, {
                path: '/peerjs',
                host: '/',
                port: '8181',
              })

              socket.on(
                'user-conncted',
                (peerUserID, connectedUserID, streamID) => {
                  connectToNewUser(
                    peerUserID,
                    stream,
                    peer,
                    connectedUserID,
                    streamID
                  )
                }
              )

              peer.on('open', id => {
                socket.emit(
                  'join-room',
                  roomInfo.roomID,
                  id,
                  currentUserID,
                  myVideoStream.id
                )
              })

              peer.on('call', function (call) {
                console.log('Got calls')
                socket.emit('update-streams', currentUserID, myVideoStream.id)

                getUserMedia(
                  { video: true, audio: true },
                  function (stream) {
                    console.log('Got user media')
                    call.answer(stream) // Answer the call with an A/V stream.
                    call.on('stream', function (remoteStream) {
                      const newVideoObject = document.createElement('video')

                      addVideoStream(
                        newVideoObject,
                        remoteStream,
                        'participants-videos'
                      )
                    })
                  },
                  function (err) {
                    console.log('Failed to get local stream', err)
                  }
                )
              })
            })

          // socket.on('FromAPI', data => {
          //   setResponse(data)
          // })
        } else {
          console.log(response.data.error)
        }
      }
      getData()
    }, [])

    return (
      <>
        <div className='main-video-wrapper'>
          <div id='main-video'></div>
        </div>
        <div id='participants-videos'></div>
      </>
    )
  })
)

export default Homepage
