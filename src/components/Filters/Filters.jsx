import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { MDBTypography } from 'mdbreact'
import FilterCategories from './FilterCategories'
const Filters = props => {
  return (
    <MDBContainer fluid='true'>
      <FilterCategories categoryFunction={props.categoryFunction} />
    </MDBContainer>
  )
}

export default Filters
