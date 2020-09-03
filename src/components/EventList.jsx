import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import EventCard from './EventCard/EventCard'
import SelectBox from './Inputs/SelectBox'
// import './App.css' //Import here your file style

const selectOptions = ['Date', 'Popularity', 'Screenter']

const EventGrid = () => {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol lg='10'>SEARCH</MDBCol>
          <MDBCol lg='2'>
            Sort By: <SelectBox optionList={selectOptions} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer>
        <MDBRow>
          <MDBCol lg='4' md='6'>
            <EventCard />
          </MDBCol>
          <MDBCol lg='4' md='6'>
            <EventCard />
          </MDBCol>
          <MDBCol lg='4' md='6'>
            <EventCard />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default EventGrid
