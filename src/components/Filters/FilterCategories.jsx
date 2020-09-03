import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { MDBTypography } from 'mdbreact'
import MultiSelect from '../Inputs/MultiSelect'
import Checkbox from '../Inputs/Checkbox'

const categories = [
  { value: 1, text: 'LIVE' },
  { value: 2, text: 'DEAD' },
]

const FilterCategories = () => {
  const [categoriesChecked, setCategoriesChecked] = useState({})
  const handleCheck = e => {
    console.log(e.target.name)
    console.log('hello')
  }
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MultiSelect
            selected='Select categories'
            label='Categories'
            options={categories}
            getValue={handleCheck}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default FilterCategories
