import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.incredientLabel}</div>
            <button className={classes.Less}><i class="fa fa-plus" aria-hidden="true"></i></button>
            <button className={classes.More}><i class="fa fa-minus" aria-hidden="true"></i></button>
        </div>
    )
}

export default BuildControl