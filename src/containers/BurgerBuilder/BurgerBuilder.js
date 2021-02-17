import React, {Component} from "react";
import Burger from "../../components/Burger/Burger";
import Auxillary from "../../hoc/Auxillary";


class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incredeints: {
                salad: 0,
                bacon: 3,
                cheese: 3,
                meat: 0
            }
        }
    }
render() {
    return (
        <Auxillary>
            <Burger incredeints={this.state.incredeints}/>
            <div>Build Controls</div>
        </Auxillary>
    );
}
}

export default BurgerBuilder;