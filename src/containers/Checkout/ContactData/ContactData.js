import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axiosInstance from "../../../axios-order";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
    state = {
        orderform: {
            name: {
                elementType: 'input',
                label: 'Name',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                value: '',
                validation: {
                    required: true 
                },
                valid: false,
                touched: false
            },
            street: {
                label: 'Street',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your Street'
                },
                value: '',
                validation: {
                    required: true 
                },
                valid: false,
                touched: false


            },
            city: {
                elementType: 'input',
                label: 'City',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your City'
                },
                value: '',
                validation: {
                    required: true 
                },
                valid: false,
                touched: false


            },
            state: {
                elementType: 'input',
                label: 'State',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your State'
                },
                value: '',
                validation: {
                    required: true 
                },
                valid: false,
                touched: false


            },
            country: {
                elementType: 'input',
                label: 'Country',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your Country'
                },
                value: '',
                validation: {
                    required: true 
                },
                valid: false,
                touched: false


            },
            email: {
                elementType: 'email',
                label: 'Email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your Email'
                },
                value: '',
                validation: {
                    required: true 
                },
                valid: false,
                touched: false


            },
            zipCode: {
                label: 'Zip Code',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your zipcode'
                },
                value: '',
                validation: {
                    required: true ,
                    minLength: 5,
                    maxLength: 10
                },
                valid: false,
                touched: false


            },
            deliveryMethod: {
                label: 'Delivery Method',
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'normal', displayValue: 'Normal' },
                        { value: 'medium', displayValue: 'Medium' },
                    ]
                },
                validation:{},
                value: 'fastest',
                valid: true                
            }
        },
        isLoader: false,
        formIsValid: false
    }

    checkFormValidity = (value, rules) => {
        let isValid = true;
        if(!rules) return true;
        if(rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        } 
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }  

        return isValid;
    }

    orderHandler = (e) => {
        e.preventDefault()
        this.setState({
            isLoader: true
        })
        const formData = {};
        for (const formElement in this.state.orderform) {
            formData[formElement] = this.state.orderform[formElement].value;
        }
        const order = {
            ingredients: JSON.parse(sessionStorage.getItem('orderDetails')).ingredeints,
            price: JSON.parse(sessionStorage.getItem('orderDetails')).totalPrice,
            orderData: formData
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

    inputChangedHandler = (event, inputIdentifier) => {
        // Deep Clone
        const updatedOrderedForm = JSON.parse(JSON.stringify(this.state.orderform))
        updatedOrderedForm[inputIdentifier]['value'] = event.target.value;
        updatedOrderedForm[inputIdentifier]['touched'] = true;
        updatedOrderedForm[inputIdentifier]['valid'] = this.checkFormValidity(updatedOrderedForm[inputIdentifier]['value'], updatedOrderedForm[inputIdentifier]['validation']);
        let formIsValid = true;
        for (const inputIdentifier in updatedOrderedForm) {
            formIsValid = updatedOrderedForm[inputIdentifier]['valid'] && formIsValid
        }        
        this.setState({
            orderform: updatedOrderedForm,
            formIsValid: formIsValid
        })

    }

    render() {
        const formElementArray = [];
        for (let key in this.state.orderform) {
            formElementArray.push({
                id: key,
                config: this.state.orderform[key]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementArray.map(formData => (
                    <Input
                        key={formData.id}
                        label={formData.config.label}
                        elementType={formData.config.elementType}
                        elementConfig={formData.config.elementConfig}
                        value={formData.config.value}
                        invalid = {!formData.config.valid}
                        changed={(event) =>this.inputChangedHandler(event, formData.id)}
                        shouldValidate={formData.config.validation}
                        touched={formData.config.touched}
                    />
                ))}
                <Button disabled={!this.state.formIsValid} btnType="Success" >ORDER</Button>
            </form>
        );
        if (this.state.isLoader) {
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