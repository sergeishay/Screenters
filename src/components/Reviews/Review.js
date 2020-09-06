import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './Review.css';

const Review = inject("generalStore")(observer(props => {
    const [reviewOwner, setReviewOwner] = useState({});

    useEffect(() => {
        const getData = async () => {
            setReviewOwner(await props.generalStore.getUserById(props.review.reviewUserID))
        }
        getData();
    }, [])

    console.log(props.review);
    

    return (
        reviewOwner.data ? (
        <MDBContainer className="review-container">
            <MDBRow>
            <MDBCol xl="2" md="4" middle className="mb-3 text-center">
                <img src={reviewOwner.data.imageURL} className="img-fluid z-depth-1 rounded-circle" alt="" />
            </MDBCol>
            <MDBCol xl="10" md="8" middle className="mb-3 text-left">
                <div>
                    {props.review.text}
                </div>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        ) : null
    )
}))

export default Review