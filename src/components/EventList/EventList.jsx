import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import EventCard from '../EventCard/EventCard'
import SelectBox from '../Inputs/SelectBox'
import { inject, observer } from 'mobx-react'
import AutoComplete from '../Inputs/AutoComplete'
import DropdownSelect from '../Inputs/DropDown'
import { useState } from 'react'
import './EventList.css'

const selectOptions = ['Date', 'Popularity', 'Screenter']

const EventGrid = inject('eventsStores')(
  observer(props => {
    const [eventList, setEventList] = useState(props.eventsStores.listOfEvents)

    const eventNames = props.eventsStores.listOfEvents.map(event => event.name)
    const filterEvents = query => {
      const filteredEvents = props.eventsStores.listOfEvents.filter(event =>
        event.name.includes(query)
      )
      setEventList(filteredEvents)
    }
    const sortEvents = attr => {
      console.log('SORT', attr)
    }

    console.log('EVENT GRID', eventList)
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol className='align-middle' lg='8'>
              <AutoComplete
                list={eventNames}
                label={'Search event'}
                filterFunction={filterEvents}
              />
            </MDBCol>
            <MDBCol className='align-middle' lg='4'>
              <DropdownSelect
                label='Sort by'
                optionList={selectOptions}
                function={sortEvents}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            {eventList.map(event => (
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
