import React, {useState} from 'react';
import Modal from '../../UI/Modal/Modal'
import { MDBMask, MDBView, MDBCol } from "mdbreact";
import './ProfileImage.css'

const ProfileImage = props => {

    const [modal, setModal] = useState(false);   
    console.log(props.profile);
     

    const toggle = () => {
        setModal(!modal);
    }

    const changeImage = newUrl => {
        props.profile.imgUrl = newUrl;
        toggle()
    }
    
    
    return props.isOwner || props.isUser ? (
        <React.Fragment>
            <MDBCol md="5">
                <MDBView hover zoom >
                {props.profile !== '' ? 
                <img
                    // src={props.profile.data.creatorData[0][0].imageURL}
                    src="https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/14980740_1468136089881899_1615015842396543902_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=716WYFE4_5kAX_3hO6j&_nc_ht=scontent.fhfa1-2.fna&oh=dc13d7ba8ac0f956e2580ff168aca6d3&oe=5F777DA4"
                    className="img-fluid z-depth-4"
                    alt=""
                /> : null}
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
                {props.profile !== '' ? 
                <img
                    // src={props.profile.data.creatorData[0][0].imageURL}
                    src="https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/14980740_1468136089881899_1615015842396543902_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=716WYFE4_5kAX_3hO6j&_nc_ht=scontent.fhfa1-2.fna&oh=dc13d7ba8ac0f956e2580ff168aca6d3&oe=5F777DA4"
                    className="img-fluid z-depth-4"
                    alt=""
                /> : null}
                <MDBMask className="flex-center">
                    <p className="white-text">Click for FullScreen</p>
                </MDBMask>
                </MDBView>
            </MDBCol>
        </React.Fragment>
    )
}

export default ProfileImage;