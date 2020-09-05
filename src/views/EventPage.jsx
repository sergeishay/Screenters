import React, { useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBInput } from 'mdbreact'
import { inject, observer } from 'mobx-react'
import MyCalendar from '../components/Calendar/Calendar'
import SwitchField from '../components/Inputs/SwitchField'
import ImageUplaod from '../components/Inputs/ImageUpload'

import './pages.css'
import { useRef } from 'react'
import { useState } from 'react'

const formatShows = shows => {
  return shows.map(show => ({
    id: show.id,
    title: 'my event',
    start: show.startTime,
    end: show.endTime,
  }))
}

const isEventCreator = (user, eventID) => {
  if (!user.userRole === 'CREATOR') return false
}

const EventPage = inject('generalStore')(
  observer(props => {
    const store = props.generalStore
    const eventID = props.match.params.id

    const [eventTitle, setEventTitle] = useState('')
    const [eventDescription, setEventDescription] = useState('')

    const currentUser = {
      userID: 1,
      userRole: 'USER',
      username: 'Chikoom',
      futureShows: [],
      pastShows: [],
    }

    const saveData = field => {
      if (field === 'title') {
        const eventData = {
          field: 'title',
          value: eventTitle,
        }
        store.updateEvent(store.singleEvent.id, eventData)
      }
      if (field === 'description') {
        console.log('UPDATE DATA', eventDescription)
        const eventData = {
          field: 'description',
          value: eventTitle,
        }
        store.updateEvent(store.singleEvent.id, eventData)
      }
    }

    useEffect(() => {
      const getEvent = async () => {
        await store.getEventById(eventID)
        setEventTitle(store.singleEvent.name)
        setEventDescription(store.singleEvent.description)
      }
      getEvent()
    }, [])

    return (
      <>
        <ImageUplaod
          src={store.singleEvent.coverImgURL}
          alt={store.singleEvent.name}
          isEdit={true}
        />
        <div className='spacer'>&nbsp;</div>
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
              {/*  EVENT NAME  */}
              <SwitchField
                showComponent={
                  <MDBTypography
                    className='inline'
                    tag='h2'
                    variant='h2-responsive'
                  >
                    <strong>{store.singleEvent.name}</strong>
                  </MDBTypography>
                }
                editComponent={
                  <MDBInput
                    group={false}
                    className='input-small'
                    size='sm'
                    label='Edit event name'
                    getValue={value => setEventTitle(value)}
                    value={eventTitle}
                  />
                }
                updateFunction={saveData}
                fieldToUpdate='title'
                isActive={true}
              />

              <MDBTypography tag='h3' variant='h3-responsive'>
                {store.singleEvent.creatorID}
              </MDBTypography>

              {/* EVENT DESCRIPTION  */}
              <SwitchField
                showComponent={<p>{store.singleEvent.description}</p>}
                editComponent={
                  <MDBInput
                    type='textarea'
                    label='Edit event description'
                    rows='5'
                    getValue={value => setEventDescription(value)}
                    value={eventDescription}
                  />
                }
                updateFunction={saveData}
                fieldToUpdate='description'
                isActive={true}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className='spacer'>&nbsp;</div>

        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBTypography tag='h3' variant='h3-responsive'>
                UPCOMING SCREENINGS:
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <MyCalendar
                currentUser={currentUser}
                events={formatShows(store.singleEvent.shows)}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className='spacer'>&nbsp;</div>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBTypography tag='h3' variant='h3-responsive'>
                MORE EVENTS BY :
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol></MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  })
)

export default EventPage
