import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import BookModal from './BookEventModal'
import CreateShowModal from './CreateShowModal'
import { useState } from 'react'

const Calendar = props => {
  const [bookModalOpen, setModalOpen] = useState(false)
  const [createModalOpen, setCreateModalOpen] = useState(false)

  const [selectedShow, setSelectedShow] = useState({})
  const [selectedDate, setSelectedDate] = useState({})

  const currentUser = props.currentUser

  const events = props.events
  const handleShowClick = info => {
    console.log(info.event)
    setSelectedShow({
      id: info.event.id,
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
    })
    toggleBookModal()
  }
  const handleDateClick = info => {
    if (currentUser.userRole === 'CREATOR') {
      console.log(info)
      setSelectedDate({
        info,
      })
      toggleCreateModal()
    }
  }
  const toggleBookModal = () => {
    setModalOpen(!bookModalOpen)
  }

  const toggleCreateModal = () => {
    setCreateModalOpen(!createModalOpen)
  }

  return (
    <>
      {bookModalOpen && (
        <BookModal
          isOpen={true}
          toggleModal={toggleBookModal}
          show={selectedShow}
          currentUser={currentUser}
        />
      )}
      {createModalOpen && (
        <CreateShowModal
          isOpen={true}
          toggleModal={toggleCreateModal}
          selectedDate={selectedDate}
          currentUser={currentUser}
        />
      )}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        eventClick={handleShowClick}
        dateClick={handleDateClick}
      />
    </>
  )
}
export default Calendar
