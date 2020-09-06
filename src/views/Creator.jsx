import React, { useState, useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import ProfileImage from '../components/Profile/ProfileImage/ProfileImage'
import ImageUplaod from '../components/Inputs/ImageUpload'
import CreatorBackground from '../components/Profile/Creator/CreatorBackground/CreatorBackground'
import { MDBContainer, MDBRow, MDBTypography } from 'mdbreact'
import { useAuth0 } from '@auth0/auth0-react';
import CreatorEventList from '../components/CreatorEventList';
import Reviews from '../components/Reviews/Reviews'

const Creator = inject('generalStore')(
  observer(props => {
    const { user } = useAuth0();
    const [isOwner, setIsOwner] = useState(false);
    const [creator, setCreator] = useState({});

    console.log(creator);
    
    useEffect(() => {
      const getProfile = async () => {
        if (unescape(props.match.params.id) === unescape(user.sub)) {
          setIsOwner(true)
        }
        setCreator(await props.generalStore.getCreatorById(props.match.params.id))
      }
      getProfile();
    }, [])

    return (
      <React.Fragment>
        <MDBContainer className='mt-3'>
          <MDBRow className='mt-0'>
          <ImageUplaod
            src={creator.data ? creator.data.Data.imageURL : null}
            alt={creator.data ? creator.data.Data.username : null}
            isEdit={isOwner}
          />
            <CreatorBackground isEdit={isOwner} creator={creator} />
          </MDBRow>
          <MDBRow className='mt-0'>
            <MDBTypography variant="h2" tag='h2'>Events:</MDBTypography>
            <CreatorEventList history={props.history} creator={creator} events={creator.data ? creator.data.Events : []} isOwner={isOwner}/>
          </MDBRow>
          <MDBRow className='mt-0'>
            <MDBTypography variant="h2" tag='h2'>Reviews:</MDBTypography>
            <Reviews reviews={creator.data ? creator.data.Reviews : []}/>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    )
  })
)

export default Creator
