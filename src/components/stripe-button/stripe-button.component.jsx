import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

function stripeButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HSNIIIq64LNEP0sNOc6f8Cm0KrAbsOWnfmKDcBqykA32JIL5hMiIPPhZxoKAWlShkrS1E9MueFEc4krT9hkg9n8008nmcxvpm';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='SnazzyClothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default stripeButton
