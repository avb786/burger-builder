import React from 'react';
import PropTypes from 'prop-types';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';


const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return <li key={igKey}><span style={{ textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
  })
  return (
    <Auxillary>
      <h3>Your Order</h3>
      <p>A delicios Burger</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>
        <strong>Total Price : {props.price}</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>Proceed</Button>
    </Auxillary>
  )
}


export default OrderSummary;
