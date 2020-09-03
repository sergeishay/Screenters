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
import { inject, observer } from 'mobx-react'

const EventCard = observer(props => {
  return (
    <MDBCol style={{ maxWidth: '22rem' }}>
      <MDBCard>
        <MDBCardImage
          className='img-fluid'
          src={props.eventDetails.imgURL}
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>{props.eventDetails.name}</MDBCardTitle>
          <MDBCardText>{props.eventDetails.description}</MDBCardText>
          {(props.isEdit && <MDBBtn href='#'>EDIT</MDBBtn>) || (
            <MDBBtn href='#'>BOOK</MDBBtn>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
})

export default EventCard
