import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
export default function Checkout(subtotal) {
  function tokenHander(token){
    console.log(token);
  }
    return (
    <div>
      <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHander}
        currency='LKR'
      >
        <button className='btn'>
            Pay Now
        </button>
      </StripeCheckout>
    </div>
  )
}
