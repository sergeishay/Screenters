import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './Review.css';

const Review = props => (
    <MDBContainer className="review-container">
        <MDBRow>
        <MDBCol xl="2" md="4" middle className="mb-3 text-center">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" className="img-fluid z-depth-1 rounded-circle" alt="" />
        </MDBCol>
        <MDBCol xl="10" md="8" middle className="mb-3 text-center">
            <div>
                Pork chop flank salami, swine rump burgdoggen turkey tongue corned beef frankfurter t-bone drumstick ground round brisket turducken. Bacon ham tri-tip, hamburger bresaola shoulder swine pig strip steak. Flank ham hock chicken, sirloin short ribs shankle boudin prosciutto tongue venison pork belly drumstick pig. Frankfurter ham hock chislic shank, jowl flank bresaola doner turducken kevin. Cupim alcatra frankfurter, flank biltong ground round tongue pork belly burgdoggen jerky capicola filet mignon.
            </div>
        </MDBCol>
        </MDBRow>
    </MDBContainer>
)

export default Review