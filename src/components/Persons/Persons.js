import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
    render() {
        return (
            this.props.persons.map((item, index) => {
                return <Person
                    name={item.name}
                    age={item.age}
                    valueCurrent={item.name}
                    key={item.id}
                    changed={(event) => this.props.changed(event, item.id)}
                    click={() => this.props.clicked(index)} />
            })
        )
    }
}

export default Persons;