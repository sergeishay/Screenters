import React from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from 'mdbreact'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'

import './EventCard.css'

const EventCard = observer(props => {
  const history = useHistory()
  const handleDetailsClick = () => {
    history.push(`/event/${props.eventDetails.id}`)
  }
  return (
    <MDBCol style={{ maxWidth: '22rem' }}>
      <MDBCard>
        <MDBCardImage
          className='img-fluid'
          src={props.eventDetails.imageURL}
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>{props.eventDetails.name}</MDBCardTitle>
          <MDBCardText>{props.eventDetails.description}</MDBCardText>
          {(props.isEdit && <MDBBtn href='#'>EDIT</MDBBtn>) || (
            <>
              <button type='button' className='btn btn-default btn-sm'>
                BOOK
              </button>
              <button
                type='button'
                className='btn btn-primary btn-sm'
                onClick={handleDetailsClick}
              >
                DETAILS
              </button>
            </>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
})

export default EventCard
