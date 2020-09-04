import React from 'react'
import { MDBSelect } from 'mdbreact'
import { useState } from 'react'

const MultiSelect = props => {
  const [options, setOptions] = useState(props.options)
  const setSelect = selection => {
    setOptions(selection)
  }
  return (
    <div>
      <MDBSelect
        color='primary'
        multiple
        options={options}
        selected={props.selected}
        label={props.label}
        onChange={setSelect}
      />
    </div>
  )
}

export default MultiSelect
