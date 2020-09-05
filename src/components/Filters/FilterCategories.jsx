import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { MDBTypography } from 'mdbreact'
import MultiSelect from '../Inputs/MultiSelect'
import Checkbox from '../Inputs/Checkbox'
import { inject, observer } from 'mobx-react'
import { useEffect } from 'react'
import './FilterCategories.css'

const FilterCategories = inject('generalStore')(
  observer(props => {
    const [categoriesChecked, setCategoriesChecked] = useState('1')
    const [categories, setCategories] = useState([])
    useEffect(() => {
      const formatedCategories = props.generalStore.categories.map(
        category => ({ value: `${category.id}`, text: category.name_en })
      )
      setCategories(formatedCategories)
    }, [props.generalStore.categories])

    return (
      <MDBRow fluid='true'>
        <MDBCol fluid='true'>
          {categories.length && (
            <MultiSelect
              selected='Select:'
              label='Categories'
              options={categories}
              categoryFunction={props.categoryFunction}
            />
          )}
        </MDBCol>
      </MDBRow>
    )
  })
)

export default FilterCategories
