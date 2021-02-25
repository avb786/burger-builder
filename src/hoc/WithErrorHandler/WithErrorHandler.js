import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxillary from "../Auxillary";
const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount(){
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                })
                return req;
            } )
           this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                })
            } )
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorHandler =() => {
            this.setState({
                error: null
            })
        }
        render() {
            return (
                <Auxillary>
                    <Modal showModal={this.state.error} modalClosed={this.errorHandler}>
                        {this.state.error? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxillary>
            )
        }

    }

}

export default WithErrorHandler;