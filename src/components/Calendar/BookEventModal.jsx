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
import { formatDate } from '../../utils/functions'
import Paypal from '../Paypal/PaypalBtn'
import './BookEventModal.css'

const BookModal = inject('generalStore')(props => {
  const [isOpen, setIsOpen] = useState(true)
  const [isCheckOut, setisCheckOut] = useState('15vh')

const checkoutSwitch = (size) =>{
  setisCheckOut(size)
}

  const toggle = () => {
    setIsOpen(!isOpen)
    props.toggleModal()
  }
  const deleteShow = () => {
    props.generalStore.deleteShow(props.show.id, props.currentEvent.id)
    setIsOpen(false)
  }
  // const handleBook = () => {
  //   console.log(props.generalStore.currentUser)
  //   const result = props.generalStore.currentUser.bookShow(props.show.id)
  //   console.log('handleBook RESULT', result)
  // }
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
        <MDBModalFooter style={{height:isCheckOut}}>
          {(userEditor && (
            <MDBBtn onClick={deleteShow} color='danger'>
              DELETE
            </MDBBtn>
          )) || (
            <>
              {/* <MDBBtn onClick={handleBook} color='primary'>
                BOOK NOW
              </MDBBtn> */}
              <Paypal currentUser={props.currentUser}
                      price={props.showPrice}
                      show={props.show}
                      checkoutSwitch={checkoutSwitch}
              />
            </>
          )}
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  )
})

// const formatDate = date => {
//   const days = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ]
//   const dayString = days[date.getDay()]
//   const dateString = `${date.getDate()}/${
//     date.getMonth() + 1
//   }/${date.getFullYear()}`
//   const hour = date.getHours()
//   const minutes = date.getMinutes()
//   return `${dayString} | ${dateString} | ${hour}:${minutes} `
// }
export default BookModal
