import React from 'react';

const Reviews = props => (
    props.reviews.map(review => <Review key={review.id} review={review}/>)
)

export default Reviews