import React, {useState} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import * as ShareButtons from "react-share";

const ModalPage = props => {
    const url = `http://localhost:3000/event/${props.eventId}`
    const title = "Screenters.com";
    return (
        <MDBContainer>
        <MDBModal centered isOpen={props.modal} toggle={props.toggle}>
            <MDBModalHeader toggle={props.toggle}>Share with:</MDBModalHeader>
            <MDBModalBody>
                <ShareButtons.FacebookShareButton quote="Check this show out!" hashtag="Screenters" url={url}>
                    <ShareButtons.FacebookIcon round/>
                </ShareButtons.FacebookShareButton>
                <ShareButtons.InstapaperShareButton title={title} description="Check this show out!" url={url}>
                    <ShareButtons.InstapaperIcon round/>
                </ShareButtons.InstapaperShareButton>
                <ShareButtons.TwitterShareButton title={title} url={url}>
                    <ShareButtons.TwitterIcon round/>
                </ShareButtons.TwitterShareButton>
                <ShareButtons.WhatsappShareButton title={title} url={url}>
                    <ShareButtons.WhatsappIcon round/>
                </ShareButtons.WhatsappShareButton>
                <ShareButtons.EmailShareButton subject="Check out the Screenter's event" body={`Join me the this event: https://www.screenters.com/event/${props.eventId}`}>
                    <ShareButtons.EmailIcon round/>
                </ShareButtons.EmailShareButton>
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color="secondary" onClick={props.toggle}>Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
        </MDBContainer>
        );
}

export default ModalPage;