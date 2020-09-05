import React from 'react'
import { MDBMask, MDBView, MDBCol, MDBBtn, MDBIcon } from 'mdbreact'
import './ImageUplaod.css'

const ImageUplaod = props => {
  const handleEditClick = () => {}
  return (
    <>
      <div className='imageUpload-wrapper'>
        <img
          src={props.src}
          className='img-fluid full-width z-depth-2'
          alt={props.alt}
        />
      </div>
      {props.isEdit && (
        <MDBBtn
          size='lg'
          className='imageUpload-edit-btn'
          onClick={handleEditClick}
        >
          Upload New Image
        </MDBBtn>
      )}
    </>
  )
}

export default ImageUplaod
