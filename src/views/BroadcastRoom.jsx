import React, { Fragment, useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import Hero from '../components/Hero'
import Content from '../components/Content'
import { inject, observer, PropTypes } from 'mobx-react'
import axios from 'axios'
const ENDPOINT = 'http://0ed93a492609.ngrok.io'
const ID = 321

const Homepage = inject('eventsStores')(
  observer(props => {
    const [response, setResponse] = useState('')

    const carouselEvents = props.eventsStores.listOfEvents
      .slice(0, 3)
      .map(event => ({
        image: event.coverImgURL,
        header: event.name,
        text: event.description,
        link: `/event/:${event.id}`,
      }))

    console.log('craousel', carouselEvents)

    useEffect(() => {
      async function getData() {
        const response = await axios.get(
          `http://0ed93a492609.ngrok.io/broadcast/534534534`,
          { params: { ID } }
        )
        console.log(response.data)
        if (!response.data.error) {
          const socket = socketIOClient(ENDPOINT)
          socket.on('FromAPI', data => {
            setResponse(data)
          })
        } else {
          console.log(response.data.error)
        }
      }
      getData()
      // socket.emit("toAPI" , )
    }, [])

    return <Fragment>Socket response: {response}</Fragment>
  })
)

export default Homepage
