import React from 'react';
import './Person.css';

const person = function (props){
    return (
        <div className="myPerson">
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.valueCurrent}/>
            <p className="close" onClick={props.click}>&times;</p>
        </div>
    )
}

export default person;