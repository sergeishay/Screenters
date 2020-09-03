import React, {useState} from 'react';
import Modal from '../../UI/Modal/Modal'
import { MDBMask, MDBView, MDBCol } from "mdbreact";
import './ProfileImage.css'

const ProfileImage = props => {

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const changeImage = newUrl => {
        props.profile.imgUrl = newUrl;
        toggle()
    }
    
    
    return props.isOwner ? (
        <React.Fragment>
            <MDBCol md="5">
                <MDBView hover zoom >
                <img
                    src={props.profile.imgUrl}
                    className="img-fluid z-depth-4"
                    alt=""
                />
                <Modal changeImage={changeImage} modal={modal} toggle={toggle}/>
                <MDBMask onClick={toggle} className="flex-center">
                    <p className="white-text">Upload New Picture</p>
                </MDBMask>
                </MDBView>
            </MDBCol>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <MDBCol md="5">
                <MDBView hover zoom >
                <img
                    src={props.profile.imgUrl}
                    className="img-fluid z-depth-4"
                    alt=""
                />
                <MDBMask className="flex-center">
                    <p className="white-text">Click for FullScreen</p>
                </MDBMask>
                </MDBView>
            </MDBCol>
        </React.Fragment>
    )
}

export default ProfileImage;