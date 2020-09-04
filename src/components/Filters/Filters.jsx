import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { MDBTypography } from 'mdbreact'
import FilterCategories from './FilterCategories'
const Filters = () => {
  return (
    <MDBContainer fluid='true'>
      <FilterCategories />
    </MDBContainer>
  )
}

export default Filters
