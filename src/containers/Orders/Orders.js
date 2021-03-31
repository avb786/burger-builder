import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axiosInstance from "../../axios-order";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import axios from "axios";



class Orders extends Component {
    state = {
        orders: [],
        isLoader: true
    }
    
    componentDidMount() {
        axios.get('https://buildmyburger-747b9-default-rtdb.firebaseio.com/order.json')
        .then(res => {
            const fetchOrders = []
            console.log("Oerrrr", res.data);
            for (const key in res.data) {
                fetchOrders.push({
                    ...res.data[key],
                    id: key
                })
            }
            this.setState({
                isLoader: false,
                orders: fetchOrders
            })
        })
        .catch(err => {
            this.setState({
                isLoader: false
            })
        })
    }

render() {
    return (
        <div>
          {this.state.orders.map(order => (
              <Order key={order.id} ingredients={order.ingredients} price={order.price}/>
          ))}
        </div>
    )
}
}

export default WithErrorHandler(Orders, axios);