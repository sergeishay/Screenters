import React, {useState} from 'react';
import { MDBContainer, MDBRating } from 'mdbreact';

const Stars = props => {
    const [basic] = useState([
        {
          tooltip: 'Very Bad'
        },
        {
          tooltip: 'Poor'
        },
        {
          tooltip: 'Ok',
        },
        {
          tooltip: 'Good'
        },
        {
          tooltip: 'Excellent'
        }
      ]);
    
    return (
        <MDBRating iconSize="2x" data={basic} iconClassName="yellow-text" getValue={props.getValue} iconRegular />
    )
};

export default Stars;