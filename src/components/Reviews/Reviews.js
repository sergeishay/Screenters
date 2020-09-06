import React from 'react';
import Review from './Review';

const Reviews = props => (
    props.reviews.map(review => <Review key={review.id} review={review}/>)
)

export default Reviews