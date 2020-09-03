import React, { Fragment } from 'react'
import EventGrid from '../components/EventList'
import Hero from '../components/Hero'
import Content from '../components/Content'
import SideBar from '../components/Sidebar/Sidebar'
import SCRCarousel from '../components/Carousel/Carousel'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

const Homepage = () => (
  <Fragment>
    <SCRCarousel />
    <MDBContainer>
      <MDBRow>
        <MDBCol md='2'>
          <SideBar />
        </MDBCol>
        <MDBCol md='10'>
          <EventGrid />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Fragment>
)

export default Homepage
