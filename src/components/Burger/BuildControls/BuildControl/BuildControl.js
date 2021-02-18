import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.ingredientLabel}</div>
            <button className={classes.More} onClick={() => props.addIngredients(props.typeOfIngredient)}><i className="fa fa-plus" aria-hidden="true"></i></button>
            <button className={classes.Less} disabled={props.disabled} onClick={() => props.removeIngredients(props.typeOfIngredient)}><i className="fa fa-minus" aria-hidden="true"></i></button>
        </div>
    )
}

export default BuildControl;