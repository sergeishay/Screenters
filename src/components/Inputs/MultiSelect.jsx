import React, { Component } from 'react'
import { MDBSelect } from 'mdbreact'
import { useState } from 'react'

const MultiSelect = () => {
  const optionss = [
    {
      text: 'Option nr 1',
      value: '1',
    },
    {
      text: 'Option nr 2',
      value: '2',
    },
    {
      text: 'Option nr 3',
      value: '3',
    },
    {
      text: 'Option nr 4',
      value: '4',
    },
    {
      text: 'Option nr 5',
      value: '5',
    },
  ]
  const [options, setOptions] = useState(optionss)

  return (
    <div>
      <MDBSelect
        color='primary'
        multiple
        options={options}
        selected='Choose your option'
        label='Example label'
      />
    </div>
  )
}

export default MultiSelect
