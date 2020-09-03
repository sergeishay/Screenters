import React, { useState } from 'react'
import JumboCarousel from './JumboCarousel'
import { inject, observer } from 'mobx-react'

const EventsCarousel = inject('eventsStores')(
  observer(props => {
    return <Carousel />
  })
)

export default EventsCarousel
