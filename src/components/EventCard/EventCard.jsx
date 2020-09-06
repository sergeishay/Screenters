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
import Rating from '../Inputs/Rating'
import './EventCard.css'
import { useState } from 'react'
import { useEffect } from 'react'

const EventCard = observer(props => {
  const [eventRatings, setEventRatings] = useState(0)
  const history = useHistory()
  const handleDetailsClick = () => {
    history.push(`/event/${props.eventDetails.id}`)
  }
  return (
    <MDBCol style={{ maxWidth: '22rem' }}>
      <MDBCard>
        <MDBCardImage
          className='img-fluid'
          src={props.eventDetails.coverImgURL}
          waves
        />
        <MDBCardBody>
          <Rating rating={5} />
          <MDBCardTitle>{props.eventDetails.name}</MDBCardTitle>
          <MDBCardText>{props.eventDetails.categoryName}</MDBCardText>
          <MDBCardText>{props.eventDetails.description}</MDBCardText>
          {(props.isEdit && (
            <MDBBtn onClick={handleDetailsClick}>EDIT</MDBBtn>
          )) || (
            <>
              {/* <button type='button' className='btn btn-default btn-sm'>
                BOOK
              </button> */}
              <button
                type='button'
                className='btn btn-default '
                onClick={handleDetailsClick}
              >
                BOOK SCREEN
              </button>
            </>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
})

export default EventCard
