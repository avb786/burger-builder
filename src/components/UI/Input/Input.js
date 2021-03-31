import React from "react";
import classes from "./Input.module.css";
const input = (props) => {

    const inputClassess = [classes.InputElemet];
    let validationError = null;
    if(props.invalid && props.shouldValidate && props.touched) {
        inputClassess.push(classes.Invalid)
        validationError = <p className={classes.ErrorText}>Please enter a valid {props.label}!</p>;
    }
    let inputElemet = null;
    switch (props.elementType) {
        case ('input'):
            inputElemet = <input className={inputClassess.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case ('textarea'):
            inputElemet = <textarea className={inputClassess.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case ('select'):
            inputElemet = <select onChange={props.changed}
                className={inputClassess.join(' ')}
                value={props.value} >
                {props.elementConfig.options.map(opt => (
                    <option key={opt.value} value={opt.value} >{opt.displayValue}</option>
                ))}
            </select>
            break;

        default:
            inputElemet = <input onChange={props.changed} className={inputClassess.join(' ')} {...props.elementConfig} value={props.value} />
            break;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElemet}
            {validationError }
        </div>
    )
}

export default input;