import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IYg7MGiyNuSAv8np3OCF5KD7TS4Qk8MiUX3bWCduwmUroJOBg53pS77UpBcFvDmoEQQam2UAiu4bfFPAJLTe9KY00dm9cQX74';

    const onToken = token => {
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton