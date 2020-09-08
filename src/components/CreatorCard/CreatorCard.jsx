import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
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

    const history = useHistory();
    const watchScreenter = () => {
        history.push(`/creator/${props.creatorDetails.id}`)
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
                    <Rating rating={parseFloat(props.creatorDetails.rating) || 0} />
                    <MDBCardTitle>{props.creatorDetails.firstName + ' ' + props.creatorDetails.lastName}</MDBCardTitle>
                    <MDBCardText>{props.creatorDetails.about}</MDBCardText>
                    <>
                        <button
                            type='button'
                            className='btn btn-default '
                            onClick={()=>watchScreenter(props.creatorDetails.id)}
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
