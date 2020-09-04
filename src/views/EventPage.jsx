import React, { Fragment, useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdbreact'
import { inject, observer } from 'mobx-react'
import './pages.css'
import { useEffect } from 'react'
// import Calendar from '../components/Calendar/Calendar'

const EventPage = inject('generalStore')(
  observer(props => {
    const store = props.generalStore
    const eventID = props.match.params.id

    useEffect(() => {
      const getEvent = async () => {
        await store.getEventById(eventID)
        console.log('EVENT', store.singleEvent)
      }
      getEvent()
    }, [])
    return (
      <>
        <img
          src={store.singleEvent.coverImgURL}
          className='img-fluid full-width'
          alt={store.singleEvent.name}
        />
        <p></p>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='4'>
              <img
                src={store.singleEvent.imageURL}
                className='img-fluid full-width'
                alt={store.singleEvent.name}
              />
            </MDBCol>
            <MDBCol md='8'>
              <MDBTypography tag='h2' variant='h2-responsive'>
                {store.singleEvent.name}
              </MDBTypography>
              <MDBTypography tag='h3' variant='h3-responsive'>
                {store.singleEvent.creatorID}
              </MDBTypography>
              <p>{store.singleEvent.description}</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBTypography tag='h3' variant='h3-responsive'>
                UPCOMING SHOWS:
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>{/* <Calendar /> */}</MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  })
)

export default EventPage
