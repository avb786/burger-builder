import React from "react";
import Logo from "../../Logo/Logo";
import classes from './ToolBar.module.css'

const Toolbar = (props) => {
return (
    <header className={classes.ToolBar}>
        <div>Menu</div>
        <Logo />
        <nav>
            ........
        </nav>
    </header>
)
}

export default Toolbar;