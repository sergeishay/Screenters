import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from '../../UI/Modal/Modal'
import { inject, observer } from 'mobx-react'
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBtn, toast, ToastContainer } from 'mdbreact';
import AddToCalendar from 'react-add-to-calendar'
import moment from 'moment'
import './Show.css'

const Show = inject("generalStore")(observer(props => {
    const [event, setEvent] = useState({});
    const [modal, setModal] = useState(false);
    const { user } = useAuth0();
    const history = useHistory();
    const show = props.show;    
    
    useEffect(() => {
        const loadEvent = async() => {
            setEvent(await props.generalStore.getEventById(show.showEventID))
       }
       loadEvent();
    }, [])

    const toggle = () => {
        setModal(!modal)
    }      

    const handelUnbook = () => {
        props.generalStore.currentUser.unBookShow(show.id);
        history.push(`/user/${escape(user.sub)}`);
        toast.error('Show successfuly unbooked!', {
            closeButton: false
          });
    }

    let eventToCalendar = {
        title: "Screenter's Reminder",
        description: `www.screenters.com/broadcast-room/${show.id}`,
        location: 'Israel, IL',
        startTime: show.startTime,
        endTime: show.endTime    
    }

    let items = [
        { outlook: 'Outlook' },
        { google: 'Google' }
     ];     
        
    return (
        <MDBContainer className="show-container">
            <MDBRow>
                <MDBCol md="3" className="mb-3 text-center">
                    <img src={event.imageURL} className="img-fluid z-depth-1 rounded-circle" alt="" />
                </MDBCol>
                <MDBCol md="6" middle className="mb-3 text-center">
                    <MDBTypography variant="h2" tag='h2'>{event.name}</MDBTypography>
                    <MDBTypography variant="h5" tag='h5'>{moment(show.startTime).format("LLLL")} - {moment(show.endTime).format("LT")}</MDBTypography>
                    <MDBTypography variant="h5" tag="h5">Link to show - <a href={`/broadcast-room/${show.id}`}>{`https://www.screenters.com/broadcast-room/${show.id}`}</a></MDBTypography>
                </MDBCol>
                <MDBCol md="3" middle className="mb-3 text-center">
                    <MDBBtn onClick={toggle} color="primary">Invite Friend</MDBBtn>
                    <MDBBtn color="info"><AddToCalendar listItems={items} event={eventToCalendar}>Add Reminder</AddToCalendar></MDBBtn>
                    <MDBBtn onClick={handelUnbook} color="danger">Unbook</MDBBtn>
                    <Modal eventId={event.id} modal={modal} toggle={toggle}/>
                    <ToastContainer
                        hideProgressBar={true}
                        newestOnTop={true}
                        autoClose={5000}
                    />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}))

export default Show