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
  }
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBTypography tag='h5'>Categories</MDBTypography>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          {categories.map(category => (
            <div key={category.id}>
              <div class='custom-control custom-checkbox'>
                <input
                  name={category.id}
                  type='checkbox'
                  className='custom-control-input'
                  id={`category-select-${category.name_en}`}
                  onChange={handleCheck}
                />
                <label
                  className='custom-control-label'
                  htmlFor={`category-select-${category.name_en}`}
                >
                  {category.name_en}
                </label>
              </div>
            </div>
          ))}
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MultiSelect
            selected='Select categories'
            label='Categories'
            options={categories}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default FilterCategories
