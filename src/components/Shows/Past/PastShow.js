import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBtn } from 'mdbreact';
import '../Upcoming/Show.css'

const Show = props => {
    return (
        <MDBContainer className="show-container">
            <MDBRow>
                <MDBCol md="9" middle className="mb-3 text-center">
                    <MDBTypography variant="h2" tag='h2'>Shachar Hasson</MDBTypography>
                    <MDBTypography variant="h3" tag='h2'>Friday 27th 20:00 PM - 21:00 PM</MDBTypography>
                </MDBCol>
                <MDBCol md="3" middle className="mb-3 text-center">
                    <MDBBtn color="primary">Go to Screenter's Page</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Show