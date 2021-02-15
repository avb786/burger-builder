import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredenits from "./BurgerIngredeints/BurgerIngredeints";

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.incredeints).map(ing => {
        return [...Array(props.incredeints[ing])].map((_, i) => {
           return <BurgerIngredenits key={ing+i} type={ing} />
        });
    });

return (
<div className={classes.Burger}>
<BurgerIngredenits type="bread-top" />
{transformedIngredients}
<BurgerIngredenits type="bread-bottom" />
</div>
)
}

export default Burger;