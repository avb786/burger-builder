import axios from "axios";
import React, { Component } from "react";
import axiosInstance from "../../axios-order";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import Auxillary from "../../hoc/Auxillary";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";



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
            ingredeints: null,
            totalPrice: 4,
            purchaseable: false,
            purchasing: false,
            isLoader: false
        }
    }

    componentDidMount() {
        console.log("Props", this.props);
        axios.get('https://buildmyburger-747b9-default-rtdb.firebaseio.com/ingredients.json').then(res => {
            this.setState({
                ingredeints: res.data
            })
        }).catch(err => {
            console.log("ERROR in GETTING", err);
        })
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
        // this.setState({
        //     isLoader: true
        // })
        // const order = {
        //     ingredients: this.state.ingredeints,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Aayush Bhankale',
        //         address: {
        //             street: '557 CD Bhankale',
        //             city: 'Vadodara',
        //             state: 'Gujarat',
        //             country: 'India'
        //         },
        //         email: 'avb@gmail.com'
        //     },
        //     deliveryMethod: 'online'
        // }
        // axiosInstance.post('/order.json', order).then(res => {
        //     console.log('Checkout', res);
        //     this.setState({
        //         isLoader: false,
        //         purchasing: false
        //     })
        // }).catch(error => {
        //     this.setState({
        //         isLoader: false,
        //         purchasing: false
        //     })
        //     console.log("Checkout Error", error);
        // })
        this.props.history.push('/checkout')
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
        let orderSummary = null;
        let burgerSetters = <Spinner />;
        if(this.state.ingredeints) {
            burgerSetters = (
                <Auxillary>
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
            ) 
            orderSummary = <OrderSummary price={this.state.totalPrice} purchaseCancel={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinue} ingredients={this.state.ingredeints} />
        }

        if (this.state.isLoader) {
            orderSummary = <Spinner />
        }
        return (
            <Auxillary>
                <Modal modalClosed={this.purchaseCancelHandler} showModal={this.state.purchasing}>
                    {orderSummary}
                </Modal>
                {burgerSetters}
            </Auxillary>
        );
    }
}

export default WithErrorHandler(BurgerBuilder, axios);