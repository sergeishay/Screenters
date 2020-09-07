import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBtn } from 'mdbreact';
import moment from 'moment'
import '../Upcoming/Show.css'

const Show = inject("generalStore")(observer(props => {
    const [event, setEvent] = useState({})
    const history = useHistory();
    const show = props.show;    
    
    useEffect(() => {
        const loadEvent = async() => {
            setEvent(await props.generalStore.getEventById(show.showEventID))
       }
       loadEvent();
    }, [])

    const goToScreenter = () => {
        history.push(`/creator/${event.creatorID}`)
    }

    return (
        <MDBContainer className="show-container">
            <MDBRow>
                <MDBCol md="9" middle className="mb-9 text-center">
                    <MDBTypography variant="h2" tag='h2'>{event.name}</MDBTypography>
                    <MDBTypography variant="h5" tag='h5'>{moment(show.startTime).format("LLLL")} - {moment(show.endTime).format("LT")}</MDBTypography>
                </MDBCol>
                <MDBCol md="3" middle className="mb-3 text-center">
                    <MDBBtn onClick={goToScreenter} color="primary">Go to Screenter's Page</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}))

export default Show