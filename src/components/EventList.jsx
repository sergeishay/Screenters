import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import EventCard from './EventCard/EventCard'
import SelectBox from './Inputs/SelectBox'
import { inject, observer } from 'mobx-react'
import AutoComplete from './Inputs/AutoComplete'
// import './App.css' //Import here your file style

const selectOptions = ['Date', 'Popularity', 'Screenter']

const EventGrid = inject('eventsStores')(
  observer(props => {
    const events = props.eventsStores.listOfEvents
    console.log('EVENT GRID', events)
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol lg='8'>
              <AutoComplete />
            </MDBCol>
            <MDBCol lg='4'>
              <SelectBox optionList={selectOptions} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            {events.map(event => (
              <MDBCol lg='4' md='6'>
                <EventCard isEdit={false} eventDetails={event} />
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </>
    )
  })
)

export default EventGrid
