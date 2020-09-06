import React from 'react';
import { MDBCol, MDBTypography } from "mdbreact";
import Rating from '../../../Inputs/Rating'
import './CreatorBackground.css'

// TODO: MAKE COMPONENT "SMART"

const CreatorBackground = props => {
    return (
        <React.Fragment>
            <MDBCol md="7">
                {/* <MDBTypography variant="h1" tag='h1'>{props.creator.data.creatorData[0][0].username}</MDBTypography> */}
                <MDBTypography variant="h1" tag='h1'>Matan Fried</MDBTypography>
                <Rating />
                <div>
                    Pork chop flank salami, swine rump burgdoggen turkey tongue corned beef frankfurter t-bone drumstick ground round brisket turducken. Bacon ham tri-tip, hamburger bresaola shoulder swine pig strip steak. Flank ham hock chicken, sirloin short ribs shankle boudin prosciutto tongue venison pork belly drumstick pig. Frankfurter ham hock chislic shank, jowl flank bresaola doner turducken kevin. Cupim alcatra frankfurter, flank biltong ground round tongue pork belly burgdoggen jerky capicola filet mignon.
                </div>
            </MDBCol>
        </React.Fragment>
    )
}

export default CreatorBackground