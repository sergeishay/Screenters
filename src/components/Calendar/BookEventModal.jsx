import React from 'react'
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact'
import { useState } from 'react'

const BookModal = props => {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => {
    setIsOpen(!isOpen)
    props.toggleModal()
  }
  console.log(props.show)
  return (
    <MDBContainer>
      <MDBBtn color='primary' onClick={toggle}>
        MDBModal
      </MDBBtn>
      <MDBModal isOpen={isOpen} toggle={toggle} centered>
        <MDBModalHeader toggle={toggle}>{props.show.title}</MDBModalHeader>
        <MDBModalBody>
          <p>Start: {formatDate(props.show.start)}</p>
          <p>End: {formatDate(props.show.end)}</p>
          <p>user id: {props.currentUser.userID}</p>
        </MDBModalBody>
        <MDBModalFooter>
          {(props.currentUser.userRole === 'USER' && (
            <MDBBtn color='primary'>BOOK NOW</MDBBtn>
          )) || <MDBBtn color='danger'>DELETE</MDBBtn>}
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  )
}

const formatDate = date => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const dayString = days[date.getDay()]
  const dateString = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`
  const hour = date.getHours()
  const minutes = date.getMinutes()
  return `${dayString} | ${dateString} | ${hour}:${minutes} `
}
export default BookModal
