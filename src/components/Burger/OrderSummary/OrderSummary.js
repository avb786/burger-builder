import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
   ingredientsSummary = Object.keys(this.props.ingredients).map(igKey => {
    return <li key={igKey}><span style={{ textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
  });

  componentDidUpdate(){
    console.log("Order Sumarry");
  }

  render(){
  return (
    <Auxillary>
      <h3>Your Order</h3>
      <p>A delicios Burger</p>
      <ul>
        {this.ingredientsSummary}
      </ul>
      <p>
        <strong>Total Price : {this.props.price}</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={this.props.purchaseCancel}>Cancel</Button>
      <Button btnType="Success" clicked={this.props.purchaseContinue}>Proceed</Button>
    </Auxillary>
  )
}
}


export default OrderSummary;
