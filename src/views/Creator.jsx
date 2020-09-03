import React, { useState, useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import ProfileImage from '../components/Profile/ProfileImage/ProfileImage'
import CreatorBackground from '../components/Profile/Creator/CreatorBackground/CreatorBackground'
import { MDBContainer, MDBRow } from 'mdbreact'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'

const Creator = inject('creatorStore')(
  observer(props => {
    const { user } = useAuth0()
    const [isOwner, setIsOwner] = useState(false)
    const [currentProfile, setCurrentProfile] = useState('')

    useEffect(() => {
      if (props.match.params.id == user.sub) {
        setIsOwner(true)
      }
      axios
        .get(`http://localhost:8080/api/users/${props.match.params.id}`)
        .then(response => {
          setCurrentProfile(response.data)
          console.log(currentProfile)
        })
    })

    const changeImage = newUrl => {
      props.creatorStore.imgUrl = newUrl
    }

    return (
      <React.Fragment>
        <MDBContainer className='mt-0'>
          <MDBRow className='mt-0'>
            <ProfileImage
              isOwner={isOwner}
              changeImage={changeImage}
              profile={currentProfile}
            />
            <CreatorBackground creator={currentProfile} />
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    )
  })
)

export default Creator
