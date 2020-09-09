import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import ImageUplaod from '../components/Inputs/ImageUpload'
import { MDBContainer, MDBRow, MDBTypography, MDBCol, MDBBtn } from 'mdbreact'
import CreatorEventList from '../components/CreatorEventList';
import Show from '../components/Shows/Upcoming/Show';
import PastShow from '../components/Shows/Past/PastShow'
import Shows from '../components/Shows/Upcoming/Shows'
import { useAuth0 } from '@auth0/auth0-react';

const User = inject('generalStore', 'eventsStores', 'creatorStore')(
  observer(props => {
    const { user } = useAuth0();
    const [isOwner, setIsOwner] = useState(false);
    const [userData, setUserData] = useState({});
    const history = useHistory()
    
    useEffect(() => {
      const getProfile = async () => {
        if(unescape(props.match.params.id) === unescape(user.sub)) {
          setIsOwner(true);
        }
        setUserData(await props.generalStore.getUserById(props.match.params.id));
      }
      getProfile();
    }, [])

    const becomeCreator = () => {
      props.creatorStore.updateUser(userData.data.id, {
        field: "userRole",
        value: "CREATOR"
      });
      history.push(`/creator/${userData.data.id}`)
    }

    const backToCreator = () => {
      history.push(`/creator/${user.sub}`)
    }

    const saveImage = (source, field) => {
      props.creatorStore.updateUser(userData.data.id, {
        field: "imageURL",
        value: source
      });
    }
    
    return (
      userData.data ? (
      <React.Fragment>
        <MDBContainer className='mt-3'>
          <MDBRow className='mt-0'>
            <MDBCol md="4">
              <ImageUplaod
                src={userData.data.imageURL}
                alt={userData.data.username}
                isEdit={isOwner}
                updateFunction={saveImage}
              />
            </MDBCol>
            <MDBCol className="center" md="8">
              <MDBTypography variant="h2" tag='h2'>{userData.data.username}</MDBTypography>
              {userData.data.userRole === "USER" ? (
                <MDBBtn onClick={becomeCreator} color="primary">Beacome a Creator!</MDBBtn>
              ):(
                <MDBBtn onClick={backToCreator} color="primary">Back to your Screenter page</MDBBtn>
              )}
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-0'>
            <MDBCol middle className="center" md="12">
              {userData.data.futureShows.length ? (
                <>
                  <MDBTypography variant="h2" tag='h2'>Upcoming Shows:</MDBTypography>
                  <Shows kind="upcoming" shows={userData.data.futureShows}/>
                </>
              ):(
                <>
                  <MDBTypography variant="h2" tag='h2'>Upcoming shows will appear below..</MDBTypography>
                  <div className="spacer">&nbsp;</div>
                </>
              )}
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-0'>
            {userData.data.pastShows.length ? (
              <>
                <MDBTypography variant="h2" tag='h2'>Past Shows:</MDBTypography>
                <Shows kind="past" shows={userData.data.pastShows}/>
              </>
            ):(
              <>
                <MDBTypography variant="h2" tag='h2'>Past attended shows will appear below..</MDBTypography>
                <div className="spacer">&nbsp;</div>
              </>
            )}
          </MDBRow>
          <MDBRow>
          <MDBCol middle className="center" md="12">
            <MDBTypography variant="h2" tag='h2'>Shows you'll love:</MDBTypography>
            <CreatorEventList isOwner={false} events={props.eventsStores.listOfEvents.slice(0, 3)}/>
          </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
      ) : null
    )
  })
)

export default User
