import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/ToolBar/ToolBar";
import classes from './Layout.module.css';


class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  SideDrawerHadler = () => {
    this.setState({
      showSideDrawer: false
    })
  }

  changedHamburgerToggle = () => {
    let showHamBurgerMenu = {...this.state};
    this.setState({
      showSideDrawer: !showHamBurgerMenu.showSideDrawer
    })
  }
  render() {
    return (
      <Auxillary>
        <Toolbar changedHamburger={this.changedHamburgerToggle}/>
        <SideDrawer opened={this.state.showSideDrawer} closed={this.SideDrawerHadler} />
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main className={classes.Content}>{this.props.children}</main>
      </Auxillary>
    )
  }
}


export default Layout;