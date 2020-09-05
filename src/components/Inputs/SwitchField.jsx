import React, { useState } from 'react'
import { MDBIcon, MDBBtn } from 'mdbreact'
import './SwitchField.css'

const SwitchField = props => {
  const {
    showComponent,
    editComponent,
    updateFunction,
    isActive,
    fieldToUpdate,
  } = props

  const [isEdit, setIsEdit] = useState(false)
  const handleEditClick = () => {
    setIsEdit(true)
    console.log('edit')
  }
  const handleSaveClick = () => {
    updateFunction(fieldToUpdate)
    setIsEdit(false)
    console.log('save')
  }
  return isEdit ? (
    <>
      {editComponent}
      <MDBBtn size='sm' onClick={handleSaveClick}>
        <MDBIcon icon='save' />
      </MDBBtn>
    </>
  ) : (
    <>
      {showComponent}
      {isActive && (
        <MDBBtn size='sm' onClick={handleEditClick}>
          <MDBIcon icon='edit' />
        </MDBBtn>
      )}
    </>
  )
}

export default SwitchField
