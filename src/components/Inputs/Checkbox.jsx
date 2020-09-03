import React from 'react'
import { MDBInput } from 'mdbreact'

const Checkbox = props => {
  return (
    <>
      {/* Default checked */}
      <div class='custom-control custom-checkbox'>
        <input
          type='checkbox'
          class='custom-control-input'
          id='defaultChecked2'
          checked
        />
        <label class='custom-control-label' for='defaultChecked2'>
          Default checked
        </label>
      </div>
    </>
  )
}

export default Checkbox
