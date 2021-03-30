import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axiosInstance from "../../../axios-order";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        isLoader: false
    }

    orderHandler = (e) => {
        e.preventDefault()
        this.setState({
            isLoader: true
        })
        const order = {
            ingredients: JSON.parse(sessionStorage.getItem('orderDetails')).ingredeints,
            price: JSON.parse(sessionStorage.getItem('orderDetails')).totalPrice,
            customer: {
                name: 'Aayush Bhankale',
                address: {
                    street: '557 CD Bhankale',
                    city: 'Vadodara',
                    state: 'Gujarat',
                    country: 'India'
                },
                email: 'avb@gmail.com'
            },
            deliveryMethod: 'online'
        }
        axiosInstance.post('/order.json', order).then(res => {
            console.log('Checkout', res);
            this.setState({
                isLoader: false,
                purchasing: false
            })
            this.props.history.push('/')
        }).catch(error => {
            this.setState({
                isLoader: false,
                purchasing: false
            })
            console.log("Checkout Error", error);
        })
    }

    render() {
        let form = (
            <form method="POST">
            <input className={classes.Input} type="text" name="name" placeholder="Enter your name" />
            <input className={classes.Input} type="text" name="email" placeholder="Enter your email" />
            <input className={classes.Input} type="text" name="street" placeholder="Street" />
            <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
        );
        if(this.state.isLoader) {
            form = <Spinner />
        } 
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Details</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;