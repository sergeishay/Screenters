import React from "react";
import { inject } from 'mobx-react'
import notification from '../../utils/notification'


const ReactPayPal = inject('generalStore')(props => {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const paypalRef = React.useRef();

  // To show PayPal buttons once the component loads
  
  React.useEffect(() => {
    props.checkoutSwitch('30vh')

    const handleBook = () => {
      console.log(props.generalStore.currentUser)
      const result = props.generalStore.currentUser.bookShow(props.show.id)
      console.log('handleBook RESULT', result)
    }

    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          props.checkoutSwitch('150vh')
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: `${props.show.title}`,
                amount: {
                  currency_code: "ILS",
                  value:`${1}`,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          handleBook()
          console.log(order);
        },
        onError: (err) => {
          //   setError(err),
          console.error(err);
        },
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal'
        }
      }).render(paypalRef.current);
  }, []);

  // If the payment has been made
  if (paid) {
    return <div>Payment successful.!</div>;
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }


  // Default Render
  return (
    <div>
      <h4>Total Amount: {props.price}$ </h4>
      <div ref={paypalRef} />
    </div>
  );
})

export default  ReactPayPal