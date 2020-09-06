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
import { inject } from 'mobx-react'

const BookModal = inject('generalStore')(props => {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => {
    setIsOpen(!isOpen)
    props.toggleModal()
  }
  const deleteShow = () => {
    props.generalStore.deleteShow(props.show.id, props.currentEvent.id)
    setIsOpen(false)
  }
  const userEditor = props.userEditor
  console.log('isUserEditorisUserEditorisUserEditor', props.currentEvent)
  return (
    <MDBContainer>
      <MDBModal isOpen={isOpen} toggle={toggle} centered>
        <MDBModalHeader toggle={toggle}>{props.show.title}</MDBModalHeader>
        <MDBModalBody>
          <p>Start: {formatDate(props.show.start)}</p>
          <p>End: {formatDate(props.show.end)}</p>
          <p>Price: ${props.showPrice}</p>
          <p>user id: {props.currentUser.userID}</p>
        </MDBModalBody>
        <MDBModalFooter>
          {(userEditor && (
            <MDBBtn onClick={deleteShow} color='danger'>
              DELETE
            </MDBBtn>
          )) || <MDBBtn color='primary'>BOOK NOW</MDBBtn>}
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  )
})

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
