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

const EventGrid = inject('generalStore')(props => {
  const categories = props.generalStore.categories
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol className='align-middle' lg='8'>
            <AutoComplete
              list={props.eventNames}
              label={'Search event'}
              filterFunction={props.searchFunction}
            />
          </MDBCol>
          <MDBCol className='align-middle' lg='4'>
            <DropdownSelect
              label='Sort by'
              optionList={selectOptions}
              function={props.sortEvents}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer>
        <MDBRow>
          {props.eventList.map(event => {
            event.categoryName = categories.find(
              cat => cat.id == event.categoryID
            ).name_en
            return (
              <MDBCol lg='4' md='6'>
                <EventCard isEdit={false} eventDetails={event} />
              </MDBCol>
            )
          })}
        </MDBRow>
      </MDBContainer>
    </>
  )
})

export default EventGrid
