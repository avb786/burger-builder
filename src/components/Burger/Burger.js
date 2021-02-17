import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredenits from "./BurgerIngredeints/BurgerIngredeints";

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.incredeints).map(ing => {
        return [...Array(props.incredeints[ing])].map((_, i) => {
            return <BurgerIngredenits key={ing + i} type={ing} />
        });
    }).reduce((arr, el) => {
        console.log(arr);
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

export default Burger;