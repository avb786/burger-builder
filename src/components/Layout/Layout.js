import React from "react";
import Auxillary from "../../hoc/Auxillary";


const layout = (props) => (
  <Auxillary>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main>{props.children}</main>
  </Auxillary>
);


export default layout;