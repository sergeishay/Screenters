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

        {props.isEdit && (
          <MDBBtn
            size='sm'
            className='imageUpload-edit-btn'
            onClick={handleEditClick}
          >
            Upload New Image
          </MDBBtn>
        )}
      </div>
    </>
  )
}

export default ImageUplaod
