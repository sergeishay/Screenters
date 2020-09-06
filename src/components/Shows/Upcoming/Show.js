import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBtn } from 'mdbreact';
import './Show.css'

const Show = props => {
    return (
        <MDBContainer className="show-container">
            <MDBRow>
                <MDBCol md="3" className="mb-3 text-center">
                    {/* <img src={props.show.imageURL} className="img-fluid z-depth-1 rounded-circle" alt="" /> */}
                    <img src="https://lh3.googleusercontent.com/proxy/fDyKtWXTPCxw0lfdh4tZgsFBasPUjMIhZrJRoCTB6nryIbRB_ssXR17FG9FmFhDSVJWUQqF49O9Bwl4iXh3gCcOEq17aNmL4rq9TJTA5ph6iGQ8FZGUHYtOqh7NgnHJul0M_rWaM5JJww-02hnIsBIM8_RQDFNV4o3zwfFMIMMYXYdAmEOPC16Ti" className="img-fluid z-depth-1 rounded-circle" alt="" />
                </MDBCol>
                <MDBCol md="6" middle className="mb-3 text-center">
                    <MDBTypography variant="h2" tag='h2'>Shachar Hasson</MDBTypography>
                    <MDBTypography variant="h3" tag='h2'>Friday 27th 20:00 PM - 21:00 PM</MDBTypography>
                </MDBCol>
                <MDBCol md="3" middle className="mb-3 text-center">
                    <MDBBtn href="/new" color="primary">Invite Friend</MDBBtn>
                    <MDBBtn href="/new" color="info">Add Reminder</MDBBtn>
                    <MDBBtn href="/new" color="danger">Unbook</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Show