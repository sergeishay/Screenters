import React from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from 'mdbreact'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'
import ReactPayPal from './Pay';
import './Paypal.css'

const Paypal = observer(props => {
  const [checkout, setCheckout] = React.useState(false);
  const [showPaypal, setshowPaypal] = React.useState(false);


  // const history = useHistory()
  // const handleDetailsClick = () => {
  //   history.push(`/event/${props.eventDetails.id}`)
  // }

    return (
      <div className="App">
      <header className="App-header">
        {(checkout === true) 
          ? <div className="payment-div">
            <ReactPayPal />
          </div> 

          :<div>
            <h1>React-PayPal</h1>
            <button onClick={() => {setCheckout(true)}} className="checkout-button">Checkout</button>
          </div>
        }
      </header>
    </div>
    );
  })

// TGKXMGZ2E5JSJ
export default Paypal

