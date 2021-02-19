import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
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
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchaseable: false,
            purchasing: false
        }
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey]
        }).reduce((sum, prevNum) => sum + prevNum, 0);
        this.setState({
            purchaseable: sum > 0,
            ingredeints: ingredients
        })
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
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCountOfIngredient = this.state.ingredeints[type];
        if (oldCountOfIngredient <= 0) {
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
        this.updatePurchaseState(updateIngredients);
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }
     purchaseContinue = () => {
        alert("Continue Order")
     }

     purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredeints
        }
        for (let disable in disabledInfo) {
            disabledInfo[disable] = disabledInfo[disable] <= 0;
        }
        return (
            <Auxillary>
                <Modal modalClosed={this.purchaseCancelHandler} showModal={this.state.purchasing}>
                    <OrderSummary price={this.state.totalPrice} purchaseCancel={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinue} ingredients={this.state.ingredeints} />
                </Modal>
                <Burger ingredeints={this.state.ingredeints} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    purchasing={this.purchaseHandler}
                />
            </Auxillary>
        );
    }
}

export default BurgerBuilder;