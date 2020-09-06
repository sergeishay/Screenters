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
import ReactPayPal from './Payment';
import './Paypal.css'

const Paypal = observer(props => {

  const [checkout, setCheckout] = React.useState(false);

    return (
      <div className="paymentBtn">
        {(checkout === true) 
          ? <div className="payment-div">
            <ReactPayPal />
          </div> 
          :<div>
            <h1>React-PayPal</h1>
            <button onClick={() => {setCheckout(true)}} className="checkout-button">Checkout</button>
          </div>
        }
    </div>
    );
  })

export default Paypal

