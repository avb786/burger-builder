import React from 'react';
import classes from './BackDrop.module.css'

const BackDrop = (props) => (
  props.showModal ? <div onClick={props.clicked} className={classes.BackDrop}></div> : null
);


export default BackDrop;
