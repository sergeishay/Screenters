import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import ProfileImage from '../components/Profile/ProfileImage/ProfileImage'
import { MDBContainer, MDBRow, MDBTypography } from 'mdbreact'
import CreatorEventList from '../components/CreatorEventList';
import Show from '../components/Shows/Upcoming/Show';
import PastShow from '../components/Shows/Past/PastShow'

const User = inject('userStore')(
  observer(props => {

    useEffect(() => {
      const getProfile = async () => {
        // props.userStore.getUserById(props.match.params.id)
      }
      getProfile();
    }, [])

    const changeImage = newUrl => {
      props.userStore.updateUser({field: "imageURL", value: newUrl})
    }

    return (
      <React.Fragment>
        <MDBContainer className='mt-3'>
          <MDBRow className='mt-0'>
            <ProfileImage
              isUser={true}
              changeImage={changeImage}
              profile={props.creatorStore}
            />
            {/* <MDBTypography variant="h2" tag='h2'>{props.userStore.firstName} {props.userStore.lastName}</MDBTypography> */}
            <MDBTypography variant="h2" tag='h2'>Matan Fried</MDBTypography>
          </MDBRow>
          <MDBRow className='mt-0'>
            <MDBTypography variant="h2" tag='h2'>Upcoming Shows:</MDBTypography>
            <Show />
            <Show />
            <Show />
          </MDBRow>
          <MDBRow className='mt-0'>
            <MDBTypography variant="h2" tag='h2'>Past Shows:</MDBTypography>
            <PastShow />
            <PastShow />
            <PastShow />
          </MDBRow>
          <MDBRow>
            <MDBTypography variant="h2" tag='h2'>Shows you'll love:</MDBTypography>
            <CreatorEventList />
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    )
  })
)

export default User
