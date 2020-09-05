import React from 'react'
import { MDBTimePicker, MDBCol } from 'mdbreact'

const TimePickerPage = props => {
  const getPickerValue = value => {
    console.log(value)
    props.setTime(value)
  }

  return (
    <MDBCol md='3'>
      <MDBTimePicker
        id='timePicker'
        label='Enter time'
        hours={12}
        minutes={0}
        hoursFormat={24}
        getValue={getPickerValue}
      />
    </MDBCol>
  )
}

export default TimePickerPage
