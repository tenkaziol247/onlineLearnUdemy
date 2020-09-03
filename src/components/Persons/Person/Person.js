import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';


class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
    }

    render() {
        return (
            <Aux>
                <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                onChange={this.props.changed} 
                value={this.props.valueCurrent}
                ref={this.inputElementRef} />
                <p 
                className={classes.close} 
                onClick={this.props.click}>&times;</p>
            </Aux>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    click: PropTypes.func
};

export default withClass(Person, classes.Person);