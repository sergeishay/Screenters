import React, { useState } from 'react'
import { useEffect } from 'react'
import StarRatings from 'react-star-ratings'

const Ratings = props => {
  const [rating, setRating] = useState(0)

  const changeRating = (newRating, name) => {
    setRating(newRating)
  }

  useEffect(() => {
    setRating(props.rating)
  }, [])

  return (
    <StarRatings
      rating={rating}
      starRatedColor='orange'
      numberOfStars={5}
      name='rating'
      starDimension='20px'
      starSpacing='5px'
    />
  )
}

export default Ratings
