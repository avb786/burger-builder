import React from "react";
import Auxillary from "../../hoc/Auxillary";
import Toolbar from "../Navigation/ToolBar/ToolBar";
import classes from './Layout.module.css'

const layout = (props) => (
  <Auxillary>
    <Toolbar />
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxillary>
);


export default layout;