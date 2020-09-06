import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import CreatorCard from '../CreatorCard/CreatorCard'
import './CreatorList.css'

const CreatorGrid = props => {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          {props.creatorList.map(creator => (
            <MDBCol lg='4' md='6'>
              <CreatorCard isEdit={false} creatorDetails={creator} />
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default CreatorGrid
