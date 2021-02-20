import React, { Component } from 'react'
import Auxillary from '../../../hoc/Auxillary'
import BackDrop from '../BackDrop/BackDrop'
import classes from './Modal.module.css'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.showModal !== this.props.showModal;
    }

    componentDidUpdate() {
        console.log("Modal ComponentDidpdate");
    }

    render() {
        return (
            <Auxillary>
                <BackDrop clicked={this.props.modalClosed} showModal={this.props.showModal} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.showModal ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Auxillary>
        )
    }
}

export default Modal;