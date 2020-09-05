import React, { Fragment } from 'react'
import EventGrid from '../components/EventList/EventList'
import SideBar from '../components/Sidebar/Sidebar'
import JumboCarousel from '../components/Carousel/JumboCarousel'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { inject, observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'

const Homepage = inject('eventsStores')(
  observer(props => {
    const history = useHistory()
    const carouselEvents = props.eventsStores.listOfEvents
      .slice(0, 3)
      .map(event => ({
        id: event.id,
        image: event.coverImgURL,
        header: event.name,
        text: event.description,
        link: `/event/:${event.id}`,
      }))
    const navigateToEvent = id => {
      history.push(`/event/${id}`)
    }
    return (
      <Fragment>
        <JumboCarousel
          className='z-depth-2'
          buttonNavigate={navigateToEvent}
          data={carouselEvents}
        />
        <div className='spacer'>&nbsp;</div>
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
  })
)

export default Homepage
