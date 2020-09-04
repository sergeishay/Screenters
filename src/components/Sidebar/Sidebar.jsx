import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { MDBTypography } from 'mdbreact'
import Filters from '../Filters/Filters'

const SideBar = () => {
  return (
    <MDBContainer fluid='true'>
      <Filters />
    </MDBContainer>
  )
}

export default SideBar
