import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact'
import EventCard from './EventCard/EventCard'
import { inject, observer } from 'mobx-react'

const selectOptions = ['Date', 'Popularity', 'Screenter']

const EventGrid = inject('eventsStores')(
  observer(props => {
    const events = props.eventsStores.listOfEvents

    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol lg='8'>
                {props.isOwner ? <MDBBtn href="/new" color="primary">Create new event</MDBBtn> : null}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            {events.map(event => (
              <MDBCol lg='4' md='6'>
                <EventCard isEdit={true} eventDetails={event} />
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </>
    )
  })
)

export default EventGrid
