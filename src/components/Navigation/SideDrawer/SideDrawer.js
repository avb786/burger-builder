import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from '../../UI/BackDrop/BackDrop';
import Modal from '../../UI/Modal/Modal';
import Auxillary from "../../../hoc/Auxillary";
import classes from './SideDrawer.module.css';


const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.opened) {
        attachedClasses= [classes.SideDrawer, classes.Open]
    }
    return (
        <Auxillary>
            <BackDrop showModal={props.opened} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxillary>
    )
}

export default SideDrawer;