import React, { Component } from 'react'
import { MDBContainer, MDBAutocomplete } from 'mdbreact'

const AutocompletePage = props => {
  const logValue = value => {
    props.filterFunction(value)
  }

  return (
    <MDBContainer>
      <MDBAutocomplete
        data={props.list}
        label={props.label}
        icon='heart'
        clear
        id='input'
        getValue={logValue}
      />
    </MDBContainer>
  )
}

export default AutocompletePage
