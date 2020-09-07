import React from 'react';
import Show from './Show';
import PastShows from '../Past/PastShow'

const Shows = props => (
    props.kind === "upcoming" ? (
    props.shows.map(show => <Show key={show.id} show={show}/>)
    ):( 
    props.shows.map(show => <PastShows key={show.id} show={show}/>))
)

export default Shows