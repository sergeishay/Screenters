import React, { Fragment } from 'react'
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact'
import { useState } from 'react'

const DropdownSelect = props => {
  const [selectedOption, setSelectedOption] = useState(props.label)
  const handleClick = e => {
    console.log(e.target.name)
    setSelectedOption(e.target.name)
    props.function(e.target.name)
  }

  return (
    <Fragment>
      <MDBDropdown size='sm'>
        <MDBDropdownToggle caret color='primary'>
          {selectedOption}
        </MDBDropdownToggle>
        <MDBDropdownMenu color='primary' basic>
          {props.optionList.map(option => (
            <MDBDropdownItem name={option} onClick={handleClick}>
              {option}
            </MDBDropdownItem>
          ))}
        </MDBDropdownMenu>
      </MDBDropdown>
    </Fragment>
  )
}

export default DropdownSelect
