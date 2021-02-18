import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Auxillary from "../../hoc/Auxillary";

const INGREDEINTS_PRICES = {
    salad: 0.6,
    bacon: 1,
    cheese: 0.4,
    meat: 0.8
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredeints: {
                salad: 1,
                bacon: 1,
                cheese: 1,
                meat: 1
            },
            totalPrice: 4
        }
    }

    addIngredientHandler = (type) => {
        const oldCountOfIngredient = this.state.ingredeints[type];
        const updateCountOfIngredient = oldCountOfIngredient + 1;
        const updateIngredients = {
            ...this.state.ingredeints
        };
        updateIngredients[type] = updateCountOfIngredient;
        const priceAdd = INGREDEINTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;

        this.setState({
            totalPrice: newPrice,
            ingredeints: updateIngredients
        })

    }

    removeIngredientHandler = (type) => {
        const oldCountOfIngredient = this.state.ingredeints[type];
        if(oldCountOfIngredient <= 0) {
            return;
        }
        const updateCountOfIngredient = oldCountOfIngredient - 1;
        const updateIngredients = {
            ...this.state.ingredeints
        };
        updateIngredients[type] = updateCountOfIngredient;
        const priceRemove = INGREDEINTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceRemove;

        this.setState({
            totalPrice: newPrice,
            ingredeints: updateIngredients
        })
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredeints
        }
        for(let disable in disabledInfo) {
            disabledInfo[disable] =  disabledInfo[disable] <= 0;
        }
        return (
            <Auxillary>
                <Burger ingredeints={this.state.ingredeints} />
                <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                />
            </Auxillary>
        );
    }
}

export default BurgerBuilder;