import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from "./BuildControls.module.css";


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p className={classes.CurrentPrice}>Current Price:<strong> ${props.price.toFixed(2)}</strong></p>
            {controls.map((control) => {
                return <BuildControl key={control.label}
                typeOfIngredient={control.type}
                addIngredients={props.ingredientAdded} 
                removeIngredients={props.ingredientRemoved}
                ingredientLabel={control.label}
                disabled={props.disabled[control.type]}
                />
            })}
            <button 
            disabled={!props.purchaseable}
             className={classes.OrderButton}
             onClick={props.purchasing}
             >Order Now</button>
        </div>
    )
}

export default BuildControls