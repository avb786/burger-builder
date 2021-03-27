import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredeints:{
            salad: 1,
            meat: 1,
            cheese: 2,
            bacon: 3
        }
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');

    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();

    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredeints={this.state.ingredeints} checkoutCancelled={this.checkoutCancelledHandler} checkoutContinue={this.checkoutContinueHandler} />
            </div>
        )
    }
}

export default Checkout;