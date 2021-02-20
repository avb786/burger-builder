import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawrerToggle";
import classes from './ToolBar.module.css';



const Toolbar = (props) => {
return (
    <header className={classes.ToolBar}>
        {/* <div onClick={props.changedHamburger}>
        <i class="fa fa-bars fa-2x" style={{color: 'white'}} aria-hidden="true"></i>
        </div> */}
        <DrawerToggle clicked={props.changedHamburger}/>
        <div className={classes.Logo}>
        <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
           <NavigationItems />
        </nav>
    </header>
)
}

export default Toolbar;