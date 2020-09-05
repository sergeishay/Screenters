import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { MDBTypography } from 'mdbreact'
import Filters from '../Filters/Filters'

const SideBar = props => {
  return (
    <MDBContainer fluid='true'>
      <Filters categoryFunction={props.categoryFunction} />
    </MDBContainer>
  )
}

export default SideBar
