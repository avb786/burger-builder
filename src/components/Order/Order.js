import React from 'react'
import classes from "./Order.module.css";
const order = (props) => {

    const ingredeints = [];
    for (const ingredient in props.ingredients) {
       ingredeints.push({
           name: ingredient,
           amount: props.ingredients[ingredient]
       })
    }
    const ingredientsOutput = ingredeints.map(ing => {
        console.log('ingredientsOutput--', ing);
        return (<span style={{textTransform: 'capitalize', 
        display: 'inline-block', 
        margin: '0 8px',
        border: 'solid 1px #ccc',
        padding: '5px'
        }} key={ing.name}>
            {ing.name} ({ing.amount})
        </span>)
    })

    console.log("ingredientsOutput", ingredientsOutput);
    return (
        <div className={classes.Order}>
            <p>Ingredeints : {ingredientsOutput}</p>
            <p>Price <strong>USD {Number(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default order;