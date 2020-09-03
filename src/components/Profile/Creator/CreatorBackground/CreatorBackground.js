import React from 'react';
import { MDBCol, MDBTypography } from "mdbreact";
import Stars from '../../../UI/Stars/Stars'
import './CreatorBackground.css'

// TODO: MAKE COMPONENT "SMART"

const CreatorBackground = props => {
    return (
        <React.Fragment>
            <MDBCol md="7">
                <MDBTypography variant="h1" tag='h1'>Creator Username</MDBTypography>
                <Stars getValue={() => "4"}/>
            </MDBCol>
        </React.Fragment>
    )
}

export default CreatorBackground