import React, { useState, useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import ProfileImage from '../components/Profile/ProfileImage/ProfileImage'
import CreatorBackground from '../components/Profile/Creator/CreatorBackground/CreatorBackground'
import { MDBContainer, MDBRow, MDBTypography } from 'mdbreact'
import { useAuth0 } from '@auth0/auth0-react';
import CreatorEventList from '../components/CreatorEventList';
import Review from '../components/Reviews/Review'

const Creator = inject('generalStore')(
  observer(props => {
    const { user } = useAuth0();
    const [isOwner, setIsOwner] = useState(false);
    const [creator, setCreator] = useState(null)

    useEffect(() => {
      const getProfile = async () => {
        if (unescape(props.match.params.id) === unescape(user.sub)) {
          setIsOwner(true)
        }
        setCreator(props.generalStore.getCreatorById(props.match.params.id))
      }
      getProfile();
    }, [creator])

    const changeImage = newUrl => {
      props.creatorStore.updateCreator({field: "imageURL", value: newUrl})
    }

    return (
      props.creatorStore ? 
      <React.Fragment>
        <MDBContainer className='mt-3'>
          <MDBRow className='mt-0'>
            <ProfileImage
              isOwner={isOwner}
              changeImage={changeImage}
              profile={creator}
            />
            <CreatorBackground creator={creator} />
          </MDBRow>
          <MDBRow className='mt-0'>
            <MDBTypography variant="h2" tag='h2'>Events:</MDBTypography>
            <CreatorEventList isOwner={isOwner}/>
          </MDBRow>
          <MDBRow className='mt-0'>
            <MDBTypography variant="h2" tag='h2'>Reviews:</MDBTypography>
            <Review />
            <Review />
            <Review />
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
      : null
    )
  })
)

export default Creator
