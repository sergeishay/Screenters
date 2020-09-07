import React from 'react'
import { MDBContainer, MDBAutocomplete } from 'mdbreact'
import './AutoComplete.css'
const AutocompletePage = props => {
  const logValue = value => {
    props.filterFunction(value)
  }

  return (
    <MDBContainer>
      <MDBAutocomplete
        data={props.list}
        label={props.label}
        icon='search'
        clear
        id='input'
        getValue={logValue}
      />
    </MDBContainer>
  )
}

export default AutocompletePage
