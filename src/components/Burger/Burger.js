import React from "react";
import { withRouter } from "react-router";
import classes from "./Burger.module.css";
import BurgerIngredenits from "./BurgerIngredeints/BurgerIngredeints";


const Burger = (props) => {
    console.log('Burger', props)
    let transformedIngredients = Object.keys(props.ingredeints).map(ing => {
        return [...Array(props.ingredeints[ing])].map((_, i) => {
            return <BurgerIngredenits key={ing + i} type={ing} />
        });
    }).reduce((arr, el) => {
       return arr.concat(el)
    }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Add some Incredients..</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredenits type="bread-top" />
            {transformedIngredients}
            <BurgerIngredenits type="bread-bottom" />
        </div>
    )
}

export default withRouter(Burger);