import React, { Component } from 'react'
import { MDBSelect } from 'mdbreact'
import { useState } from 'react'

const MultiSelect = props => {
  const [options, setOptions] = useState(props.options)

  return (
    <div>
      <MDBSelect
        color='primary'
        multiple
        options={options}
        selected={props.selected}
        label={props.label}
      />
    </div>
  )
}

export default MultiSelect
