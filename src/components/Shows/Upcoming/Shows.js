import React from 'react';
import Show from './Show';

const Shows = props => (
    props.shows.map(show => <Show key={show.id} show={show}/>)
)

export default Shows