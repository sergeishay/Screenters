import React, { useState } from 'react'
import {
  MDBMask,
  MDBView,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBFileInput,
} from 'mdbreact'
import './ImageUplaod.css'
import { useEffect } from 'react'

const ImageUplaod = props => {
  const [imageSrc, setImageSrc] = useState(null)

  let cloud = ''
  const openCloudUpload = () => {
    cloud.open()
  }
  const setImageAfterUpload = src => {
    console.log(src)
    setImageSrc(src)
  }
  useEffect(() => {
    if (!imageSrc) {
      setImageSrc(props.src)
    }

    cloud = window.cloudinary.createUploadWidget(
      {
        cloudName: 'chikoom',
        uploadPreset: 'screenters',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          // console.log('Done! Here is the image info: ', result.info.secure_url)

          setImageAfterUpload(result.info.secure_url)
        }
      }
    )
  })
  return (
    <>
      <div className='imageUpload-wrapper'>
        <img
          src={imageSrc}
          className='img-fluid full-width z-depth-2'
          alt={props.alt}
          key={imageSrc}
          source={{ uri: imageSrc, cache: 'reload' }}
        />

        {props.isEdit && (
          <MDBBtn
            size='sm'
            className='imageUpload-edit-btn'
            onClick={openCloudUpload}
          >
            Upload Image
          </MDBBtn>
        )}
      </div>
    </>
  )
}

export default ImageUplaod
