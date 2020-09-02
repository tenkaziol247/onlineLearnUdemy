import React from 'react';

import classes from './Person.module.css';


const person = function (props) {
    return (
        <div className={classes.Person}>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.valueCurrent} />
            <p className={classes.close} onClick={props.click}>&times;</p>
        </div>
    )
}

export default person;