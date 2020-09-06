import React, { Fragment } from 'react'
import EventGrid from '../components/EventList/EventList'
import SideBar from '../components/Sidebar/Sidebar'
import JumboCarousel from '../components/Carousel/JumboCarousel'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { inject, observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

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

    const [eventList, setEventList] = useState(props.eventsStores.listOfEvents)
    const eventNames = props.eventsStores.listOfEvents.map(event => event.name)
    const filterEvents = query => {
      const filteredEvents = props.eventsStores.listOfEvents.filter(event =>
        event.name.includes(query)
      )
      setEventList(filteredEvents)
    }
    const filterByCategory = categories => {
      console.log('categories', categories)
      console.log('events', props.eventsStores.listOfEvents)
      const filteredEvents = props.eventsStores.listOfEvents.filter(function (
        event
      ) {
        console.log('event.categoryID', event.categoryID)
        console.log('this', this)
        return this.indexOf(event.categoryID.toString()) < 0
      },
      categories)
      console.log(filteredEvents)
      setEventList(filteredEvents)
    }
    const sortEvents = attr => {
      console.log('SORT', attr)
    }
    // https://www.smashingmagazine.com/2020/03/infinite-scroll-lazy-image-loading-react/

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
              <SideBar categoryFunction={filterByCategory} />
            </MDBCol>
            <MDBCol md='10'>
              <EventGrid
                eventNames={eventNames}
                searchFunction={filterEvents}
                eventList={eventList}
                sortEvents={sortEvents}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Fragment>
    )
  })
)

export default Homepage
