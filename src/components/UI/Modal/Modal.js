import React, {useState} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

const ModalPage = props => {

    const [imgUrl, setImgUrl] = useState("");

    const changeImage = () => {
        props.changeImage(imgUrl)
    }

    return (
        <MDBContainer>
        <MDBModal isOpen={props.modal} toggle={props.toggle}>
            <MDBModalHeader toggle={props.toggle}>Change Profile Picture</MDBModalHeader>
            <MDBModalBody>
                <MDBInput value={imgUrl} onChange={e => setImgUrl(e.target.value)} label="Paste here new image URL..." />
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color="secondary" onClick={props.toggle}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={changeImage}>Save changes</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
        </MDBContainer>
        );
}

export default ModalPage;