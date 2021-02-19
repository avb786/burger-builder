import React from 'react'
import Auxillary from '../../../hoc/Auxillary'
import BackDrop from '../BackDrop/BackDrop'
import classes from './Modal.module.css'

const Modal = (props) => {
    return (
        <Auxillary>
            <BackDrop clicked={props.modalClosed} showModal={props.showModal} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.showModal ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </Auxillary>

    )
}

export default Modal;