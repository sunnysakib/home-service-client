import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import { toast } from "react-toastify";
import logo from '../img/logo3.svg'

const StripeButton = ({ fees }) => {
  const priceForStripe = fees;
  const PUBLISHABLE_stripekey =
    "pk_test_51IeMUWJGf7fXr1M7XVX5D81rPOz3s02wdux2Dw3TXIeUhLXOkgJdWSEIxIHeA0ruWgZddte083bfmfFAdzOykKek00QobmeD0j";

    const onToken = token => {
        console.log(token);
        toast("Payment Successful")
    }
  return (
      <StripeCheckout
      label = "Card"
      name = 'HomeService'
      image={logo}
      description = {`Your Total is ${fees}`}
      amount ={priceForStripe}
      panelLabel = "Pay Now"
      token ={onToken}
      stripeKey={PUBLISHABLE_stripekey}
      />
  );
};

export default StripeButton;
