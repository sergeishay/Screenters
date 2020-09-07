import React, { Fragment, useEffect, useState } from 'react'
import { MDBBtn, MDBTypography, MDBIcon } from 'mdbreact'
import Peer from 'peerjs'
import socketIOClient from 'socket.io-client'
import MainVideo from '../components/Broadcast/MainVideo'
import ParticipantVideo from '../components/Broadcast/ParticipantVideo'
import { inject, observer, PropTypes } from 'mobx-react'
import { useLocation } from 'react-router-dom'
import './BroadcastRoom.css'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

const queryString = require('query-string')
const ENDPOINT = 'http://localhost:8181'
const ID = 321

const Homepage = inject(
  'eventsStores',
  'generalStore'
)(
  observer(props => {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
    const requestedRoomID = props.match.params.roomId
    const currentUser = props.generalStore.currentUser
    const allVideoStreams = []
    let roomInfo = {}
    let currentUserID = null
    let creatorID = null
    let location = useLocation()

    const socket = socketIOClient(ENDPOINT)

    const myVideoObject = document.createElement('video')
    myVideoObject.muted = true
    const getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia
    let myVideoStream = null

    const addVideoStream = (video, stream, element) => {
      console.log('ADDING VIDEO STREAM', stream)

      if (!allVideoStreams.includes(stream.id)) {
        allVideoStreams.push(stream.id)
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
          video.play()
        })
        document.getElementById(element).append(video)
      }
    }

    const connectToNewUser = (peerUserID, stream, peer, connectedUserID) => {
      console.log('CONNECTING TO A NEW USER (ID):', connectedUserID)
      console.log('NEW USER PEER ID:', peerUserID)

      const streamData = { userID: currentUserID, userStream: stream.id }
      const conn = peer.connect(peerUserID)
      conn.on('open', function () {
        conn.send(streamData)
      })

      const call = peer.call(peerUserID, stream)
      const video = document.createElement('video')

      call.on('stream', userVideoStream => {
        console.log('STREAM RECIEVED FROM USER', userVideoStream)

        const element =
          parseInt(creatorID) === parseInt(peerUserID)
            ? 'main-video'
            : 'participants-videos'
        addVideoStream(video, userVideoStream, element)
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
        console.log('ROOM DATA RECIEVED FROM SERVER:', response.data)

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

              const peer = new Peer(currentUserID, {
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

              peer.on('connection', function (conn) {
                console.log(conn)
                conn.on('data', function (data) {
                  console.log('DATA FROM PEER', data)
                })
              })

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

                    // const streamData = {
                    //   userID: currentUserID,
                    //   userStream: stream.id,
                    // }

                    // const connection = peer.connect(conn.provider.id)
                    // connection.on('open', function () {
                    //   connection.send(streamData)
                    // })

                    call.answer(stream) // Answer the call with an A/V stream.
                    call.on('stream', function (remoteStream) {
                      const newVideoObject = document.createElement('video')
                      console.log('CALLLLL', call)
                      console.log('parseInt(creatorID)', parseInt(creatorID))
                      console.log('parseInt(call.peer)', parseInt(call.peer))
                      const element =
                        parseInt(creatorID) === parseInt(call.peer)
                          ? 'main-video'
                          : 'participants-videos'
                      addVideoStream(newVideoObject, remoteStream, element)
                    })
                  },
                  function (err) {
                    console.log('Failed to get local stream', err)
                  }
                )
              })
            })
        } else {
          console.log(response.data.error)
        }
      }
      if (isAuthenticated) {
        getData()
      }
    }, [])

    return (
      <div className='broadcast-page-wrapper'>
        {(!isAuthenticated && (
          <div className='center-container'>
            <div className='centered-inner'>
              <MDBTypography
                className='inline text-center white-text'
                tag='h2'
                variant='h2-responsive'
              >
                PLEASE LOG IN TO WATCH STREAM
                <br />
                <br />
              </MDBTypography>
              <MDBBtn
                id='qsLoginBtn'
                color='primary'
                className='btn-margin'
                onClick={() => loginWithRedirect()}
              >
                Log in
              </MDBBtn>
            </div>
          </div>
        )) || (
          <>
            <div className='main-video-wrapper'>
              <div id='main-video'></div>
              <div id='secondary-video'></div>
              <div id='main-video-controls'>
                <div id='video-button-group'>
                  <MDBBtn
                    id='qsLoginBtn'
                    color='primary'
                    className='btn-margin small-button'
                    onClick={() => null}
                  >
                    <MDBIcon icon='volume-mute' size='sm' />
                  </MDBBtn>
                  <MDBBtn
                    id='qsLoginBtn'
                    color='primary'
                    className='btn-margin small-button'
                    onClick={() => null}
                  >
                    <MDBIcon icon='desktop' size='sm' />
                  </MDBBtn>
                </div>
              </div>
            </div>
            <div id='participants-videos'></div>
          </>
        )}
      </div>
    )
  })
)

export default Homepage
