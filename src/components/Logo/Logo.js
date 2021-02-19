import React from 'react'
import LogoImg from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

const Logo = (props) => {
return (
    <div className={classes.Logo}>
        <img src={LogoImg} alt="Pop's Burger" />
    </div>
)
}
export default Logo;