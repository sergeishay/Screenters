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
import Rating from '../Inputs/Rating'
import './CreatorCard.css'
import { useState } from 'react'

const CreatorCard = observer(props => {
  const [CreatorRatings, setCreatorRatings] = useState(0)
  const watchScreenter = () => {
    /*******redirect to creator page********/
  }
  return (
    <MDBCol style={{ maxWidth: '22rem' }}>
      <MDBCard>
        <MDBCardImage
          className='img-fluid'
          src={props.creatorDetails.imageURL}
          waves
        />
        <MDBCardBody>
          <Rating rating={5} />
          <MDBCardTitle>{props.creatorDetails.username}</MDBCardTitle>
          <MDBCardText>{props.creatorDetails.about}</MDBCardText>
          <>
            <button
              type='button'
              className='btn btn-default '
              onClick={watchScreenter}
            >
              Watch Screenter
            </button>
          </>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
})

export default CreatorCard
