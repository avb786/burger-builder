import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
class Checkout extends Component {
    state = {
        ingredeints: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 0
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        console.log("QUERY", query);
        const ingredient = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredient[param[0]] = +param[1];
            }
        }
        console.log("Ingredient", ingredient);
        this.setState({
            ingredeints: ingredient,
            totalPrice: price
        })
    }
    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
        sessionStorage.setItem('orderDetails', JSON.stringify(this.state))
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